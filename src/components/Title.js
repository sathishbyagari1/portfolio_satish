import React from "react";
import PropTypes from "prop-types";
import Sathish from "../asset/satish image.jpeg";
function Title(props) {
  const { name, leadText } = props;
  return (
    <div className="container">
      <div
        className="row text-center align-items-center"
        style={{ margin: "100px 0px" }}
      >
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={Sathish}
            alt="Sathish"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <h2 className="font-weight-light" style={{ fontSize: "50px" }}>
            <span className="text-info">{name}</span>
          </h2>
          <h4 className="font-weight-light">{leadText}</h4>
        </div>
      </div>
    </div>
  );
}
Title.defaultProps = {
  name: "Sathish Byagari",
  leadText: "Iam a Student of IS Dept",
};
Title.prototypes = {
  name: PropTypes.string.isRequired,
};
export default Title;
