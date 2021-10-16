import React from 'react';

// class MenuComponent extends React.Component {
//     render() {
//         console.log('menu is render');
//         return (<h2>
//             this is menu
//         </h2>)
//     }
// }

class MenuComponent extends React.PureComponent { // khong can render lai component
    render() {
        console.log('menu is render');
        return (<h2>
            this is menu
        </h2>)
    }
}
export default MenuComponent;