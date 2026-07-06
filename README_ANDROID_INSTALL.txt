CroTeak Planner MOBILE BUILD033 PWA

Ovo je instalabilna Android/PWA verzija.

BITNO:
- Ne može se pravo instalirati ako otvaraš HTML preko file:/// na mobitelu.
- Za install/update treba HTTPS link.

Tvoj workflow:
1. Kopiraš sadržaj ovog foldera u GitHub repo.
2. Netlify/hosting automatski deploya novi build.
3. Na mobitelu otvoriš app i klikneš Cloud -> Provjeri update appa ili samo zatvori/otvori app.
4. Kad se pojavi poruka Nova verzija je spremna, klikni Ažuriraj.

Što je unutra:
- index.html = glavna app stranica za hosting
- CroTeak_Planner_MOBILE_BUILD033.html = isti app file s build imenom
- manifest.webmanifest = PWA install konfiguracija
- service-worker.js = offline/cache/update shell
- icons/ = app ikone

BUILD033:
- totalni makeup mobilnog sučelja: čišći premium izgled, manji razmaci, moderniji header, kartice i donja navigacija
- poslovi su smanjeni u compact listu bez velike slike i bez velike finance-row sekcije
- na jednom ekranu se vidi više poslova odjednom
- gornji dio Dashboarda je smanjen: Aktivni poslovi / Čeka sync / Ukupno ponude / Za naplatiti sada su 4 mala compact polja
- Home lista sada može prikazati do 50 aktivnih poslova, ne samo 12
- service worker cache dignut na croteak-mobile-build033-v1
- Cloud/Supabase, schema v3 i localStorage key nisu dirani da podaci ostanu sigurni
