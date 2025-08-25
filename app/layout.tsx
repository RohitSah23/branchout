import './globals.css';
import type { Metadata } from 'next';
import { Sen } from 'next/font/google';

const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Branchout Consultancy',
  description: 'Branch Out Consultancy Ltd (BOCL) helps students and job seekers achieve global opportunities in Malta. We provide expert guidance in education, career placements, and visa support, bridging talent with international industries for a successful future.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  );
}
