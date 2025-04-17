// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromCurrency, setFromCurrency] = useState("EUR");

  const handleIndput = function (e) {
    setAmount(e.target.value);
  };

  useEffect(function () {
    async function fetchCurrency() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=10&from=EUR&to=USD`
      );

      const data = await res.json();
      console.log(data);
      console.log(data.rates.USD);
      setOutputAmount(data.rates.USD);
    }
    fetchCurrency();
  }, []);

  return (
    <div>
      <input type="text" onChange={handleIndput} />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={fromCurrency}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{outputAmount}</p>
    </div>
  );
}
