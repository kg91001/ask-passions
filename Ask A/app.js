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

   function newsletter_subscribe() {
    var contactname = document.querySelector('.contact-name').value;
    var contactemail = document.querySelector('.email').value;
    alert('Thank you for subscribing!');

       console.log(`Thank you ${contactname} for subscribing to the ASK Passions newsletter at ${contactemail}!`);
   }

   function form_submission() {
    var contactname = document.querySelector('.contact-name').value;
    var contactemail = document.querySelector('.email').value;
    var contactask = document.querySelector('.ask').value;
    var contactmessage = document.querySelector('.message').value;
    alert('Thank you for submitting!');

       console.log(`Thank you ${contactname} for submitting your ASK through ${contactemail} for ASKer ${contactask}! Your message: ${contactmessage}`);
   }

