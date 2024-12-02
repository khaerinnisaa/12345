import BeritaPage from "./BeritaPage";

// metadata
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const product = await fetch(
    `https://be.genbiuinam.org/api/public/news/${slug}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.image || [];

  return {
    title: product.title,
    openGraph: {
      images: ["/icon.png", ...previousImages],
    },
  };
}

export default function page(props) {
  return <BeritaPage {...props} />;
}
