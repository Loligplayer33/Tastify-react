import React, { useState } from 'react';
import s from './inspiration.module.scss';

function useDropdown(label, defaultOption, options) {
  var [option, setOption] = useState(defaultOption);

  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  function Dropdown() {
    return (
      <div className={s.selectionContainer}>
        <select
          className={s.select}
          id={id}
          value={option}
          onChange={function setOptionState(e) {
            setOption(e.target.value);
          }}
          onBlur={function setOptionState(e) {
            setOption(e.target.value);
          }}
        >
          <option className={s.option}>{label}</option>
          {options.map(function displayOptions(option) {
            return (
              <option className={s.option} value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  // also needed option state for api request
  return [option, Dropdown];
}

export default useDropdown;
