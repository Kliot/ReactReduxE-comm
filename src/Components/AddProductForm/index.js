import React from 'react';

const AddProductForm = () => {
  return (
    <form className="add-form">
      <div className="form-group">
        <label for="title">Title</label>
        <input type="text" className="form-control" id="title" placeholder="Enter title" />
      </div>
	  <div className="form-group">
        <label for="desc">Description</label>
        <textarea rows="8" className="form-control" placeholder="Enter text" id="desc" />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddProductForm;