// app/pdfQaDetails.tsx

const PdfQaDetails = () => {
  return (
    <div className="text-white space-y-6">
      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Core Capabilities</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>Multimodal Embedding via SBERT & CLIP</li>
          <li>Hybrid Retrieval (FAISS + BM25)</li>
          <li>Agentic Workflow & Planner Agent</li>
          <li>Web Search Agent (Tavily API)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Model & Fine-tuning</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>LLaMA 3.2B for response generation</li>
          <li>LoRA fine-tuning on HotpotQA</li>
          <li>Contextual late fusion of image/text</li>
          <li>Memory Agent for session tracking</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Key Outcomes</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>Reduced LLaMA 3.2B to 1.2B boosting speed for real-time QA</li>
          <li>LoRA boosted EM to 8% and F1 to 79%</li>
          <li>Modular architecture, production-ready</li>
        </ul>
      </section>
    </div>
  );
};

export default PdfQaDetails;
