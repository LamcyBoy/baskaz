// ========================================
// BASKAZ IMPORT AND EXPORT LIMITED
// MAIN JAVASCRIPT
// ========================================


// ========================================
// MOBILE MENU
// ========================================

function toggleMenu() {
  
  const navbar = document.getElementById("navbar");
  
  if (navbar) {
    navbar.classList.toggle("active");
  }
  
}


// ========================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ========================================

document.querySelectorAll("#navbar a").forEach(function(link) {
  
  link.addEventListener("click", function() {
    
    const navbar = document.getElementById("navbar");
    
    if (navbar) {
      navbar.classList.remove("active");
    }
    
  });
  
});


// ========================================
// PRELOADER
// ========================================

window.addEventListener("load", function() {
  
  const preloader = document.getElementById("preloader");
  
  if (preloader) {
    
    preloader.style.opacity = "0";
    
    setTimeout(function() {
      
      preloader.style.display = "none";
      
    }, 500);
    
  }
  
});