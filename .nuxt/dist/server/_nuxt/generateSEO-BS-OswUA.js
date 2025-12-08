import { a as useSeoMeta } from "./v3-CIrZdX_3.js";
const generateSEO = ({ title, description, ogTitle, ogDescription }) => {
  return useSeoMeta({
    title,
    ogTitle: ogTitle ? ogTitle : title,
    description,
    ogDescription: ogDescription ? ogDescription : description
  });
};
export {
  generateSEO as g
};
//# sourceMappingURL=generateSEO-BS-OswUA.js.map
