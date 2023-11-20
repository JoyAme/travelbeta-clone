
let menu=document.getElementById('menu-bar');
let closee=document.getElementById('close-bar');
let Bar=document.querySelector('.barz')

function OpenMenu(){
   console.log('great')
    Bar.style.display='block';
    closee.style.display='block';
    menu.style.display='none';
}


function CloseMenu(){
   
    Bar.style.display='none'
    menu.style.display='block'
    closee.style.display='none'
}



const input= document.getElementById('inpu');
