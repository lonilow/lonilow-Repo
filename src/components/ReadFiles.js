//这个文件将文件读取封装起来，fileData变量存储了读取文件的数据
import Papa from 'papaparse';

async function readCsvData() {
  const response = await fetch(process.env.PUBLIC_URL + '/moviedata.csv');
  const csv = await response.text();
  const { data } = Papa.parse(csv, { header: true, dynamicTyping: true });

  return (data);
}

export default readCsvData;

/*使用时，请在需要使用的控件文件下复制以下代码
import readCsvData from './ReadFiles';

async function useData() {
  const data = await readCsvData();
  if (data) {
    console.log('Data loaded successfully!');
    //console.log(data);
    // 在这里使用 data 数组
  }
}

useData();

这里的控制台是为了输出测试。数据将被保存在data变量中，直接使用即可
注意，上传的数据现在是一行一行分开的，但是没有拆成一项一项的。使用的时候要注意*/
