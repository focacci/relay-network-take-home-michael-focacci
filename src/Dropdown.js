import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Dropdown({ label, value, options, onChange }) {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};