import React from 'react';
import { buttonContext } from './UI';
import { useContext } from 'react';
import {quotes} from './Quotes';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Button() {
  const num=useContext(buttonContext);
  const [number,setnumber,allquotes,setallquotes,showlast,setshowlast]=num;

  
  console.log(allquotes.length-1)

  const handleClick=()=>{
    if(showlast){
      setnumber(allquotes.length-1)
    }
    else{
      setnumber(Math.floor(Math.random() *(allquotes.length)))
    }
    setshowlast(false)
    console.log(number,"checking number")
  }

  return (
    <div>
      <button className='btn btn-info text-capitalize my-1 text-success' onClick={handleClick}>next</button>
    </div>
  )
}
