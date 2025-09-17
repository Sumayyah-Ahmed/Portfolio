

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }



    var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right = "-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzDZcRsWKccd89wpuKFqteV8OVjjE1uRPAQyGvRQbOTUpiVglKJXDb7jXmuXE80aLS4gA/exec' 
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

    // typewriter
const companyName = "Get in touch today!";
const typingElem = document.getElementById("typing");
const typingSpeed = 150;   // ms per letter
const erasingSpeed = 75;   // ms per letter
const pauseAfterTyping = 2000;  // ms to wait before erasing

let charIndex = 0;
let isErasing = false;

function typeWriter() {
  if (!isErasing) {
    // Type forward
    if (charIndex < companyName.length) {
      typingElem.textContent += companyName.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Pause before deleting
      isErasing = true;
      setTimeout(typeWriter, pauseAfterTyping);
    }
  } else {
    // Erase
    if (charIndex > 0) {
      typingElem.textContent = companyName.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, erasingSpeed);
    } else {
      // Start typing again
      isErasing = false;
      setTimeout(typeWriter, typingSpeed);
    }
  }
}

// Kick off the effect once DOM is loaded
document.addEventListener("DOMContentLoaded", typeWriter);

  