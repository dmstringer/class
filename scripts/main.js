let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my-dachshunds.jpg') {
      myImage.setAttribute ('src','images/dachshunds2.jpg');
    } else {
      myImage.setAttribute ('src','images/my-dachshunds.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    myHeading.textContent = 'My Dachshunds';
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Dachshunds are cool, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  myHeading.textContent = 'My Dachshunds';
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Dachshunds are cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

