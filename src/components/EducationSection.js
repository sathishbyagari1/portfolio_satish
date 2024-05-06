import React from "react";
import EducationCard from "./EducationCard";
import { v4 as uuid } from "uuid";
import { Consumer } from "./Context";

function EducationSection() {
  return (
    <Consumer>
      {(value) => {
        const { educations } = value;
        return (
          <div className="container-fluid my-5">
            <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
              {educations.map((education) => (
                <EducationCard key={uuid()} education={education} />
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
export default EducationSection;
