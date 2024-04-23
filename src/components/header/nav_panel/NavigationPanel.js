import { Link } from 'react-router-dom';

function NavigationPanel(props) {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><img src={props.brand} alt="ValorAid Network" className='mybrand' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav me-auto mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle lat" href="/" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Про нас</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                {Object.entries(props.data1).map(([path, label]) =>
                                    <li>
                                        <Link to={path} className="dropdown-item lat">{label}</Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                        {Object.entries(props.data2).map(([path, label]) =>
                            <li className="nav-item">
                                <Link to={path} className="nav-link lat">{label}</Link>
                            </li>
                        )}
                        {Object.entries(props.data3).map(([path, label]) =>
                            <li className="nav-item">
                                <Link to={path} className="nav-link lat">{label}</Link>
                            </li>
                        )}
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
    );
}

export default NavigationPanel;