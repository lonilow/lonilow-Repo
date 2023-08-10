
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";
import React, { useState } from 'react';

import ControlPanel from "./components/ControlPanel";
import AssistView from "./components/AssistView";
import DetailView from "./components/DetailView";
import OverView from "./components/Overview";
import OverView2 from "./components/OverView2";


// 这是JSS的写法，相当于声明了一些css的类
const useStyles = makeStyles(theme => ({
 
  view: {
      border: '1px solid black',
      borderRadius: '5px',
      backgroundColor:'#e1e0e1',
  },
  controlPanel: {
      position: 'absolute',
      top: "5%",
      height: 160,
      left:'5%',
      width: "19%",
  },
  assistView: {
      position: 'absolute',
      top: 200,
      bottom: 50,
      left: '5%',
      width: "19%",
  },
  overview: {
      position: 'absolute',
      top:"50%",
      bottom: 50,
      left: '25%',
      right: '40.25%',
  },
  overview2: {
      position: 'absolute',
      top:"50%",
      bottom: 50,
      left: '60.25%',
      right: '5%',
  },
  detailView: {
      position: 'absolute',
      top: "5%",
      bottom:"51%",
      
      left:'25%',
      right: '5%',
  },
}))

export default function App() {
  const classes = useStyles();
  const [selectedData, setSelectedData] = useState([]); // 创建状态来存储selectedRowData  
  //用于操纵detailview   来自control  
  const [selectedValue1, setSelectedValue1] = useState('');  
  const [selectedValue2, setSelectedValue2] = useState(''); 
  const handleOption1Change = (value) => {  
    setSelectedValue1(value);  
  };  
  
  const handleOption2Change = (value) => {  
    setSelectedValue2(value);  
  };  

  const handleSelectedData = (data) => {  
    setSelectedData(data); // 更新selectedData状态  
  };
  return (
    <div>
    <div className={clsx(classes.view, classes.controlPanel)}><  ControlPanel
      onOption1Change={handleOption1Change}  
      onOption2Change={handleOption2Change}  
    /> </div>
    <div className={clsx(classes.view, classes.assistView)} ><AssistView onSelectedData={handleSelectedData}/></div>
    <div className={clsx(classes.view, classes.detailView)} ><DetailView 
      selectedValue1={selectedValue1} selectedValue2={selectedValue2}  
    /></div>
    <div className={clsx(classes.view, classes.overview)} ><OverView selectedData={selectedData} />  </div>
    <div className={clsx(classes.view, classes.overview2)}><OverView2/></div>
    </div>
  );
}
