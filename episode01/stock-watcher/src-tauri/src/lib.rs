use rand::Rng;
use serde::Serialize;

#[derive(Serialize, Clone)]
struct Quote {
  ticker: String,
  price: f64,
  change: f64,
  change_pct: f64,
  volume: u64,
}

#[tauri::command]
fn get_quotes() -> Vec<Quote> {
  let mut rng = rand::thread_rng();
  let seeds: &[(&str, f64, u64)] = &[
    ("AAPL",  273.08, 94_460_000),
    ("MSFT",  486.37, 27_700_000),
    ("GOOGL", 313.63, 34_100_000),
    ("AMZN",  232.53, 72_180_000),
    ("NVDA",  187.53, 432_680_000),
    ("TSLA",  454.43, 124_050_000),
    ("SPY",   685.14, 80_990_000),
  ];
  seeds
    .iter()
    .map(|(t, base, base_vol)| {
      let jitter: f64 = rng.gen_range(-0.018..0.018);
      let change = base * jitter;
      let price = base + change;
      let change_pct = jitter * 100.0;
      let vol_jitter: f64 = rng.gen_range(0.85..1.15);
      let volume = (*base_vol as f64 * vol_jitter) as u64;
      Quote {
        ticker: t.to_string(),
        price,
        change,
        change_pct,
        volume,
      }
    })
    .collect()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .plugin(tauri_plugin_opener::init())
    .invoke_handler(tauri::generate_handler![get_quotes])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
