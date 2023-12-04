
const Form=document.getElementById('form')


Form.addEventListener('click',(e)=>{
    e.preventDefault()
// messages.push({
//     FirstName:FirstName,
//     LastName:LastName,
//     Email:Email,
// })
    let FirstName= document.getElementById('FirstName').value;
    let LastName= document.getElementById('LastName').value;
    let Email= document.getElementById('Email').value;
    let Password= document.getElementById('Password').value
    
//    let First= localStorage.setItem('Firstname', FirstName);
//    let Last= localStorage.setItem('LastName', LastName);
//    let email= localStorage.setItem('Email', Email);
//    let password= localStorage.setItem('Password', Password);
    
 let user=[];
 user=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user.some((v)=>{
        return v.Email === Email
    })){
       
        alert('Duplicate information')
    }else{
        user.push({
            "FirstName":FirstName,
            "LastName":LastName,
            "Email":Email,
            "Password":Password
        })
        
        localStorage.setItem("users",JSON.stringify(user))
    }



    // if(FirstName != '' && LastName != '' && Email !='' && Password != ''){
    //     alert('you have successfully Loggedin ')
    //     console.log(FirstName)
    //  }else{
    //         user.push({
    //             "FirstName":FirstName,
    //             "LastName":LastName,s
    //             "Email":Email,
    //             "Password":Password,
    //         }
            
            
    //         )
            
    //         localStorage.setItem("users",JSON.stringify(user))
    
    //     }





   
    console.log(FirstName)
    console.log(LastName)
    console.log(Email)
    console.log(Password)
})
