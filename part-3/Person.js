const Person = (props) => {
    let message = props.age >= 18 ? <h3>"please go vote"</h3> : <h3> "you must be 18" </h3>
    let name = props.name.length > 8 ? <p>{ props.name.substring(0,8) }...</p> : <p>{ props.name}</p>

    return (
        <div>
        <h3>{name}: has</h3>
            <ul>
                {props.hobies ? props.hobies.map( (h, i) =>  <li key={i} >{h}</li>) : null }
            </ul>
            <p>{message}</p>
        </div>
    )
}