const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-3 mt-2">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            name="male"
            className="checkbox"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            name="female"
            className="checkbox"
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
