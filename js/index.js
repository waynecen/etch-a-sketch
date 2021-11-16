//script for etch-a-sketch
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);

const row = document.createElement('div');
row.classList.add('row');
content.appendChild(row);

const box = document.createElement('div');
box.classList.add('box');
box.textContent = 'boo';
row.appendChild(box);
