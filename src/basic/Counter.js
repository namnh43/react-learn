import React from "react";
import ButtonCounter from "./component/counter/Button";
import Result from "./component/counter/Result";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        //tao sate
        this.state = {
            count: 0
        }
    }

    //viet ham cap nhat state
    increaseCounter = () => {
        // Cap nhat trang thai
        this.setState({count: this.state.count + 1})
    }

    //viet ham cap nhat state
    decreaseCounter = () => {
        // Cap nhat trang thai
        this.setState({count: this.state.count - 1})
    }
    
    render() {
        return(
            <>
                <h1>Counter</h1>
                <Result result={this.state.count} />
                <ButtonCounter click={this.increaseCounter} type="button" name="incr">+</ButtonCounter>
                <ButtonCounter click={this.decreaseCounter} type="button" name="decr">-</ButtonCounter>
            </>
        )
        
    }
}
export default Counter;