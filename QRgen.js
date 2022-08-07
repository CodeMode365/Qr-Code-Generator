let qrBtn = document.querySelector(".wrapper .form button");
let wrapper = document.querySelector(".wrapper");
let qrBody = document.querySelector('.wrapper .qr-code');
let inputBox = document.querySelector('.wrapper .form input');
let qrImg =  qrBody.querySelector('img');


onkeydown=(e)=>{
if(e.key==="Enter"){
    qrCall();
}
}
qrBtn.onclick=()=>{
  qrCall();
}
function qrCall(){
      //getting the users input
      let data = inputBox.value;
      //if the user input is empty then return noting
      if(!data) return;
      //when loading
      qrBtn.innerText="Generating QR";
      //api call to generate the qr image
      qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
     qrImg.onload=()=>{
      wrapper.classList.add('active');
      qrBtn.innerText="Generate QR code";
     }
}