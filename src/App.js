import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import {Route, Routes} from 'react-router-dom';
import {paths, path, paths_data1, paths_data2, paths_data3, media_paths, questions} from './resources/scripts/variables';
import FAQ from './components/faq/FAQ';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';

function App() {

  return (
      <div className='App'>
        <Routes>
          <Route exact path='/'
            element={
              <>
                <Header data1={paths_data1} data2={paths_data2} data3={paths_data3}/>
                <Landing />
                <Footer data1={paths_data1} data2={paths_data2} data3={paths_data3} data4={media_paths}/>
              </>
            }
          >
          </Route>
          {paths.map((item) => (
            <Route path={item}
              element={
                <>
                  <Header data1={paths_data1} data2={paths_data2} data3={paths_data3}/>
                  <Landing />
                  <Footer data1={paths_data1} data2={paths_data2} data3={paths_data3} data4={media_paths}/>
                </>
              }>
            </Route>
          ))}
          <Route path={path}
            element={
              <>
                <Header data1={paths_data1} data2={paths_data2} data3={paths_data3}/>
                <FAQ quests={questions}/>
                <Footer data1={paths_data1} data2={paths_data2} data3={paths_data3} data4={media_paths}/>
              </>
            }>
          </Route>
          <Route path='/login'
            element={
              <>
                <Header data1={paths_data1} data2={paths_data2} data3={paths_data3}/>
                <Login />
                <Footer data1={paths_data1} data2={paths_data2} data3={paths_data3} data4={media_paths}/>
              </>
            }>
          </Route>
          <Route path='/signup'
            element={
              <>
                <Header data1={paths_data1} data2={paths_data2} data3={paths_data3}/>
                <Registration />
                <Footer data1={paths_data1} data2={paths_data2} data3={paths_data3} data4={media_paths}/>
              </>
            }>
          </Route>
        </Routes>
      </div>
  );
}

export default App;