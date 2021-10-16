import React from 'react';
import ChildComponent from './child';
import MenuComponent from './component/partials/Menu'

class Parent extends React.Component {
    //1 - mounting
    constructor(props) {
        super(props);
        //phuong thuc nay se chay dau tien khi khoi tao class component (CP)
        //chi chay duy nhat 1 lan trong mounting
        //thong thuong noi nay dung de khai bao state
        this.state = { //Chi can khai bao 1 object state, sau do luu tru cac gia tri thay doi cho class
            count: 0,
            show: true
        }
        this.changeCount = this.changeCount.bind(this)
        this.showHide = this.showHideComponent.bind(this);
        console.log ('constructor is running');
        console.log ('***********');

    }
    static getDerivedStateFromProps(props, state) {
        //props: props duoc truyen vao component
        //state: chinh la state cua component dang khai bao
        //muc dich: can thay doi cap nhat state theo props hay khong
        console.log('getDerivedStateFromProps is running ...')
        console.log(props);
        console.log(state);
        console.log ('***********');
        // phuong thuc nay khong phai chi chay duy nhat 1 lan trong mounting
        return null; //bat buoc phai return
    }

    componentDidMount() {
        //Phuong thuc chay cuoi cung trong mounting - chi chay duy nhat 1 lan
        // call data tu backend
        console.log('componentDidMount is running ...');
        console.log ('***********');
    }

    shouldComponentUpdate(nextProps, nextState) {
        //Muc dich: chi phoi viec co render lai giao dien hay khong?
        //Ham tra ve true: render lai va nguoc lai
        //mac dinh khi  khong khai bao ham nay -- luon luon thuc thi render
        console.log('shouldComponentUpdate is running ...');
        console.log(nextProps);
        console.log(nextState);
        console.log ('***********');
        // return false;//khong cap nhat lai giao dien - khi state thay doi - khi cos new props
        return true;
    }

    changeCount() {
        this.setState({
            count: this.state + 1
        })
    }

    showHideComponent()
    {
        this.setState({
            show: !this.state.show
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate is running');
        console.log(prevProps);
        console.log(prevState);
        return 'blue';

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate is running');


    }

    render() {
        console.log ('render is running');
        console.log ('***********');
        return (
            <>
                <h1 id="title">Counter</h1>
                {this.state.show ? (<ChildComponent />) : null}
                <MenuComponent/>
                <button onClick = {this.changeCount()}>+</button>
                <button onClick = {this.showHide}>show/hide children component</button>
            </>
        )
    }
}

export default Parent;