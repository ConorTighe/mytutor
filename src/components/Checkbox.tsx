import React from 'react';
import '../App.css';

interface ICheckbox {
    checked: boolean;
    label: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
function Checkbox({ checked, label, value, handleChange }: ICheckbox) {
  
    return (
      <div key={label} className="checkbox">
        <input type="checkbox" id="experienceCheck" name={value} checked={checked} value={value} onChange={handleChange} />
        <label className="checkboxLabel" htmlFor={value}>{label}</label>
        <br/>
      </div>
    );
}
  
export default Checkbox;