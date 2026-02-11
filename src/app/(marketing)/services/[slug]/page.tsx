import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { services } from "@/content/services";
import { buildSeo } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return buildSeo({
      title: "Service not found",
      description: "The requested service page is not available.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildSeo({
    title: service.title,
    description: `${service.summary} SLA: ${service.sla} Timeline: ${service.timeline}`,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <h1>{service.title}</h1>
      <p className="text-measure mt-6 text-muted-foreground">{service.summary}</p>
    </section>
  );
}
