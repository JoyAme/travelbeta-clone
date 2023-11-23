const ForM=document.getElementById('Form')



ForM.addEventListener('click',(e)=>{

   e.preventDefault()


    let Email= document.getElementById('Email').value;
    let Password= document.getElementById('Password').value;


    let user=[];
 user=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user.some((v)=>{
        return v.Email==Email && v.Password==Password
    })){
        window.location.assign('/profilepage/profile.html')
        alert('Logged successful')
    }else{
        alert("Login failed")
        }
        localStorage.getItem("users",JSON.stringify(user))
    console.log('LOGGED')
})  