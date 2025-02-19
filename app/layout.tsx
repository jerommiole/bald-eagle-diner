import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Bald Eagle Diner",
  description: "A Taste of Classic Americana!",
  metadataBase: new URL("https://baldeaglediner.com"),
  twitter: {
    card: "summary",
    site: "@baldeaglediner",
    title: "Bald Eagle Diner | A Taste of Classic Americana!",
    description:
      "Welcome to Bald Eagle Diner. Enjoy our delicious menu, great atmosphere, and classic American dining experience.",
    images: ["/assets/banner/bed-thumb.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: ["/assets/banner/bed-thumb.jpg"],
  },
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
