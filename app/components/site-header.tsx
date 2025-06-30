"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Header from "./header";
import Hero from "./hero";
import Navbar from "./navbar";
import Image from "next/image";

interface PageProps {
  pages: any;
}

const SiteHeader = ({ pages }: PageProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = pages?.find(
    (page: any) => `/${page.fields.slug}` === pathname
  );

  return (
    <div className={`relative ${pathname !== "/" ? "overflow-hidden" : ""}`}>
      <Image
        priority={true}
        src="/images/bg-logo-large.svg"
        alt="Hero illustration"
        width={573}
        height={848}
        className="absolute right-0 z-[-1]"
      />
      <Header />
      <Navbar pathname={pathname} />
      <Hero
        title={
          pathname === "/mewing"
            ? "What is Mewing?"
            : pathname === "/themightyme"
            ? "What is MightyMe?"
            : pathname.includes("search") && searchParams.get("query") !== ""
            ? `Showing results for "${searchParams.get("query")}"`
            : currentPage?.fields.title
        }
        description={
          currentPage?.fields.shortDescription || pathname === "/discover"
            ? "Practical guidance about Orthotropics."
            : pathname === "/education"
            ? "Educational information about Orthotropics."
            : pathname === "/science"
            ? "Following the data on Orthotropics."
            : ""
        }
      />
    </div>
  );
};

export default SiteHeader;