import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
import MotionWrapper from './Components/MotionWrapper';
export const metadata = {
  title: 'Server Action',
  description: 'Server Action NextJs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="text-black bg-white dark:bg-black dark:text-white capitalize">
        <MotionWrapper>
          {children}
          <ToastContainer
            transition={Zoom}
            position="top-center"
            autoClose={1000}
            closeOnClick={true}
            draggable={true}
            pauseOnHover={false}
            style={{ textAlign: 'justify', fontSize: '1rem' }}
          />
        </MotionWrapper>
      </body>
    </html>
  );
}
