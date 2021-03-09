const App = () => {
    return (
        <div>
            <Tweet username="MadMax" name="Jhon Doe" date="21/12/20" message="Hey Yall how is everybody" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))