import React from 'react'

class SideBarComponent extends React.Component { // this.props la thuoc tinh cua componnent

    render() {
        return (
            <h1> sidebar - {this.props.address}</h1>
            )
    }
}
export default SideBarComponent;