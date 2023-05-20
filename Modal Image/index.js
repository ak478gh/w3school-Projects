let img = document.getElementById('img')
let img2 = document.getElementById('img2');
let content = document.getElementById('content');
let icon = document.getElementById('icon');
let cap = document.getElementById('cap');
console.log(img);

img.addEventListener('click', ()=> {
    console.log('checking');
    img2.style.width = '50%';
    img2.style.top = '50%';
    content.style.display = 'block';
    content.style.opacity = '0.9';
    icon.style.display = 'block';
    cap.style.display = 'block';
    cap.style.bottom = '50px';
})

icon.addEventListener('click', ()=> {
    console.log('checking');
    img2.style.width = 0;
    img2.style.top = '42px';
    content.style.opacity = 0;
    content.style.display = 'none';
    icon.style.display = 'none';
    cap.style.display = 'none';
    cap.style.bottom = 0;
});

