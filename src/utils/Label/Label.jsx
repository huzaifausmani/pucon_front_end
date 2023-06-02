import React from "react"

export default function Label({
    labelName,
    labelCssClass
}) {
    return <>
        <label className={labelCssClass} >
            {labelName}
        </label>
    </>
};
