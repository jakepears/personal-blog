import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import NavbarAlt from "@/components/navbaralt";

export async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // metadataBase: new URL(settings.url),
    title: {
      default: settings?.title || "Jake&apos;s Blog",
      template: "%s | Jake"
    },
    description:
      settings?.description ||
      "Pearson",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Jake Pearson" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Jake's Blog",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <NavbarAlt {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
