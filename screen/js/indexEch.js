

// 左边直线图
function leftZhi() {
    var dateArr = afterDateArr(7, false)
    var dateArr2 = afterDateArr(7, true)
    var dataA = [0.92, 0.97, 1.01, 0.99, 1.02, 0.98, 0.92];
    var dataB = [0.95, 0.97, 0.98, 1.02, 0.99, 0.95, 0.94];
    var dataC = [0.93, 0.95, 0.97, 0.99, 1.01, 0.95, 0.98];
    console.log(dateArr)

    var option = {

        title: [{
            text: dateArr2[0] + '-' + dateArr2[dateArr2.length - 1] + "|今日",
            x: '10px',
            y: '5px',
            textAlign: '',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 7,
                color: "#ffffff"
            }
        },
        {
            text: dataA[dataA.length - 1] + "%",
            x: '46%',
            y: '30px',
            textAlign: '',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 10,
                color: "#ffffff"
            }
        },
        {
            text: dataB[dataB.length - 1] + "%",
            x: '65%',
            y: '30px',
            textAlign: '',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 10,
                color: "#ffffff"
            }
        },
        {
            text: dataC[dataC.length - 1] + "%",
            x: '83%',
            y: '30px',
            textAlign: '',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 10,
                color: "#ffffff"
            }
        }

        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'circle',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['优惠卷A', '优惠卷B', '优惠卷C'],
            right: '4%',
            textStyle: {
                fontSize: 9,
                color: '#ffffff'
            }
        },
        grid: {

            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(122, 255, 253,0.7)',
                }
            },
            axisLabel: {
                margin: 5,
                textStyle: {
                    fontSize: 10
                },
            },
            data: dateArr
        }],
        yAxis: [
            {
                type: 'value',
                interval: .03, //间隔
                min: 0.9,
                //  name: '单位（%）',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false, //隐藏坐标轴
                    lineStyle: {
                        color: 'rgba(122, 255, 253,0.7)'
                    }
                },
                axisLabel: {
                    margin: 5,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: '{value}%'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(222,222,222,0.4)'
                    }
                }
            }],
        series: [{
            name: '优惠卷A',
            type: 'line',
            //  smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(16,97,204, 1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(16,97,204, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {

                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(16,97,204, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(16,97,204, 1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(0,196,132)',
                    borderColor: 'rgba(0,196,132,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: dataA
        },
        {
            name: '优惠卷B',
            type: 'line',
            //  smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 255, 0, 1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(255, 255, 0, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                },
            },
            itemStyle: {
                normal: {

                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 255, 0, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(255, 255, 0, 1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(255,255,255)',
                    borderColor: 'rgba(99,250,235,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: dataB
        },
        {
            name: '优惠卷C',
            type: 'line',
            //  smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(205,52,42,1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(205,52,42,0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                },
            },
            itemStyle: {
                normal: {

                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(205,52,42,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(205,52,42,1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(255,255,255)',
                    borderColor: 'rgba(99,250,235,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: dataC
        }]
    };

    return option

}
// 左边饼状图
function leftZhi2() {
    var dateArr = afterDateArr(15, false)
    var dateArr2 = afterDateArr(15, true)
    // var dateArr2 = afterDateArr(7,true)
    var option = {
        title: [{
            text: "GMV近15天变化趋势",
            x: '10px',
            y: '10px',
            textAlign: '',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 7,
                color: "rgba(0, 234, 255, 1)"
            }
        },
        {
            text: dateArr2[0] + '-' + dateArr2[dateArr2.length - 1] + "|今日",
            x: '10px',
            y: '25px',
            textAlign: '',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 5,
                color: "#ffffff"
            }
        },
        {
            text: "环比",
            x: '10px',
            y: '35px',
            textAlign: '',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 5,
                color: "rgba(60, 98, 192, 1)"
            }
        },
        {
            text: "↓2.673%",
            x: '25px',
            y: '35px',
            textAlign: '',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 5,
                color: "rgba(162, 23, 39, 1)"
            }
        },
        {
            text: "同比",
            x: '58px',
            y: '35px',
            textAlign: '',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 5,
                color: "rgba(60, 98, 192, 1)"
            }
        },
        {
            text: "↑94.23%",
            x: '75px',
            y: '35px',
            textAlign: '',
            textBaseline: 'middle',
            textStyle: {
                fontSize: 5,
                color: "rgba(4, 141, 102, 1)"
            }
        }
        ],
        legend: {
            data: ["实付订单的金额的总和"],
            top: 10,
            right: 20,
            textStyle: {
                color: '#0DD5ED',
                fontSize: 8
            }
        },
        xAxis: [{

            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false,

            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(122, 255, 253,0.7)',
                }
            },
            axisLabel: {
                rotate: -70,
                margin: 5,
                textStyle: {
                    fontSize: 10,

                },
                boundaryGap: [0, '60'],

            },
            data: dateArr
        }],
        yAxis: [
            {
                type: 'value',
                interval: 100, //间隔
                min: 100,
                //  name: '单位（%）',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false, //隐藏坐标轴
                    lineStyle: {
                        color: 'rgba(232, 232, 232, 1)'
                    }
                },
                axisLabel: {
                    margin: 5,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: '{value}万'
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgba(222,222,222,0.4)'
                    }
                }
            },

            //     {
            //     interval: 100, //间隔
            //     min: 100,
            //     type: 'value',
            //     splitLine :{    //网格线
            //         lineStyle:{
            //             type:'dashed',
            //             color:"#545454"    //设置网格线类型 dotted：虚线   solid:实线
            //         },
            //         show:true //隐藏或显示
            //     }
            // },
        ],
        series: [{
            name: '实付订单的金额的总和',
            itemStyle: {
                normal: {

                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 234, 255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 234, 255, 1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(255,255,255)',
                    borderColor: 'rgba(99,250,235,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: [270, 330, 400, 390, 300, 200, 220, 270.340, 400, 500, 400, 300, 200, 250, 300],
            type: 'line',
            showSymbol: false,
            smooth: true,
            lineStyle: {
                width: 3,
                shadowColor: 'rgba(0,0,0,1)',
                shadowBlur: 3,
                shadowOffsetY: 20
            },
        }]
    };
    return option

}

