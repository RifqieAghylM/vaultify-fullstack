import { useState, useEffect } from 'react';

export default function QuoteWidget() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Gagal mengambil data dari server');
      }
      const data = await response.json();
      setQuote(data.slip.advice);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
      <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a' }}>💡 Kolektor Tips / Quote Harian</h4>

      {/* State Loading */}
      {loading && <p style={{ color: '#64748b', fontStyle: 'italic' }}>Memuat tips hari ini...</p>}

      {/* State Error & Tombol Coba Lagi */}
      {error && (
        <div>
          <p style={{ color: '#ef4444', margin: '0 0 0.5rem 0' }}>⚠️ {error}</p>
          <button 
            onClick={fetchQuote}
            style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}
          >
            Coba Lagi
          </button>
        </div>
      )}

      {/* State Success */}
      {!loading && !error && (
        <p style={{ fontStyle: 'italic', color: '#334155', margin: 0 }}>"{quote}"</p>
      )}
    </div>
  );
}