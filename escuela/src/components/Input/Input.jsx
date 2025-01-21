import React from "react";

export default function Input({ type, label, id, onChange, value }) {
    return (
        <>
            <label htmlFor={id} className="form-label">{`${label}:`}</label>
            <input
                type={type}
                className="form-control"
                id={id}
                onChange={onChange}
                value={value}
            />
        </>
    );
}
