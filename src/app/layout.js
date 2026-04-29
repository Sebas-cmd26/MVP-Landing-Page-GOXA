import { Playfair_Display, Poppins } from 'next/font/google'
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: "GOXA – Lo Natural Sabe Mejor",
  description: "Café de altura, miel multifloral y yogurt natural de Oxapampa. Sin conservantes. Recibe 15% de descuento en tu primer pedido.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
