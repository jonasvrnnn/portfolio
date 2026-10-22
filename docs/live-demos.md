# Projecten werkend tonen

Gebruik een eigen demo-URL per project. Het portfolio toont dan **Bekijk live demo** op de projectkaart en detailpagina, naast de link naar de code. Zonder URL blijft de demoknop verborgen. De projecten worden in een nieuw tabblad geopend.

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

Controleer na deployment op desktop en mobiel: koffies laden, een detailpagina openen, een favoriet bewaren, een bestelling toevoegen en aantallen aanpassen. Ververs ook een subpagina. Favorieten en bestellingen gebruiken lokale opslag; het gaat om een bestellijst, zonder betaling.

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

Er zijn tijdens dit onderzoek geen deployments aangemaakt of wijzigingen naar de twee projectrepositories gepusht. Het portfolio is voorbereid op de URL's; publicatie vereist nog je accounts bij de gekozen hosts en de genoemde fixes in het schoolproject.
