import React, { forwardRef } from "react";
import Icon from "./icon"
import "./input.css"

const Input = React.forwardRef((props, ref) => {
    const {
        placeholder,
        Icon
    } = props
    return (
        <div className="input-div">
            <input placeholder={placeholder} {...props} />
        </div>
    )
})

export default Input