const App = () => {
    return (
        <div>
           <Person name="Greg" age="20" />
           <Person name="Jo" age="17" />
           <Person name="Joleralandos" age="17" hobies={['jogging', 'writing', 'singing']} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))