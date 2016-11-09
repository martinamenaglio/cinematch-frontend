$(function () {
  // Grab the template script
  var source = $("#peliculas-template").html();

  // Compile the template
  var template = Handlebars.compile(source);

// Define our ""data object
    var context={
      link:"https://www.google.com.ar/search?safe=active&sa=X&q=storks&stick=H4sIAAAAAAAAAG2RPWpUcRTFnVQ6KkhmBEnjIKQRwfv9USZgZWFlq0zigEFNYAYXYeky7FxDrMwiLOzcgYWF5_1jaTNvOO-8e3_n3JvLRwujSFJ2oQxlDZH-Optdzf73AmoRd6iwSmtocbNBDbKqDrOMImKmiMnLldr4EXEWUzW6mi05LTKCvEu8kgKPyVyZWiIlXFTOSVi3nx0pYZItFOamMiZ0chdFpzd8qg15wdrVBsDywiRn68kcnCVBmlgVLcWqkxn_QyypkCRNAA3VEwudmDyBEDkgFkhFLRxCiCkgqevBACbXQDOOjek54Czgl0LYcFcAcg53dVmqdUeEN9UYjQiEcegzmqnJjSczKZqfyAr4YvVPZinTVras0T34h9yBM6XjTEaEBUmDGqmd1BJfkyKCDzOQNRklk00omDfw1AJTUBHuhR7xGO4pISaUd3RX1HTChWpZMzpiNryYaHErNxP1YmNHS-3VP2evbt_79fvH4uDl5Z_vn_ZezJ_P53ffnty6vP_58N3l_uF8b719_PB48_7bl_PVm83q2e704mS9fbI6_rg5v9itjs62m93B8ujDZnt2un56rb4e6urGg9mdv7WICejBAgAA&npsic=0&ved=0ahUKEwjAi6uc6uLPAhWFG5AKHZ5eBUMQ-BYIGA&lei=5UgFWICFCoW3wASevZWYBA"
    };
  // Pass our data to the template
  var theCompiledHtml = template(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});