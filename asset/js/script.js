const myslide=document.querySelectorAll('.myslider'),
        dot = Document.querySelectorAll('.dot');
    
let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslider() {
    counter += 1;
    slidefun(counter);
}
function plusSlider(n) {
    counter += n;
    slidefun(counter);
    reseltimer();
}
function currentslide(n){
    counter = n;
    slidefun (counter);
    reseltimer();
}
function reseltimer() {
    clearInterval(timer);
    timer = setInterval(autoslider, 8000);
}

function slidefun() {
    let i;
    for (i = 0;i<myslide.length;i++){
        myslide[i].style.display = "none";
    }
    for (i = 0;i<dot.length;i++){
        dot[i].classlist.remove('active');
    }
    if (n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classlist.add('active');
}