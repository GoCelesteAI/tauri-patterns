import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

interface Quote {
  ticker: string;
  price: number;
  change: number;
  change_pct: number;
  volume: number;
}

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshedAt, setRefreshedAt] = useState<string>("");

  async function refresh() {
    setLoading(true);
    const data = await invoke<Quote[]>("get_quotes");
    setQuotes(data);
    setRefreshedAt(new Date().toLocaleTimeString());
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>
          <span className="brand">Stock</span>
          <span className="brand-accent">Watcher</span>
        </h1>
        <p className="subtitle">Built with Tauri 2 · Codegiz · Built by Claude AI</p>
      </header>

      <div className="toolbar">
        <button className="refresh" onClick={refresh} disabled={loading}>
          {loading ? "Refreshing…" : "Refresh"}
        </button>
        {refreshedAt && <span className="meta">last updated {refreshedAt}</span>}
      </div>

      <table className="quotes">
        <thead>
          <tr>
            <th>Ticker</th>
            <th className="num">Price</th>
            <th className="num">Change</th>
            <th className="num">Volume</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((q) => (
            <tr key={q.ticker}>
              <td className="ticker">{q.ticker}</td>
              <td className="num">${q.price.toFixed(2)}</td>
              <td className={"num " + (q.change >= 0 ? "up" : "down")}>
                {q.change >= 0 ? "+" : ""}
                {q.change.toFixed(2)} ({q.change_pct >= 0 ? "+" : ""}
                {q.change_pct.toFixed(2)}%)
              </td>
              <td className="num">{(q.volume / 1_000_000).toFixed(1)}M</td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer>
        <span className="status-dot" />
        Tauri 2 · Rust backend · React frontend · IPC via #[tauri::command]
      </footer>
    </main>
  );
}

export default App;
