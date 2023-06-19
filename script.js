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
  
  