import { getKeyByValue } from "./Util"

let aircraftTypes = ["A-10 Warthog", "A6M Zero", "Airbus A220", "Airbus A320", "Airbus A330", "Airbus A340", "Airbus A350", "Airbus A380", "Airbus Beluga", "Avro Vulcan", "B2 Bomber", "B29", "Hot Air Balloon", "Bell 412", "Blimp", "Boeing 737", "Boeing 747", "Boeing 747 Cargo", "Boeing 757", "Boeing 757 Cargo", "Boeing 767", "Boeing 767 Cargo", "Boeing 777", "Boeing 777 Cargo", "Boeing 787", "Bombardier CRJ700", "Bombardier Learjet", "Bombardier Q400", "C130 Hercules", "Caravan Blimp", "Cessna 172", "Cessna 172 Seaplane", "Cessna 182", "Cessna 182 Seaplane", "Cessna Caravan", "Cessna Caravan Seaplane", "Cessna Caravan Skydiving", "Chinook", "Cirrus Vision SF50", "Concorde", "DHC-6 Twin Otter", "DHC-6 Twin Otter Seaplane", "Douglas MD11", "Douglas MD11 Cargo", "Douglas MD90", "Boeing DreamLifter", "English Electric Lightning", "Eurofighter Typhoon", "Extra 300s", "F/A-18 Super-Hornet", "F-14 Tomcat", "F-15E Strike Eagle", "F-16", "F-22", "F-35B", "F4 Phantom", "F4U Corsair", "Fokker Dr1", "Airbus H135", "Hawker Harrier (VTOl)", "Hawk T1", "Hurricane", "Mig-15", "Walrus", "P38 Lightning", "P51 Mustang", "Parastrike", "Piper Cub", "Piper Cub Seaplane", "Piper PA-28"]

let flightRules = ["IFR", "VFR"]

let navBarItems = ["Flight Plan", "Clearance", "Taxi", "Departure", "Climb", "Cruise", "Descent", "Approach", "ATIS"]

let airportMap = {
    IGAR: "Air Base Garry",
    IJAF: "Al Najaf",
    IBAR: "Barra Airport",
    IBLT: "Boltic Airfield",
    IRFD: "Greater Rockford",
    IGRV: "Grindavik Airport",
    IHEN: "Henstridge Airfield",
    IZOL: "Izolirani Intl.",
    ILAR: "Larnaca Intl.",
    ILKL: "Lukla Airport",
    IMLR: "Mellor Intl.",
    IPAP: "Paphos Intl.",
    IPPH: "Perth Intl.",
    ISCM: "RAF Scampton",
    IDCS: "Saba Airport",
    IBTH: "Saint Barthelemy",
    ISAU: "Sauthemptona Airport",
    ISKP: "Skopelos Airfield",
    ITKO: "Tokyo Intl.",
    ITRC: "Training Centre",
}

let reverseAirportMap = {
    "Air Base Garry": "IGAR",
    "Al Najaf": "IJAF",
    "Barra Airport": "IBAR",
    "Boltic Airfield": "IBLT",
    "Greater Rockford": "IRFD",
    "Grindavik Airport": "IGRV",
    "Henstridge Airfield": "IHEN",
    "Izolirani Intl.": "IZOL",
    "Larnaca Intl.": "ILAR",
    "Lukla Airport": "ILKL",
    "Mellor Intl.": "IMLR",
    "Paphos Intl.": "IPAP",
    "Perth Intl.": "IPPH",
    "RAF Scampton": "ISCM",
    "Saba Airport": "IDCS",
    "Saint Barthelemy": "IBTH",
    "Sauthemptona Airport": "ISAU",
    "Skopelos Airfield": "ISKP",
    "Tokyo Intl.": "ITKO",
    "Training Centre": "ITRC",
}

let phoneticAlphabet = {
    Alfa: "A",
    Bravo: "B",
    Charlie: "C",
    Delta: "D",
    Echo: "E",
    Foxtrot: "F",
    Golf: "G",
    Hotel: "H",
    India: "I",
    Juliett: "J",
    Kilo: "K",
    Lima: "L",
    Mike: "M",
    November: "N",
    Oscar: "O",
    Papa: "P",
    Quebec: "Q",
    Romeo: "R",
    Sierra: "S",
    Tango: "T",
    Uniform: "U",
    Victor: "V",
    Whiskey: "W",
    Xray: "X",
    Yankee: "Y",
    Zulu: "Z"
}

function getPhoneticLetter(name: string): string | undefined {
    let found = false;
    let a = undefined;
    Object.values(phoneticAlphabet).forEach(b => {
        if (found) {
            return
        }
        if (b == name) {
            a = getKeyByValue(phoneticAlphabet, b)
            found = true
        }
    })
    return a
}

let airports = Object.keys(airportMap)
let phonetics = Object.keys(phoneticAlphabet)

function getPhonetic(name: string): string {
    //@ts-ignore
    return phoneticAlphabet[name]
}

let reverseAirports = Object.keys(reverseAirportMap)


let extraAtisMapping = {
    SOTAF: "IBTH"
}



export { aircraftTypes, airportMap, airports, extraAtisMapping, flightRules, getPhonetic, getPhoneticLetter, navBarItems, phoneticAlphabet, phonetics, reverseAirportMap, reverseAirports }

