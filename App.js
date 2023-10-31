import logo from './logo.svg';
import background from './landscape_view.jpg';
import Header from './Header';
import Cards from './Cards';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path ="/" element = {<Layout/>}>
        <Route index element = {
          <Home/>
        } />
        <Route path="/about" element={<AboutPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
