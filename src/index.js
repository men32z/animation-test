import woman from './images/woman.svg';
import Vivus from 'vivus';
let content = document.getElementById('content');

content.innerHTML = `
<div>
  ${woman}
</div>
`;

let womItems = document.querySelectorAll('#woman .cls-1');
let viv = new Vivus('woman', {duration: 200}, () => {
  womItems.forEach(x=> x.classList.add('fill-color'));
});
viv.play();