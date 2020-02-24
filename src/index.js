import Vivus from 'vivus';
import $ from 'jquery'
import 'bootstrap'

import dom from './dom';

dom.render();

let womItems = document.querySelectorAll('#woman .cls-1');
let viv = new Vivus('woman', {duration: 200}, () => {
  womItems.forEach(x=> x.classList.add('fill-color'));
  document.querySelector('.wd-div').classList.add("wd-show")
});
let line = new Vivus('line', {duration: 200}, () => {
   document.querySelector('#line path').classList.add('fill-color');
});
viv.play();
line.play();
