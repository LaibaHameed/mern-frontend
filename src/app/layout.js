import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/redux/provider';
import { ToastContainer } from 'react-toastify';
import AuthGuard from '@/components/layouts/guards/authGuard';
import WhatsAppButton from '@/components/layouts/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hommy Decor',
  description: 'Ecom web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AuthGuard>
            <ToastContainer
              autoClose={3000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <WhatsAppButton>
              {children}
            </WhatsAppButton>
          </AuthGuard>
        </ReduxProvider>
      </body>
    </html>
  );
}
