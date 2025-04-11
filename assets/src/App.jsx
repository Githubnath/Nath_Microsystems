// App.jsx
import { Routes, Route } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';
import SuccessPage from './components/SuccessPage';
import FailedPage from './components/FailedPage';
import CancelPage from './components/CancelPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaymentPage />} />
      <Route path="/payment-success" element={<SuccessPage />} />
      <Route path="/payment-failed" element={<FailedPage />} />
      <Route path="/payment-cancel" element={<CancelPage />} />
    </Routes>
  );
}

export default App;

