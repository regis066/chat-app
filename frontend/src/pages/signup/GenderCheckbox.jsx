import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex gap-3 mt-2">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Male </span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Female </span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
