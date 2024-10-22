

// document.getElementById('toggle-bar').addEventListener('click', function () {
//     const navMenu = document.getElementById('nav-menu');
//     const toggleIcon = document.getElementById('toggle-bar');

//     navMenu.classList.toggle('active'); // Toggle the 'active' class for sliding

//     // Toggle between the fa-bars and fa-xmark icons
//     if (navMenu.classList.contains('active')) {
//         toggleIcon.classList.remove('fa-bars');
//         toggleIcon.classList.add('fa-xmark');
//     } else {
//         toggleIcon.classList.remove('fa-xmark');
//         toggleIcon.classList.add('fa-bars');
//     }
// });


document.getElementById('toggle-bar').addEventListener('click', function (event) {
    const navMenu = document.getElementById('nav-menu');
    const toggleIcon = document.getElementById('toggle-bar');

    navMenu.classList.toggle('active'); // Toggle the 'active' class for sliding

    // Toggle between the fa-bars and fa-xmark icons
    if (navMenu.classList.contains('active')) {
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-xmark');
    } else {
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-bars');
    }

    // Prevents the event from bubbling up and triggering the document click event immediately
    event.stopPropagation();
});

// Add a listener on the entire document
document.addEventListener('click', function (event) {
    const navMenu = document.getElementById('nav-menu');
    const toggleIcon = document.getElementById('toggle-bar');

    // Check if the click was outside of the navMenu and toggleIcon
    if (!navMenu.contains(event.target) && !toggleIcon.contains(event.target)) {
        // Hide the menu if it's active
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');

            // Change icon back to fa-bars when the menu closes
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        }
    }
});

const megaMenu = document.getElementById("mega-menu")
const servicesLink = document.getElementById("services-link")
const chevronDown = document.getElementById("chevronDown")

servicesLink.addEventListener("click", (e) => {
    megaMenu.classList.toggle("active")
    if (megaMenu.classList.contains("active")) {
        chevronDown.classList.remove("fa-chevron-down")
        chevronDown.classList.add("fa-chevron-right")
    } else {
        chevronDown.classList.remove("fa-chevron-right")
        chevronDown.classList.add("fa-chevron-down")
    }

    e.stopPropagation();

})

window.addEventListener("click", (e) => {
    if (!megaMenu.contains(e.target) && !servicesLink.contains(e.target)) {
        megaMenu.classList.remove("active")
    }
})

