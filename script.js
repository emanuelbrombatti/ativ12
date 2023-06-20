var slider = tns({
    container: "#my-slider",
    items: 1,
    controlsPosition: "bottom",
    navPosition: "bottom",
    mouseDrag: true,
    controlsContainer: '.controls-lr',
    navContainer: '.controls-p',
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayButtonOutput: false,
    rewind: true
  });

  
  window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var menuOff = document.getElementById('menu-off');
    var menuOffset = menuOff.offsetTop;
  
    if (window.scrollY >= menuOffset) {
      menu.classList.add('sticky');
      menuOff.classList.add('sticky');
    } else {
      menu.classList.remove('sticky');
      menuOff.classList.remove('sticky');
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.hamburger');
    var body = document.querySelector('body');
    var linkButtons = document.querySelectorAll('.link-btn');
  
    button.addEventListener('click', function() {
      body.classList.toggle('menu-open');
    });
  
    linkButtons.forEach(function(linkButton) {
      linkButton.addEventListener('click', function(event) {
        event.preventDefault();
        body.classList.remove('menu-open');
  
        var targetId = this.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  
  
  