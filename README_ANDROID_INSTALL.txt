CroTeak Planner MOBILE BUILD065 PWA

Ovo je instalabilna Android/PWA verzija.

BITNO:
- Ne može se pravo instalirati ako otvaraš HTML preko file:/// na mobitelu.
- Za install/update treba HTTPS link.

Tvoj workflow:
1. Kopiraš sadržaj ovog foldera u GitHub repo.
2. Netlify/hosting automatski deploya novi build.
3. Na mobitelu otvoriš app i klikneš Cloud -> Provjeri update appa ili zatvori/otvori app.
4. Kad se pojavi poruka Nova verzija je spremna, klikni Ažuriraj.

Što je unutra:
- index.html = glavna app stranica za hosting
- CroTeak_Planner_MOBILE_BUILD065.html = isti app file s build imenom
- manifest.webmanifest = PWA install konfiguracija
- service-worker.js = offline/cache/update shell
- icons/ = app ikone
- samples/ = 24 odvojena NC color samplea: palette sheet + physical sample reference

BUILD065:
- dodan modul Color Samples / Palete s 24 NC kodova
- nazivi su standardizirani/čišći za app, ali original label je sačuvan u detalju samplea
- svaki sample ima dvije slike: čisti palette crop i fizički sample crop
- u poslu se Boja materijala može odabrati po NC kodu preko datalista ili iz paleta
- detalj posla prikazuje povezanu paletu i fizički sample
- dodana lokalna Narudžba boja s +/- količinama i kopiranjem teksta za Melors Marine Deck Factory
- JSON backup sada uključuje color_samples i sample_order
- service worker cache dignut na croteak-mobile-build065-v1
- Cloud/Supabase, schema v3 i localStorage key nisu dirani da podaci ostanu sigurni
