import { useState } from 'react';
import API from '../utils/api';

export default function PaymentForm() {
  const [form, setForm] = useState({ name: '', email: '', amount: '', currency: 'NGN' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/payment/initiate-payment', form);
    window.location.href = res.data.paymentLink;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} required />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} required />
      <input placeholder="Amount" type="number" onChange={e => setForm({...form, amount: e.target.value})} required />
      <select onChange={e => setForm({...form, currency: e.target.value})}>
        <option value="NGN">Naira (NGN)</option>
        <option value="USD">US Dollar (USD)</option>
      </select>
      <button type="submit">Pay Now</button>
    </form>
  );
}

