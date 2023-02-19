// -- Splash Screen
const splash = document.querySelector('.splash-screen');

// starting splash fade out animation after 3 seconds
document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('fade-out');
  }, 3000);
});

// hiding splash screen after 4 seconds
document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('none');
  }, 4000);
});
