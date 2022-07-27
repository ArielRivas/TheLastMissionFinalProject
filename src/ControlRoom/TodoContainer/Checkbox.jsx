import React, { Fragment } from "react";

const Checkbox = props => {
  const {
    onChange,
    data: { id, description, done }
  } 
  = props;
  return (
    <Fragment>
      <label className="labelCheckbox">
        <input
          className="inputCheckbox"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="descriptionCheckbox">{description}</div>
      </label>
    </Fragment>
  );
};

export default Checkbox;