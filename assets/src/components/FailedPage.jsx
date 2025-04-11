import { useLocation } from 'react-router-dom';

export default function FailedPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const txRef = params.get('tx_ref');

  return (
    <div className="failed-page">
      <h1>Payment Failed</h1>
      <p>We couldn't process your payment. Please try again later.</p>
      {txRef && <p>Transaction Reference: <strong>{txRef}</strong></p>}
    </div>
  );
}

