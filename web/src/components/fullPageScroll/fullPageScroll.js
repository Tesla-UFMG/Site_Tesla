import React from 'react';

import "./fullPageScroll.css";

function FullPageScroll(props) {
  function handleWheel(event) { //pointer-events: none para as divs
    if (event.deltaY > 0) {
      event.target.scrollBy(0, 100)
    } else {
      event.target.scrollBy(0, -500)
    }
  }

  return (
    <div id="sections-wrapper">
      <div id="sections" onWheel={handleWheel} onScroll={props.onScroll}>
        {props.children}
      </div>
    </div>
  )
}

export default FullPageScroll;