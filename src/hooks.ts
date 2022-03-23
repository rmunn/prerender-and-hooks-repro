import type { Handle, GetSession } from '@sveltejs/kit';

export const handle : Handle = async ({ event, resolve }) => {
  console.log('Handle hook ran for URL', event.url.pathname);
  if (event.request.url.startsWith('/custom')) {
    return new Response('custom response');
  }
 
  const response = await resolve(event);
  return response;
}

export const getSession : GetSession = async (event) => {
  console.log('getSession was called for URL', event.url.pathname)
  return { user: 'Logged-in user' }
}
