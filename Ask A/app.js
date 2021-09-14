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
    var contactemail = document.querySelector('.contact-email').value;
    var contactask = document.querySelector('.contact-ask').value;
    var contactmessage = document.querySelector('.contact-message').value;

       console.log(`Thank you ${contactname} for contacting us at ${contactemail}! Your ASK for ${contactask} has been recorded: ${contactmessage}`);
   }

   function newsletter_subscribe() {
    alert('Thank you for subscribing!');
    var contactname = document.querySelector('.contact-name').value;
    var contactemail = document.querySelector('.contact-email').value;

       console.log(`Thank you ${contactname} for subscribing to the ASK Passions newsletter at ${contactemail}!`);
   }
