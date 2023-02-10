
function NavBar(props) {
    return (
        <nav className={props.theme === 'dark' ? "header" : "header-light"}>
            <img src="react-logo.png" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
            <label className={props.theme === 'dark' ? 'theme-toggler' : 'theme-toggler-light'}>
                {props.theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
            <input type='checkbox' onClick = {props.themeToggler}/>
            </label>
        </nav>
    )
}


function Header(props) {
    return (
        <div className={ props.theme === 'dark' ? 'main' : "main-light"}>
            <h1>Fun facts about React</h1>
            <ul className="main-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}


function App() {
    const [theme, setTheme] = React.useState('dark')
    const body = document.querySelector('body')
    body.style.backgroundColor = theme === 'dark' ? '#282d35' : 'whitesmoke'
    
    function toggleTheme(){
        setTheme(function(prev){
            return prev === 'dark' ? 'light' : 'dark'
        })
    }

    return (
        <div className="container">
            
            {/* <input type='checkbox' onClick={toggleTheme}/> */}
            <NavBar theme={theme} themeToggler = {toggleTheme}/>
            <Header theme={theme}/>
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)

