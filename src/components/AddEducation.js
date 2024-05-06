import React, { Component } from "react";
import { Consumer } from "./Context";
import { v4 as uuid } from "uuid";
import axios from "axios";

class AddEducation extends Component {
  state = {
    qualification: "",
    institution: "",
    cgpa: "",
    year_of_passing: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onnChange = (event) => {
    this.setState({
      [event.target.qualification]: event.target.value,
    });
  };

  onnSubmit = async (handler, event) => {
    event.preventDefault();
    const newEducation = {
      id: uuid(),
      qualification: this.state.qualification,
      institution: this.state.institution,
      cgpa: this.state.cgpa,
      year_of_passing: this.state.year_of_passing,
    };
    const response = await axios.post(
      "http://127.0.0.1:8080/api/education",
      newEducation
    );
    const isSuccessful = response.data.isSuccessful;
    console.log(isSuccessful);
    const { qualification } = this.state;
    if (isSuccessful) {
      this.setState({
        submitMessage: `Your new qualification ${qualification} is added.`,
        submitMessageTextColor: "text-success",
      });
    } else {
      this.setState({
        submitMessage: "Oops! something went wrong. try later.",
        submitMessageTextColor: "text-danger",
      });
    }
    handler("ADD_EDUCATION", newEducation);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { handler } = value;
          const { submitMessage, submitMessageTextColor } = this.state;
          return (
            <div className="container my-5">
              <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Education</span> Qualification.
              </h1>
              <div className="row justify-content-center">
                <div className="col-11 col-lg-5">
                  <form onSubmit={this.onnSubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label htmlFor="qualification">Qualification</label>
                      <input
                        type="text"
                        name="qualification"
                        className="form-control"
                        onChange={this.onnChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="institution">Institution</label>
                      <input
                        type="text"
                        name="institution"
                        className="form-control"
                        onChange={this.onnChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="cgpa">CGPA</label>
                      <input
                        type="text"
                        name="cgpa"
                        className="form-control"
                        onChange={this.onnChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="year_of_passing">Year Of Passing</label>
                      <input
                        type="text"
                        name="year_of_passing"
                        className="form-control"
                        onChange={this.onnChange}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-dark my-3 float-right"
                        style={{ backgroundColor: "black" }}
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="py-5 mx-2 text-center">
                <h5 className={submitMessageTextColor}>{submitMessage}</h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddEducation;
