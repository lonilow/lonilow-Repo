import React from 'react';  
import ReactECharts from 'echarts-for-react';  


const Overview = React.memo(({ selectedData }) =>{  
  //console.log('overview');
  //console.log(selectedData);
  //console.log(selectedData[0]);
  //先抽离数据
  const grossData = selectedData.map((item) => item.Gross);  
  const yearData = selectedData.map((item) => item.Year);  
  const nameData = selectedData.map((item) => item.Name);
  const budgetData = selectedData.map((item) => item.Budget);
  const option = {  
    title:{
      text:'利润-投入',
      
    },
    tooltip: {  
      trigger: 'axis', 
      //textstyle
      formatter: function (params) {  
          // 自定义tooltip的内容
          const dataIndex = params[0].dataIndex;
          const gross = params[0].value;  
          const year = yearData[dataIndex];
          const movie = nameData[dataIndex];  
          const budget = budgetData[dataIndex];  
          return `Movie: ${movie}<br/>Year: ${year}<br/>Gross：${gross}<br/>Budget：${budget}`;  
      },  
  }, 
    grid: {  
      containLabel: true  
    },    
    dataZoom:[
      {  
        type: 'inside',  
        xAxisIndex: [0],  
      },  
    ],
    xAxis: {  
      min: 'dataMin',  
      max: 'dataMax',  
      type: 'category',  
      data: budgetData,  
      name:'投入'
    },  
    yAxis: {  
      min: 'dataMin',  
      max: 'dataMax',  
      type: 'value',
      name:'利润'
    },  
    series: [  
      {  
        name: 'value',  
        type: 'scatter',  
        stack: 'Total',  
        itemStyle :{  
          color: '#4c9be6',
      },
        data: grossData 
      },  
    ]  
  };  
  
  return (  
    <div >  
      <ReactECharts option={option}
      />  
    </div>  
  );  
});

export default Overview