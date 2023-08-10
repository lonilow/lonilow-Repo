import React from 'react';  
import ReactECharts from 'echarts-for-react';  
import { useEffect } from 'react';  
import readCsvData from './ReadFiles';  
// 数据导入  
async function useData() {  
  //csv  
  const data = await readCsvData();  
  if (data) {  
    //console.log('Data loaded successfully!');  
    //console.log(data);  
    return data;  
  }  
  return [];  
}  
  
function DetailView() {  
  const [rows, setRows] = React.useState([]);  
  
  // 在组件顶层调用 useData 钩子函数  
  const data = useData();  
  // 在 useEffect 中设置数据到 rows 状态  
  
  useEffect(() => {  
    data.then((data) => {  
      const rowsWithId = data.map((row) => ({  
        ...row,  
      }));  
      setRows(rowsWithId);  
    });  
  }, [data]);  
  //抽离数据
  const grossData = rows.map((item) => item.Gross);  
  const yearData = rows.map((item) => item.Year);  
  const nameData = rows.map((item) => item.Name);


  const options = {  
    title: {
        text: ' Data',
        left: 10
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
            return `Movie: ${movie}<br/>Year: ${year}<br/>Gross: ${gross}`;  
        },  
    }, 
    xAxis: {  
      type: 'category',  
      min: 'dataMin',  
      max: 'dataMax',  
      splitLine: {  
        show: true,  
      },  
      data: yearData,  
    },  
    yAxis: {  
      type: 'value',  
      min: 'dataMin',  
      max: 'dataMax',  
      splitLine: {  
        show: true,  
      },  
    },  
  
    dataZoom: [  
      /*`type`：指定滑块的类型为`slider`，表示滑块为可拖动的滑动条形式。  
            `show`：指定是否显示滑块。  
            `xAxisIndex`和`yAxisIndex`：指定滑块所关联的x轴和y轴的索引。  
            `start`和`end`：指定滑块的起始位置和结束位置。这里的值表示数据点的索引，可以根据需要进行调整。  
            `left`：仅适用于垂直滑块，指定滑块距离图表左边的位置。*/  
      {  
        type: 'slider',  
        show: true,  
        xAxisIndex: [0],  
        handleStyle: {  
            color:`#228bec`, // 设置滑动条的颜色  
          }, 
      },  
      {  
        type: 'slider',  
        show: true,  
        yAxisIndex: [0],  
        left: '93%',  
        handleStyle: {  
            color:`#228bec`, // 设置滑动条的颜色  
          }, 
      },  
      /*内置滑块  中间滑轮操作*/  
      {  
        type: 'inside',  
        xAxisIndex: [0],  
      },  
      
    ],  
    series: [  
      {  
        name: 'bar',  
        type: 'bar',
        itemStyle :{  
            color: '#4c9be6',
        },
        data: grossData,  
      },  
    ],  
  };  
  
  return (  
    <div >  
      <ReactECharts option={options}
      
      />  
    </div>  
  );  
}  
  
export default DetailView;  