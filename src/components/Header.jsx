import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
    const login = useSelector(state => state.login)

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch({ type: "LOGOUT" })
    }

    const logIn = () => {
        dispatch({ type: "LOGIN" })
    }

    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        LBlog
                    </div>
                    {!login ?
                        <a>
                            <div className="header__menu-item" onClick={logIn}>
                                <svg clipRule="evenodd" width="24" height="24" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m19.023 7c-.389 0-3.3 1-7.023 1-3.75 0-6.605-1-7.024-1-.538 0-.976.438-.976.976 0 .453.321.854.757.951 2.162.563 4.571.948 4.571 3.132 0 3.565-2.321 6.899-3.26 8.476-.086.149-.131.319-.131.489 0 .539.438.976.977.976.261 0 .508-.103.694-.29.769-.772 2.292-3.072 2.989-4.182.391-.622.791-1.18 1.409-1.181.603.001 1.005.559 1.397 1.181.697 1.11 2.219 3.41 2.988 4.182.185.187.432.29.695.29.538 0 .976-.437.976-.976 0-.17-.045-.339-.141-.505-.962-1.617-3.25-4.891-3.25-8.46 0-2.309 2.751-2.661 4.563-3.13.443-.099.766-.5.766-.953 0-.538-.439-.976-.977-.976zm-7-5c1.374 0 2.488 1.12 2.488 2.5s-1.114 2.5-2.488 2.5c-1.373 0-2.489-1.12-2.489-2.5s1.116-2.5 2.489-2.5z" fillRule="nonzero" />
                                </svg>
                                Login
                            </div>
                        </a>
                        :
                        <a>
                            <div className="header__menu-item" onClick={logOut}>
                                <svg clipRule="evenodd" width="24" height="24" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m19.023 7c-.389 0-3.3 1-7.023 1-3.75 0-6.605-1-7.024-1-.538 0-.976.438-.976.976 0 .453.321.854.757.951 2.162.563 4.571.948 4.571 3.132 0 3.565-2.321 6.899-3.26 8.476-.086.149-.131.319-.131.489 0 .539.438.976.977.976.261 0 .508-.103.694-.29.769-.772 2.292-3.072 2.989-4.182.391-.622.791-1.18 1.409-1.181.603.001 1.005.559 1.397 1.181.697 1.11 2.219 3.41 2.988 4.182.185.187.432.29.695.29.538 0 .976-.437.976-.976 0-.17-.045-.339-.141-.505-.962-1.617-3.25-4.891-3.25-8.46 0-2.309 2.751-2.661 4.563-3.13.443-.099.766-.5.766-.953 0-.538-.439-.976-.977-.976zm-7-5c1.374 0 2.488 1.12 2.488 2.5s-1.114 2.5-2.488 2.5c-1.373 0-2.489-1.12-2.489-2.5s1.116-2.5 2.489-2.5z" fillRule="nonzero" />
                                </svg>
                                Logout
                            </div>
                        </a>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;