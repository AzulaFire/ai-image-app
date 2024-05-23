import 'photoswipe/dist/photoswipe.css';
import './globals.css';

export const metadata = {
  title: 'Text-to Image App',
  description: 'NextJS Project using AI with text to create images.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
