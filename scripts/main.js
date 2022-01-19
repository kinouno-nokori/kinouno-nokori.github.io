let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/chrome-icon.jpg") {
      myImage.setAttribute('src',"images/windows-icon.png");
    } else {
      myImage.setAttribute('src',"images/chrome-icon.jpg");
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('あなたの名前を入力して下さい。');
  if(!myName) {
    alert('一文字以上の名前を入力して下さい！')
    setUserName();
  } else {
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'モジラはすばらしいよ、' + storedName;
}
myButton.onclick = function() {
  setUserName();
}