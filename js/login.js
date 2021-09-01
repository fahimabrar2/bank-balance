document.getElementById('login-submit').addEventListener('click', function(){
   //get email
   const emailField = document.getElementById('user-email');
   const userEmail  = emailField.value;

   //get use password
   const powerField = document.getElementById('user-password');
   const userPassword = powerField.value;
    //verify email and password
   if (userEmail == 'sontan@baap.com'  && userPassword == 'secret'){
       window.location.href = 'banking.html';
   }
});