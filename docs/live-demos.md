# Projecten werkend tonen

Gebruik een eigen demo-URL per project. Het portfolio sluit de demo rechtstreeks in op de homepage en detailpagina. Koffie verschijnt als **mobiele app in een telefoonframe**; de full-stacksite in een browserframe. De bezoeker blijft in het portfolio. Zonder URL toont het frame duidelijk dat de interactieve demo nog niet beschikbaar is. Alleen de aparte codelink opent GitHub.

Het telefoonframe gebruikt de webexport van dezelfde Expo-app en is geen native Android/iOS-emulator. Voor echte native functies is een aparte emulatordienst nodig. De categorie en projectfilter voor Koffie zijn **App**.

De full-stackdemo behoudt een desktopviewport van 1440 × 900 pixels. Het iframe wordt als geheel verkleind naar de beschikbare breedte, met dezelfde verhoudingen op de homepage, detailpagina en mobiel. Daardoor schakelt de schoolsite niet over naar een smalle mobiele indeling. Klikken, formulieren en scrollen blijven mogelijk; Koffie houdt zijn eigen telefoonviewport.

## 1. Koffie → Vercel

Repository: https://github.com/jonasvrnnn/koffie

Dit is een Expo SDK 54 / React Native-app met webondersteuning. De webexport is succesvol uitgevoerd met de bestaande lockfile:

```sh
npm ci
npx expo export --platform web
```

Maak in Vercel een project aan door deze repository te importeren:

| Instelling | Waarde |
| --- | --- |
| Framework preset | Other |
| Root directory | Repository-root |
| Install command | `npm ci` |
| Build command | `npx expo export --platform web` |
| Output directory | `dist` |

De huidige export is een single-page app. Voeg in de **Koffie-repository** een `vercel.json` toe zodat rechtstreeks openen of verversen van bijvoorbeeld `/favorites` ook werkt:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Controleer na deployment op desktop en mobiel: koffies laden, een detailpagina openen, een favoriet bewaren, een bestelling toevoegen en aantallen aanpassen. Ververs ook een subpagina. Test deze acties zowel rechtstreeks als in het telefoonframe van het portfolio. Favorieten en bestellingen gebruiken lokale opslag; het gaat om een bestellijst, zonder betaling.

**Nog te controleren:** de app gebruikt `sampleapis.assimilate.be` voor warme en koude koffies. Het cloudnetwerk blokkeerde deze bestemming met HTTP 403, waardoor bereikbaarheid en browser-CORS niet zijn vastgesteld. Een geslaagde export bewijst dus nog geen werkende koffielijst. `expo-notifications` wordt bij bestellen aangeroepen; controleer dit in de webdemo en voeg zo nodig in de Koffie-repository een webfallback toe. Native notificaties zijn geen vereiste voor een browserdemo.

## 2. Schoolproject → Render + MongoDB Atlas

Repository: https://github.com/jonasvrnnn/project-webontwikkeling-2025

Dit is een TypeScript/Express-app met EJS-templates, MongoDB, registratie, login en beheerdersfuncties. GitHub Pages kan deze server niet uitvoeren. Gebruik een Render **Web Service** en een aparte MongoDB Atlas-database met uitsluitend demodata.

De huidige repository is nog niet klaar voor deployment. `npm ci` slaagt, maar `npm start` stopt omdat `ts-node` ontbreekt. Bereid in de **schoolproject-repository** eerst deze wijzigingen voor:

1. Voeg `tsx` toe als dependency (`npm install tsx`) en maak het productie-startscript `tsx index.ts`. Houd nodemon eventueel in een apart ontwikkelscript.
2. Vervang de vaste poort door `app.set("port", Number(process.env.PORT) || 3000)`.
3. Verwijder in `database.ts` de logs van gebruikersnamen, wachtwoorden en volledige gebruikersdocumenten. Publiceer de huidige versie niet met echte credentials.
4. Laat de applicatie stoppen als de databaseverbinding of initialisatie mislukt. Nu vangt `connect()` fouten af en kan de server toch starten.

Vervolgens zijn dit de Render-instellingen:

| Instelling | Waarde |
| --- | --- |
| Runtime | Node |
| Root directory | Repository-root |
| Build command | `npm ci` |
| Start command | `npm start` (na bovenstaande wijziging) |
| Health check path | `/login` |

Configureer deze variabelen uitsluitend via de beveiligde instellingen van de host:

| Variabele | Doel |
| --- | --- |
| `MONGODB_URI` | Atlas-connectiestring voor de demodatabase |
| `SESSION_SECRET` | Lange willekeurige sessiesleutel |
| `ADMIN_USERNAME`, `ADMIN_PASSWORD` | Aanmaken van een demo-beheerder bij de eerste start |
| `USER_USERNAME`, `USER_PASSWORD` | Aanmaken van een gewone demogebruiker bij de eerste start |

