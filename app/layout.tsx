import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import SiteHeader from "./components/site-header";
import contentfulClient from "@/util/contentful/contentfulClient";
import { PageSkeleton } from "@/util/contentful/types";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title:
    "The International Association of Facial Growth Guidance (Orthotropics®) - Orthotropics",
  description:
    "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
  alternates: {
    canonical: process.env.BASE_URL,
  },
  keywords: ["Orthotropics", "orthodontics", "Mike Mew"],
  openGraph: {
    title:
      "The International Association of Facial Growth Guidance (Orthotropics®) - Orthotropics",
    images: ["https://orthotropics.vercel.app/images/ogimage.png"],
    description:
      "The IAFGG represents all those clinicians and technicians who believe that ideal development of the face and jaws is dependent on correct ‘oral posture’.",
    type: "website",
    url: process.env.BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    creator: "Orthotropics",
  },
};

const fetchPages = async () => {
  const contentful = contentfulClient({ preview: false });
  const pages = await contentful.getEntries<PageSkeleton>({
    content_type: "pages",
    order: ["sys.createdAt"],
  });
  return pages.items;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await fetchPages();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${sourceSans.variable}`}
    >
      <body className="bg-brand-lightGreen-10">
        <Suspense>
          <SiteHeader pages={pages} />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
