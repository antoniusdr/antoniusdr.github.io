let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/pfp1.jpg') {
        myImage.setAttribute('src', 'images/pfp2.jpg');
    } else {
        myImage.setAttribute('src', 'images/pfp1.jpg');
    }
}
// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('Hi there! What is your name?');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Thanks for visiting ' + myName + '!';
// }
// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }