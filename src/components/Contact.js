import axios from "axios";
import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    descr: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onnSubmit = async (event) => {
    event.preventDefault();
    const newContact = {
      id: uuid(),
      name: this.state.name,
      email: this.state.email,
      descr: this.state.descr,
    };
    const response = await axios.post(
      "http://127.0.0.1:8080/api/contact",
      newContact
    );
    const isSuccessful = response.data.isSuccessful;
    const { name } = this.state;
    if (isSuccessful) {
      this.setState({
        submitMessage: `Thankyou ${name}. We we contact you soon`,
        submitMessageTextColor: "text-success",
      });
    } else {
      this.setState({
        submitMessage: "Oops! something went wrong. try later.",
        submitMessageTextColor: "text-danger",
      });
    }
  };

  render() {
    const { submitMessage, submitMessageTextColor } = this.state;
    return (
      <div className="container my-5">
        <h1 className="font-weight-light text-center py-5">
          <span className="text-info">ThankYou!</span> for your Intrest.
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onnSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.onnChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={this.onnChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="desc">description</label>
                <textarea
                  row="3"
                  name="desc"
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
                  Lets talk.
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
  }
}
export default Contact;
