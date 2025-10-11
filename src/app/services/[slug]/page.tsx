// import { notFound } from "next/navigation";
// import ClientRenderer from "./ClientRenderer";
// import type { Metadata } from "next";

// interface ServicePageParams {
//   slug: string;
// }

// interface ServicePageProps {
//   params: ServicePageParams;
// }

// export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
//   const titles: Record<string, string> = {
//     "cloud-solutions": "Cloud Solutions | L.A. Apex Technologies",
//     "automation-scripting": "Automation & Scripting | L.A. Apex Technologies",
//     "software-development": "Software Development | L.A. Apex Technologies",
//     "web-app-development": "Web App Development | L.A. Apex Technologies",
//     "data-science-analysis": "Data Science & Analysis | L.A. Apex Technologies",
//     "tech-consulting": "Tech Consulting | L.A. Apex Technologies",
    
//   };

//   return {
//     title: titles[params.slug] || "Service | L.A. Apex Technologies",
//     description: "Explore our professional services and technology solutions.",
//   };
// }

// export default function ServicePage({ params }: ServicePageProps) {  

//   const validSlugs = [
//     "cloud-solutions", 
//     "automation-scripting",
//     "software-development",
//     "web-app-development",
//     "data-science-analysis",
//     "tech-consulting"

//   ];
//   if (!validSlugs.includes(params.slug)) notFound();

//   return <ClientRenderer slug={params.slug} />;
// }



import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ClientRenderer from "./ClientRenderer";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;

  const titles: Record<string, string> = {
    "cloud-solutions": "Cloud Solutions | L.A. Apex Technologies",
    "automation-scripting": "Automation & Scripting | L.A. Apex Technologies",
    "software-development": "Software Development | L.A. Apex Technologies",
    "web-app-development": "Web App Development | L.A. Apex Technologies",
    "data-science-analysis": "Data Science & Analysis | L.A. Apex Technologies",
    "tech-consulting": "Tech Consulting | L.A. Apex Technologies",
  };

  return {
    title: titles[resolvedParams.slug] || "Service | L.A. Apex Technologies",
    description: "Explore our professional services and technology solutions.",
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  const validSlugs = [
    "cloud-solutions",
    "automation-scripting",
    "software-development",
    "web-app-development",
    "data-science-analysis",
    "tech-consulting",
  ];

  if (!validSlugs.includes(resolvedParams.slug)) notFound();

  return <ClientRenderer slug={resolvedParams.slug} />;
}

