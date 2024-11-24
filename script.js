// (function() {
//   const mode = localStorage.getItem('mode') || 'lightmode';
//   const style = document.createElement('style');
//   style.innerHTML = `
//     body {
//       background: ${mode === 'darkmode' ? 'var(--bg-dark)' : 'var(--bg-default)'};
//       color: ${mode === 'darkmode' ? 'var(--hr-color)' : 'var(--text-light-bg-default)'};
//     }
//   `;
//   document.head.appendChild(style);
// })();

// $(document).ready(function() {
//   // Get the saved mode from localStorage or default to 'lightmode'
//   const mode = localStorage.getItem('mode') || 'lightmode'; 
  
//   // Apply the saved mode to the body of the page globally
//   $('body').addClass(mode);
  
//   // Toggle dark mode when the button is clicked
//   $('#darkmode').click(function() {
//     $('body').toggleClass('darkmode');
//     $('h1').toggleClass('darkmode');
//     $('h2').toggleClass('darkmode');
//     $('h3').toggleClass('darkmode');
//     $('.dark-bg').toggleClass('darkmode');
    
//     // Save the current mode to localStorage
//     const currentMode = $('body').hasClass('darkmode') ? 'darkmode' : 'lightmode';
//     localStorage.setItem('mode', currentMode);
//   });
// });

// Apply the user's preferred mode immediately before the document is fully loaded
(function() {
  const mode = localStorage.getItem('mode') || 'lightmode';
  document.documentElement.classList.add(mode); // Apply mode to <html> element immediately
})();

$(document).ready(function () {
  // Reapply mode on page load (safeguard against missing class)
  const mode = localStorage.getItem('mode') || 'lightmode';
  $('body').addClass(mode);

  // Toggle dark mode on button click
  $('#darkmode').on('click', function () {
    // Toggle the darkmode class on the body
    $('body').toggleClass('darkmode');
    
    // Update the user's mode preference in localStorage
    const currentMode = $('body').hasClass('darkmode') ? 'darkmode' : 'lightmode';
    localStorage.setItem('mode', currentMode);
  });
});
