import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../App.css';
import { AddQuoteContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AddQuote() {
  const navigate=useNavigate();
  const quoteContent= useContext(AddQuoteContext);
  const [addquote,setaddquote,allquotes,setallquotes,showlast,setshowlast] =quoteContent;
  const [text,settext]=useState(false);
      
  const handleSubmit=(e)=>{
      e.preventDefault()
      if(addquote.author && addquote.quote){
        setallquotes((allquotes)=>{
          const x=[...allquotes, addquote];
          return x
        })
      }
      else if((!addquote.author) ||( !addquote.quote)){
      
        return
      }
      setaddquote({author:"",quote:""})
      settext(!text)
      setshowlast(!showlast)

    }




  return (
    <div className='my-3 mx-auto py-1' style={{width:"690px",height:"300px"}}>
      <h3 className='text-center my-2 text-success'>Add Quote to the List</h3>
      {(text) ?  (<div class="alert alert-success" role="alert">
        Quote has been added to the list</div>) :""}
        <form 
        type="submit" 
        onSubmit={handleSubmit} 
        className='container p-5 formStyling bg-white' 
        >
            <div className="row">
                <div className="col-6 text-capitalize text-center">
                  <label htmlFor="" className='fw-bold text-capitalize'>enter quote: </label></div>
                <div className="col-6 text-capitalize">
                  <textarea 
                  required
                  maxLength={100}
                  minLength={5}
                  className='p-1 w-100 text-capitalize'
                  rows={5}
                  type="text"
                  name="quote" 
                  placeholder='enter quote'
                  value={addquote.quote} 
                  autoComplete='off'  
                  onFocus={()=>settext(false)}
                  onChange={(e)=>setaddquote({...addquote,id:allquotes.length+1, [e.target.name]:e.target.value})}>
                  </textarea>
                  </div>
            </div>
        <div className="row">
            <div className="col-6 text-capitalize text-center">
                <label htmlFor="" className='fw-bold text-capitalize' >enter name: </label>
                </div>
                <div className="col-6 text-capitalize">
                <input 
                required
                pattern='[A-Za-z]+'
                maxLength={30}
                minLength={3}
                className='p-1 text-capitalize'
                type="text" 
                placeholder='enter name' 
                name="author"
                value={addquote.author}  
                onChange={(e)=>setaddquote({...addquote,[e.target.name]:e.target.value})}

                />
                </div>
          </div>
            <div className="row d-flex align-items-center justify-content-center py-1 my-2">
              <div className="col-4">
                  <button type='submit' className='btn btn-outline-success text-capitalize'>Add Quote</button>
              </div>
              </div>
              <div className="row mt-2 d-flex align-items-center justify-content-around p-1">
                  <div className="col-4">
                  <button className='btn btn-outline-success text-capitalize' onClick={()=>{navigate(-1)}}>home</button>
                </div>
                <div className="col-4">
                  <button className='btn btn-outline-success text-capitalize' onClick={()=>{navigate('/quotes')}}>view quotes</button>
                </div>
              </div>
        </form>
      
    </div>
  )
}
