<template>
  <div class="vflex">
    <SearchField :value="atis.airport" placeholder="Airport" :items="airports" :display-text="i => getAirport(i).friendlyName" @change="v => {atis.airport = v; atis.towerCallsign = getAirport(v).towerCallsigns[0]; atis.towerFrequency = getAirport(v).defaultTowerFrequency; atis.groundFrequency = getAirport(v).defaultGroundFrequency}"></SearchField>
    <SearchField :value="atis.information" placeholder="Information" :items="phonetics" :display-text="i => `${i} (${getPhonetic(i)})`" @change="v => atis.information = v"></SearchField>
    <div class="vflex section">
        <div class="hflex">
            <div class="vflex">
                <p>Tower</p>
                <select @change="v => atis.towerCallsign = (v.currentTarget as HTMLInputElement).value">
                    <option :value="i" v-for="i in getAirport(atis.airport).towerCallsigns">{{ i }}</option>
                </select>
                <input type="text" placeholder="Tower Frequency" v-model="atis.towerFrequency">
            </div>
            
        </div>
        <div class="hflex" @click="atis.hasGround = !atis.hasGround" v-if="getAirport(atis.airport).hasGround">
            <input type="checkbox" :checked="atis.hasGround">
            <p>Ground Controller</p>
        </div>
        <input type="text" placeholder="Ground Frequency" v-if="atis.hasGround && getAirport(atis.airport).hasGround" v-model="atis.groundFrequency">
    </div>
    <div class="hflex">
        <div class="hflex" name="info" @click="atis.phoneticAbbr = false">
            <input type="radio" :checked="!atis.phoneticAbbr">
            <p>Full Phonetic Name</p>
        </div>
        <div class="hflex" name="info" @click="atis.phoneticAbbr = true">
            <input type="radio" :checked="atis.phoneticAbbr">
            <p>Abbreviation</p>
        </div>
    </div>
    <div class="vflex section">
        <p>Max Taxi Speed</p>
        <input type="number" v-model="atis.taxiSpeed">
    </div>
    <div class="vflex section">
        <p>Departure Runways</p>
        <input type="text" v-model="atis.depRunways">
    </div>
    <div class="vflex section">
        <p>Arrival Runways</p>
        <input type="text" v-model="atis.arrRunways">
    </div>
    <div class="vflex section">
        <p>QNH</p>
        <input type="number" v-model="atis.qnh">
    </div>
    <div class="vflex section">
        <div class="hflex" @click="atis.speedLimit = !atis.speedLimit">
            <input type="checkbox" :checked="atis.speedLimit">
            <p>Speed Restriction</p>
        </div>
        <input type="number" v-model="atis.speed" v-if="atis.speedLimit">
    </div>
    <div class="section vflex">
        <div class="hflex" @click="atis.topDown = !atis.topDown">
            <input type="checkbox" :checked="atis.topDown">
            <p>Top Down</p>
        </div>
        <input type="text" v-model="atis.topDownText" v-if="atis.topDown">
    </div>
    <div class="section vflex">
        <p>Grounded state on Initial Contact:</p>
        <div class="hflex" @click="atis.groundedStand = !atis.groundedStand">
            <input type="checkbox" :checked="atis.groundedStand">
            <p>Stand Number</p>
        </div>
        <div class="hflex" @click="atis.groundedType = !atis.groundedType">
            <input type="checkbox" :checked="atis.groundedType">
            <p>Aircraft type</p>
        </div>
    </div>
    <div class="section vflex">
        <p>Airborne state on Initial Contact:</p>
        <div class="hflex" @click="atis.airborneType = !atis.airborneType">
            <input type="checkbox" :checked="atis.airborneType">
            <p>Aircraft Type</p>
        </div>
        <div class="hflex" @click="atis.airborneAlt = !atis.airborneAlt">
            <input type="checkbox" :checked="atis.airborneAlt">
            <p>Altitude</p>
        </div>
        <div class="hflex" @click="atis.airborneSpeed = !atis.airborneSpeed">
            <input type="checkbox" :checked="atis.airborneSpeed">
            <p>Airpeed</p>
        </div>
        <div class="hflex" @click="atis.airborneHeading = !atis.airborneHeading">
            <input type="checkbox" :checked="atis.airborneHeading">
            <p>Heading</p>
        </div>
    </div>
    <div class="hflex" @click="atis.emergencies = !atis.emergencies">
        <input type="checkbox" :checked="atis.emergencies">
        <p>Allow Emergencies</p>
    </div>
    <div class="section vflex">
        <p>Additional Notams</p>
        <textarea cols="30" rows="10" v-model="atis.extraNotams"></textarea>
    </div>
    <div class="vflex section">
        <p>Chart Pack Author</p>
        <input type="text" v-model="atis.chartAuthor">
    </div>
    <div class="vflex section">
        <p>Chart Pack Link</p>
        <input type="text" v-model="atis.chartLink">
    </div>
    <div class="hflex">
            <input type="range" min="10" max="50" v-model="atis.dashes">
            <p>Dashes</p>
        </div>
    <div class="hflex" @click="atis.zuluTime = !atis.zuluTime">
        <input type="checkbox" :checked="atis.zuluTime">
        <p>Display Zulu Time</p>
    </div>
    <div class="hflex" @click="atis.boxes = !atis.boxes">
        <input type="checkbox" :checked="atis.boxes">
        <p>Display Boxes</p>
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
    extraNotams: ""
})
</script>

<style scoped>
.atis {
    background-color: #181818;
    width: 50vw;
    padding: 1vh 1vw 1vh 1vw;
    border-radius: 1em;
    margin-top: 1vh;
}
input[type=checkbox],input[type=radio], input[type=range] {
    width: auto;
    margin: 0;
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
</style>
