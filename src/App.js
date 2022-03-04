import {Routes,Route} from "react-router";
import Home from "./pages/Home";
import Menu from './components/Menu';
import View from "./pages/View";
function App() {
  return (
    <div>
        <div style={{display: 'flex', position: "relative"}} className="container-app">
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/view/" element={<View />}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
