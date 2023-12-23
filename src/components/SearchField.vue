<template>
    <div>
        <input type="text" v-model="searchQuery" @input="filterList" :placeholder="props.placeholder" @focus="e => {selected = true; (e.target as HTMLInputElement).select()}" @blur="selected = false">
        <ul v-if="selected || hovering">
            <li v-for="item, i in filteredList" :key="item" @click="select(item)" @mouseover="hovering = true" @mouseleave="hovering = false">
                <div v-if="displayText != undefined">
                    <p v-if="i == arrowedItem" class="arrowed">
                        {{ displayText(item) }}
                    </p>
                    <p v-else>
                        {{ displayText(item) }}
                    </p>
                </div>
                <div v-else>
                    <p v-if="i == arrowedItem" class="arrowed">
                        {{ item }}
                    </p>
                    <p v-else>
                        {{ item }}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

let props = defineProps<{
    placeholder: string,
    items: string[],
    value?: string,
    displayText?: (item: string, index?: number) => string,
    filter?: (item: string) => boolean
}>()

let emit = defineEmits({
    change: (s: string) => {
        return s
    }
})

let filteredList = ref(props.items);
let searchQuery = ref(props.value ?? "")
let selected = ref(false)
let hovering = ref(false)
let arrowedItem = ref(0)

if (props.value != undefined) {
    filterList()
}

function filterList() {
    if (props.filter) {
        filteredList.value = props.items.filter(props.filter);
    } else {
        filteredList.value = props.items.filter(item =>
            item.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    }
    if (filteredList.value.length == 0) return
    arrowedItem.value = arrowedItem.value % filteredList.value.length 
}

function select(item: string) {
    selected.value = false
    hovering.value = false
    searchQuery.value = item
    filterList()
    emit("change", searchQuery.value)
}

function handleKeyboard(ev: KeyboardEvent) {
    if (!selected.value) return
    switch(ev.code) {
        case "ArrowUp":
            if (filteredList.value.length == 0) return
            arrowedItem.value = (arrowedItem.value - 1 + filteredList.value.length) % filteredList.value.length 
            break
        case "ArrowDown":
            if (filteredList.value.length == 0) return
            arrowedItem.value = (arrowedItem.value + 1) % filteredList.value.length 
            break
        case "Enter":
        case "Tab":
            if (filteredList.value.length == 0) return
            select(filteredList.value[arrowedItem.value])
            break
    }
}

onMounted(() => {
    window.addEventListener("keydown", handleKeyboard)
})
onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeyboard)
    
})
</script>

<style scoped>
ul {
    margin: 0;
    padding: 0;
    background-color: #282828;
    padding-top: 2vh;
    padding-bottom: 2vh;
    position: fixed;
    width: 27vw;
    list-style-type: none;
    border-radius: 0.5em;
    max-height: 40vh;
    overflow-y: scroll;
}
p {
    margin: 0;
    padding: 0;
    padding-left: 2vw;
    padding-right: 2vw;
    cursor: pointer;
}
p:hover {
    background-color: #323232;
}
p.arrowed {
    background-color: #323232;
}
::-webkit-scrollbar, scrollbar {
    width: 0;
}

::-webkit-scrollbar-track, scrollbar-track {
    background: #282828;
    border-radius: 1em;
}

::-webkit-scrollbar-thumb, scrollbar-thumb {
    background-color: #FFFFFF;
    border-radius: 1em;
    border: 3px solid #282828;
    height: 3em;
}

::-webkit-scrollbar-thumb:hover, scrollbar-thumb:hover {
    background-color: #FFFFFF;
}
</style>
