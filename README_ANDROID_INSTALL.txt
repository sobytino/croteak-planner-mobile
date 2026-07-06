CroTeak Planner MOBILE BUILD032 PWA

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
- CroTeak_Planner_MOBILE_BUILD032.html = isti app file s build imenom
- manifest.webmanifest = PWA install konfiguracija
- service-worker.js = offline/cache/update shell
- icons/ = app ikone

BUILD032:
- ispravljene interne build oznake na MOBILE_BUILD032_PWA
- bolji PWA/GitHub update flow: update banner + gumb Provjeri update appa
- service worker ima novi cache croteak-mobile-build032-v1
- HTML se vuče network-first da mobitel ne ostane zalijepljen na starom buildu
- popravljeno da header/search ne bježi na uskim mobitelima
- Cloud/Supabase i localStorage key nisu dirani da podaci ostanu sigurni
