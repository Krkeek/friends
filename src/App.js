import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import Lenis from '@studio-freight/lenis'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import LoginPage from "./components/auth/loginPage/loginpage";
import ContactPage from "./components/homePage/contactPage/contactPage";
import AdminPage from "./components/adminPage/adminPage";
import ProtectedRoute from "./components/auth/protectedRoute/protectedRoute";
import { useAuth } from './components/auth/authProvider/authProvider';
import {useEffect} from "react";

gsap.registerPlugin(ScrollTrigger);


function App() {

    const lenis = new Lenis()
    lenis.on('scroll', () => {
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const { currentUser } = useAuth();

    useEffect(() => {
        console.log(currentUser)
    }, [currentUser]);



    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route  index element={<HomePage />} ></Route>
                  <Route path={'/homePage'} element={<HomePage />}></Route>
                  <Route path={'/loginPage'} element={<LoginPage  />}></Route>
                  <Route path={'/contact'} element={<ContactPage />}></Route>
                  <Route path={'/adminPage'} element={
                      <ProtectedRoute>
                          <AdminPage />
                      </ProtectedRoute>
                  }></Route>
                  <Route path="*" element={<p>There's nothing here: 404!</p>}></Route>
              </Routes>
          </BrowserRouter>

      </>
  );
}

export default App;
