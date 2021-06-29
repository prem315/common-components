import React from "react"
import Input from "../common/input";
import { User } from "react-feather";

const Playground = () => {

    const getval = (event) => {
        console.log(event.target.value)
    }

    return(
        <React.Fragment>
            <h2>Playground</h2>
            <User />
            <Input placeholder={'email'} onChange={(event) => getval(event)} />
        </React.Fragment>
    )
}

export default Playground