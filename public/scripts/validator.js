// Validates users credentials
const input = document.querySelectorAll('.input');
const feedbackContainer = document.querySelectorAll('.validation-feedback');
const feedbackError = document.querySelectorAll('.validation-feedback-error');
const signupBtn = document.getElementById('form-submit');

const communityName= document. getElementById('community')
const email = document.getElementById('email');
const fullName = document.getElementById('name');
const number = document.getElementById('number');

const numberRegExp = new RegExp("\\(?([0-9]{3})\\)?([ .-]?)([0-9]{3})\\2([0-9]{4})")
const communityNameRegExp = new RegExp("^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$")
const emailRegExp = new RegExp('^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$')
const nameRegExp = new RegExp("^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$")


function Validator(input, expression, inputArrayNumber) {
  input.classList.remove('validated');
  input.classList.remove('invalidated');
  feedbackContainer[inputArrayNumber].classList.add('invisible')
  if(input.value == '') {
    feedbackContainer[inputArrayNumber].classList.remove('invisible');
    feedbackError[inputArrayNumber].innerText = 'Field is required.';
    return
  }
  if(expression.test(input.value)){
    input.classList.add('validated');
    feedbackError[inputArrayNumber].innerText = '';
  }else {
    feedbackContainer[inputArrayNumber].classList.remove('invisible')
    feedbackError[inputArrayNumber].innerText = `${input.dataset.name} must be in valid format.`
    input.classList.add('invalidated');
  }
}

function IsEmpty(input, errorArray, e){
  if(input.value == ''){
    feedbackError[errorArray].innerText = 'Field is required.'
    e.preventDefault()
  }
}

email.addEventListener('input', () => {
  Validator(email, emailRegExp, 3);
})

number.addEventListener('input', () => {
    Validator(number, numberRegExp, 2);
  })

fullName.addEventListener('input', () => {
  Validator(fullName, nameRegExp, 1);
  if(RegExp('[0-9]').test(fullName.value) == true){
    feedbackError[1].innerText = "Name cannot contain numbers."
  }
  if(RegExp('[!@#$%^&*();,`]').test(fullName.value) == true){
    feedbackError[1].innerText = "Name cannot contain special characters."
  }
})

communityName.addEventListener('input', () => {
    Validator(communityName, communityNameRegExp, 0);
    if(RegExp('[0-9]').test(communityName.value) == true){
      feedbackError[0].innerText = "Community name cannot contain numbers."
    }
    if(RegExp('[!@#$%^&*();,`]').test(communityName.value) == true){
      feedbackError[0].innerText = "Community name cannot contain special characters."
    }
  })

signupBtn.addEventListener('click', (e) => {
    feedbackError.forEach((element) => {
      if(element.innerText != ''){
       e.preventDefault();
      }
    })

    IsEmpty(communityName, 0, e)
    IsEmpty(fullName, 1, e)
    IsEmpty(number, 2, e)
    IsEmpty(email, 3, e)
    
    
})