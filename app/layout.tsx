import './globals.css';
import type { Metadata } from 'next';

// This metadata helps your site look professional when shared on LinkedIn or WhatsApp
export const metadata: Metadata = {
  title: 'Nyio Corp | Premium Apparel Sourcing & Manufacturing',
  description: 'Global manufacturing scale for visionary apparel brands. Specializing in high-GSM streetwear and premium essentials.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* We remove "bg-black" here so that the "background-color: var(--color-brand-cream)" 
        defined in your globals.css can take over. 
      */}
      <body className="antialiased selection:bg-brand-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}