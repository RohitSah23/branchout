import './globals.css';
import type { Metadata } from 'next';
import { Sen } from 'next/font/google';
import Logo from './assets/Logo.png'; 

const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Branchout Consultancy',
  description:
    'Branch Out Consultancy Ltd (BOCL) helps students and job seekers achieve global opportunities in Malta. We provide expert guidance in education, career placements, and visa support, bridging talent with international industries for a successful future.',
  openGraph: {
    title: 'Branchout Consultancy',
    description:
      'Branch Out Consultancy Ltd (BOCL) helps students and job seekers achieve global opportunities in Malta.',
    url: 'https://branchoutco.com', 
    siteName: 'Branchout Consultancy',
    images: [
      {
        url: Logo.src, 
        width: 800,
        height: 600,
        alt: 'Branchout Consultancy Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branchout Consultancy',
    description:
      'Achieve global opportunities in Malta with Branch Out Consultancy Ltd.',
    images: [Logo.src],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sen.className} scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
