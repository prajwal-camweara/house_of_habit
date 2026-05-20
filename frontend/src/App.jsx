import { BrowserRouter } from 'react-router-dom';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

const App = () => (
  <BrowserRouter>
    <Header />
    <AppRoutes />
    <Footer />
  </BrowserRouter>
);

export default App;
