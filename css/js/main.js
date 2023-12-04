
let menu=document.getElementById('menu-bar');
let closee=document.getElementById('close-bar');
let Bar=document.querySelector('.barz')




menu.addEventListener('click' ,()=>{
    Bar.classList.toggle('active')
    // closee.classList.toggle('active')
   
    // if(Bar){
    //     closee.classList.toggle('active')
    //     menu.classList.toggle('active')
    // }else if(closee){
    //     closee.style.display=('none')
    //     Bar.style.display=('none')
    //     menu.style.display=('block')
    // }
    
})

// function OpenMenu(){
//    console.log('great')
//    Bar.classList.toggle('active')
//     closee.style.display='block';
//     menu.style.display='none';
// }


// function CloseMenu(){
   
//     Bar.style.display='none'
//     menu.style.display='block'
//     closee.style.display='none'
// }



const input= document.getElementById('inpu');
