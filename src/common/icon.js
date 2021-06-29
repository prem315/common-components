import React from "react"

const Icon = React.forwardRef((props, ref) => {
    const { name } = props
    const IconName = name
    return (
        <IconName />
    )
})

export default Icon