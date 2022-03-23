/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  console.log('Handle hook ran for event', event);
  if (event.request.url.startsWith('/custom')) {
    return new Response('custom response');
  }
 
  const response = await resolve(event);
  return response;
}
