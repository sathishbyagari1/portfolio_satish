import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "./Context";
import { v4 as uuid } from "uuid";
import axios from "axios";

class AddProject extends Component {
  state = {
    imageUrl: "",
    title: "",
    shortnote: "",
    body: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onnBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };

  onnSubmit = async (handler, event) => {
    event.preventDefault();
    const newProject = {
      id: uuid(),
      imageUrl: this.state.imageUrl,
      title: this.state.title,
      disc: this.state.shortnote,
      body: this.state.body,
    };
    const response = await axios.post(
      "http://127.0.0.1:8080/api/project",
      newProject
    );
    let isSuccessful = response.data.isSuccessful;

    if (isSuccessful) {
      this.setState({
        submitMessage: "Project Published Successfully",
        submitMessageTextColor: "text-success",
      });
    } else {
      this.setState({
        submitMessage: "Publish Failed",
        submitMessageTextColor: "text-danger",
      });
    }

    handler("ADD_PROJECT", newProject);
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            imageUrl,
            title,
            body,
            submitMessage,
            submitMessageTextColor,
          } = this.state;
          const { handler } = value;
          return (
            <div className="container my-5 py-5">
              <h1 className="text-center my-5 font-weight-light">
                Add <span className="text-info">Project</span>
              </h1>
              <div className="row px-3">
                <div className="col-12 col-lg-6">
                  <form onSubmit={this.onnSubmit.bind(this, handler)}>
                    <div className="form-group my-3">
                      <label htmlFor="imageUrl" className="py-2">
                        Project Image
                      </label>
                      <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        className="form-control"
                        onChange={this.onnChange}
                        required
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="title" className="py-2">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        onChange={this.onnChange}
                        required
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="shortnote" className="py-2">
                        ShortNote about project
                      </label>
                      <input
                        type="text"
                        name="shortnote"
                        id="shortnote"
                        className="form-control"
                        onChange={this.onnChange}
                        required
                      />
                    </div>
                    <SimpleMDE
                      onChange={this.onnBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-dark btn-block my-3"
                    >
                      Publish
                    </button>
                  </form>
                  <div className="text-center">
                    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="justify-content-center">
                    <img src={imageUrl} alt={title} className="img-fluid" />
                  </div>
                  <h1 className="font-weight-light text-center my-5">
                    {title}
                  </h1>
                  <ReactMarkdown children={body} />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddProject;
