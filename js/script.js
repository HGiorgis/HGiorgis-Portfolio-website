/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- DARK MODE ----- */
    var darkmode = document.querySelector(".toggle");
    var root = document.querySelector(':root');
    var mode = "light";
    darkmode.addEventListener("click", () => {
      darkmode.classList.toggle("active")
       if(mode == "light"){
        root.style.transition = "5s"
        root.style.setProperty("--body-color", '#1d1d1d');
        root.style.setProperty("--text-color-second", 'white');
        mode = "dark";
       }else{
         root.style.transition = "1.5s"
         root.style.setProperty("--body-color", 'white');
         root.style.setProperty("--text-color-second", '#1d1d1d');
         mode = "light";
      }
    });
    
    /* ----- READEMORE ----- */
    let text = "less";
    var readme = document.getElementById("aboutme");
    function readmore(){
      if(text == "less"){ 
        readme.style.display = "block";   
        text = "more";
      }
      
    }
    function readless(){
      if(text == "more"){
        readme.style.display = "none";   
        text = "less";
      }
      
    }

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active-link'));
        link.classList.add('active-link');
      });
    });


/* ----- AUTO-TEXTING ----- */

    const textElements = [
      "PHP",
      "Javascript",
      "Tailwindcss",
      "HTML",
      "MYSQL",
      "AJAX"
    ];

    let currentIndex = 0;
    const textElement = document.querySelector('.typedText');

    function typeText() {
      const currentText = textElements[currentIndex];
      let index = 0;

      const typing = setInterval(() => {
        if (index < currentText.length) {
          textElement.textContent += currentText.charAt(index);
          index++;
        } else {
          clearInterval(typing);
          setTimeout(() => {
            deleteText();
          }, 2000);
        }
      }, 50);
    }

    function deleteText() {
      let index = textElement.textContent.length;

      const deletion = setInterval(() => {
        if (index > 0) {
          textElement.textContent = textElement.textContent.substring(0, index - 1);
          index--;
        } else {
          clearInterval(deletion);
          currentIndex = (currentIndex + 1) % textElements.length;
          typeText();
        }
      }, 50);
    }

    typeText();