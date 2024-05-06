import React from "react";
import { v4 as uuid } from "uuid";
import Stack from "./Stack";
import { Consumer } from "./Context";

function TechnologyStack() {
  return (
    <Consumer>
      {(value) => {
        const { skills } = value;
        const finalSkillRow = [];
        for (let i = 0; i < skills.length / 4; i++) {
          let skillRow = skills.slice(i * 4, (i + 1) * 4);
          finalSkillRow.push(
            <div
              key={uuid()}
              className="d-flex justify-content-around py-3 flex-wrap"
            >
              {skillRow.map((skill) => (
                <Stack key={uuid()} skill={skill} />
              ))}
            </div>
          );
        }

        return (
          <div className="bg-light w-100">
            <div className="container text-center py-5">
              <h1 className="font-weight-light">
                <span className="text-info">Technology</span> Stacks
              </h1>
              <div className="lead pb-5">
                I design, develope and deliver with these tools
              </div>
              {finalSkillRow}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
export default TechnologyStack;
