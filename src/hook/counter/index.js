import React, { useState } from "react";
//cac hooks deu co tien to use dung truoc
import IncrementCounter from './components/increment'

const Counter = () => {
    //khai bao va lam viec voi state
    const [count, setCount] = useState(0);
    //count: ten cua state voi gia tri mac dinh = 0
    //setCount: phuong thuc de cap nhat va thay doi state
    const changeCounter = () => {
        //cap nhat lai state
        setCount (count+1);
        //tuong duong ham this.setState();
    }
    return (
        <>
            <h1> Counter: {count}</h1>
            <IncrementCounter click={changeCounter} type="button" name="increment" />

        </>    
    )
}
export default React.memo(Counter);