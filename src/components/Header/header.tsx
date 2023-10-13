const Header = () => {
    return (
        <header className="clearfix">
            <div className="logo">
                <img src="assets/logo.png" alt="logo"/>
            </div>
            <nav>
                <ul className="clearfix">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">What we do</a></li>
                    <li><a href="#">Our staff</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };