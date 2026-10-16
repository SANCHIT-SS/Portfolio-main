// 'use strict' enforces cleaner code and catches silent errors automatically
'use strict';

// This ensures our JavaScript only runs AFTER the HTML is 100% loaded on the screen
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio successfully initialized and connected! 🚀");
    
    // ==================== 1. TYPING ANIMATION ====================
    // Uses the Typed.js library to create the typing effect in the Hero Section
    const typed = new Typed('.multiple-text', {
        // You can change or add new roles to this array at any time
        strings: ['AI Product Manager', 'Agentic AI Architect', 'Workflow Automation Expert', 'n8n & Lovable Specialist'],
        typeSpeed: 100,     // Speed of typing each letter (in milliseconds)
        backSpeed: 100,     // Speed of deleting each letter
        backDelay: 1000,    // How long it pauses before deleting the word
        loop: true          // Keeps the animation running infinitely
    });

    // ==================== 2. ELEMENT SELECTORS ====================
    // Grabbing the HTML elements we need to manipulate
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let header = document.querySelector('header');

    // ==================== 3. MOBILE MENU TOGGLE ====================
    // Opens and closes the navigation menu when viewed on mobile devices
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x'); // Changes the hamburger icon to an 'X'
        navbar.classList.toggle('active'); // Slides the menu dropdown into view
    };

    // ==================== 4. SCROLL EVENT LOGIC ====================
    // Everything inside this block runs every time the user scrolls down the page
    window.onscroll = () => {
        
        // --- ScrollSpy Logic ---
        // Figures out which section is currently on screen and highlights the correct menu link in cyan
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150; // Triggers slightly before the section hits the top
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active'); // Removes cyan from all links
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Adds cyan to the active one
                });
            }
        });

        // --- Sticky Navbar Logic ---
        // Adds a class that shrinks the header slightly and adds a shadow when scrolling past 100px
        header.classList.toggle('sticky', window.scrollY > 100);

        // --- Auto-Close Mobile Menu ---
        // Removes the mobile menu and 'X' icon automatically when the user scrolls down
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // ==================== 5. CONTACT FORM INTERCEPT ====================
    // Prevents the page from refreshing and shows a joyful confirmation message instead
    const contactForm = document.getElementById('contactForm');
    const thankYouMsg = document.getElementById('thankYouMsg');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stops the default form submission (page refresh)
            
            // Loops through all inputs and textareas in the form and hides them
            Array.from(contactForm.elements).forEach(element => {
                if(element.tagName !== 'P') {
                    element.style.display = 'none';
                }
            });
            
            // Reveals the hidden <p> tag containing your stuffed toy message
            thankYouMsg.style.display = 'block';
        });
    }
});