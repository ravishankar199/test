let firstClicked = null;
let secondClicked = null;



function onCardClicked(event) {
  if(secondclicked !=null) return;
  if(!firstClicked) {
    
    //remember first card
    firstClicked = event.currentTarget;
    
    //reveal first card
    event.currentTarget.setAttribute("animation", "property: rotation; to: 0 180 0; dur: 700")
    
  } else {
    //remember second card
    secondClicked = event.currentTarget;
    
    //reveal second card and do check
    event.currentTarget.setAttribute("animation", "property: rotation; to: 0 180 0; dur: 700")
    
    //wait for a moment before doing a check
    setTimeout( endTurn, 2500 );
  }
  
}

function endTurn() {
  
  //check if both cards match
  if( firstClicked.dataset.cardvalue == secondClicked.dataset.cardvalue ) {
    //if they match - remove them
    firstClicked.remove();
    secondClicked.remove();
  } else {
    //if they don't match - animate them back to "down"
    firstClicked.setAttribute("animation", "property:rotation; to: -90 0 0; duration: 700")
    secondClicked.setAttribute("animation", "property:rotation; to: -90 0 0; duration: 700")
  }
  
  firstClicked = null;
  secondClicked = null;
}

