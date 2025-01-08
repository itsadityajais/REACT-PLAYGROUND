import { useState } from "react"

//add and remove css
export default function Challenge1() {
    const[isActive,setIsActive]=useState(false);

    let backgroundClass= "background--active";
    let pictureClass="picture--active";
    if(isActive){
        pictureClass+="picture--active";
    }
    else{
        backgroundClass+= "background--active";
    }


    return (
      <div className={backgroundClass}
         onClick={() => setIsActive(false)}>
        <img onClick={e => {
          e.stopPropagation();
          setIsActive(true)}}
          className={pictureClass}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
        />
      </div>
    );
  }
  //clicking on the picture removes the background--active CSS
  // class from the outer <div>, but adds the picture--active class to the <img>. 
  //Clicking the background again should restore the original CSS classes.