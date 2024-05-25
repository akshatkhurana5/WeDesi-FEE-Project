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
// //for right scroll in mid
// const container=document.querySelector('.scrolling_order');
// const btn=document.getElementById('right_scroll');
// btn.addEventListener('cl5ick',()=>{
//     container.scrollBy({left:300, behavior:'smooth'});
// });
//scroll
// document.addEventListener('DOMContentLoaded', function() {
//     const button = document.getElementById('butt');
//     const swipeContainers = document.querySelectorAll('.swipein');
//     let currentIndex = 0;
//     button.addEventListener('click', function() {
//         currentIndex = (currentIndex + 1) % swipeContainers.length;

//         const newPosition = -100 * currentIndex + '%';

//         swipeContainers.forEach(container => {
//             container.style.transform = `translateX(${newPosition})`;
//         });
//     });
// });




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
        alert("It seems you are new to WeDesi");
        
        full.style.display="none";
        log.style.display="none";
        full.style.display="block";
    sign.style.display="block";
        
      }
      event.preventDefault();                                            
  })`   `