# Prerendering and getSession repro

To reproduce:

1. `pnpm i`
1. `pnpm run dev`
1. Go to http://localhost:3000/
1. Check server console logs
1. Click on the "user page" link
1. Check server console logs

**Expected**: "getSession was called for URL /userpage"
**Actual**: "getSession was called for URL /"
