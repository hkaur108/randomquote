import React, { createContext } from 'react';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'; 
import UI from './components/UI';
import AddQuote from './components/AddQuote';
import { useState } from 'react';
import {quotes} from './components/Quotes';



export const AddQuoteContext= createContext();
export const AllQuotesContext=createContext();

export default function App() {
  const[addquote,setaddquote] =useState({quote:"",author:""});
  const [allquotes,setallquotes] =useState(quotes);
  const [showlast,setshowlast] =useState(false);
  const [text,settext]=useState(false);


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={
          <AddQuoteContext.Provider value={[addquote,setaddquote,allquotes,setallquotes,showlast,setshowlast]}> 
            <AddQuote/>
          </AddQuoteContext.Provider> }/>
        <Route path='/quotes' element={
          <AllQuotesContext.Provider value={[allquotes,setallquotes,showlast,setshowlast]}>
                <UI/>
          </AllQuotesContext.Provider>
          }/>
      </Routes>
    </div>
  )
}
