
const Form=document.getElementById('form')

messages=[]
Form.addEventListener('click',(e)=>{
    e.preventDefault()
// messages.push({
//     FirstName:FirstName,
//     LastName:LastName,
//     Email:Email,
// })
    const FirstName= document.getElementById('FirstName').value;
    const LastName= document.getElementById('LastName').value;
    const Email= document.getElementById('Email').value;
    const Password= document.getElementById('Password').value
    
   let First= localStorage.setItem('Firstname', FirstName);
   let Last= localStorage.setItem('LastName', LastName);
   let email= localStorage.setItem('Email', Email);
   let password= localStorage.setItem('Password', Password);
    

    // if(FirstName === '')
    // {
    //     alert('fill in details');
    // }else if(LastName === ''){
    //     alert('fill in details');
    // }
    // else{
    //     window.location.assign('/index.html')
        
    //     alert('registration succesfull');
    // }
    if(FirstName == ""){
        alert('please fill')
    }else if (LastName == ""){
        alert('input details')
    }
    else if (Email == ""){
        alert('input your name')
    } else if (Password < 6){
        alert('fill in six words')
    }
    else{
        window.location.assign('/index.html')
        alert('registration in successful')
    }
    console.log(FirstName)
    console.log(LastName)
    console.log(Email)
    console.log(Password)
})
