import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { industries } from "@/content/industries";
import { buildSeo } from "@/lib/seo";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return buildSeo({
      title: "Industry not found",
      description: "The requested industry page is not available.",
      path: `/industries/${slug}`,
      noIndex: true,
    });
  }

  return buildSeo({
    title: industry.title,
    description: `${industry.summary} Volume: ${industry.typicalVolume} Fill speed: ${industry.fillSpeed}`,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailsPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <h1>{industry.title}</h1>
      <p className="text-measure mt-6 text-muted-foreground">{industry.summary}</p>
    </section>
  );
}
