import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advancedresuscitation.co.uk"),
  title: "Advanced Resuscitation Training | UK Life Support & Dental CPR",
  description:
    "Practical, evidence-led resuscitation training for dental teams and healthcare professionals, delivered by experienced clinical educators.",
  keywords: [
    "ILS course Southampton",
    "Immediate Life Support UK",
    "Dental CPR training Hampshire",
    "Medical emergencies in dental practice CPD",
    "PILS training",
    "BLS resuscitation course"
  ],
  authors: [{ name: "Advanced Resuscitation Training Ltd" }],
  icons: {
    icon: "/images/artl-logo.png",
    shortcut: "/images/artl-logo.png",
    apple: "/images/artl-logo.png",
  },
  openGraph: {
    title: "Advanced Resuscitation Training (ART)",
    description: "Practical life-support training for dental and healthcare professionals.",
    type: "website",
    locale: "en_GB",
    siteName: "Advanced Resuscitation Training Ltd"
  },
  robots: {
    index: true,
    follow: true
  }
};

import { CustomCursor } from "@/components/ui/CustomCursor";
import { SiteLoadingScreen } from "@/components/ui/SiteLoadingScreen";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <Script
          id="strip-ext-attrs"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var removeExtAttrs = function(node) {
                    if (node && node.nodeType === 1) {
                      if (node.hasAttribute('bis_skin_checked')) node.removeAttribute('bis_skin_checked');
                      if (node.querySelectorAll) {
                        var els = node.querySelectorAll('[bis_skin_checked]');
                        for (var i = 0; i < els.length; i++) {
                          els[i].removeAttribute('bis_skin_checked');
                        }
                      }
                    }
                  };
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked') {
                        m.target.removeAttribute('bis_skin_checked');
                      } else if (m.type === 'childList') {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                          removeExtAttrs(m.addedNodes[j]);
                        }
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    childList: true,
                    attributeFilter: ['bis_skin_checked']
                  });
                  window.addEventListener('DOMContentLoaded', function() {
                    removeExtAttrs(document.documentElement);
                  });
                  window.addEventListener('load', function() {
                    setTimeout(function() { observer.disconnect(); }, 3500);
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
        <link rel="icon" type="image/png" href="/images/artl-logo.png" />
        <link rel="shortcut icon" href="/images/artl-logo.png" />
        <link rel="apple-touch-icon" href="/images/artl-logo.png" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white text-[#0B1720] antialiased font-sans"
      >
        <SiteLoadingScreen />
        <CustomCursor />
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#087F8C] text-white px-4 py-2 rounded-md font-medium text-xs shadow-md"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
