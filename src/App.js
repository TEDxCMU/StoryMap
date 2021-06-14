import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AdminConsolePage from "./pages/AdminConsole";
import LoginPage from './pages/Login';
import AboutPage from './pages/About';

function App() {
    return (
        <BrowserRouter>
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
                    <Route path="/about" exact>
                        <AboutPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );

}

export default App;
