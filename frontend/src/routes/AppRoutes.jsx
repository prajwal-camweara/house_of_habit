import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ShopPage from '../pages/Shop/ShopPage';
import ProductDetailsPage from '../pages/Product/ProductDetailsPage';
import ContactPage from '../pages/Contact/ContactPage';
import AccountPage from '../pages/Account/AccountPage';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/account' element={<AccountPage />} />
    <Route path='/shop/:category' element={<ShopPage />} />
    <Route path='/shop/:category/:productId' element={<ProductDetailsPage />} />
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);

export default AppRoutes;
