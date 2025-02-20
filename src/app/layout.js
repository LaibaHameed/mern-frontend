import {Inter} from 'next/font/google';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import './globals.css';
import ReduxProvider from '@/redux/provider';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Botanical',
  description: 'Ecom web app',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
