import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Head from './Head';
import "../App.css";

export default function Home() {
    const navigate=useNavigate();

  return (
    <>
    <Head/>
    <div className='container bg-light py-3 my-3 shadowStyling ' style={{width:"550px",height:"300px"}}>
      <div className="row py-3">
        <div className="col-6">
        <h6 className='text-capitalize '>add your own Quote:</h6>
        </div>
        <div className="col-6">
            <button className='btn btn-info ' onClick={()=>navigate('/add')}>Add Quote</button>
        </div>
      </div>
      <div className="row py-3">
        <div className="col-6">
            <h6 className='text-capitalize'>view quotes</h6>
        </div>  
        <div className="col-6">
            <button className='btn btn-info' onClick={()=>navigate('/quotes')}>Random Quote Generator</button>
        </div>
      </div>
      
      </div>

      <div className="container w-25">
        <div className="row">
          <div className="col">
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Instructions:
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This app can be used in two ways</strong> 

  <ul class="list-group">
  <li class="list-group-item"> You can add a quote to the list and view it.</li>
  <li class="list-group-item"> Also, you can view the existing quotes on random basis.</li>
  
</ul>
      </div>
    </div>
  </div>
  </div>
          </div>
        </div>
      </div>
    </>
  )
}
