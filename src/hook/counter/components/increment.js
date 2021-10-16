import React from "react";

//Khi su dung hooks thi bat buoc su dung function component

const IncrementCounter = (props) => {
    return (
        <button onClick={()=>props.click()} type={props.type} name={props.name}>+</button>
    )
}
export default React.memo(IncrementCounter);