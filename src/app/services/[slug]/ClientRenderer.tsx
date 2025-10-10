"use client";

import dynamic from "next/dynamic";

const CloudSolutions = dynamic(() => import("../components/CloudSolutions"));
const Automation = dynamic(() => import("../components/Automation"));
const DataScience = dynamic(() => import("../components/datascience"));
const SoftwareDevelopment = dynamic(() => import("../components/softwaredevelopment"));
const TechConsulting = dynamic(() => import("../components/techconsulting"));
const WebAppDevelopment = dynamic(() => import("../components/webappdevelopment"));

export default function ClientRenderer({ slug }: { slug: string }) {
  switch (slug) {
    case "cloud-solutions":
      return <CloudSolutions />;
    case "automation-scripting":
      return <Automation />;
    case "software-development":
      return <SoftwareDevelopment />
    case "web-app-development":
      return <WebAppDevelopment />
    case "data-science-analysis":
      return <DataScience />
    case "tech-consulting":
      return <TechConsulting />
    default:
      return <div>Service not found</div>;
  }
}
