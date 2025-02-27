import {Inter} from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/redux/provider';
import {ToastContainer} from 'react-toastify';
import AuthGuard from '@/components/layouts/guards/authGuard';
import ClientLayout from './ClientLayout';

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
          <AuthGuard>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <ClientLayout>
            {children}
            </ClientLayout>
          </AuthGuard>
        </ReduxProvider>
      </body>
    </html>
  );
}
