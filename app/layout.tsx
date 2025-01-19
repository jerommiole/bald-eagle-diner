import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Bald Eagle Diner",
  description: "A Taste of Classic Americana!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
