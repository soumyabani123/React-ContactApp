import React from "react";

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                
                <form class="row g-3">
    <div class="form-group">               
  <div class="col-auto">

    <label for="exampleInputEmail1" ><b>Email Address</b></label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Email "/>
  </div>
  </div> 
  
  <div class="form-group">
  <div class="col-auto">
    <label for="inputPassword2" ><b>Password</b></label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
  </div>
  </div>
  
  <div class="form-group">
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
  </div>
</form>
            </div>

        </div>
    );
};

export default Contact;