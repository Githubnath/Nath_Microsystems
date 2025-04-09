import { useLocation } from 'react-router-dom';

export default function SuccessPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const txRef = params.get('tx_ref');

  return (
    <div className="success-page">
      <h1>Payment Successful</h1>
      <p>Thank you for your payment!</p>
      {txRef && <p>Transaction Reference: <strong>{txRef}</strong></p>}
    </div>
  );
}

