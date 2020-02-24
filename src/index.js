/* eslint-disable-next-line */
import Vivus from 'vivus';
/* eslint-disable-next-line */
import 'bootstrap';

import dom from './dom';

dom.render();

const womItems = document.querySelectorAll('#woman .cls-1');
const viv = new Vivus('woman', { duration: 200 }, () => {
  womItems.forEach(x => x.classList.add('fill-color'));
  document.querySelector('.wd-div').classList.add('wd-show');
});
const line = new Vivus('line', { duration: 200 }, () => {
  document.querySelector('#line path').classList.add('fill-color');
});
viv.play();
line.play();
