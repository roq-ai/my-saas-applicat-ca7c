const mapping: Record<string, string> = {
  blockchains: 'blockchain',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
