import React from "react";

export default function Button({ type, name, onClick }) {
    return (
        <>
            <button
                type="button"
                className={`btn btn-${type} w-100`}
                onClick={onClick}
            >
                {name}
            </button>
        </>
    );
}
