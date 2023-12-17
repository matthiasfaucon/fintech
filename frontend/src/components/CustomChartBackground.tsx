import React, { useEffect, useRef, useState } from 'react';

export default function CustomChartBackground() {
    const svgRef = useRef(null);

    useEffect(() => {
        const data = ([
            {
                "data": {
                    "bitcoin": [
                        {
                            "google_trends": [
                                {
                                    "date": "Dec 13, 2023 at 5:04 PM",
                                    "timestamp": "1702486320",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:05 PM",
                                    "timestamp": "1702486380",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:06 PM",
                                    "timestamp": "1702486440",
                                    "values": [
                                        {
                                            "extracted_value": 22,
                                            "query": "bitcoin",
                                            "value": "22"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:07 PM",
                                    "timestamp": "1702486500",
                                    "values": [
                                        {
                                            "extracted_value": 51,
                                            "query": "bitcoin",
                                            "value": "51"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:08 PM",
                                    "timestamp": "1702486560",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:09 PM",
                                    "timestamp": "1702486620",
                                    "values": [
                                        {
                                            "extracted_value": 35,
                                            "query": "bitcoin",
                                            "value": "35"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:10 PM",
                                    "timestamp": "1702486680",
                                    "values": [
                                        {
                                            "extracted_value": 29,
                                            "query": "bitcoin",
                                            "value": "29"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:11 PM",
                                    "timestamp": "1702486740",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:12 PM",
                                    "timestamp": "1702486800",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:13 PM",
                                    "timestamp": "1702486860",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:14 PM",
                                    "timestamp": "1702486920",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:15 PM",
                                    "timestamp": "1702486980",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:16 PM",
                                    "timestamp": "1702487040",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:17 PM",
                                    "timestamp": "1702487100",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:18 PM",
                                    "timestamp": "1702487160",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:19 PM",
                                    "timestamp": "1702487220",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:20 PM",
                                    "timestamp": "1702487280",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:21 PM",
                                    "timestamp": "1702487340",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:22 PM",
                                    "timestamp": "1702487400",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:23 PM",
                                    "timestamp": "1702487460",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:24 PM",
                                    "timestamp": "1702487520",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:25 PM",
                                    "timestamp": "1702487580",
                                    "values": [
                                        {
                                            "extracted_value": 100,
                                            "query": "bitcoin",
                                            "value": "100"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:26 PM",
                                    "timestamp": "1702487640",
                                    "values": [
                                        {
                                            "extracted_value": 30,
                                            "query": "bitcoin",
                                            "value": "30"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:27 PM",
                                    "timestamp": "1702487700",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:28 PM",
                                    "timestamp": "1702487760",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:29 PM",
                                    "timestamp": "1702487820",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:30 PM",
                                    "timestamp": "1702487880",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:31 PM",
                                    "timestamp": "1702487940",
                                    "values": [
                                        {
                                            "extracted_value": 35,
                                            "query": "bitcoin",
                                            "value": "35"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:32 PM",
                                    "timestamp": "1702488000",
                                    "values": [
                                        {
                                            "extracted_value": 56,
                                            "query": "bitcoin",
                                            "value": "56"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:33 PM",
                                    "timestamp": "1702488060",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:34 PM",
                                    "timestamp": "1702488120",
                                    "values": [
                                        {
                                            "extracted_value": 26,
                                            "query": "bitcoin",
                                            "value": "26"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:35 PM",
                                    "timestamp": "1702488180",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:36 PM",
                                    "timestamp": "1702488240",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:37 PM",
                                    "timestamp": "1702488300",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:38 PM",
                                    "timestamp": "1702488360",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:39 PM",
                                    "timestamp": "1702488420",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:40 PM",
                                    "timestamp": "1702488480",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:41 PM",
                                    "timestamp": "1702488540",
                                    "values": [
                                        {
                                            "extracted_value": 25,
                                            "query": "bitcoin",
                                            "value": "25"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:42 PM",
                                    "timestamp": "1702488600",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:43 PM",
                                    "timestamp": "1702488660",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:44 PM",
                                    "timestamp": "1702488720",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:45 PM",
                                    "timestamp": "1702488780",
                                    "values": [
                                        {
                                            "extracted_value": 45,
                                            "query": "bitcoin",
                                            "value": "45"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:46 PM",
                                    "timestamp": "1702488840",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:47 PM",
                                    "timestamp": "1702488900",
                                    "values": [
                                        {
                                            "extracted_value": 62,
                                            "query": "bitcoin",
                                            "value": "62"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:48 PM",
                                    "timestamp": "1702488960",
                                    "values": [
                                        {
                                            "extracted_value": 53,
                                            "query": "bitcoin",
                                            "value": "53"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:49 PM",
                                    "timestamp": "1702489020",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:50 PM",
                                    "timestamp": "1702489080",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:51 PM",
                                    "timestamp": "1702489140",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:52 PM",
                                    "timestamp": "1702489200",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:53 PM",
                                    "timestamp": "1702489260",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:54 PM",
                                    "timestamp": "1702489320",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:55 PM",
                                    "timestamp": "1702489380",
                                    "values": [
                                        {
                                            "extracted_value": 46,
                                            "query": "bitcoin",
                                            "value": "46"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:56 PM",
                                    "timestamp": "1702489440",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:57 PM",
                                    "timestamp": "1702489500",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                },
                                {
                                    "date": "Dec 13, 2023 at 5:58 PM",
                                    "timestamp": "1702489560",
                                    "values": [
                                        {
                                            "extracted_value": 0,
                                            "query": "bitcoin",
                                            "value": "0"
                                        }
                                    ]
                                }
                            ],
                            "mentions": 625,
                            "polarity": -0.02,
                            "subjectivity": 0.12
                        }
                    ]
                }
            }
        ]);
        console.log(data);

        const googleTrendsData = data[0]?.data?.bitcoin[0]?.google_trends?.map(entry => ({
            date: new Date(entry.date.replace("at", "")).getTime(), // Adjust date parsing
            value: entry.values[0].value
        }));

        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        const x = d3.scaleTime().range([0, width]);
        const y = d3.scaleLinear().range([height, 0]);

        const valueline = d3.line()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.value));

        x.domain(d3.extent(googleTrendsData, d => d.date));
        y.domain([0, d3.max(googleTrendsData, d => d.value)]);

        svg.append("path")
            .data([googleTrendsData])
            .attr("class", "line")
            .attr("d", valueline);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));
    }, []);

    return <svg ref={svgRef}></svg>;
}
