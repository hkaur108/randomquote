import React, { createContext,useState } from 'react'
import Button from './Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import {AllQuotesContext } from '../App';
import { useContext } from 'react';
import '../App.css';



export const buttonContext=createContext();

export default function UI() {
    const navigate=useNavigate()
    const allquote=useContext(AllQuotesContext);
    const [allquotes,setallquotes,showlast,setshowlast]=allquote;
    const[number,setnumber] =useState(0);
    let data=allquotes[number];
    
    return (
    <div className='vw-100 vh-100 d-flex align-items-center justify-content-center flex-column quoteStyling'>
        <div className='box px-3 py-3 mx-auto text-center'>
            <div className='box-val'>
                <h1 className=' fw-bold py-2 text-success'>Quote of the day!</h1>
                <h3 className=' fw-bold  dancing-script text-info'>"{data.quote}"</h3>
                <h6 className='text-decoration-underline fw-bold py-1 text-success'>By {data.author}</h6>
                <buttonContext.Provider value={[number,setnumber,allquotes,setallquotes,showlast,setshowlast]}>
                    <Button/> 
                </buttonContext.Provider>
            </div>
        </div>
        <div className="d-flex mx-auto mt-5">
            <button className='btn btn-light' onClick={()=>navigate('/')}>Home</button>
        </div>
    </div>
)
}
