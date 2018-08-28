import './style.css';
import Image from './image.jpeg';

let title = document.createElement('h1');
title.innerHTML = "Hello Webpack!";
title.classList.add('test-class');
document.body.appendChild(title);
console.log('asdasd')

let img = document.createElement('img');
img.src = Image;
document.body.appendChild(img);