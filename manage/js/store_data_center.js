// 曲线图和直线图的方
var mountArr = [];
var mountArr2 = [];
var totleMounth = ['1月', '2月', '3月', '4月', '5月','6月', '7月', '8月', '9月', '10月','11月','12月'];
var mounth = (new Date()).getMonth()+1 +'月'
mountArr2 = totleMounth.splice(0,totleMounth.indexOf(mounth.toString())+1)  
mountArr = totleMounth

// 行业复购情况
function hYFBuy(){
   var newArr = mountArr.concat(mountArr2);
   var  option = {
        backgroundColor: 'rgba(0,0,0,0.0)',
        title: {
            text: '各行业复购情况',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#ffffff'
            },
            left: '6%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['移动', '电信', '联通'],
            right: '4%',
            textStyle: {
                fontSize: 12,
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
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
            data: newArr.splice(5,11)
        }],
        yAxis: [
            {
            type: 'value',
            name: '单位（%）',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: '移动',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(16,97,204, 1)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(17,235,210, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
    
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(16,97,204,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17,235,210,1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(0,196,132)',
                    borderColor: 'rgba(0,196,132,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: [22, 18, 19, 13, 15, 12, 11, 12]
        }, {
            name: '电信',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,255,255, 0.5)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(255,255,255, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                },
            },
            itemStyle: {
                normal: {
    
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(205,52,42,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(235,235,21,1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(255,255,255)',
                    borderColor: 'rgba(99,250,235,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: [12, 11, 12, 14, 12, 16, 12, 22]
        }]
    };

    return option
}

// 月销售额

function mouthmoney(){

    var newArr = mountArr.concat(mountArr2);
    var  option = {
         backgroundColor: 'rgba(0,0,0,0.0)',
         title: {
             text: '月销售趋势',
             textStyle: {
                 fontWeight: 'normal',
                 fontSize: 16,
                 color: '#ffffff'
             },
             left: '6%'
         },
         tooltip: {
             trigger: 'axis',
             axisPointer: {
                 lineStyle: {
                     color: '#57617B'
                 }
             }
         },
         legend: {
             icon: 'rect',
             itemWidth: 14,
             itemHeight: 5,
             itemGap: 13,
             data: ['移动', '电信', '联通'],
             right: '4%',
             textStyle: {
                 fontSize: 12,
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
             axisLine: {
                 lineStyle: {
                    color: 'rgba(255,255,255,0.4)'
                 }
             },
             data: newArr.splice(5,11)
         }],
         yAxis: [
             {
             type: 'value',
             name: '单位（万）',
             axisTick: {
                 show: false
             },
             axisLine: {
                 lineStyle: {
                     color: 'rgba(255,255,255,0.4)'
                 }
             },
             axisLabel: {
                 margin: 10,
                 textStyle: {
                     fontSize: 14
                 }
             },
             splitLine: {
                 lineStyle: {
                     color: '#57617B'
                 }
             }
         }],
         series: [{
             name: '移动',
             type: 'line',
             smooth: false,
             symbolSize: 5,
             showSymbol: true,
             lineStyle: {
                 normal: {
                     width: 3
                 }
             },
             areaStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: 'rgba(16,97,204, 1)'
                     }, {
                         offset: 0.8,
                         color: 'rgba(17,235,210, 0)'
                     }], false),
                     shadowColor: 'rgba(0, 0, 0, 0.1)',
                     shadowBlur: 10
                 }
             },
             itemStyle: {
                 normal: {
     
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                         offset: 0,
                         color: 'rgba(16,97,204,1)'
                     }, {
                         offset: 1,
                         color: 'rgba(17,235,210,1)'
                     }])
                 },
                 emphasis: {
                     color: 'rgb(0,196,132)',
                     borderColor: 'rgba(0,196,132,0.2)',
                     extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                     borderWidth: 10
                 }
             },
             data: [200, 1800, 1001, 2000, 1500, 1200, 1100, 1200]
         }]
     };
 
     return option
    

}