// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.skills-bar span', {
    scrollTrigger: {
        trigger:'.skills-wrap',
        start: "-40% 70%",
        end: "-40% 50%",
        toggleActions: "play none reverse none",

    },
    delay: 0.8,
    width: "0px",
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
});

const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i')

user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display')
    sidebarWrapper.classList.add('sidebar-wrapper-display')
})

xBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display')
    sidebarWrapper.classList.remove('sidebar-wrapper-display')
})


AOS.init({
    disable: function() {
      var maxWidth = 1000;
      return window.innerWidth < maxWidth;
    }
  });





















