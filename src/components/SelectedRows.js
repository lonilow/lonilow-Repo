import React, { createContext, useState } from 'react';  
 

/*使用react中的context来实现selected的数据传输 */
export const SelectedRowsContext = createContext();  
  
export const SelectedRowsProvider = ({ children }) => {  
    const [selectedRows, setSelectedRows] = useState([]);   
  
  return (  
    <SelectedRowsContext.Provider value={{ selectedRows, setSelectedRows }}>  
      {children}  
    </SelectedRowsContext.Provider>  
  );  
};  
