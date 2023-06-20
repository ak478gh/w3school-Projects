let icon = document.getElementsByClassName('icon')[0];
let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');
let menus = document.getElementsByClassName('menus')[0];

let flag = true;
icon.addEventListener('click', ()=> {
    // icon animation
    if(flag) {
        bar1.style.transform = 'rotate(-45deg)';
        bar1.style.translate = '0 15px';
        bar2.style.opacity = 0;
        bar3.style.transform = 'rotate(45deg)';
        bar3.style.translate = '0 -15px';
        menus.classList.toggle('show');
    } else {
        bar1.style.transform = 'rotate(0deg)';
        bar1.style.translate = 0;
        bar2.style.opacity = 1;
        bar3.style.transform = 'rotate(0deg)';
        bar3.style.translate = 0;
        menus.classList.toggle('show');
    }
    flag = !flag;
})