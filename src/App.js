import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import {Route, Routes} from 'react-router-dom';

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
          <Route path='/about'
            element={
              <>
                <Header />
                <Landing />
                <Footer />
              </>
            }
          >
          </Route>
          <Route path='/staff'
            element={
              <>
                <Header />
                <Landing />
                <Footer />
              </>
            }
          >
          </Route>
          <Route path='/fundraisings'
            element={
              <>
                <Header />
                <Landing />
                <Footer />
              </>
            }
          >
          </Route>
          <Route path='/results'
            element={
              <>
                <Header />
                <Landing />
                <Footer />
              </>
            }
          >
          </Route>
          <Route path='/contacts'
            element={
              <>
                <Header />
                <Landing />
                <Footer />
              </>
            }
          >
          </Route>
          <Route path='/faq'
            element={
              <>
                <Header />
                <Landing />
                <Footer />
              </>
            }
          >
          </Route>
          <Route path='/login'
            element={
              <>
                <Landing />
                <Footer />
              </>
            }
          >
          </Route>
          <Route path='/signup'
            element={
              <>
                <Landing />
                <Footer />
              </>
            }
          >
          </Route>
        </Routes>
      </div>
  );
}

export default App;