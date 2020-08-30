$(function(){
 // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});  
  $(".navbar-nav li a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

     $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }  // End if
  });
    // var slideTexts = ['Senior web designer', 'front end developer', 'react developer', 'javascript developer']   
    // function changeText(){
    //   console.log('working...')
    //   setTimeout(changeText, 500)
    // }
    // changeText()

});

AOS.init();
/* 
 data-aos="flip-right"
 <div data-aos="fade-up"></div>
 data-aos-easing="linear"
     data-aos-duration="1500"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"

*/
// const body = document.querySelector('body')
// body.style.color ='white'
// body.style.backgroundColor ='#000000'