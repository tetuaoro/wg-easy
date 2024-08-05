export default defineEventHandler(async (event) => {
  assertMethod(event, 'POST');
  const clientId = getRouterParam(event, 'clientId');
  if (
    clientId === '__proto__' ||
    clientId === 'constructor' ||
    clientId === 'prototype'
  ) {
    throw createError({ status: 403 });
  }
  await WireGuard.enableClient({ clientId });
  return { success: true };
});
