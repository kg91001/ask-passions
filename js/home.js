   function newsletter_subscribe() {
    var contactname = document.querySelector('.contact-name').value;
    var contactemail = document.querySelector('.email').value;

       console.log(`Thank you ${contactname} for subscribing to the ASK Passions newsletter at ${contactemail}!`);
   }
