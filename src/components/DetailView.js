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
  
function DetailView({ selectedValue1, selectedValue2 }) {  
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
  
  //抽离数据 'Name', 'Gross','Year','Budget', 'Score', 'Votes', 'Runtime', 'Genre'  
  let nameData = rows.map((item) => item.Name);  
  let grossData = rows.map((item) => item.Gross);  
  let yearData = rows.map((item) => item.Year);  
  let budgetData = rows.map((item) => item.Budget);  
  let scoreData = rows.map((item) => item.Score);  
  let votesData = rows.map((item) => item.Votes);  
  let runtimeData = rows.map((item) => item.Runtime);  
  let genreData = rows.map((item) => item.Genre);  
  
  //实现选择  
  let chartType;  
  if (selectedValue2 === 'bar') {  
    chartType = 'bar';  
    //console.log('is bar')  
  } else {  
    chartType = 'line'; // 默认类型  
    //  
  }  
  
  let ySelectedData;  
  const xSelectedData = React.useMemo(() => {  
    switch (selectedValue1) {  
      case 'Budget':  
        const sortedBudgetData = [...rows].sort((a, b) => a.Budget - b.Budget);  
        ySelectedData = sortedBudgetData.map((item) => item.Gross);  
        nameData = sortedBudgetData.map((item) => item.Name);  
        grossData = sortedBudgetData.map((item) => item.Gross);  
        yearData = sortedBudgetData.map((item) => item.Year);  
        budgetData = sortedBudgetData.map((item) => item.Budget);  
        scoreData = sortedBudgetData.map((item) => item.Score);  
        votesData = sortedBudgetData.map((item) => item.Votes);  
        runtimeData = sortedBudgetData.map((item) => item.Runtime);  
        genreData = sortedBudgetData.map((item) => item.Genre); 
        return sortedBudgetData.map((item) => item.Budget);  
      case 'Score':  
        const sortedScoreData = [...rows].sort((a, b) => a.Score - b.Score);  
        ySelectedData = sortedScoreData.map((item) => item.Gross);  
        nameData = sortedScoreData.map((item) => item.Name);  
        grossData = sortedScoreData.map((item) => item.Gross);  
        yearData = sortedScoreData.map((item) => item.Year);  
        budgetData = sortedScoreData.map((item) => item.Budget);  
        scoreData = sortedScoreData.map((item) => item.Score);  
        votesData = sortedScoreData.map((item) => item.Votes);  
        runtimeData = sortedScoreData.map((item) => item.Runtime);  
        genreData = sortedScoreData.map((item) => item.Genre); 
        return sortedScoreData.map((item) => item.Score);  
      case 'Votes':  
        const sortedVotesData = [...rows].sort((a, b) => a.Votes - b.Votes);  
        nameData = sortedVotesData.map((item) => item.Name);  
        grossData = sortedVotesData.map((item) => item.Gross);  
        yearData = sortedVotesData.map((item) => item.Year);  
        budgetData = sortedVotesData.map((item) => item.Budget);  
        scoreData = sortedVotesData.map((item) => item.Score);  
        votesData = sortedVotesData.map((item) => item.Votes);  
        runtimeData = sortedVotesData.map((item) => item.Runtime);  
        genreData = sortedVotesData.map((item) => item.Genre); 
        ySelectedData = sortedVotesData.map((item) => item.Gross);  
        return sortedVotesData.map((item) => item.Votes);  
      case 'Runtime':  
        const sortedRuntimeData = [...rows].sort((a, b) => a.Runtime - b.Runtime);  
        ySelectedData = sortedRuntimeData.map((item) => item.Gross);  
        nameData = sortedRuntimeData.map((item) => item.Name);  
        grossData = sortedRuntimeData.map((item) => item.Gross);  
        yearData = sortedRuntimeData.map((item) => item.Year);  
        budgetData = sortedRuntimeData.map((item) => item.Budget);  
        scoreData = sortedRuntimeData.map((item) => item.Score);  
        votesData = sortedRuntimeData.map((item) => item.Votes);  
        runtimeData = sortedRuntimeData.map((item) => item.Runtime);  
        genreData = sortedRuntimeData.map((item) => item.Genre);
        return sortedRuntimeData.map((item) => item.Runtime);  
      case 'Genre':  
        const sortedGenreData = [...rows].sort((a, b) => a.Genre - b.Genre);  
        ySelectedData = sortedGenreData.map((item) => item.Gross);  
        nameData = sortedGenreData.map((item) => item.Name);  
        grossData = sortedGenreData.map((item) => item.Gross);  
        yearData = sortedGenreData.map((item) => item.Year);  
        budgetData = sortedGenreData.map((item) => item.Budget);  
        scoreData = sortedGenreData.map((item) => item.Score);  
        votesData = sortedGenreData.map((item) => item.Votes);  
        runtimeData = sortedRuntimeData.map((item) => item.Runtime);  
        genreData = sortedRuntimeData.map((item) => item.Genre);
        return sortedGenreData.map((item) => item.Genre); 
      default:  
        const sortedYearData = [...rows].sort((a, b) => a.Year - b.Year);  
        ySelectedData = sortedYearData.map((item) => item.Gross);  
        return sortedYearData.map((item) => item.Year);
    }  
  }, [selectedValue1, budgetData, scoreData, votesData, runtimeData, genreData, yearData]);  
  
  const options = {  
    title: {
      text: '影响利润要素图',
      subtext: 'Movie makes profits',
      top:'1.5%',
      left: 'center'
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
        const score = scoreData[dataIndex];  
        const runtime = runtimeData[dataIndex];  
        return `Movie: ${movie}<br/>Year: ${year}<br/>Gross: ${gross}<br/>Score: ${score}<br/>Runtime: ${runtime}`;  
      },  
    },  
    xAxis: {  
      type: 'category',  
      min: 'dataMin',  
      max: 'dataMax',  
      splitLine: {  
        show: true,  
      },  
      data: xSelectedData,  
    },  
    yAxis: {  
      name:'Gross',
      type: 'value',  
      min: 'dataMin',  
      max: 'dataMax',  
      splitLine: {  
        show: true,  
      },  
    },  
    dataZoom: [  
      {  
        type: 'slider',  
        show: true,  
        xAxisIndex: [0],  
        handleStyle: {  
          color: '#228bec', // 设置滑动条的颜色  
        },  
      },  
      {  
        type: 'slider',  
        show: true,  
        yAxisIndex: [0],  
        left: '93%',  
        handleStyle: {  
          color: '#228bec', // 设置滑动条的颜色  
        },  
      },  
      {  
        type: 'inside',  
        xAxisIndex: [0],  
      },  
    ],  
    series: [  
      {  
        name: 'bar',  
        type: chartType,  
        itemStyle: {  
          color: '#4c9be6',  
        },  
        data: ySelectedData,  
      },  
    ],  
  };  
  
  return (  
    <div>  
      <ReactECharts option={options} />  
    </div>  
  );  
}  
  
export default DetailView;  