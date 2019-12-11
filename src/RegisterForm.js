import React from "react";

function RegisterForm(){
    return(
        <div className="container register">
            <h1 className="toast-header">Sign Up right now</h1>
        <form className="needs-validation" noValidate>
            <div className="form-row">
                <div className="col-md-3 mb-1">
                    <label htmlFor="validationCustom01">Username</label>
                    <input type="text" className="form-control" id="validationCustom01" value="example123" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-3 mb-1">
                    <label htmlFor="validationCustom02">Date of Birth</label>
                    <input type="text" className="form-control" id="validationCustom02" value="12-02-2000" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-3 mb-1">
                    <label htmlFor="validationCustomUsername">E-mail</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                        </div>
                        <input type="text" className="form-control" id="validationCustomUsername"
                               aria-describedby="inputGroupPrepend" value="example@gmail.com" required/>
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                    </div>
                </div>
                <div className="col-md-3 mb-1">
                    <label htmlFor="validationCustom03">Phone number</label>
                    <input type="text" className="form-control" id="validationCustom03" required/>
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
            </div>
            <div className="form-row">

                <div className="col-md-3 mb-1">
                    <label htmlFor="validationCustom04">Relationship</label>
                    <select className="custom-select" id="validationCustom04" required>
                        <option selected disabled value="">Single</option>
                        <option>Dating</option>
                        <option>Married</option>
                        <option>Divorced</option>
                        <option>Complicated</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div className="col-md-3 mb-1">
                    <label htmlFor="validationCustom05">Hobbies</label>
                    <input type="text" className="form-control" id="validationCustom05" required/>
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                </div>

            </div>
            <div className="form-row">
                <div className="col-md-3 mb-1">
                    <label htmlFor="validationCustom05">CityOfOrigin</label>
                    <input type="text" className="form-control" id="validationCustom05" />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="col-md-3 mb-1">
                    <label htmlFor="validationCustom05">CityOfLiving</label>
                    <input type="text" className="form-control" id="validationCustom05" />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>

            </div>
            <div className="form-row">
                <div className="col-md-3 mb-1">
                    <label htmlFor="validationCustom05">Work</label>
                    <input type="text" className="form-control" id="validationCustom05" />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="col-md-3 mb-1">
                    <label htmlFor="validationCustom05">Education</label>
                    <input type="text" className="form-control" id="validationCustom05" />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to <a href="#" >terms and condition</a>
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                </div>
            </div>

            <button className="btn btn-dark" type="submit">Register</button>
        </form>
        </div>

)
}
export default RegisterForm;