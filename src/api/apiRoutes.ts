const apiRoutes = {
  blog: (username: string): string => `/articles?username=${username}`,
};

export { apiRoutes };
