const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Jon"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))