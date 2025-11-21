import Navbar from '@/components/Navbar';
import './globals.css';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'Commercial LPG Agency Hyderabad | Commercial Gas Supply',
  description:
    'Reliable commercial LPG gas supply in Hyderabad for restaurants, hotels, cloud kitchens, canteens and industries. On-time delivery, safety-compliant installations and bulk LPG solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-slate-50 text-slate-800'>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
