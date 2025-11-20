import { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://ihda-anwari.vercel.app";
const siteName = "Ihda Anwari - Portfolio";
const defaultDescription =
  "Frontend Engineer with 3+ years of experience in React, Next.js, and modern web technologies. Building high-performance web interfaces with AI integration.";

export interface MetadataOptions {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function generateMetadata(options: MetadataOptions): Metadata {
  const {
    title,
    description = defaultDescription,
    image = `${baseUrl}/logo.png`,
    url,
    type = "website",
    publishedTime,
    modifiedTime,
    authors = ["Ihda Anwari"],
    tags = [],
  } = options;

  const fullTitle = `${title} | ${siteName}`;
  const pageUrl = url || baseUrl;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [
      "Ihda Anwari",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "Web Developer",
      "Portfolio",
      ...tags,
    ].join(", "),
    authors: authors.map((name) => ({ name })),
    creator: "Ihda Anwari",
    publisher: "Ihda Anwari",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: type === "article" ? "article" : "website",
      url: pageUrl,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@ihda06", // Update with actual Twitter handle if available
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  // Add article-specific metadata
  if (type === "article") {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: authors,
      tags: tags,
    };
  }

  return metadata;
}

export function generateStructuredData(
  type: "Person" | "Article" | "CreativeWork",
  data: Record<string, any>
) {
  const baseStructuredData: Record<string, any> = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case "Person":
      return {
        ...baseStructuredData,
        "@type": "Person",
        name: data.name || "Ihda Anwari",
        jobTitle: data.jobTitle || "Frontend Engineer",
        url: baseUrl,
        sameAs: [
          "https://github.com/ihda06",
          "https://www.linkedin.com/in/ihda06/",
          "https://www.instagram.com/ihda.anwari/",
        ],
        description: data.description || defaultDescription,
        ...data,
      };

    case "Article":
      return {
        ...baseStructuredData,
        "@type": "Article",
        headline: data.headline,
        description: data.description,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
          "@type": "Person",
          name: "Ihda Anwari",
          url: baseUrl,
        },
        publisher: {
          "@type": "Person",
          name: "Ihda Anwari",
        },
        ...data,
      };

    case "CreativeWork":
      return {
        ...baseStructuredData,
        "@type": "CreativeWork",
        name: data.name,
        description: data.description,
        image: data.image,
        creator: {
          "@type": "Person",
          name: "Ihda Anwari",
        },
        ...data,
      };

    default:
      return baseStructuredData;
  }
}
