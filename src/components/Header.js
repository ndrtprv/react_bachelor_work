import React from 'react';

import './Header.css';
import brand from './elements/brand.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src={brand} alt="ValorAid Network" className='mybrand' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mx-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle lat" href="/" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Про нас</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                    <li>
                                        <Link to="/about" className="dropdown-item lat">Про фонд</Link>
                                    </li>
                                    <li>
                                        <Link to="/staff" className="dropdown-item lat">Склад фонду</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/fundraisings" className="nav-link lat">Збори</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/results" className="nav-link lat">Звіти</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacts" className="nav-link lat">Контакти</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/faq" className="nav-link lat">FAQ</Link>
                            </li>
                        </ul>
                        <div className="nav navbar-nav navbar-right">
                            <Link to="/login" className="nav-link lat">
                                <button type="button" className="btn btn-outline-light me-2 my-2 rob-btn">Увійти</button>
                            </Link>
                            <Link to="/signup" className="nav-link lat">
                                <button type="button" className="btn btn-warning my-2 rob-btn">Зареєструватися</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;