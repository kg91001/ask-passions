 const inputs = document.querySelectorAll(".input");

 function focusFunc() {
   let parent = this.parentNode;
   parent.classList.add("focus");
 }

 function blurFunc() {
   let parent = this.parentNode;
   if (this.value == "") {
     parent.classList.remove("focus");
  }
}

 inputs.forEach((input) => {
   input.addEventListener("focus", focusFunc);
   input.addEventListener("blur", blurFunc);
 })

   function form_submission() {
    alert('Thank you for submitting!');
    var contactname = document.querySelector('.contact-name').value;
    var contactemail = document.querySelector('.email').value;
    var contactask = document.querySelector('.ask').value;
    var contactmessage = document.querySelector('.message').value;

       console.log(`Thank you, ${contactname}, for contacting us at ${contactemail}! Your ASK for ${contactask} has been recorded: ${contactmessage}`);
   }
