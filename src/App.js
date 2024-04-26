import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './routes/Navbar'
import Shop from './routes/Shop';
import Authentication from './routes/Authentication.jsx';
import Checkout from './routes/Checkout.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};


export default App