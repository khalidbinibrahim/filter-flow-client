import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';
import { AuthProvider } from './providers/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <ProductList />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;