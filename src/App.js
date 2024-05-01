import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import {Route, Routes} from 'react-router-dom';
import {paths_data1, paths_data2, media_paths, comps} from './resources/scripts/variables';

function App() {

  return (
      <div className='App'>
        <Routes>
          <Route exact path='/'
            element={
              <>
                <Header data1={paths_data1} data2={paths_data2} />
                <Landing />
                <Footer data1={paths_data1} data2={paths_data2} data3={media_paths}/>
              </>
            }
          >
          </Route>
          {Object.entries(comps).map(([path, components]) => (
            <Route key={path} path={path}
              element={
                <>
                  {components}
                </>
              }
            >
            </Route>
          ))}
        </Routes>
      </div>
  );
}

export default App;