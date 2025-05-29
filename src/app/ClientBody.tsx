"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set dark mode by default and apply Montserrat font
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased dark font-montserrat";
  }, []);

  return <div className="antialiased dark">{children}</div>;
}
