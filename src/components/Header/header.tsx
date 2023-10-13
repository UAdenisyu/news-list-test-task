import logo from '../../assets/Logo.png';

const Header = () => {
    return (
        <header className="bg-white shadow-lg flex justify-between px-10">
            <div className="flex items-center">
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <ul className="bg-white flex justify-between font-serif">
                    <li className="p-4"><a href="#">About us</a></li>
                    <li className="p-4"><a href="#">What we do</a></li>
                    <li className="p-4"><a href="#">Our staff</a></li>
                    <li className="p-4"><a href="#">Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };