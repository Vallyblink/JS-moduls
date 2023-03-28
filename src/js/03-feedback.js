import throttle from "lodash.throttle";

const refs ={
  form : document.querySelector(".feedback-form"),
  input: document.querySelector( "input[name=email]"),
  textarea: document.querySelector("textarea[name=message]"),
}
 let dataForm = {};
 const MESSAGE_KEY = 'feedback-form-state';
 onLocalCheck()

refs.form.addEventListener("input", throttle(onLocalStorageSafe, 500));
refs.form.addEventListener("submit", onFormSubmit);

function onLocalStorageSafe  (el) {
  dataForm[el.target.name] = el.target.value;
  localStorage.setItem(MESSAGE_KEY, JSON.stringify(dataForm))
}
 
function onFormSubmit (evt){
  evt.preventDefault();
  if(refs.input.value === "" || refs.textarea.value == ""){
    alert (" Can you fill the fields? Awaiting for your opinion")
    return
  }
   evt.currentTarget.reset();
   console.log( dataForm)
   localStorage.removeItem(MESSAGE_KEY);
    dataForm = {};
}

function onLocalCheck (e){
  if ( localStorage.getItem(MESSAGE_KEY)){
    dataForm = JSON.parse(localStorage.getItem(MESSAGE_KEY));
    for(const key in dataForm){
      refs.form.elements[key].value = dataForm[key]
    }
  }
}
