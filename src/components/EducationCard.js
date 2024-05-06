import React from "react";
function EducationCard(props) {
  const { qualification, institution, year_of_passing, cgpa } = props.education;
  return (
    <div className="col-12 col-md-4">
      <div className="card shadow h-100">
        <div className="card-body">
          <h4 className="card-text">{qualification}</h4>
          <p className="card-text text-secondary mb-0">{institution}</p>
          <p className="card-text text-secondary mb-0">{cgpa}</p>
          <p className="card-text text-secondary mb-0">{year_of_passing}</p>
        </div>
      </div>
    </div>
  );
}
export default EducationCard;
