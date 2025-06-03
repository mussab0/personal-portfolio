"use client";

import React, { useEffect, useState } from "react";

export default function WhatsappIcon() {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 5000); // Delay by 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showWidget) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div className="elfsight-app-00fbd4ee-c287-44a5-8ca5-3317a368633a" data-elfsight-app-lazy></div>
    </div>
  );
}
