import React, { Component } from 'react';

class FormValidation extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.classList.add('was-validated');
  }

  render() {
    return (
      <form className="container" id="needs-validation" noValidate onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom01">First name</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom02">Last name</label>
            <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">City</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
            <div className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">State</label>
            <input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">Zip</label>
            <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
            <div className="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
    );
  }
}

export default FormValidation;
