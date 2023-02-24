$(function(){
   $(".star").rateYo({
      starWidth: "20px",
      normalFill: "#E5E5E5",
      ratedFill: "#000", 
      spacing: "14px",
      readOnly: true,
   });

   $('.burger').on('click',function(){
      $('.header-top').toggleClass('header-top--active');
   });

   $('.cross').on('click',function(){
      $('.header-top').toggleClass('header-top--active');
   });

   $('.header-top__menu-link').on('click',function(){
      $('.header-top').toggleClass('header-top--active');
   });
   if (window.innerWidth <= 375) {
      const spans = document.querySelectorAll('br:not([class])');
      spans.forEach(span => span.remove());
    }
  
   
});