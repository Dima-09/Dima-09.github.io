var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg') {
        myImage.setAttribute('src', 'https://klike.net/uploads/posts/2019-05/1556945414_2.jpg');
    }
    else {
        myImage.setAttribute('src', 'https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg');
    }
}