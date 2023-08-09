import React from 'react';
import ReactECharts from 'echarts-for-react';


function Overview() {
//overview
    const options = {
        title:{
            text:'OverView'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };
    return <div style={{ height: '100%', width: '100%' }}>
        <ReactECharts option={options}
        style={{ height: '110%', width: '100%' }}
        />
    </div>
}

export default Overview;