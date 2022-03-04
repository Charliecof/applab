import {Routes, Route} from "react-router";
import Home from "./pages/Home";
import Menu from './components/Menu';
import View from "./pages/View";
import AddEdit from "./pages/AddEdit";

function App() {
    return (
        <div>
            <div style={{display: 'flex', position: "relative"}} className="container-app">
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/view/" element={<View/>}/>
                    <Route path="/new" element={<AddEdit mode="add"/>}/>
                    <Route path="/edit" element={<AddEdit mode="edit"/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
