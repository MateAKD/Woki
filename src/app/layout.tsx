import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Providers } from "./providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zurdo Web",
  description: "Comprá productos de Zurdo por internet. Tenemos woks especiales y más. Hacé tu pedido y pagalo online.",
  icons: {
    icon: "/ZURDO LOGO.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${montserrat.variable}`}
      lang="es"
    >
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <ClientBody>
          <Providers>
            {children}
          </Providers>
        </ClientBody>
      </body>
    </html>
  );
}
