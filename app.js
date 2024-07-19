const signInBtn = document.querySelector('.form__label-sign-in');
const signUpBtn = document.querySelector('.form__label-sign-up');

const containerSignIn = document.querySelector('.form__sign-in');
const containerSignUp = document.querySelector('.form__sign-up');
const signInUser = containerSignIn.querySelector('.sign-in-login');
const signInPassword = containerSignIn.querySelector('.sign-in-password');
const signInPasswordIco = containerSignIn.querySelector('.form__input-box-ico-visibility');
const signUpEmail = containerSignUp.querySelector('.sign-up__input-email');
const signUpUser = containerSignUp.querySelector('.sign-up__input-username');
const signUpPassword = containerSignUp.querySelector('.sign-up__input-pasword');
const signUpPasswordRepeat = containerSignUp.querySelector('.sign-up__input-pasword-2');
const passwordMessagesContainer = document.querySelector('.password__check-errors');
const passwordStrengthContainer = document.querySelector('.password__strength-container');

// Functions
const passwordStrength = function(input) {
  const password = input.value;
// Tests
const lengthCheck = password.length >= 5 && password.length <=20;
const upperCaseCheck = /[A-Z]/.test(password);
const lowerCaseCheck = /[a-z]/.test(password); 
const symbolCheck = /[\W_]/.test(password);
const numberCheck = /\d/.test(password);

// Error messages
const emptyMessage = '';
const lengthMessage = `<p class="password__errors-message">Password should be between 5 and 20 symbols</p>`;
const upperCaseMessage = `<p class="password__errors-message">Password require at least one capital letter</p>`;
const lowerCaseMessage = `<p class="password__errors-message">Password require at least one lower case letter</p>`;
const symbolMessage = `<p class="password__errors-message">Password require at least one symbol</p>`;
const numberMessage = `<p class="password__errors-message">Password require at least one number</p>`;

// Insert Errors
passwordMessagesContainer.innerHTML = '';
!lengthCheck ? passwordMessagesContainer.insertAdjacentHTML('afterbegin', lengthMessage) : passwordMessagesContainer.insertAdjacentHTML('afterbegin', emptyMessage); 
!upperCaseCheck ? passwordMessagesContainer.insertAdjacentHTML('afterbegin', upperCaseMessage) : passwordMessagesContainer.insertAdjacentHTML('afterbegin', emptyMessage); 
!lowerCaseCheck ? passwordMessagesContainer.insertAdjacentHTML('afterbegin', lowerCaseMessage) : passwordMessagesContainer.insertAdjacentHTML('afterbegin', emptyMessage); 
!symbolCheck ? passwordMessagesContainer.insertAdjacentHTML('afterbegin', symbolMessage) : passwordMessagesContainer.insertAdjacentHTML('afterbegin', emptyMessage); 
!numberCheck ? passwordMessagesContainer.insertAdjacentHTML('afterbegin', numberMessage) : passwordMessagesContainer.insertAdjacentHTML('afterbegin', emptyMessage); 


const testData = [lengthCheck, upperCaseCheck, lowerCaseCheck, symbolCheck, numberCheck];
return testData;
}

const passwordStrengthBarGenerator = function(barsNumber) {
  for (let i = 0; i <= barsNumber; i++) {
      let bar = document.createElement('div');
      bar.classList.add('password__strength-box');

      passwordStrengthContainer.insertAdjacentElement('afterbegin', bar); 
      
      if(barsNumber === 1){
        bar.style.backgroundColor = 'hsl(0, 50%, 40%)';
      }
  
      if(barsNumber === 2){
        bar.style.backgroundColor = 'hsl(30, 50%, 40%)';
      }
  
      if(barsNumber === 3){
        bar.style.backgroundColor = 'hsl(60, 50%, 40%)';
      }
  
      if(barsNumber === 4){
        bar.style.backgroundColor = 'hsl(90, 50%, 40%)';
      }
  
      if(barsNumber === 5){
        bar.style.backgroundColor = 'hsl(120, 50%, 40%)';
      }
  }
}

const passwordStrengthDisplay = function showPasswordStrength(data){

  const count = data.reduce((acc, value) => value === true ? acc + 1 : acc, 0);

  passwordStrengthContainer.innerHTML = '';

  if(count === 1) {
    passwordStrengthBarGenerator(1);
  }

  if(count === 2) {
    passwordStrengthBarGenerator(2);
  }

  if(count === 3) {
    passwordStrengthBarGenerator(3);
  }

  if(count === 4) {
    passwordStrengthBarGenerator(4);
  }

  if(count === 5) {
    passwordStrengthBarGenerator(5);
  }

  if(count === 0) {
    return
  }
}


const checkPasswords = function checkIfPasswordsEqual (passwordv2, password) {
  const errorMsgId = 'password-mismatch-error';

  // Check if the error message element already exists
  const existingErrorMsg = document.getElementById(errorMsgId);

  if (passwordv2 === password) {
    // If passwords match and the error message exists, remove it
    if (existingErrorMsg) {
      existingErrorMsg.remove();
    }
  } else {
    // If passwords do not match and the error message does not exist, create and add it
    if (!existingErrorMsg) {
      let errorMsg = document.createElement('div');
      errorMsg.id = errorMsgId; // Set the id to the new element
      errorMsg.classList.add('password__check-errors-message');
      errorMsg.innerText = `Passwords are not the same`;

      passwordMessagesContainer.insertAdjacentElement('afterbegin', errorMsg);
    }
  }
}

// Events
signInBtn.addEventListener('click', ()=> {
  signInBtn.classList.add('active');
  signUpBtn.classList.remove('active');
  containerSignIn.classList.add('active');
  containerSignUp.classList.remove('active');
})

signUpBtn.addEventListener('click', ()=> {

  signUpBtn.classList.add('active');
  signInBtn.classList.remove('active');
  containerSignIn.classList.remove('active');
  containerSignUp.classList.add('active');
})

containerSignUp.addEventListener('click', (e) => {
  if(e.target.classList.contains('sign-up__input-pasword-2')){
    e.target
  }
})


signInPasswordIco.addEventListener('click', (e) => {
  const type = signInPassword.getAttribute("type") === "password" ? "text" : "password";
  signInPassword.setAttribute("type", type);
  signInPasswordIco.textContent = type === "text" ? 'visibility_off' : 'visibility';
})


signUpPassword.addEventListener('input', () => {
  if(signUpPassword.value.length > 0) {
    passwordStrengthContainer.classList.add('active');
    passwordStrengthDisplay(passwordStrength(signUpPassword))
  } else {
    passwordStrengthContainer.classList.remove('active');
  }
  passwordStrength(signUpPassword);

})

signUpPasswordRepeat.addEventListener('input', () => {
  let signUpValue = signUpPassword.value;
  checkPasswords(signUpPasswordRepeat.value, signUpValue);
})