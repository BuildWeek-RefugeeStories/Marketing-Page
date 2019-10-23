
    // var slideIndex = 1;
    // showSlides(slideIndex);
    
    // // Next/previous controls
    // function plusSlides(n) {
    //   showSlides(slideIndex += n);
    // }
    
    // // Thumbnail image controls
    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }
    
    // function showSlides(n) {
    //   var i;
    //   var slides = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex-1].style.display = "block";
    //   dots[slideIndex-1].className += " active";
    // }

//     var prev = document.querySelector('div.prev');
// var next = document.querySelector('div.next');
// var index = 0;
// var lis = document.querySelectorAll('ul.slider li');
// var count = lis.length;

// prev.addEventListener('click', function() {
//     lis[index].classList.remove('visible');
//     index--;
//     if (index < 0){
//         index = count-1;
//     }

//     lis[index].classList.add('visible');
// });

// next.addEventListener('click', function() {
//     lis[index].classList.remove('visible');
//     index++;
//     if (index > count-1){
//         index = 0;
//     }

//     lis[index].classList.add('visible');
// });