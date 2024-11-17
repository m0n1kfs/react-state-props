import logo from '../../../assets/react.svg'    

function Navbar() {

    return (
    // estructura de fragment: <> </> 
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo React" width="30" height="24" />
                    React State & Props
                </a>
            </div>
        </nav>
    )
}

export default Navbar;