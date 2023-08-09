import * as React from 'react';
import { useEffect } from 'react'
import readCsvData from './ReadFiles'
import { DataGrid, GridToolbarFilterButton,GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid';




// 数据
// 这种形式的 table id属性必须存在不要动
// id 不能够用相同的，否则后面的id会替代前面的
// name	rating genre	year	released	score	votes	director	writer	star	country	budget	gross	company	runtime
const columns = [  
  {  
    field: 'id',  
    headerName: 'ID',  
    width: 90,  
    type:'number'
  },  
  {  
    field: 'Name',  
    headerName: '电影名称',  
    width: 150,  
  },  
  {  
    field: 'Rating',  
    headerName: '分级',  
    width: 90,  
  },  
  {  
    field: 'Genre',  
    headerName: '种类',  
    width: 90,  
  },  
  {  
    field: 'Year',  
    headerName: '发行年份',  
    type: 'number',  
    description: '发行年份',  
    width: 110,  
  },  
  {  
    field: 'Released',  
    headerName: '发行日期',  
    sortable: false,  
    width: 110,  
  },  
  {  
    field: 'Score',  
    headerName: '得分',  
    width: 90,  
  },  
  {  
    field: 'Votes',  
    headerName: 'VOTES',  
    width: 90,  
  },  
  {  
    field: 'Director',  
    headerName: '导演',  
    width: 90,  
  },  
  {  
    field: 'Writer',  
    headerName: '作者',  
    width: 110,  
    description: '一般指剧本作者或者原作者',  
  },  
  {  
    field: 'Star',  
    headerName: '主演',  
    width: 110,  
  },  
  {  
    field: 'Country',  
    headerName: '国家',  
    width: 110,  
  },  
  {  
    field: 'Budget',  
    headerName: '预算',  
    width: 110,  
  },  
  {  
    field: 'Gross',  
    headerName: '利润',  
    width: 110,  
  },  
  {  
    field: 'Company',  
    headerName: '发行公司',  
    width: 110,  
    description: '发行公司',  
  },  
  {  
    field: 'Runtime',  
    headerName: '影片时长',  
    width: 110,  
    description: '影片时长',  
  },  
];  
// 自定义的菜单
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton/>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

// 实现excel数据导入
// name	rating genre	year	released	score	votes	director	writer	star	country	budget	gross	company	runtime
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

export default function DataTable() {
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
  //console.log(rows);
  const companyData = rows.map(item => item.Company);
  //console.log(companyData);
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        
        rows={rows}
        columns={columns}
        pageSize={100}
        // 菜单栏
        components={{
          Toolbar: CustomToolbar,
        }}
        // checkboxSelection  实现选择
        // disableSelectionOnClick
      />
    </div>
  );
}
