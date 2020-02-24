import Vivus from 'vivus';
import $ from 'jquery'
import 'bootstrap'

import dom from './dom';

dom.render();

let womItems = document.querySelectorAll('#woman .cls-1');
let viv = new Vivus('woman', {duration: 200}, () => {
  womItems.forEach(x=> x.classList.add('fill-color'));
});
viv.play();