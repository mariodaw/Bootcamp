

const collage4 = document.querySelector('.collage4');

collage4.addEventListener('mouseenter', function() {
    console.log("hi");
    collage4.classList.add('scale-up'); 
});

collage4.addEventListener('mouseout', function() {
});

// const links = document.querySelectorAll('nav a');

// links.forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);

//         targetElement.scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });