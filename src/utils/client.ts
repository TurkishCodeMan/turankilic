import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "7m1s6abz", // you can find this in sanity.json
  dataset: "turankilic", // or the name you chose in step 1,
  token:process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
});

export function urlFor(source:string) {
  return imageUrlBuilder(client).image(source);
}
