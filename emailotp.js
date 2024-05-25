function sendOTP(){
    const email =document.getElementById('email');
    const otpverify=document.getElementsByClassName('otpverify')[0];

    let otp_val=Math.floor(Math.random()*10000);

    let emailbody=`<h2>Your OTP is </h2> ${otp_val}`

    Email.send({
        SecureToken : "3d011b16-4f72-40a4-b62f-efdcaca99c91",
        To : email.value,
        From : "raunaksahni71@gmail.com",
        Subject : "Email otp using javascript",
        Body :emailbody
    }).then(
      message => {
        if(message==='OK'){
            alert("OTP sent to your email "+email.value);

            otpverify.style.display="block";
            const otp_inp=document.getElementById('otp_inp');
            const otp_btn=document.getElementById('otp_btn');

            otp_btn.addEventListener('click',()=>{
                if(otp_inp.value==otp_val){
                    alert('Email address verifies...');
                }
                else{
                    alert("Invalid otp");
                }
            })
        }
      }
    );
}