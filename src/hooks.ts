import type { Handle, GetSession } from '@sveltejs/kit';

export const handle : Handle = async ({ event, resolve }) => {
  console.log('Handle hook ran for event', event);
  if (event.request.url.startsWith('/custom')) {
    return new Response('custom response');
  }
 
  const response = await resolve(event);
  return response;
}

export const getSession : GetSession = async () => {
  return { user: 'Logged-in user' }
}
