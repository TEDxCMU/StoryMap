import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AdminConsolePage from "./pages/AdminConsole";
import LoginPage from './pages/Login';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/admin" exact>
                    <AdminConsolePage />
                </Route>
                <Route path="/login" exact>
                    <LoginPage />
                </Route>
            </Switch>
        </div>
    );

}

export default App;
