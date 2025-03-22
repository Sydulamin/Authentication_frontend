// InputField.js
import React from "react";

const InputField = ({ type, placeholder, className }) => {
    return (
        <div className="m-4 border p-2 rounded-md w-2/4">
            <input
                type={type}
                placeholder={placeholder}
                className={className}
            />
        </div>
    );
};

export default InputField;
