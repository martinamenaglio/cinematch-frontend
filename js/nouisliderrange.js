
//initializing the slider
  var slider = document.getElementById('rangoedad');
  noUiSlider.create(slider, {
   start: [20, 80],
   connect: true,
   step: 1,
   range: {
     'min': 18,
     'max': 100
   }
    format: wNumb({
     decimals: 0
   })
  });
        