function pie2() {
    var dateArr2 = afterDateArr(7, true)
    option = {
        backgroundColor: 'rgba(0,0,0,0.0)',
        color: ["#563AD2", "#438DC3", "#DAB54C", "#D78155", "#325DF9", "#ED5450"],
        // title:{
        //     text: "",
        //     x: '0',
        //     y: '5px',
        //     textAlign: '',
        //     textBaseline: 'middle',
        //     textStyle: {
        //         fontSize: 7,
        //         color:"#ffffff"
        //     }
        //  },
        //  grid: {
        //     left: '10%',
        //     right: '4%',
        //     bottom: '93%',
        //     containLabel: true
        // },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            show: false,
            type: "scroll",
            orient: "vartical",
            // x: "right",
            top: "center",
            right: "15",
            // bottom: "0%",
            itemWidth: 16,
            itemHeight: 8,
            itemGap: 16,
            textStyle: {
                color: '#A3E2F4',
                fontSize: 11,
                fontWeight: 0
            },
            data: ['小程序', '公众号', '其他', 'H5', 'app', 'web']
        },
        polar: {},
        angleAxis: {
            interval: 1,
            type: 'category',
            data: [],
            z: 10,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#0B4A6B",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                interval: 0,
                show: true,
                color: "#0B4A6B",
                margin: 8,
                fontSize: 11
            },
        },
        radiusAxis: {
            min: 4,
            max: 12,
            interval: 20,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#0B3E5E",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                formatter: '{value} %',
                show: false,
                padding: [0, 0, 20, 0],
                color: "#0B3E5E",
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: "#0B3E5E",
                    width: 2,
                    type: "solid"
                }
            }
        },
        calculable: true,
        series: [

            {
                type: 'pie',
                radius: ["6%", "15%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 10,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0B4A6B"
                        }
                    }
                }]
            }, {
                type: 'pie',
                radius: ["89%", "90%"],

                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                name: "",
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0B4A6B"
                        }
                    }
                }]
            }, {
                stack: 'a',
                type: 'pie',
                radius: ['20%', '80%'],
                roseType: 'area',
                zlevel: 1,
                label: {
                    normal: {
                        show: true,
                        formatter: "{b}{d}%",
                        textStyle: {
                            fontSize: 12,
                            padding: 6,
                            backgroundSize: 'cover',
                            backgroundColor: "rgba(255,255,255,0.2)"
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {


                    normal: {
                        show: true,
                        length: 6,
                        length2: 15
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: [{
                    value: 10,
                    name: '小程序'
                },
                {
                    value: 5,
                    name: 'web'
                },
                {
                    value: 15,
                    name: 'app '
                },
                {
                    value: 25,
                    name: '公众号'
                },
                {
                    value: 20,
                    name: '其他'
                },
                {
                    value: 35,
                    name: 'H5'
                }
                ]
            },]
    }
    return option
}


function afterDateArr(numn, isYear) {
    const temp = [];
    var numns = parseInt(numn)
    for (let i = 0; i < numns; i++) {
        const time = new Date(new Date().setDate((new Date().getDate() + i) - (numns - 1)));
        console.log(time)

        const year = time.getFullYear();
        const month = `0${time.getMonth() + 1}`.slice(-2);
        const strDate = `0${time.getDate()}`.slice(-2);
        if (!isYear) {
            temp.push(`${month}-${strDate}`)
        } else {
            temp.push(`${year}-${month}-${strDate}`)
        }

    }
    return temp
}