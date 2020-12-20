import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import AdminConsole from "./pages/AdminConsole";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/admin" exact>
                    <AdminConsole />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
