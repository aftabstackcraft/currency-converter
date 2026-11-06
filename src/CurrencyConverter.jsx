import { useMemo, useState } from "react";
import "./App.css";

export function CurrencyConverter() {
  // Sample rates for this practice project, not live exchange rates.
  const rates = {
    USD: 1,
    EUR: 0.92,
    INR: 95,
    KWD: 0.31,
    GBP: 0.78,
    JPY: 156.7
  };
  const currency = ["USD", "EUR", "INR", "KWD", "GBP", "JPY"];

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GBP");

  const baseAmount = useMemo(() => {
    return Number(amount) / rates[fromCurrency];
  }, [amount, fromCurrency]);

  const convertedAmount = (baseAmount * rates[toCurrency]).toFixed(2);

  return (
    <main className="converter">
      <h1>Currency Converter</h1>
      <p className="intro">Convert an amount between different currencies.</p>

      <label className="field">
        <span>Amount</span>
        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </label>

      <div className="currency-fields">
        <label className="field">
          <span>From</span>
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {currency.map((curr) => <option key={curr} value={curr}>{curr}</option>)}
          </select>
        </label>

        <span className="convert-arrow" aria-hidden="true">→</span>

        <label className="field">
          <span>To</span>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {currency.map((curr) => <option key={curr} value={curr}>{curr}</option>)}
          </select>
        </label>
      </div>

      <section className="result" aria-live="polite">
        <p className="result-label">Converted amount</p>
        <p className="result-value">{convertedAmount} <span>{toCurrency}</span></p>
      </section>

      <p className="rate-note">Uses sample exchange rates for demonstration.</p>
    </main>
  );
}