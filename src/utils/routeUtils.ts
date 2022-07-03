export const basePathPrefix = (path: string, appBasePath?: string) => {
  return appBasePath ? `/${appBasePath}${path}` : `${path}`;
};
