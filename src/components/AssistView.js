import * as React from 'react';
import { DataGrid, GridToolbarFilterButton,GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid';

// 数据
// 这种形式的 table id属性必须存在不要动
// id 不能够用相同的，否则后面的id会替代前面的
// name	rating genre	year	released	score	votes	director	writer	star	country	budget	gross	company	runtime
const columns = [
  { field: 'id', 
    headerName: 'ID', 
    width: 90 ,
    /*悬浮在上面显示的东西*/
    description: ''
  },
  {
    field: 'name',
    headerName: '电影名称',
    width: 150,
  },
  {
    field: 'rating',
    headerName: '分级',
    width: 90,
  },
  {
    field: 'genre',
    headerName: '种类',
    width: 90,
  },
  {
    field: 'year',
    headerName: '发行年份',
    type:'number',
    description:'发行年份',
    width: 110,
  },
  {
    field: 'released',
    headerName: '发行日期',
    sortable:false,
    width: 110,
  },
  {
    field: 'score',
    headerName: '得分',
    width: 90,
  },
  {
    field: 'votes',
    headerName: 'VOTES',
    width: 90,
  },
  {
    field: 'director',
    headerName: '导演',
    width: 90,
  },
  {
    field: 'writer',
    headerName: '作者',
    width: 110,
    description:'一般指剧本作者或者原作者'
  },
  {
    field: 'star',
    headerName: '主演',
    width: 110,
  },
  {
    field: 'country',
    headerName: '国家',
    width: 110,
  },
  {
    field: 'budget',
    headerName: '预算',
    width: 110,
  },
  {
    field: 'gross',
    headerName: '利润',
    width: 110,
  },
  {
    field: 'company',
    headerName: '发行公司',
    width: 110,
    description:'发行公司',
  },
  {
    field: 'runtime',
    headerName: '影片时长',
    width: 110,
    description:'影片时长',
  },
];

// 实现excel数据导入
// name	rating genre	year	released	score	votes	director	writer	star	country	budget	gross	company	runtime
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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

export default function DataTable() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        //禁用sort
        
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
