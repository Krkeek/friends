import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import ContactPage from "./components/homePage/contactPage/contactPage";
import AdminPage from "./components/common/adminPage/adminPage";
import ProtectedRoute from "./components/auth/protectedRoute/protectedRoute";
import WelcomePage from "./components/welcomePage/welcomePage";
import LoginPage from "./components/auth/loginPage/loginPage";

function App() {

    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route  index element={<WelcomePage />} ></Route>
                  <Route path={'/welcomePage'} element={<WelcomePage />}></Route>
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
