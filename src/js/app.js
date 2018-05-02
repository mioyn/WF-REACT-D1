import '../css/styles.css'
import {button, header} from './fetchselectors'

var togflag = false;

function manageToggle() {
    if(togflag) {header.style.display = "block";}
    else { header.style.display = "none"; }
}

button.addEventListener('click', handleClick)

manageToggle();

function handleClick() {
    togflag = !togflag;
    manageToggle();
}