import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RupeeMind — Financial Intelligence Command Center',
  description:
    'RupeeMind analyzes UPI spending, predicts cash flow, and reveals your hidden money leaks.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
