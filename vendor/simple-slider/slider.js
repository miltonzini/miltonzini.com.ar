var SLIDER_CLASS = 'slider';
var DELAY = 4000;
var sliders = document.getElementsByClassName(SLIDER_CLASS);


initSliders();


function slideAll () {
  for (var i=0; i<sliders.length; i++) {
    if (!sliders[i].getAttribute('data-slider-paused')) {
      slide(sliders[i]);
    }
  }
}

function slide (slider) {
    slider.sliderIndex++;
    slider.children[0].style.marginLeft = -slider.clientWidth*(slider.sliderIndex%slider.children.length) + 'px';
}

function initSliders () {
  for (var i=0; i<sliders.length; i++) {
    var slider = sliders[i];
    
    slider.sliderIndex = 0;
    slider.onclick = clickSlider;
  }
  setInterval(slideAll, DELAY);
}

function clickSlider (e) {
  if (!e.target.classList.contains(SLIDER_CLASS)) {
    return;
  }
  
  var bounds = this.getBoundingClientRect();
  if (e.clientX-bounds.left < bounds.width/2) {
    this.sliderIndex+=sliders.length;
  }
  slide(this);
}