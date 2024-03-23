export const removeUrlPrefix = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/www\./g, "");
