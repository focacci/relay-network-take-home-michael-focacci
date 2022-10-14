import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../css/Dropdown.css';

export default function Dropdown({ label, value, options, onChange }) {
    return (
        <label className="Dropdown">
            {label}
            <select className="DropdownMenu" value={value} onChange={onChange}>
                {options.map((option) => (
                    <option className="DropdownOption" key={uuidv4()} value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};