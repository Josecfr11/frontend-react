import React from "react";

export default function Select({
    label,
    id,
    optionList,
    optionLabel,
    optionId,
    onChange,
    value,
}) {
    return (
        <>
            <label htmlFor={id} className="form-label">{`${label}:`}</label>
            <select
                id={id}
                className="form-select"
                onChange={onChange}
                value={value}
            >
                {optionList.map((option) => (
                    <option key={option[optionId]} value={option[optionLabel]}>
                        {option[optionLabel]}
                    </option>
                ))}
            </select>
        </>
    );
}
