//这个文件将文件读取封装起来，fileData变量存储了读取文件的数据
/*let fileData;

const input = document.createElement('input');
input.type = 'file';
input.accept = '.csv';

input.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    fileData = event.target.result;

    // 将 CSV 文件内容按行拆分为数组
    if (fileData) {
      const rows = fileData.split('\n');
      // 将每行内容按逗号拆分为数组，并返回二维数组
      const data = rows.map((row) => row.split(','));

      console.log(data); // 输出数组内容
    } else {
      console.log('fileData is undefined or empty');
    }
  };

  reader.readAsText(file);
});

document.body.appendChild(input);*/

// fileUtils.js

let fileData;

export function readFileData(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      fileData = event.target.result;
      resolve(fileData);
    };

    reader.onerror = (event) => {
      reject(event.error);
    };

    reader.readAsText(file);
  });
}

export function getData() {
  if (fileData) {
    const rows = fileData.split('\n');
    const data = rows.map((row) => row.split(','));
    return data;
  }
  return null;
}

/*使用说明
在需要使用data数组的视图下复制以下代码

import { readFileData, getData } from './ReadFiles';

// 创建 input 元素
const input = document.createElement('input');
input.type = 'file';
input.accept = '.csv';

// 添加 input 元素到文档中
document.body.appendChild(input);

// 绑定 change 事件处理程序
input.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  await readFileData(file);

  // 在这里可以根据需要进行处理
  const data = getData();
  if (data) {
    console.log("fileData uploaded successfully!");
  } else {
    console.log('fileData is undefined or empty');
  }
});*/
//这样做会使得input元素变得非常多，有待改进