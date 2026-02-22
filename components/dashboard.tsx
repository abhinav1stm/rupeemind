'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const categoryData = [
  { name: 'Food', value: 28 },
  { name: 'Commute', value: 16 },
  { name: 'Rent', value: 30 },
  { name: 'Shopping', value: 12 },
  { name: 'Bills', value: 14 }
];

const monthlyFlow = [
  { label: 'Week 1', spend: 6200, income: 18000 },
  { label: 'Week 2', spend: 9400, income: 18000 },
  { label: 'Week 3', spend: 12400, income: 18000 },
  { label: 'Week 4', spend: 16900, income: 18000 }
];

const pieColors = ['#10B981', '#22D3EE', '#F59E0B', '#0EA5E9', '#475569'];

const rewards = [
  ['Zomato', '₹180', 'UPI Lite + Reward Route'],
  ['Uber', '₹140', 'RuPay credit on UPI'],
  ['Amazon', '₹100', 'Wallet + UPI split']
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {[
          ['Monthly Spend Overview', '₹24,380', '+8.2% vs last month'],
          ['Net Balance Projection', '₹3,720', 'Predicted by month end'],
          ['Spending / Income Ratio', '81%', 'Target below 70%']
        ].map(([label, value, note]) => (
          <article key={label} className="glass metric-glow rounded-2xl p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
            <p className="mt-1 text-xs text-emerald">{note}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-5">
        <article className="glass rounded-2xl p-5 lg:col-span-3">
          <header className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Spending vs Income</h3>
            <span className="text-xs text-slate-400">Updated live</span>
          </header>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyFlow}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="label" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
                <Bar dataKey="income" fill="#22D3EE" radius={6} />
                <Bar dataKey="spend" fill="#10B981" radius={6} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="glass rounded-2xl p-5 lg:col-span-2">
          <h3 className="mb-4 text-lg font-semibold">Category Breakdown</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90}>
                  {categoryData.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="glass rounded-2xl p-5">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-amberMuted">Cash Leak Insight</h4>
          <p className="mt-4 text-lg">You are overspending <span className="text-amberMuted">22%</span> on food delivery.</p>
        </article>
        <article className="glass rounded-2xl p-5">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-cyanSoft">Prediction Panel</h4>
          <p className="mt-4 text-lg">At this pace, your account may drop below <span className="text-cyanSoft">₹2,000</span> by the 24th.</p>
        </article>
        <article className="glass rounded-2xl p-5">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-emerald">Reward Optimization</h4>
          <p className="mt-4 text-lg">Switch merchant payment method and save <span className="text-emerald">₹420</span> this month.</p>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="glass rounded-2xl p-5">
          <header className="mb-4">
            <h3 className="text-lg font-semibold">Smart Rewards</h3>
            <p className="text-sm text-slate-400">Optimized for your spending behavior.</p>
          </header>
          <div className="space-y-3">
            {rewards.map(([merchant, save, option]) => (
              <div key={merchant} className="rounded-xl border border-slate-700 p-4">
                <p className="font-medium">{merchant}</p>
                <p className="text-sm text-slate-400">Potential Savings: <span className="text-emerald">{save}</span></p>
                <p className="text-sm text-slate-300">Best Payment Option: {option}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="glass relative overflow-hidden rounded-2xl p-5">
          <h3 className="text-lg font-semibold">Premium Analytics</h3>
          <p className="text-sm text-slate-400">Advanced forecasting • habit scoring • credit optimization</p>
          <div className="mt-6 h-48 rounded-xl bg-slate-900/80 blur-[1px]" />
          <div className="absolute inset-0 grid place-content-center bg-slate-950/50 text-center">
            <p className="text-xl font-semibold">Unlock RupeeMind Premium</p>
            <p className="mt-1 text-sm text-slate-300">₹149/month • ₹999/year</p>
            <button className="mt-4 rounded-lg bg-emerald px-4 py-2 font-medium text-slate-900">Upgrade for Full Control</button>
          </div>
        </article>
      </section>
    </div>
  );
}
