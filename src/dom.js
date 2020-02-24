import logo from './images/logo.svg';
import woman from './images/woman.svg';
import comunication from './images/comunication.svg';
import arrow from './images/arrow.svg';
import line from './images/line.svg';
import words from './images/words.svg';
import anchor from './images/anchor.svg';

const dom = {
  render() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class="container-fluid header pt-sm-5">
      <nav class="container navbar navbar-dark navbar-expand-lg">
        <a class="navbar-brand" href="#">${logo}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse menu-links" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">IMPACT</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">SERVICES <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">INSIGHTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">GET IN TOUCH</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              ${anchor}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 head-container">
            <div class="ar-div">${arrow}</div>
            <div class="ln-div">${line}</div>
            <div class="wd-div">
              ${words}
              <p class="wd-text">
                By partenirng only with top wine and champagne companies that<br>
                want to disrupt their niche and be a benchmark.
              </p>
            </div>
            <div class="wm-div">${woman}</div>
            <div class="cm-div">${comunication}</div>
          </div>
        </div>
      </div>
    </div>
    `;
  },
};
export default dom;