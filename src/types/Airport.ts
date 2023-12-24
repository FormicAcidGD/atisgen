
interface Airport {
    code: string,
    friendlyName: string,
    groundCallsign: string,
    towerCallsigns: string[],
    hasGround: boolean,
    defaultTowerFrequency: string,
    defaultGroundFrequency: string,
    maxAcft: string
}

function getDefaultAirport(): Airport {
    return getAirport("IGAR")
}

function generateAirports(): Airport[] {
    return [
        {
            code: "IGAR",
            friendlyName: "Air Base Garry",
            groundCallsign: "",
            towerCallsigns: [
                "Garry Approach",
                "Garry Director",
                "Garry Radar",
                "Garry Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.800",
            defaultGroundFrequency: "",
            maxAcft: "N/A"
        },
        {
            code: "IJAF",
            friendlyName: "Al Najaf",
            groundCallsign: "",
            towerCallsigns: [
                "Al Najaf Approach",
                "Al Najaf Director",
                "Al Najaf Radar",
                "Al Najaf Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "119.1",
            defaultGroundFrequency: "",
            maxAcft: "CRJ7/Q400"
        },
        {
            code: "IBAR",
            friendlyName: "Barra Airport",
            groundCallsign: "",
            towerCallsigns: [
                "Barra Approach",
                "Barra Director",
                "Barra Radar",
                "Barra Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.080",
            defaultGroundFrequency: "",
            maxAcft: "SF50/DHC6"
        },
        {
            code: "IBLT",
            friendlyName: "Boltic Airfield",
            groundCallsign: "",
            towerCallsigns: [
                "Boltic Approach",
                "Boltic Director",
                "Boltic Radar",
                "Boltic Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.430",
            defaultGroundFrequency: "",
            maxAcft: "SF50/DHC6"
        },
        {
            code: "IRFD",
            friendlyName: "Greater Rockford",
            groundCallsign: "Rockford Ground",
            towerCallsigns: [
                "Chicago Centre",
                "Rockford Approach",
                "Rockford Centre",
                "Rockford Control",
                "Rockford Director",
                "Rockford Radar",
                "Rockford Tower",
            ],
            hasGround: true,
            defaultTowerFrequency: "124.850",
            defaultGroundFrequency: "120.400",
            maxAcft: "N/A"
        },
        {
            code: "IGRV",
            friendlyName: "Grindavik Airport",
            groundCallsign: "",
            towerCallsigns: [
                "Keflavik Centre",
                "Grindavik Approach",
                "Grindavik Centre",
                "Grindavik Control",
                "Grindavik Director",
                "Grindavik Radar",
                "Grindavik Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "126.750",
            defaultGroundFrequency: "",
            maxAcft: "B787/A350/MD11"
        },
        {
            code: "IHEN",
            friendlyName: "Henstridge Airfield",
            groundCallsign: "",
            towerCallsigns: [
                "Henstridge Approach",
                "Henstridge Director",
                "Henstridge Radar",
                "Henstridge Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.200",
            defaultGroundFrequency: "",
            maxAcft: "SF50/DHC6"
        },
        {
            code: "IZOL",
            friendlyName: "Izolirani Intl.",
            groundCallsign: "Izolirani Ground",
            towerCallsigns: [
                "Norsom Centre",
                "Izolirani Approach",
                "Izolirani Centre",
                "Izolirani Control",
                "Izolirani Director",
                "Izolirani Radar",
                "Izolirani Tower",
            ],
            hasGround: true,
            defaultTowerFrequency: "124.640",
            defaultGroundFrequency: "121.900",
            maxAcft: "N/A"
        },
        {
            code: "ILAR",
            friendlyName: "Larnaca Intl.",
            groundCallsign: "Larnaca Ground",
            towerCallsigns: [
                "Lazarus Centre",
                "Larnaca Approach",
                "Larnaca Centre",
                "Larnaca Control",
                "Larnaca Director",
                "Larnaca Radar",
                "Larnaca Tower",
            ],
            hasGround: true,
            defaultTowerFrequency: "126.300",
            defaultGroundFrequency: "119.400",
            maxAcft: "N/A"
        },
        {
            code: "ILKL",
            friendlyName: "Lukla Airport",
            groundCallsign: "",
            towerCallsigns: [
                "Lukla Approach",
                "Lukla Director",
                "Lukla Radar",
                "Lukla Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "120.150",
            defaultGroundFrequency: "",
            maxAcft: "LJ45/DHC6"
        },
        {
            code: "IMLR",
            friendlyName: "Mellor",
            groundCallsign: "",
            towerCallsigns: [
                "Mellor Approach",
                "Mellor Director",
                "Mellor Radar",
                "Mellor Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "133.850",
            defaultGroundFrequency: "",
            maxAcft: "B787/A350/MD11"
        },
        {
            code: "IPAP",
            friendlyName: "Paphos",
            groundCallsign: "",
            towerCallsigns: [
                "Paphos Approach",
                "Paphos Director",
                "Paphos Radar",
                "Paphos Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "119.900",
            defaultGroundFrequency: "",
            maxAcft: "B787/A350/MD11"
        },
        {
            code: "IPPH",
            friendlyName: "Perth",
            groundCallsign: "Perth Ground",
            towerCallsigns: [
                "Perth Approach",
                "Perth Centre",
                "Perth Control",
                "Perth Director",
                "Perth Radar",
                "Perth Tower",
            ],
            hasGround: true,
            defaultTowerFrequency: "135.250",
            defaultGroundFrequency: "121.700",
            maxAcft: "N/A"
        },
        {
            code: "ISCM",
            friendlyName: "RAF Scampton",
            groundCallsign: "",
            towerCallsigns: [
                "Scampton Approach",
                "Scampton Director",
                "Scampton Radar",
                "Scampton Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.220",
            defaultGroundFrequency: "",
            maxAcft: "N/A"
        },
        {
            code: "IDCS",
            friendlyName: "Saba Airport",
            groundCallsign: "",
            towerCallsigns: [
                "Saba Approach",
                "Saba Director",
                "Saba Radar",
                "Saba Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "122.500",
            defaultGroundFrequency: "",
            maxAcft: "SF50/DHC6"
        },
        {
            code: "IBTH",
            friendlyName: "Saint Barthelemy",
            groundCallsign: "",
            towerCallsigns: [
                "Sotaf Centre",
                "Saint Barthelemy Approach",
                "Saint Barthelemy Centre",
                "Saint Barthelemy Control",
                "Saint Barthelemy Director",
                "Saint Barthelemy Radar",
                "Saint Barthelemy Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "128.600",
            defaultGroundFrequency: "",
            maxAcft: "CRJ7/Q400"
        },
        {
            code: "ISAU",
            friendlyName: "Sauthemptona Airport",
            groundCallsign: "",
            towerCallsigns: [
                "Brighton Centre",
                "Sauthemptona Approach",
                "Sauthemptona Centre",
                "Sauthemptona Control",
                "Sauthemptona Director",
                "Sauthemptona Radar",
                "Sauthemptona Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "127.820",
            defaultGroundFrequency: "",
            maxAcft: "A320/B737/MD90"
        },
        {
            code: "ISKP",
            friendlyName: "Skopelos Airfield",
            groundCallsign: "",
            towerCallsigns: [
                "Skopelos Approach",
                "Skopelos Centre",
                "Skopelos Control",
                "Skopelos Director",
                "Skopelos Radar",
                "Skopelos Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.400",
            defaultGroundFrequency: "",
            maxAcft: "SF50/DHC6"
        },
        {
            code: "ITKO",
            friendlyName: "Tokyo",
            groundCallsign: "Tokyo Ground",
            towerCallsigns: [
                "Tokyo Approach",
                "Tokyo Centre",
                "Tokyo Control",
                "Tokyo Director",
                "Tokyo Radar",
                "Tokyo Tower",
            ],
            hasGround: true,
            defaultTowerFrequency: "132.300",
            defaultGroundFrequency: "118.225",
            maxAcft: "N/A"
        },
        {
            code: "ITRC",
            friendlyName: "Training Centre",
            groundCallsign: "",
            towerCallsigns: [
                "Training Centre Approach",
                "Training Centre Director",
                "Training Centre Radar",
                "Training Centre Tower",
            ],
            hasGround: false,
            defaultTowerFrequency: "118.500",
            defaultGroundFrequency: "",
            maxAcft: "C172"
        }
    ]
}


function getAirport(code: string): Airport {
    let found = false;
    let a = null;
    generateAirports().forEach(airport => {
        if (found) {
            return
        }
        if (airport.code == code) {
            a = airport
            found = true
        }
    })
    return a != null ? a : getDefaultAirport()
}

function getAirportByName(name: string): Airport | undefined {
    let found = false;
    let a = undefined;
    generateAirports().forEach(airport => {
        if (found) {
            return
        }
        if (airport.friendlyName == name) {
            a = airport
            found = true
        }
    })
    return a
}
export { getAirport, getAirportByName, getDefaultAirport, type Airport };

