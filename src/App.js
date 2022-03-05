import {Routes, Route} from "react-router";
import Home from "./pages/Home";
import Menu from './components/Menu';
import View from "./pages/View";
import AddEdit from "./pages/AddEdit";
import Confirmation from "./pages/Confirmation";
import LeftColumn from "./templates/LeftColumn";
import NavBar from "./components/NavBar";
import AppContainer from "./templates/AppContainer";
import Navigation from "./components/Navigation";
function App() {
    return (
        <div>
            <div style={{display: 'flex', position: "relative"}} className="container-app">
                <Menu/>
                <LeftColumn>
                    <NavBar/>
                    <AppContainer>
                        <Navigation/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/view/" element={<View/>}/>
                            <Route path="/new" element={<AddEdit mode="add"/>}/>
                            <Route path="/edit" element={<AddEdit mode="edit"/>}/>
                            <Route path="/confirmation" element={<Confirmation/>}/>
                        </Routes>
                    </AppContainer>
                </LeftColumn>
            </div>
        </div>
    );
}

export default App;
