CroTeak Planner MOBILE BUILD030 PWA

Ovo je instalabilna Android/PWA verzija.

BITNO:
- Ne može se pravo instalirati ako otvaraš HTML preko file:/// na mobitelu.
- Za install treba HTTPS link.

Najlakši test/hosting:
1. Otvori netlify.com i napravi free account ili login.
2. Drag & drop cijeli folder CroTeak_Planner_MOBILE_BUILD030 na Netlify Deploys.
3. Otvori dobiveni HTTPS link na Androidu u Chromeu.
4. Klikni gumb Instaliraj ili Chrome meni (tri točkice) -> Install app / Add to Home screen.

Što je unutra:
- index.html = glavna app stranica za hosting
- CroTeak_Planner_MOBILE_BUILD030.html = isti app file s build imenom
- manifest.webmanifest = PWA install konfiguracija
- service-worker.js = offline/cache shell
- icons/ = app ikone napravljene iz CroTeak loga

Cloud/Supabase ostaje isti kao BUILD029.
Ako updateaš build na istom hostingu, na mobitelu povremeno klikni refresh ili zatvori/otvori app da povuče novu verziju.
