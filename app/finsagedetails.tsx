// app/finsagedetails.tsx
const FinsageDetails = () => {
  return (
    <div className="text-white space-y-6">
      <section>
        <h3 className="text-lg font-semibold text-cyan-400">User Experience</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>Real-time dashboard with category-wise spending</li>
          <li>Responsive UI using React & Tailwind</li>
          <li>OAuth 2.0 login with Gmail integration</li>
          <li>Visual analytics via Recharts</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Tech Stack & Intelligence</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>FastAPI backend with PostgreSQL</li>
          <li>Modular Dockerized deployment</li>
          <li>LLM-powered expense categorization</li>
          <li>Chat assistant for query-based insights</li>
          <li>Forecasting via time series models</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Highlights</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>Gmail parser for auto-logging transactions</li>
          <li>Tesseract OCR for receipt-based logging</li>
          <li>AI queries like “What did I spend on food last week?”</li>
        </ul>
      </section>
    </div>
  );
};

export default FinsageDetails;
