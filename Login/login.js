const ForM=document.getElementById('Form')



ForM.addEventListener('click',(e)=>{

   e.preventDefault()


    let email=localStorage.getItem('Email');
    let password= localStorage.getItem('Password');
    let Fname= document.getElementById('Email').value;
    let emmail= document.getElementById('Password').value;


    if(Fname === email && emmail === password){
        window.location.assign('/profilepage/profile.html')
        alert('logg in successful')
    }else{
        alert('you are not logged in')
    }
    console.log('LOGGED')
})  