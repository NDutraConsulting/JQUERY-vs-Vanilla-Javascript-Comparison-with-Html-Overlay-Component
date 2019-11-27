
/* Javascript */
document.addEventListener("DOMContentLoaded", function(){ initOverlayButtons (); } );

function initOverlayButtons(){

    var button_class_array = document.getElementsByClassName("overlay-btn");

    for ( btn of button_class_array )  {

      let action = btn.getAttribute("data-overlay_action")

      let overlay_obj = new overlay( action );

      btn.onclick = function(){ overlay_obj.animate(); };

    }
}


class overlay{

  constructor(animationName) {
    this.animationName = animationName;
  }

  animate(){

    let element = document.getElementById('overlay-details-wrapper');

    element.className = this.animationName;

    console.log("Vanilla Javascript");

  }

}

//Note object oriented option that you get when using vanilla js class
let slideOut = new overlay('slideOut');
