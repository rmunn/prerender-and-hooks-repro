<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
  import { session } from '$app/stores'

  export const load: Load = async ({ props }) => {
    console.log('load function of user page');
    return { props };
  }
</script>

<p>This is a user page that would have custom content for logged-in users.</p>
<p>Session content: {JSON.stringify($session)}</p>
