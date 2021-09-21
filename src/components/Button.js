export default function Button(props){
    return <button className="button-counter" disabled={props.disabled} onClick={props.onClick}>{props.symbol}</button>
}