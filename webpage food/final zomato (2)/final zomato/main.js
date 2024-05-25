
//for login page
let log=document.getElementById("loginpage");
let sign=document.getElementById("signinpage")
let full=document.getElementById("full")
let but=document.getElementById("login");
let but2=document.getElementById("signin")
let exit1=document.getElementById("cross1");
let exit2=document.getElementById("cross2");

exit1.addEventListener('click',()=>{
    full.style.display="none";
    log.style.display="none";
})
exit2.addEventListener('click',()=>{
    full.style.display="none";
    sign.style.display="none";
})
but.addEventListener('click',()=>{
    full.style.display="block";
    log.style.display="block";
})
but2.addEventListener('click',()=>{
    full.style.display="block";
    sign.style.display="block";
})
//for right scroll in mid
const container=document.querySelector('.scrolling_order');
const btn=document.getElementById('right_scroll');
btn.addEventListener('click',()=>{
    container.scrollBy({left:300, behavior:'smooth'});
});









let form=document.querySelector(".signupform");                  
  form.addEventListener("submit",(event)=>{                     
      
      let username=event.target.uname.value;
      let email=event.target.email.value;
      let password=event.target.passwd.value
     

      let checkStatus=0;                    
      var userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];         
      
       for(let v of userData){
          if(v.email==email || v.username==username){
              checkStatus=1;
              break;
          }
       }

    if(checkStatus==1){
        alert("email or phonenumber is already registered");
        
    }
    else{

        userData.push({
            'name':username,
            'email':email,
            'password':password
        })

        localStorage.setItem("userDetails",JSON.stringify(userData))
        event.target.reset()
    }
    event.preventDefault();                                            
})



let form2=document.querySelector(".loginform");     
form2.addEventListener("submit",(event)=>{                     
      let email=event.target.email.value;
      let password=event.target.passwd.value
     

      let checkStatus=0;                    
      var userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];         
      
       for(let v of userData){
          if(v.email==email && v.password==password){
              checkStatus=1;
              break;
          }
       }

      if(checkStatus==1){
          alert("Login Successful!");
          window.location.href = "home.html";  }
      else{
        alert("It seems you are new to zomato");
        
        full.style.display="none";
        log.style.display="none";
        full.style.display="block";
    sign.style.display="block";
        
      }
      event.preventDefault();                                            
  })
 
