import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const chartData = [
  {
    chartTitle: '',
    chartOption: {
      title: {
        text: '不同体裁盈利与投入'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Gross', 'Budget']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Drama','Family','Fantasy','Horror','Mystery','Romance','Sci-fi','Thriller','Western']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Gross',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [167813009, 133268232, 280124625, 61207107, 59167659, 50082282, 60231438, 518583147, 39308611, 56149646, 117887733, 33575381, 37610102, 42488141, 10012943]
        },
        {
            name: 'Budget',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [58415253, 45958899, 76052410, 25360833, 22802372, 22571390, 23190840, 51125000, 16885714, 13299476, 31876471, 24040000, 24416667, 12742857, 10500000]
        }
    ]
  }
  },
  {
    chartTitle: '',
    chartOption: {
      title: {
          text: '主要电影公司票房情况(单位：亿元)'
      },
      tooltip: {},
      legend: {
          data: ['票房']
      },
      xAxis: {
          data: ['Columbia Pictures', 'DreamWorks Animation', 'DreamWorks Pictures', 'Marvel Studios', 'New Line Cinema', 'Paramount Pictures', 'Touchstone Pictures', 'Twentieth Century Fox', 'Universal Pictures', 'Walt Disney Pictures', 'Warner Bros.']
      },
      yAxis: {},
      grid:{
        left: '10%',
        right: '5%',
        bottom: '10%'
      },
      series: [{
        name: '票房(亿)',
        type: 'bar',
        data: [423.56, 118.74, 115.94, 150.66, 196.29, 400.22, 106.65, 395.46, 512.41, 358.34, 547.73]
      }]
    }
  },
  {
    chartTitle: '',
    chartOption: {
      title : {
        text: '各分级影片市场份额占比',
        subtext: '',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Approved','G','NC-17','X', 'unrated', 'PG', 'PG-13', 'R', 'TV-MA']
      },
      series : [
        {
        name: '访问来源',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[
          {value:36565280, name:'Approved'},
          {value:21006223173, name:'G'},
          {value:191307081, name:'NC-17'},
          {value:17186348, name:'X'},
          {value:1267098325, name:'unrated'},
          {value:124933578015, name:'PG'},
          {value:266580378612, name:'PG-13'},
          {value:145199814244, name:'R'},
          {value:700083289, name:'TV-MA'}
        ],
        itemStyle: {
          emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
        }
      ]
    }
  },
  {
    chartTitle: '',
    chartOption: {
      title:{
        text:'star'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Leonardo DiCaprio', 'Mike Myers', 'Ray Romano', 'Robert Downey Jr.', 'Tom Cruise', 'Daniel Radcliffe', 'Adam Sandler', 'Vin Diesel', 'Will Smith', 'Tom Hanks']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Action',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [0, 0, 0, 11259904064, 6743144978, 0, 0, 6033675931, 5243937749 , 0]
        },
        {
          name: 'Animation',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [0, 2982582337, 2839781080, 0, 0, 0, 0, 0, 0, 3346392825]
        },
        {
          name: 'Adventure',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [0, 0, 0, 0, 0, 4922932061, 0, 0, 0, 0]
        },
        {
          name: 'Comedy',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [0, 0, 0, 0, 0, 0, 3083982288, 0, 0, 0]
        },
        {
          name: 'Drama',
          type: 'bar',
          data: [2778825716, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          emphasis: {
            focus: 'series'
          }
        }
      ]
    }
  }
];

function ChartCarousel() {
  const [currentChartIndex, setCurrentChartIndex] = useState(0);
  const [showCurrentChart, setShowCurrentChart] = useState(true);

  useEffect(() => {
    setShowCurrentChart(true); // 立即显示当前图表

    const intervalId = setInterval(() => {
      setShowCurrentChart(false); // 隐藏上一个图表
      setCurrentChartIndex((currentChartIndex + 1) % chartData.length);
    }, 10000); // 切换时间间隔，单位为毫秒

    // 清除定时器
    return () => {
      clearInterval(intervalId);
    };
  }, [currentChartIndex]);

  const currentChartData = chartData[currentChartIndex];
  const prevChartData = chartData[(currentChartIndex - 1 + chartData.length) % chartData.length];

  return (
    <>
      {showCurrentChart && (
        <div key={currentChartData.chartTitle}>
          <h2>{currentChartData.chartTitle}</h2>
          <ReactECharts option={currentChartData.chartOption} />
        </div>
      )}
      {!showCurrentChart && (
        <div style={{ opacity: 0, transition: 'opacity 1s' }}>
          <h2>{prevChartData.chartTitle}</h2>
          <ReactECharts option={prevChartData.chartOption} />
        </div>
      )}
    </>
  );
}

export default ChartCarousel;