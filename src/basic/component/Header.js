
const handle = () => {
    return 0;
}
const HeaderComponent = (props) => { 
    let t = handle();
    return (
        <h1> Header component  - {t} - name: {props.name} -  age: {props.age}</h1>
        // là component, bắt buộc trả về jsx
        )
}
export default HeaderComponent;

// function component - stateless component  
//class component -stateful component (state)