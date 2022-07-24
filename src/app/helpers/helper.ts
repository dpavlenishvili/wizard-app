export const getActionName = (stateName: string) => (
  actionName: string
): string => `[${stateName}] ${actionName}`;
