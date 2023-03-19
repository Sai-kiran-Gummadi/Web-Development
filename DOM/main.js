const btn = document.querySelector('.btn');

btn.addEventListener('click',(e) =>{

    e.preventDefault();

    console.log('click');

});
btn.addEventListener('mouseover',(e) =>{
    e.preventDefault();
    console.log('mouseover');
});
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    console.log('mouseout');
})
const myform = document.querySelector('#my-form');
const nam = document.querySelector('#name');
const mail = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');
myform.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    if (nam.value == '' || mail.value == ''){
        msg.innerHTML = "Please enter all fields"
    }else{
        console.log(nam.value,mail.value); 
    }      
}