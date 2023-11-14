import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
export const Client = createClient({
  projectId: "cfuugy91",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(Client);
export const sanityImageUrl = (source: any) => {
  return builder.image(source);
};
