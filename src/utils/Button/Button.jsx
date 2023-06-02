import "./button.css";
import React from "react";

export default function Button({
    buttonText,
    textSize,
    buttonOnClick,
}) {
    return <>
        <button type="submit"
            className="button"
            onClick={buttonOnClick}
            style={{ fontSize: textSize }}
        >
            {buttonText}
        </button>
    </>
};
