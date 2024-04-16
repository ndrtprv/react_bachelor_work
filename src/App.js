import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import {Route, Routes} from 'react-router-dom';
import {paths, button_paths} from './resources/scripts/variables';

function App() {

  return (
      <div className='App'>
        <Routes>
          <Route exact path='/'
            element={
              <>
                <Header />
                <Landing />
                <Footer />
              </>
            }
          >
          </Route>
          {paths.map((item) => (
            <Route path={item}
              element={
                <>
                  <Header />
                  <Landing />
                  <Footer />
                </>
              }>
            </Route>
          ))}
          {button_paths.map((item) => (
            <Route path={item}
              element={
                <>
                  <Landing />
                  <Footer />
                </>
              }>
            </Route>
          ))}
        </Routes>
      </div>
  );
}

export default App;