import React from 'react';  
import ReactECharts from 'echarts-for-react';  
import { useEffect } from 'react'
import readCsvData from './ReadFiles'

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
        // 为每个对象生成唯一id  
        const rowsWithId = data.map((row, index) => ({  
            id: `${index}`,  
            ...row,  
        })); 
        setRows(rowsWithId);  
        });  
    }, [data]);   
    
    const grossData = rows.map(item => item.Gross);
    const yearData = rows.map(item => item.Year);
   
    const options = {  
        animation: false,  
        legend: {  
        data: [rows]  
        },  
        tooltip: {},  
        xAxis: {   
            type: 'category',
            min: `dataMin`,  
            max: 'dataMax',  
            splitLine: {  
                show: true  
            },
            data: yearData
        },  
        yAxis: {  
            type: 'value',  
            min: `dataMin`,  
            max: `dataMax`,  
            splitLine: {  
                show: true  
            },
            data: grossData,
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
            start: 1970,  
            end: 2020  
        },  
        {  
            type: 'slider',  
            show: true,  
            yAxisIndex: [0],  
            left: '93%',  
            start: 0,  
            end: 15  
        },  
        /*内置滑块  中间滑轮*/
        {  
            type: 'inside',  
            xAxisIndex: [0],  
            start: 1970,  
            end: 2020  
        },  
        {  
            type: 'inside',  
            yAxisIndex: [0],  
            start: 0,  
            end: 15  
        }  
        ],  
        series: [ 
        {  
            name: 'line',  
            type: 'line',  
            itemStyle: {  
            normal: {  
                opacity: 0.8  
            }  
            },  
            data: grossData 
        },  
        ]  
    };  
    
    return (  
        <div style={{ width: '100%', height: '100%' }}>  
        <ReactECharts option={options} />  
        </div>  
  );  
}  
  
export default DetailView; 