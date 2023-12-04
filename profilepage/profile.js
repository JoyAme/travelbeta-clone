let menu=document.getElementById('menu-bar');
let closee=document.getElementById('close-bar');
let leftBar=document.querySelector('.left-bar')
let log=document.querySelector('.log')

function OpenMenu(){
   console.log('great')
   leftBar.style.display='block';
    // log.classList.toggle=('active')
  
}


function CloseMenu(){
   
    leftBar.style.display='none'
    log.style.display='block'
}




