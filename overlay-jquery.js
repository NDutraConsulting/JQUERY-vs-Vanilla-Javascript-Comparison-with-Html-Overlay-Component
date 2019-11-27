/* JQUERY */
 $( document ).ready(function() {

   $('.overlay-btn-jquery').click( function(){

     var buttonId = $(this).attr('data-overlay_action');

     $('#overlay-details-wrapper').removeAttr('class').addClass(buttonId);

     console.log("JQUERY");
     
   });

 });
