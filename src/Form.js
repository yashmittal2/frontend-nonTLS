import React, { useState } from 'react'
import './Form.css'
function Form() {
  const [form,setForm]= useState({});

  const handForm=(e)=>{
    setForm({ 
      ...form,
      [e.target.id]:e.target.value
    })
  }
  const handleClick=(e)=>{
e.preventDefault();
    console.log(form);
  }

  return (
    <><div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">Country</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter here"  onChange={handForm}/>
      </div><div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Location</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter here"  onChange={handForm} />
          </div>
          <div className="col-12">
    <button type="submit" className="btn" onClick={handleClick}>confirm</button>
  </div>
          </>
  );
}

export default Form
