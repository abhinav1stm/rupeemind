import Dashboard from '@/components/dashboard';

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-28 pt-6 md:px-8 md:pb-12">
      <section className="glass hero-flow animate-flow rounded-3xl p-8">
        <p className="mb-4 inline-flex rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 text-xs text-emerald">
          Financial Intelligence Platform
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
          Control Your Money Before It Controls You.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          RupeeMind analyzes your UPI spending, predicts cash flow, and shows you exactly where your money is leaking.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-xl bg-emerald px-5 py-3 font-semibold text-slate-900">Start Free Analysis</button>
          <button className="rounded-xl border border-slate-500 px-5 py-3 font-semibold text-slate-200">See How It Works</button>
        </div>
        <p className="mt-4 text-sm text-slate-400">No spam. Bank-grade security.</p>
      </section>

      <Dashboard />

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Trust & Data Security</h3>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>• Read-only UPI permissions for transaction intelligence.</li>
            <li>• Encrypted storage with strict access controls.</li>
            <li>• RupeeMind does not store your bank credentials.</li>
            <li>• No fund holding, no hidden movement of money.</li>
          </ul>
        </article>
        <article className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Premium Tier</h3>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>• Advanced forecasting & salary burn prediction</li>
            <li>• Spending habit scoring and credit optimization tips</li>
            <li>• Investment readiness insights</li>
            <li>• Exportable financial summary reports</li>
          </ul>
          <p className="mt-4 text-sm text-slate-400">Anchor Plan: <span className="font-semibold text-emerald">₹999/year</span> (₹149 monthly available)</p>
        </article>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3 className="text-xl font-semibold">Admin Panel (Phase 2)</h3>
        <p className="mt-2 text-slate-300">User analytics, engagement tracking, merchant partnerships dashboard, premium subscription monitoring, and offer management.</p>
      </section>

      <section className="glass rounded-3xl p-8 text-center">
        <h2 className="text-3xl font-semibold">Take Financial Control Today.</h2>
        <button className="mt-5 rounded-xl bg-emerald px-6 py-3 font-semibold text-slate-900">Analyze My Spending</button>
        <p className="mt-3 text-sm text-slate-400">Built for India&apos;s UPI generation.</p>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3 className="text-xl font-semibold">Logo Generation Prompt</h3>
        <p className="mt-2 text-sm text-slate-300">"Create a modern fintech logo for RupeeMind. The design should be minimal, intelligent, and premium. Use deep navy background with emerald green accent. Incorporate a subtle circular flow or upward graph element forming an abstract ‘R’. No rupee symbol. No coins. Clean, sharp lines. Professional fintech identity. High trust, minimal, scalable app icon."</p>
      </section>

      <nav className="glass fixed bottom-3 left-1/2 w-[95%] max-w-md -translate-x-1/2 rounded-2xl px-4 py-3 md:hidden">
        <ul className="grid grid-cols-5 text-center text-xs text-slate-300">
          {['Dashboard', 'Insights', 'Rewards', 'Predict', 'Profile'].map((item, index) => (
            <li key={item} className={index === 0 ? 'text-emerald' : ''}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
