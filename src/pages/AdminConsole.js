import AdminConsole from '../components/AdminConsole/AdminConsole';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
 
const container = {
    position: 'relative',
    minHeight: '100vh'
};

const content = {
    paddingBottom: '6rem'
};

export default function LoginPage() {
    return (
        <div style={container}>
            <div style={content}>
                <Header />
                <AdminConsole />
            </div>
            <Footer />
        </div>
    );
}
