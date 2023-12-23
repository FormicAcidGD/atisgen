<template>
    <div class="body">
        <div class="vflex options">
            <div class="hflex">
                <SearchField :value="atis.airport" placeholder="Airport" :items="airports" :display-text="i => getAirport(i).friendlyName" @change="v => {atis.airport = v; atis.towerCallsign = getAirport(v).towerCallsigns[0]; atis.towerFrequency = getAirport(v).defaultTowerFrequency; atis.groundFrequency = getAirport(v).defaultGroundFrequency}"></SearchField>
                <SearchField :value="atis.information" placeholder="Information" :items="phonetics" :display-text="i => `${i} (${getPhonetic(i)})`" @change="v => atis.information = v"></SearchField>
            </div>
            <div class="hflex">
                <div class="hflex boxed half" @click="atis.zuluTime = !atis.zuluTime">
                    <input type="checkbox" :checked="atis.zuluTime">
                    <p>Display Zulu Time</p>
                </div>
                <div class="hflex boxed half" @click="atis.boxes = !atis.boxes">
                    <input type="checkbox" :checked="atis.boxes">
                    <p>Display Boxes</p>
                </div>
                <div class="hflex boxed half" name="info" @click="atis.phoneticAbbr = false">
                    <input type="radio" :checked="!atis.phoneticAbbr">
                    <p>Full Phonetic Name</p>
                </div>
                <div class="hflex boxed half" name="info" @click="atis.phoneticAbbr = true">
                    <input type="radio" :checked="atis.phoneticAbbr">
                    <p>Abbreviation</p>
                </div>
            </div>
            <div class="hflex">
                <div class="hflex boxed half">
                    <input type="range" min="10" max="50" v-model="atis.dashes" :style="{width: '5vw'}">
                    <p>Dashes</p>
                </div>
                <div class="hflex boxed half" @click="atis.emergencies = !atis.emergencies">
                    <input type="checkbox" :checked="atis.emergencies">
                    <p>Allow Emergencies</p>
                </div>
                <div class="hflex boxed half hidden"></div>
                <div class="hflex boxed half hidden"></div>  
            </div>
            <div class="hflex">
                <div class="hflex smallgap">
                    <select @change="v => atis.towerCallsign = (v.currentTarget as HTMLInputElement).value">
                                <option :value="i" v-for="i in getAirport(atis.airport).towerCallsigns">{{ i }}</option>
                    </select>
                    <input type="text" placeholder="Tower Frequency" v-model="atis.towerFrequency" class="shortened">
                </div>
                <div class="hflex smallgap">
                    <div class="hflex medium boxed" @click="atis.hasGround = !atis.hasGround" v-if="getAirport(atis.airport).hasGround">
                        <input type="checkbox" :checked="atis.hasGround">
                        <p>Ground Controller</p>
                    </div>
                    <input type="text" class="shortened" placeholder="Ground Frequency" v-if="atis.hasGround && getAirport(atis.airport).hasGround" v-model="atis.groundFrequency">
                </div>
            </div>
            <div class="hflex">
                <div class="hflex smallgap">
                    <div class="boxed medium hflex">
                        <p>Max Taxi Speed</p>
                    </div>
                    <input type="number" v-model="atis.taxiSpeed" class="shortened" placeholder="Max Taxi Speed">
                </div>
                <div class="hflex smallgap">
                    <div class="boxed medium hflex">
                        <p>QNH</p>
                    </div>
                    <input type="number" v-model="atis.qnh" class="shortened" placeholder="QNH">
                </div>
            </div>
            <div class="hflex">
                <input type="number" v-model="atis.depRunways" placeholder="Departure Runways">
                <input type="number" v-model="atis.arrRunways" placeholder="Arrival Runways">
            </div>
            <div class="hflex">
                <div class="hflex smallgap">
                    <div class="hflex medium boxed" @click="atis.speedLimit = !atis.speedLimit">
                        <input type="checkbox" :checked="atis.speedLimit">
                        <p>Speed Restriction</p>
                    </div>
                    <input type="text" class="shortened" placeholder="Speed Limit" v-if="atis.speedLimit" v-model="atis.speed">
                </div>
                <div class="hflex smallgap">
                    <div class="hflex shortened boxed" @click="atis.topDown = !atis.topDown">
                        <input type="checkbox" :checked="atis.topDown">
                        <p>Top Down</p>
                    </div>
                    <input type="text" class="medium" placeholder="Top Down Airports" v-if="atis.topDown" v-model="atis.topDownText">
                </div>
            </div>
            <div class="vflex boxed long">
                <div class = "hflex long">
                    <p>Grounded state on Initial Contact</p>
                </div>
            </div>
            <div class="hflex smallgap">
                <div class="hflex boxed half" @click="atis.groundedStand = !atis.groundedStand">
                    <input type="checkbox" :checked="atis.groundedStand">
                    <p>Stand Number</p>
                </div>
                <div class="hflex boxed half" @click="atis.groundedType = !atis.groundedType">
                    <input type="checkbox" :checked="atis.groundedType">
                    <p>Aircraft type</p>
                </div>
            </div>
            <div class="vflex boxed long">
                <div class = "hflex long">
                    <p>Airborne state on Initial Contact</p>
                </div>
            </div>
            <div class="hflex">
                <div class="hflex boxed half" @click="atis.airborneType = !atis.airborneType">
                    <input type="checkbox" :checked="atis.airborneType">
                    <p>Aircraft Type</p>
                </div>
                <div class="hflex boxed half" @click="atis.airborneAlt = !atis.airborneAlt">
                    <input type="checkbox" :checked="atis.airborneAlt">
                    <p>Altitude</p>
                </div>
                <div class="hflex boxed half" @click="atis.airborneSpeed = !atis.airborneSpeed">
                    <input type="checkbox" :checked="atis.airborneSpeed">
                    <p>Airpeed</p>
                </div>
                <div class="hflex boxed half" @click="atis.airborneHeading = !atis.airborneHeading">
                    <input type="checkbox" :checked="atis.airborneHeading">
                    <p>Heading</p>
                </div>
            </div>
            <div class="hflex">
                <div class="hflex half boxed">
                    <p>Chart Pack Author</p>

                </div>
                <input type="text" v-model="atis.chartAuthor" class="fancy">
            </div>
            <div class="hflex">
                <div class="hflex half boxed">
                    <p>Chart Pack Link</p>

                </div>
                <input type="text" v-model="atis.chartLink" class="fancy">
            </div>
            <div class="vflex boxed long">
                <div class = "hflex long">
                    <p>Additional NOTAMS</p>
                </div>
            </div>
            <div class="hflex">
                <textarea cols="30" rows="10" v-model="atis.extraNotams"></textarea>
            </div>

        </div>
        <div class="atis">
            <p>
                 {{ atis.boxes ? "∎" : "" }}
                 {{ atis.airport }}
                 ATIS
                 Information
                 {{ !atis.phoneticAbbr ? atis.information : getPhonetic(atis.information) }}
                 {{ atis.zuluTime ? new Date().getUTCHours().toFixed(0).padStart(2, "0") + new Date().getUTCMinutes().toFixed(0).padStart(2, "0") + "z"  : "" }}
                 {{ atis.boxes ? "∎" : "" }}
            </p>
            <p>{{ "".padStart(atis.dashes, "―") }}</p>
            <p>Controller Callsign: {{ atis.towerCallsign }} ({{ atis.towerFrequency }})</p>
            <p v-if="atis.hasGround && getAirport(atis.airport).hasGround">Controller Callsign: {{ getAirport(atis.airport).groundCallsign }} ({{ atis.groundFrequency }})</p>
            <p>{{ "".padStart(atis.dashes, "―") }}</p>
            <p>Aerodrome:</p>
            <p>Max Taxi Speed: {{ atis.taxiSpeed }}kts</p>
            <p>Arrival Runway(s): {{ atis.arrRunways }}</p>
            <p>Departure Runway(s): {{ atis.depRunways }}</p>
            <p>QNH: {{ atis.qnh }}</p>
            <br>
            <p>NOTAMS:</p>
            <p v-if="atis.topDown">Top Down for {{ atis.topDownText }}</p>
            <p>
                Grounded Acft Advise Receipt of Information {{ atis.information }}{{ atis.groundedStand ? ", Stand Number" : "" }}{{ atis.groundedType ? ", Aircraft Type" : "" }}
                on Initial Contact.
            </p>
            <p>
                Airborne Acft Advise Receipt of Information {{ atis.information }}{{ atis.airborneType ? ", Aircraft Type" : "" }}{{ atis.airborneAlt ? ", Altitude" : "" }}{{ atis.airborneSpeed ? ", Airspeed" : "" }}{{ atis.airborneHeading ? ", Heading" : "" }}
                on Initial Contact.
            </p>
            <p v-if="atis.speedLimit">Speed {{ atis.speed }}kts or below.</p>
            <p>VFR Acft say Direction of Flight, Intentions in Flight Plan.</p>
            <p>{{ atis.emergencies ? "Emergencies Allowed." : "No Emergencies." }}</p>
            <p v-for="i in atis.extraNotams.split('\n')">{{ i }}</p>
            <br>
            <p>Charts:</p>
            <p>Chart Pack Author: {{ atis.chartAuthor }}</p>
            <p>Chart Pack Link: {{ atis.chartLink }}</p>
            <p>{{ "".padStart(atis.dashes, "―") }}</p>
            <p>
                 {{ atis.boxes ? "∎" : "" }}
                 End of
                 ATIS
                 Information
                 {{ !atis.phoneticAbbr ? atis.information : getPhonetic(atis.information) }}
                 {{ atis.boxes ? "∎" : "" }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { airports, getPhonetic, phonetics } from './StaticData';
import SearchField from './components/SearchField.vue';
import { getAirport } from './types/Airport';


let atis = reactive({
    airport: "IGAR",
    information: "Alfa",
    zuluTime: true,
    boxes: true,
    phoneticAbbr: false,
    dashes: 15,
    hasGround: false,
    towerCallsign: getAirport("IGAR").towerCallsigns[0],
    towerFrequency: getAirport("IGAR").defaultTowerFrequency,
    groundFrequency: getAirport("IGAR").defaultGroundFrequency,
    taxiSpeed: 25,
    depRunways: "",
    arrRunways: "",
    qnh: 1013,
    chartAuthor: "",
    chartLink: "",
    emergencies: false,
    topDown: false,
    topDownText: "",
    groundedType: true,
    groundedStand: true,
    airborneType: false,
    airborneAlt: true,
    airborneHeading: false,
    airborneSpeed: false,
    speed: 250,
    speedLimit: true,
    extraNotams: "",
    sids: true
})
</script>

<style scoped>
.atis {
    background-color: #181818;
    width: 46.5vw;
    height: 95vh;
    padding: 1vh 1vw 1vh 1vw;
    margin-top: 1vh;
}
input[type=checkbox],input[type=radio], input[type=range] {
    width: auto;
    margin: 0;
    accent-color: #0c5f71;
}
input[type=range] {
    padding: 0;
}
p {
    margin: 0;
}
.section {
    margin-top: 2vh;
    margin-bottom: 2vh;
}
.options {
    width: 48.5vw;
    margin-left: 1vw;

}
.body {
       align-items: start;
}
.hflex {
    width: 48.5vw;
}
.long {
    width: 46.5vw;
    height: 2.5vh;
    justify-content: center;
}
select {
    width: 14.75vw;
    padding: 1vh 1vw 1vh 1vw;
    height: 4.5vh;
    margin-top: 1vh;
    border: none;
    background-color: #181818;
    color: white;
}
.medium {
    width: 12.75vw;
}
.half {
    width: 9.5vw;
}
.shortened {
    width: 6.25vw;
}
.smallgap {
    gap: 0.5vw !important;
}
.smallgap {
    gap: 0.75vw !important;
}
.boxed {
    background-color: #181818;
    height: 2.5vh;
    margin-top: 1vh;
    padding: 1vh 1vw 1vh 1vw;
}
.hidden {
    opacity: 0;
}
.fancy {
    width: 34.75vw;
}
textarea {
    width: 46.5vw;
    min-width: 46.5vw;
    max-width: 46.5vw;
    height: 17vh;
    min-height: 17vh;
    max-height: 17vh;
    margin-top: 1vh;
}

</style>
