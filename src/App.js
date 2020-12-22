import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AdminConsole from "./pages/AdminConsole";
import Login from './pages/Login';

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
                <Route path="/login" exact>
                    <Login />
                </Route>
            </Switch>
        </div>
    );

}

export default App;
