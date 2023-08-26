const mapping: Record<string, string> = {
  agents: 'agent',
  invitations: 'invitation',
  officers: 'officer',
  operations: 'operation',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
