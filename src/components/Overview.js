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
        type: 'line',  
        stack: 'Total',  
        data: grossData 
      },  
    ]  
  };  
  
  return (  
    <div >  
      <ReactECharts option={option}
      theme={"cool"}
      />  
    </div>  
  );  
});

export default Overview


