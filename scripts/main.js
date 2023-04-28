// 设置图片切换
/*let myImage = document.querySelector('img');

  myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/BILIBILI.jpeg') {
      myImage.setAttribute('src', 'images/code.jpg');
    } else if (mySrc === "images/baidu.jpg") {
      myImage.setAttribute('src', 'images/google.png');
    } else if (mySrc === "images/dji.png") {
      myImage.setAttribute('src', 'images/dji.png');
    } else if (mySrc === "images/bing.jpg") {
      myImage.setAttribute('src', 'images/bing.jpg');
    } else if (mySrc === "images/google.jpeg") {
      myImage.setAttribute('src', 'images/google.jpeg');
    } else if (mySrc === "images/youtube.png") {
      myImage.setAttribute('src', 'images/youtube.png');
    } else if (mySrc === "images/openai.jpeg") {
      myImage.setAttribute('src', 'images/openai.jpeg');
    } else {
      myImage.setAttribute('src', 'images/BILIBILI.jpeg');
    
    }
}*/

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
// 个性化欢迎信息设置函数
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Hello,' + myName+", this is a website-shared website now.";
    }
  }
// 初始化代码：在页面初次读取时进行构造工作：
  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello,' + storedName+", this is a website-shared website now.";
  }


  
  myButton.onclick = function() {
    setUserName();
 }



 