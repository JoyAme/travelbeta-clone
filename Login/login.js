const ForM=document.getElementById('Form')



ForM.addEventListener('click',(e)=>{

   e.preventDefault()


    let fuupp=localStorage.getItem('Email');
    let pupp= localStorage.getItem('Password');
    let Fname= document.getElementById('Email').value;
    let emmail= document.getElementById('Password').value;


    if(Fname == fuupp && emmail == pupp){
        window.location.assign('/profilepage/profile.html')
        alert('logg in successful')
    }else{
        alert('you are not logged in')
    }
    console.log('LOGGED')
})  