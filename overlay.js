



/*** Jquery vs Javascript - Comparison Notes
 *  If you are not familiar with the way jquery is baked the code below is more
 *  human readable however it does place a higher cognative load on the mind
 */

/* JQUERY */
 $( document ).ready(function() {

   $('.overlay-btn-jquery').click( function(){

     var buttonId = $(this).attr('data-overlay_action');

     $('#overlay-details-wrapper').removeAttr('class').addClass(buttonId);

     console.log("JQUERY");
   });

 });




/* Javascript */

//Procedural approach
document.addEventListener("DOMContentLoaded", function(){ initOverlayButtons (); } );

//Whays the difference?
//window.onload = function(){ initoverlayButtons () };

function initOverlayButtons(){
    var button_class_array = document.getElementsByClassName("overlay-btn");

    for ( btn of button_class_array )  {
      /***
       * Scoping problems exist when using global functions for setting
       * javascript onclick methods dynamically.
       * Must use a class to retain the value for the overlay_id
       */

      let overlay_obj = new overlay( btn.getAttribute("data-overlay_action") );

      btn.onclick = function(){ overlay_obj.animate(); };

    }

}

class overlay{

  constructor(animationName) {
    this.animationName = animationName;
  }

  animate(){
    console.log("Vanilla Javascript");
    let element = document.getElementById('overlay-details-wrapper');
    element.className = this.animationName;
  }

}


let slideOut = new overlay('slideOut');
