let menu=document.getElementById('menu-bar');
let closee=document.getElementById('close-bar');
let leftBar=document.querySelector('.left-bar')

function OpenMenu(){
   console.log('great')
   leftBar.style.display='block';
    closee.style.display='block';
    menu.style.display='none';
}


function CloseMenu(){
   
    leftBar.style.display='none'
    menu.style.display='block'
    closee.style.display='none'
}




