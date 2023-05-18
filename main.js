
const myForm = document.querySelector('#register');
const fnameInput = document.querySelector('#name');
const emailInput  = document.querySelector('#email');
const mypassword = document.querySelector('#password');
const msg = document.querySelector('.class');
const UserList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
   function onSubmit(e){
    e.preventdefault();
    
    if(fnameInput.value === '' || emailInput.value === '' ){
      msg.innerHTML = 'please enter all  details';

      setTimeout(() => msg.remove(), 3000);
    }else{
       console.log('sucess');
    }

   }




