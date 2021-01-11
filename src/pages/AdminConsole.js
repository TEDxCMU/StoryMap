import AdminConsole from '../components/AdminConsole/AdminConsole';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
 

export default function LoginPage() {
    return (
        <>
            <Header />
            <h1>Admin Console:</h1>
            <AdminConsole />
            <Footer />
        </>
    );
}
