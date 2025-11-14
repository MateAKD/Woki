"use client";

import Header from "./header";
import Footer from "./footer";
import WhatsappButton from "./whatsapp-button";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-[#1a513c] text-white">
        {children}
      </main>
      <Footer />
      {/* WhatsappButton with white icon */}
      <WhatsappButton />
    </div>
  );
}
