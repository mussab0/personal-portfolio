import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import WhatsappIcon from "@/components/whatsapp-icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mussab Hanif | Full-Stack Developer",
  description: "Mussab is a professional freelance full-stack developer specializing in React, VueJS, Next.js, Laravel, and React Native.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mussab Hanif",
            "url": "https://mussabhanif.website",
            "image": "https://mussabhanif.website/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmussab.56de077b.jpg&w=384&q=95", // optional, if you have one
            "sameAs": [
              "https://github.com/mussabhanif",
              "https://linkedin.com/in/mussabhanif"
            ],
            "jobTitle": "Software Engineer / Full-Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Self-Employed"
            },
            "knowsAbout": [
              "React", "Next.js", "Vue.js", "Laravel", "Firebase", "React Native", 
            ],
            "description": "Mussab is a professional full-stack developer with 5 years of experience building modern web and mobile applications.",
            "birthDate": "2005-11-03",
            "nationality": "Pakistani"
          })
        }} />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
            <WhatsappIcon/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
