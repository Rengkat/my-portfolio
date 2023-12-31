import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import { Image } from "../src/Types";
export const Client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(Client);
export const sanityImageUrl = (source: Image) => {
  return builder.image(source);
};
