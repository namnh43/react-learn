export default function ButtonCounter(props) {
    return (
        <button onClick={()=> props.click()} type={props.type} name={props.name}>{props.children}</button>
    )
}