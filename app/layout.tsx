import "./globals.css";
import { Kanit } from "next/font/google";
import { Toaster } from "react-hot-toast";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Mussab — 3D Creator",
  description:
    "Mussab — a 3D creator driven by crafting striking and unforgettable projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mussab Hanif",
              url: "https://mussabhanif.website",
              image: "https://mussabhanif.website/mussab.jpg",
              sameAs: [
                "https://github.com/mussabhanif",
                "https://linkedin.com/in/mussabhanif",
                "https://www.instagram.com/mussabhanif",
                "https://twitter.com/mussabhanif",
              ],
              jobTitle: "3D Creator",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Self-Employed",
              },
              description:
                "Mussab is a 3D creator driven by crafting striking and unforgettable projects.",
            }),
          }}
        />
      </head>
      <body
        className={`${kanit.className} bg-[#0C0C0C] text-[#D7E2EA]`}
        style={{ overflowX: "clip" }}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
