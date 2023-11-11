import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import Lenis from '@studio-freight/lenis'
function App() {

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route index element={<HomePage />} ></Route>
                  <Route path={'/homePage'} element={<HomePage />}></Route>
              </Routes>
          </BrowserRouter>

      </>
  );
}

export default App;
