import React from 'react'
import './Form.css'
function Form() {
  return (
    <><div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">Country</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter here" />
      </div><div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Location</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter here" />
          </div>
          <div className="col-12">
    <button type="submit" className="btn">confirm</button>
  </div>
          </>
  );
}

export default Form
