import React from "react";
import { v4 as uuid } from "uuid";

function Stack(props) {
  const { name, imageUrl, starsTotal, starsActive } = props.skill;
  const starsList = [];
  for (let i = 0; i < starsTotal; i++) {
    if (i < starsActive) {
      starsList.push(
        <span key={uuid()} className="text-info display-5">
          *
        </span>
      );
    } else {
      starsList.push(
        <span key={uuid()} className="display-5">
          *
        </span>
      );
    }
  }
  return (
    <div class="flux-shrink-0 mx-3">
      <img
        className="rounded"
        src={imageUrl}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
      <div>{starsList}</div>
    </div>
  );
}
export default Stack;