De code gebruikt de database `bible`; geef de databasegebruiker alleen toegang tot deze demodatabase. Sta in Atlas de uitgaande adressen van de Render-service toe. De eerste start haalt boeken en categorieën op uit de GitHub-repository `jonasvrnnn/data`. Houd beheerderscredentials privé; bezoekers kunnen registreren of een gewone demo-account gebruiken.

Controleer na deployment: `/login`, registratie, inloggen, boeken zoeken/filteren en sessiebehoud. Gebruik de uiteindelijke URL met `/login` als demo-URL. Databasewerking en deze gebruikersflows zijn hier nog niet getest, omdat geen Atlas-database of hostingaccount beschikbaar is. Controleer de actuele tarieven en beperkingen van de hostingdiensten voordat je een plan kiest.

## 3. Demo's aan het portfolio koppelen

Zodra de deployments werken, voeg je bij de hosting van **dit portfolio** deze variabelen toe:

```dotenv
NEXT_PUBLIC_KOFFIE_DEMO_URL=https://jouw-koffie-demo.vercel.app
NEXT_PUBLIC_WEBONTWIKKELING_DEMO_URL=https://jouw-schoolproject.onrender.com/login
```

Dit zijn voorbeeldadressen: vervang ze door de echte, geteste HTTPS-URL's. Lokaal kun je ze in het genegeerde `.env.local` zetten. De waarden zijn openbaar en mogen geen wachtwoorden of tokens bevatten. Bouw en deploy het portfolio opnieuw na het instellen of wijzigen; Next.js neemt deze waarden tijdens de build op.

### Insluiten en inloggen

Koffie laadt rechtstreeks vanaf zijn demohost. Die host moet het portfolio toestemming geven om de demo in een iframe te laden: `X-Frame-Options: DENY` of `SAMEORIGIN` blokkeert insluiten vanaf een ander domein. Gebruik zo nodig een Content Security Policy met `frame-ancestors` voor de exacte HTTPS-origin van je portfolio. Voeg die origin toe aan een bestaande policy in plaats van andere beveiligingsregels te overschrijven. De schooldemo laadt via de hieronder beschreven proxy onder het portfolio-domein; daarvoor is `SAMEORIGIN` wel geschikt. `DENY` blokkeert ook die demo. Deze headers blijven behouden; het portfolio verwijdert ze niet.

De frames staan scripts, formulieren en de eigen origin toe, maar geen pop-ups of navigatie van het bovenliggende portfolio. Test ook of links en externe loginflows van de projecten daarmee werken.

De Express-demo wordt via **hetzelfde portfolio-domein** geladen op `/demo/boeken`. `next.config.ts` geeft alleen de bekende schoolroutes (`/login`, `/register`, `/logout`, `/home`, `/book-detail`, `/category`, `/category-detail` en `/style.css`) door aan de ingestelde host. Daardoor werken de bestaande formulieracties en redirects en blijft de sessiecookie first-party. Het portfolio moet hiervoor op een host met ondersteuning voor Next.js-serverrewrites draaien, bijvoorbeeld Vercel; een statische export volstaat niet. Houd deze routes vrij voor de schooldemo. De homepage, projectpagina's en Koffie worden niet doorgestuurd.

Behoud `NEXT_PUBLIC_WEBONTWIKKELING_DEMO_URL` als de volledige externe login-URL en bouw/deploy het portfolio opnieuw na de wijziging. Gebruik uitsluitend de vertrouwde host van je eigen schoolproject: de ingesloten site wordt nu onder je portfolio-origin uitgevoerd. De huidige Express-cookie heeft geen vaste `Domain`; stel die niet op het Render-domein in, want dan kan de browser hem via het portfolio-domein niet bewaren. Als je later een eigen cookie-domein of absolute redirects toevoegt, controleer die opnieuw voor deze proxyroute. De proxy verandert geen accountgegevens en maakt geen nieuwe sessie-opslag aan.

Controleer registratie, inloggen, verversen, sessiebehoud, filters en uitloggen echt vanuit het ingebouwde venster; een werkende losse loginpagina is onvoldoende. Controleer ook dat een verkeerd wachtwoord een foutmelding toont en geen sessie opent. Koffie blijft rechtstreeks via zijn eigen demo-URL laden.

Er zijn tijdens dit onderzoek geen deployments aangemaakt of wijzigingen naar de twee projectrepositories gepusht. Het portfolio is voorbereid op de URL's; publicatie vereist nog je accounts bij de gekozen hosts en de genoemde fixes in het schoolproject.
