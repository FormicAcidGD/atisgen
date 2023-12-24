
interface Airport {
    code: string,
    friendlyName: string,
    groundCallsign: string,
    towerCallsigns: string[],
    hasGround: boolean,
    defaultTowerFrequency: string,
    defaultGroundFrequency: string,
    maxAcft: string,
    chartPacks: ChartPack[]
}
interface ChartPack {
    author: string,
    link: string
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
            maxAcft: "N/A",
            chartPacks: [
                 {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Air%20Base%20Garry"
                 }
            ]
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
            maxAcft: "CRJ7/Q400",
            chartPacks: [
                 {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/AL%20Najaf"
                 },
                 {
                    author: "EzyDubbs",
                    link: "https://drive.google.com/file/d/1USL62H5M-TlF_Gk1erRGuNkBhQYuDqup/view"
                 },
                 {
                    author: "Midwest Avgeek",
                    link: "https://docs.google.com/document/d/1AAVgOdVWRAq070j-ExKGqF0lbdd2R4lzb-O3G9ISoy4/edit"
                 }
            ]
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
            maxAcft: "SF50/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Barra"
                },
                {
                    author: "userwastaken, din0_nuggies21",
                    link: "https://docs.google.com/document/d/1wazg7w22DMyvJdu869_BnNwvA0aR6naw9y0kKw3sNO4/edit"
                },
                {
                    author: "Sander",
                    link: "https://cdn.discordapp.com/attachments/876914987715686440/888806599844593745/EGPR_CHARTS.pdf"
                }
            ]
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
            maxAcft: "SF50/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Boltic%20Airfield"
                }
            ]
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
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Greater%20Rockford"
                },
                {
                    author: "sanderli25",
                    link: "https://drive.google.com/file/d/1I-oucFK61M6QdSFdEPYWQ3P9dRZ8D7Jl/view"
                },
                {
                    author: "Nikita39Gamer",
                    link: "https://drive.google.com/file/d/1Kg7IaeCuovKrtfTduSCsmhsjWTiFDSV_/view"
                },
                {
                    author: "makiwasmyidea",
                    link: "https://docs.google.com/document/d/1pOfIhQ9z6HSgFNjIMryd_FWwF_FgkAPvhK5xerOBex4/edit"
                },
                {
                    author: "DarthD3NN15",
                    link: "https://docs.google.com/presentation/d/1kc8pIQMEukO_meQ05yavOX1EFDbLqJTyxv5jA9p-m3s/edit#slide=id.g1f43ba55dbd_0_131"
                },
                {
                    author: "userwastaken",
                    link: "https://docs.google.com/document/d/1AR-TLLS1S5H0SjDFCsiWKKQ4HTi87JUkU80ij4i-wPc/edit#heading=h.hev5tuk6ocb6"
                },
                {
                    author: "Eastern",
                    link: "https://docs.google.com/presentation/d/1mKn1mwti1rA8t6xXGBXQxVmVycgxuUWWLaaHpiJg-d4/edit#slide=id.g1111f78b68b_0_154"
                },
                {
                    author: "Aloha516",
                    link: "https://drive.google.com/file/d/14L3ZEegJfXIli1xn_QBIyJeTQPurHTr0/view"
                },
                {
                    author: "EzyDubbs",
                    link: "https://drive.google.com/file/d/13WTsIv4FbnUhUoDJzXyw1ZV3_fGqbjBF/view"
                }
            ]
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
            maxAcft: "B787/A350/MD11",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Grindavik/Grindavik"
                },
                {
                    author: "sander25",
                    link: "https://cdn.discordapp.com/attachments/876914987715686440/888886462848831508/UGDK_CHARTS.pdf"
                },
                {
                    author: "EzyDubbs",
                    link: "https://drive.google.com/file/d/1FWfJotQk2yKI03Kg43M5RQlzisdlDEql/view"
                },
                {
                    author: "ATC24MobileMaster, Pro_Gamer7089",
                    link: "https://drive.google.com/file/d/1WNxb-d3gxIqPhtncoM3hDbALfMfuIdDS/view"
                },
                {
                    author: "nova_av",
                    link: "https://drive.google.com/file/d/1G4M1CGxjXO688x-l7WBnD8UfhiLq2yrB/view"
                }
            ]
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
            maxAcft: "SF50/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Henstridge"
                }
            ]
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
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/Izolirani"
                },
                {
                    author: "sanderli25",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/Izolirani"
                },
                {
                    author: "userwastaken",
                    link: "https://docs.google.com/document/d/1WGSfuBNWxn4WxVBtEFF3ZYboNIh21Fcqrm9AtSXnq_4/edit#heading=h.ydxas8subl85"
                },
                {
                    author: "Midwest Avgeek",
                    link: "https://docs.google.com/document/d/19f9w2uE7vqwLBLlbKrfc8_NZlEcDr4I34SKGN0dfub0/edit"
                }
            ]
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
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Larnaca"
                },
                {
                    author: "Aloha516",
                    link: "https://docs.google.com/document/d/1Hat4-PSwd9L0tWKaofTEQH-egoJLw7pzvgCo2RHO0cE/edit"
                }, 
                {
                    author: "makiwasmyidea",
                    link: "https://docs.google.com/document/d/11Wvou24H_RgUIn5VwJoQ5w4tnE5JZbtYTTbkuRDvtHk/edit"
                },
                {
                    author: "userwastaken, Nikita39Gamer",
                    link: "https://docs.google.com/document/d/1DXI4DGpc2UMl7bHrPygf3_oHAZ68UDe5X4boa2teIw8/edit"
                },
                {
                    author: "greek_dutchman",
                    link: "https://docs.google.com/document/d/1i9q2jla0cXq6Vq-IkLihjkzqu-s3Q1e_EyPWAo3mxso/edit"
                }
            ]
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
            maxAcft: "LJ45/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Perth/Lukla"
                }
            ]
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
            maxAcft: "B787/A350/MD11",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Mellor"
                },
                {
                    author: "EzyDubbs",
                    link: "https://drive.google.com/file/d/1u0f6131yt_nA83RYKm5cy6f1SzfOOxTu/view"
                },
                {
                    author: "DarthD3NN15",
                    link: "https://docs.google.com/presentation/d/1s72z-fRBtVsDE4fGcTyIMWNbrVF7_i9ja8K4PDA1MWc/edit#slide=id.p"
                },
                {
                    author: "SQD_Yeet, sanderli25",
                    link: "https://docs.google.com/presentation/d/1OVEz2Zq1MzEr9_kDXYxo_t82d-bHchD_MJXi38d8IWk/edit#slide=id.gc6f90357f_0_0"
                },
                {
                    author: "Jeffersen",
                    link: "https://formicacidgd.github.io/atisgen/IMLR_Chart_Jeffersen.png"
                }

            ]
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
            maxAcft: "B787/A350/MD11",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Cyprus/Paphos"
                },
                {
                    author: "sanderli25",
                    link: "https://drive.google.com/file/d/1feK0t-bD79o5PJTPlOhfe_0agf83xt9y/view"
                },
                {
                    author: "playevator",
                    link: "https://docs.google.com/presentation/d/1OTeilcBnK6c5MJuhMTcBu03cauV5dKokGkAsrGdD3sg/edit#slide=id.g23c6c35c134_1_0"
                },
                {
                    author: "sweet_kid",
                    link: "https://drive.google.com/file/d/1Ckwrvr93OBZxEfpSwTzc75ALkCmjqsqr/view"
                }
            ]
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
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Perth/Perth",
                },
                {
                    author: "Natto, userwastaken, Nikita39Gamer",
                    link: "https://docs.google.com/document/d/1sEOREpJL5TCAs7tejRn2Fm02Ai4IZV5uolC9cX65x3c/edit"
                }
            ]
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
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Izolirani/RAF%20Scampton"
                }
            ]
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
            maxAcft: "SF50/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Orenji/Saba"
                },
                {
                    author: "MR. GEARZ",
                    link: "https://docs.google.com/document/d/17-uqDqJ1YzxvZDwtlduM8hGdPH-kCNxoDxdfBHoOhzE/edit"
                }
            ]
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
            maxAcft: "CRJ7/Q400",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts"
                },
                {
                    author: "sweet_kid",
                    link: "https://drive.google.com/file/d/1OSWgKHBnu8ch3sP68erv8_nVcAFIY7CQ/view"
                },
                {
                    author: "playevator",
                    link: "https://drive.google.com/file/d/1OakBVh551I5OmqO05KdEFAF9LcjscaGs/view"
                },
                {
                    author: "snowfrfr",
                    link: "https://docs.google.com/presentation/d/1qJjS4HnvnP1u0j6ESnOqb-sGJIO_B0jFh1h10vsFWv0/edit#slide=id.p"
                },
                {
                    author: "Sander25",
                    link: "https://cdn.discordapp.com/attachments/876914987715686440/904124376457310228/IBTH_CHARTS.pdf"
                }
            ]
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
            maxAcft: "A320/B737/MD90",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Sauthemptona/Sauthemptona"
                },
                {
                    author: "Aloha516",
                    link: "https://drive.google.com/file/d/11_ioZKaEt2Un1oyKa1R6WZ4hUjUFk7VL/view"
                },
                {
                    author: "userwastaken, Nikita39Gamer",
                    link: "https://docs.google.com/document/d/1iRG8S9p2bq99rgnofHK6_r0jtJqgXc1bj13W0IaBSzc/edit#heading=h.hev5tuk6ocb6"
                }
            ]
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
            maxAcft: "SF50/DHC6",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Skopelos/Skopelos%20Airfield"
                }
            ]
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
            maxAcft: "N/A",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Orenji/Tokyo"
                },
                {
                    author: "Nikita39Gamer",
                    link: "https://docs.google.com/document/d/1VZPegMnzg2cmiysxUPK3TeWvPqzk4RysnvHYmJJ47pM/edit"
                },
                {
                    author: "GA4RIE1",
                    link: "https://docs.google.com/document/d/1NjssUTQnlHVQiZciry656h5ZBu2xW7lJu2Q2L5G90CU/edit"
                },
                {
                    author: "SQD_YEET",
                    link: "https://docs.google.com/presentation/d/1PPpJoNXSOLL5DUMBSexPGDbDskA2nMkrPglJ35szKF4/edit#slide=id.gc6f90357f_0_0"
                }
            ]
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
            maxAcft: "C172",
            chartPacks: [
                {
                    author: "Official",
                    link: "https://github.com/Treelon/ptfs-charts/tree/main/Rockford/Training%20Center"
                },
                {
                    author: "DarthD3NN15",
                    link: "https://docs.google.com/presentation/d/1gNU9XNr-D6ioJBg1Ndia6nUuzP01G6cSnFoRoWM8DF8/edit#slide=id.p"
                }
            ]
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
export { getAirport, getAirportByName, getDefaultAirport, type Airport, type ChartPack };

