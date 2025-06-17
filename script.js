document.addEventListener('DOMContentLoaded', () => {
  window.navigate = function (page) {
    document.querySelectorAll('.dropdown').forEach(menu => menu.classList.add('hidden'));

    const main = document.getElementById('main-content');
    if (!main) return;

    const pageInfo = {
      home: {
  title: 'Vili-Fly',
  image: 'logo-page.png',
  text: `
    <section class="intro-home">
      <h1>Bienvenue chez <span class="vf">Vili‑Fly</span> !</h1>
      <p>Association de passionné·e·s d’aérospatial et d’aéronautique, nous concevons
      et expérimentons fusées, modules atmosphériques et avions futuristes.
      Rejoignez l’aventure !</p>
    </section>

    <section class="home-photos">
      <h2>📸 Nos dernières photos</h2>
      <div id="latest-photos" class="gallery">
        <img src="img/courbe1-karman1.png" >
        <p>Courbe Karman-1</p>
      </div>
    </section>

    <section class="home-news">
      <h2>📰 Actualités</h2>
      <article class="news-item">
        14 juin 2025 – Premier essai moteur <em>Flat‑6 hydro</em> terminé avec succès !
      </article>
      <article class="news-item">
        3 mai 2025 – Partenariat avec l’IUT de Toulouse pour des charges utiles étudiantes.
      </article>
      <article class="news-item">
        22 mars 2025 – Assemblage du 1ᵉʳ module <strong>Spoutnik</strong> terminé.
      </article>
    </section>
  `
},
      falkor1: {
  title: 'Falkor-1',
  image: 'falkor1-logo.png', // remplace par le nom ou chemin réel
  text: `
    <h2>Falkor-1 — Lanceur suborbital réutilisable</h2>

    <h3>🔹 Présentation</h3>
    <p>Falkor-1 est la première fusée suborbitale développée par Vili-Fly, conçue pour atteindre la ligne de Kármán (100 km d’altitude) et au-delà. Elle permet l'emport d'expériences scientifiques, de modules éducatifs et d'instruments d'observation en haute atmosphère et proche espace. Son architecture est partiellement réutilisable.</p>

    <h3>🧩 Configuration</h3>
    <ul>
      <li>Nombre d’étages : 2 (réutilisables)</li>
      <li>Boosters latéraux : 2 (réutilisables)</li>
      <li>Modules embarquables : 2 à 3 blocks d''expériences scientifiques ou modules éducatifs</li>
    </ul>

    <h3>🔥 Systèmes de propulsion</h3>
    <h4>Boosters & 1er étage :</h4>
    <ul>
      <li>Type de moteur : Aéropique (Aerospike) – propulsion liquide</li>
      <li>Nombre de moteurs : 4 (1 par booster, 2 sur le 1er étage central)</li>
      <li>Carburants :
        <ul>
          <li>Oxydant : N₂O (protoxyde d'azote)</li>
          <li>Carburant : Éthanol</li>
        </ul>
      </li>
      <li>Poussée unitaire : ~6 kN</li>
      <li>Refroidissement : Azote liquide</li>
    </ul>

    <h4>2e étage :</h4>
    <ul>
      <li>Nombre de moteurs : 8 petits moteurs en configuration circulaire</li>
      <li>Type de propulsion : Hypergolique</li>
      <li>Carburants :
        <ul>
          <li>Oxydant : H₂O₂ (peroxyde d’hydrogène concentré) + catalyseur</li>
          <li>Carburant : Éthanol</li>
        </ul>
      </li>
      <li>Poussée unitaire : ~2 kN</li>
      <li>Mode de fonctionnement : Allumage en haute atmosphère / vacuum</li>
    </ul>

    <h3>📏 Performances</h3>
    <ul>
      <li>Altitude cible (apogée) : entre 102 km (Karman-1) et 110 km (Karman-2)</li>
      <li>Temps de vol total : ~6 à 9 minutes selon mission</li>
      <li>Rentrée contrôlée : Oui, pour chaque étage</li>
      <li>Réutilisation :
        <ul>
          <li>Boosters & étage 1 : Retour propulsé type Falcon 9</li>
          <li>Étage 2 : Descente contrôlée via petits moteurs (sans parachute)</li>
          <li>Module Spoutnik : Possibilité de séparation et récupération indépendante</li>
        </ul>
      </li>
    </ul>

    <h3>🛰️ Capacités scientifiques et techniques</h3>
    <ul>
      <li>Ouverture et fermeture automatique de la coiffe à l’apogée</li>
      <li>Transmission en direct :
        <ul>
          <li>Vidéo (caméras multiples)</li>
          <li>Télémétrie complète (Altitude, vitesse, inclinaison, trajectoire, carburant restant, moteurs allumés / éteints et dispsitifs activés / désactivés)</li>
        </ul>
      </li>
      <li>Enregistrement interne sur disques dédiés (1 par entité partenaire)</li>
      <li>Compatibilité avec module détachable Spoutnik (Karman-2 et au-delà)</li>
    </ul>

    <h3>📡 Systèmes de télémétrie</h3>
    <ul>
      <li>Capteur de pression + laser infrarouge pour altitude</li>
      <li>Calcul de trajectoire par triangulation radio (onde directionnelle + antenne au sol)</li>
      <li>Connexion radio dédiée (fréquence spécifique)</li>
      <li>Capteurs d'état ( allumé ou éteint) sur moteurs et dispositifs'</li>
      <li>capteur de pression et/ou sonde de niveau pour les carburants et oxydants</li>
      <li>capteur gyroscopique pour l'inclinaison'</li>
    </ul>

    <h3>📦 Missions réalisées (ou prévues)</h3>
    <ul>
      <li>Karman-1 : démonstrateur de vol suborbital réutilisable</li>
      <li>Karman-2 : test du module détachable Spoutnik</li>
      <li>ClimOsphere-1 : mission climatique mondiale (analyse haute atmosphère)</li>
    </ul>
  `
},
      falkor2: { title: 'Falkor-2', image: 'falkor2-logo.png', text: 'PAS ENCORE PRET' },
      spoutnik: {
  title: 'Spoutnik',
  image: 'spoutnik-logo.png',
  text: `
    <h2>Module détachable "Spoutnik"</h2>
    <p><strong>Type :</strong> Module scientifique autonome atmosphérique</p>
    <p><strong>Statut :</strong> En développement</p>
    <p><strong>Objectif principal :</strong> Étendre la portée scientifique des missions en réalisant une descente atmosphérique dédiée, indépendante de la fusée principale.</p>

    <h3>⚙️ Spécifications techniques</h3>
    <table>
      <tr><td><strong>Nom</strong></td><td>Spoutnik (clin d'œil au tout premier satellite artificiel)</td></tr>
      <tr><td><strong>Forme</strong></td><td>Cylindrique ou ogivale aérodynamique avec stabilisateurs</td></tr>
      <tr><td><strong>Structure</strong></td><td>Acier inoxydable renforcé, conçu pour résister à la rentrée atmosphérique</td></tr>
      <tr><td><strong>Poids total</strong></td><td>~10-15 kg</td></tr>
      <tr><td><strong>Volume utile</strong></td><td>Environ 2 L de charge utile (capteurs, expériences scolaires, caméras, etc.)</td></tr>
    </table>

    <h3>🧪 Contenu & Capacité scientifique</h3>
    <ul>
      <li>2 emplacements modulables pour expériences partenaires (lycées, universités, etc.)</li>
      <li>1 capteur de rayonnement solaire & cosmique</li>
      <li>1 spectromètre atmosphérique</li>
      <li>1 caméra orientée vers le bas</li>
      <li>1 carte SD dédiée à chaque expérience</li>
      <li>1 système de contrôle thermique passif et actif</li>
      <li>1 module de télémétrie partielle</li>
    </ul>

    <h3>🛬 Déroulement de mission typique</h3>
    <ol>
      <li>Séparation du module à l’apogée (environ 100-110 km), après ouverture de la coiffe de l’étage principal</li>
      <li>Propulsion par air comprimé pour l’éloigner de l’étage principal (sécurité & trajectoire indépendante)</li>
      <li>Stabilisation par micro-propulseurs à air comprimé</li>
      <li>Entrée dans l’atmosphère avec profil balistique contrôlé</li>
      <li>À ~3 km d’altitude : déploiement de 3 bras motorisés munis d’hélices à vitesse contrôlée pour freinage et stabilité</li>
      <li>Atterrissage autonome dans la zone de récupération, avec récupération rapide des données</li>
    </ol>

    <h3>📦 Avantages clés</h3>
    <ul>
      <li>Autonome et réutilisable</li>
      <li>Permet de multiplier les points de collecte de données indépendants de la fusée</li>
      <li>Participation éducative large via des emplacements scientifiques</li>
      <li>Simule des technologies de rentrée pour des missions futures</li>
    </ul>
  `
},
      luna1: {
  title: 'Luna‑1 – Lanceur lunaire artisanal',
  image: 'luna1-logo.png',
  text: `
    <h2>Luna‑1 — Lanceur artisanal pour missions lunaires légères</h2>
    <p><strong>Statut :</strong> En projet</p>
    
    <h3>🧱 Architecture du lanceur Luna‑1</h3>
    <table>
      <tr><th>Étage</th><th>Carburant</th><th>Type moteur</th><th>Refroidissement</th><th>Réutilisable</th><th>Rôle</th></tr>
      <tr><td>Boosters ×2</td><td>Éthanol + N₂O</td><td>Aerospike</td><td>Azote liquide (micro-canaux)</td><td>Oui</td><td>Poussée initiale</td></tr>
      <tr><td>1er étage</td><td>Éthanol + N₂O</td><td>Aerospike</td><td>Azote liquide (micro-canaux)</td><td>Oui</td><td>Montée atmosphérique</td></tr>
      <tr><td>2e étage</td><td>Éthanol + H₂O₂</td><td>Moteur hypergolique</td><td>Vapeur d’eau combustion</td><td>Non</td><td>Transition vers orbite lunaire</td></tr>
      <tr><td>3e étage</td><td>Éthanol + H₂O₂</td><td>Moteur hypergolique</td><td>Vapeur d’eau combustion</td><td>Non</td><td>Injection finale vers la Lune</td></tr>
    </table>

    <h3>📊 Performances estimées</h3>
    <table>
      <tr><td><strong>Hauteur totale</strong></td><td>~20 mètres</td></tr>
      <tr><td><strong>Diamètre max</strong></td><td>~1,5 mètres</td></tr>
      <tr><td><strong>Masse au décollage</strong></td><td>8–9 tonnes</td></tr>
      <tr><td><strong>Poussée totale au sol</strong></td><td>80–100 kN</td></tr>
      <tr><td><strong>Capacité max surface lunaire</strong></td><td>120 kg</td></tr>
    </table>

    <h3>⚙️ Systèmes techniques</h3>
    <ul>
      <li><strong>Refroidissement :</strong>
        <ul>
          <li>Boosters + étage 1 : azote liquide circulant dans micro-canaux autour des moteurs, réchauffé en gaz pour pressurisation et contrôle RCS.</li>
          <li>Étages 2 & 3 : refroidissement par vapeur d’eau issue de la combustion.</li>
        </ul>
      </li>
      <li><strong>Propulsion :</strong>
        <ul>
          <li>Boosters & 1er étage : moteurs Aerospike (Éthanol + N₂O), réutilisables.</li>
          <li>Étages 2 & 3 : moteurs hypergoliques (Éthanol + H₂O₂) pour allumage facile en vol.</li>
        </ul>
      </li>
      <li><strong>Structure :</strong>
        <ul>
          <li>Corps en inox avec revêtement graphite.</li>
          <li>Pièces non critiques imprimées 3D.</li>
          <li>Moteurs en Inconel imprimé maison.</li>
        </ul>
      </li>
      <li><strong>Réutilisation :</strong>
        <ul>
          <li>Boosters et étage 1 récupérés par descente verticale propulsée.</li>
        </ul>
      </li>
    </ul>

    <h3>💰 Estimation des coûts (artisanaux)</h3>
    <table>
      <tr><td><strong>Matériaux</strong></td><td>80–150 k€</td></tr>
      <tr><td><strong>Fabrication & assemblage</strong></td><td>100–200 k€</td></tr>
      <tr><td><strong>Moteurs</strong></td><td>40–80 k€</td></tr>
      <tr><td><strong>Propulsion complète</strong></td><td>50–100 k€</td></tr>
      <tr><td><strong>Coût total unitaire</strong></td><td>200–400 k€</td></tr>
    </table>

    <h3>✅ Avantages</h3>
    <ul>
      <li>Coût faible grâce à la fabrication artisanale.</li>
      <li>Moteurs hypergoliques fiables et simples pour les étages supérieurs.</li>
      <li>Réutilisation partielle pour missions à répétition.</li>
      <li>Adapté aux charges utiles légères vers la Lune.</li>
    </ul>
  `
},
      sa10: { title: 'SA-10 FirstFlight', image: 'sa10-logo.png', text: 'SA-10 : démonstrateur subsonique, premier vol d’essai.' },
      spa100: {
  title: 'SPA‑100 Passenger',
  image: 'spa100-logo.png',
  text: `
    <h2>SPA‑100 “Passenger” – Supersonic Aeroplane for the World</h2>
    <p><strong>Statut :</strong> Projet en développement</p>

    <h3>🔷 Présentation générale</h3>
    <p>
      Le SPA‑100 “Passenger” est un avion de transport supersonique nouvelle génération conçu
      pour révolutionner les vols intercontinentaux. Propulsé à l’hydrogène liquide, il vise
      une réduction massive des temps de trajet et de l’empreinte carbone, tout en offrant
      une expérience passager premium.
    </p>
    <p><em>Deux variantes&nbsp;:</em></p>
    <ul>
      <li><strong>SPA‑100 Standard</strong> : 2 classes (business + éco) ou 3 classes (premium, éco+, affaires)</li>
      <li><strong>SPA‑100 Eco</strong> : une seule classe économique haute capacité, logique multi‑escales rapide</li>
    </ul>

    <h3>🔧 Caractéristiques techniques</h3>
    <table>
      <tr><td><strong>Capacité passagers</strong></td><td>100 – 160 (jusqu’à 180 en Eco pur)</td></tr>
      <tr><td><strong>Vitesse max</strong></td><td>Mach 2.4 (≈ 2 940 km/h) au‑dessus des mers</td></tr>
      <tr><td><strong>Vitesse moyenne</strong></td><td>Mach 1.8 – 2.0 (vol mixte)</td></tr>
      <tr><td><strong>Propulsion</strong></td><td>Moteurs hydrogène à injection optimisée</td></tr>
      <tr><td><strong>Autonomie</strong></td><td>≈ 13 000 km</td></tr>
      <tr><td><strong>Longueur</strong></td><td>≈ 60 m</td></tr>
      <tr><td><strong>Envergure</strong></td><td>≈ 27 m (aile delta évolutive + canards rétractables)</td></tr>
      <tr><td><strong>Matériaux</strong></td><td>Alu + composites carbone, blindage thermique zones critiques</td></tr>
      <tr><td><strong>Vitesse croisière terrestre</strong></td><td>Mach 0.95 (sur zones habitées)</td></tr>
      <tr><td><strong>Pressurisation cabine</strong></td><td>Altitude équivalente ~1 800 m</td></tr>
    </table>

    <h3>🌐 Exemples de lignes commerciales – SPA‑100 Standard</h3>
    <table>
      <tr><th>Ligne</th><th>Temps</th><th>Prix éco (€)</th><th>Prix business (€)</th><th>Notes</th></tr>
      <tr><td>Paris → New York</td><td>3h10 – 3h30</td><td>1 000 – 1 400</td><td>2 500 – 3 500</td><td>50 % supersonique</td></tr>
      <tr><td>Tokyo → San Francisco</td><td>4h45 – 5h10</td><td>1 400 – 1 800</td><td>2 800 – 4 000</td><td>Majoritairement supersonique</td></tr>
      <tr><td>Paris → Johannesburg</td><td>3h50 – 4h15</td><td>1 100 – 1 500</td><td>2 700 – 3 700</td><td>Sud global rapide</td></tr>
      <tr><td>Dubaï → Sydney</td><td>5h30 – 6h00</td><td>1 800 – 2 500</td><td>3 500 – 4 500</td><td>80 % maritime</td></tr>
    </table>

    <h3>🟩 Variante SPA‑100 Eco – Supersonique à escales</h3>
    <p>Une version dédiée haute capacité, à la manière d’un TGV supersonique : refueling 20‑30 min, circuit hub‑hub.</p>

    <h3>🌟 Points forts</h3>
    <ul>
      <li>🌱 Zéro émission directe (hydrogène liquide)</li>
      <li>🕐 Jusqu’à 80 % de gain de temps sur long‑courrier</li>
      <li>💺 Confort supérieur (pressurisation, faible vibration)</li>
      <li>🧩 Modularité : cargo, ambulance supersonique, surveillance stratégique</li>
      <li>🔄 Écosystème scalable avec hubs cryogéniques dédiés</li>
    </ul>
  `},
      sa30: {
  title: 'SA‑30 Skylover',
  image: 'sa30-logo.png',
  text: `
    <h2>SA‑30 Skylover – Avion expérimental d’escorte et caméra aérienne haute vitesse</h2>
    <p><strong>Statut :</strong> Projet en développement</p>

    <h3>🧩 Résumé général</h3>
    <p>
      Le SA‑30 Skylover est un avion expérimental biplace en tandem, conçu pour des missions de haute vitesse
      en environnement aérien complexe. Il combine une propulsion hydrogène, une structure aérodynamique de pointe,
      et une capacité unique de filmer en direct des lancements de fusées à haute altitude.
    </p>
    <p>
      Outre son rôle d’escorte rapide, il peut servir de plateforme d’observation embarquée, ou de testbed
      pour technologies avancées.
    </p>

    <h3>📊 Caractéristiques techniques</h3>
    <table>
      <tr><td><strong>Nom</strong></td><td>SA‑30 Skylover</td></tr>
      <tr><td><strong>Type</strong></td><td>Avion expérimental biplace (tandem)</td></tr>
      <tr><td><strong>Rôle</strong></td><td>Escorte & caméra aérienne pour suivi de lancement</td></tr>
      <tr><td><strong>Propulsion</strong></td><td>Moteur Flat‑8 hydrogène (sur mesure, dans fuselage)</td></tr>
      <tr><td><strong>Hélice</strong></td><td>4 pales, push arrière, pas variable</td></tr>
      <tr><td><strong>Carburant</strong></td><td>Hydrogène comprimé (réservoir sécurisé central)</td></tr>
      <tr><td><strong>Vitesse cible</strong></td><td>Jusqu’à Mach 0.9</td></tr>
      <tr><td><strong>Autonomie</strong></td><td>1 500 – 2 000 km</td></tr>
      <tr><td><strong>Altitude opérationnelle</strong></td><td>10 000 – 12 000 m</td></tr>
      <tr><td><strong>Ailes</strong></td><td>Flèche brisée ("cranked arrow") – finesse élevée</td></tr>
      <tr><td><strong>Empennage</strong></td><td>Double dérive verticale</td></tr>
      <tr><td><strong>Canards</strong></td><td>2 canards rétractables à l’avant</td></tr>
      <tr><td><strong>Train d’atterrissage</strong></td><td>Adapté piste courte – herbe ou dur</td></tr>
      <tr><td><strong>Commandes de vol</strong></td><td>Système pneumatique (2 bars + électrovannes)</td></tr>
      <tr><td><strong>Freinage</strong></td><td>Aérofreins verticaux à grille</td></tr>
      <tr><td><strong>Cockpit</strong></td><td>Épuré, écran central + boutons physiques</td></tr>
      <tr><td><strong>Structure</strong></td><td>Alu + protection graphite zones chaudes</td></tr>
      <tr><td><strong>Énergie électrique</strong></td><td>2 batteries + alternateur moteur</td></tr>
      <tr><td><strong>Caméra embarquée</strong></td><td>Support gyrostabilisé haute définition intégré</td></tr>
      <tr><td><strong>Marquage</strong></td><td>Livrée blanche, accents violets, “Skylover” peint sur ailes</td></tr>
    </table>

    <h3>🌍 Missions possibles</h3>
    <ul>
      <li>🚀 Suivi de lancement de fusée en vol synchronisé</li>
      <li>🛡️ Escorte tactique ou démonstration de technologies</li>
      <li>🎥 Observation aérienne longue distance</li>
      <li>🧪 Plateforme de test pour moteurs, capteurs ou systèmes embarqués</li>
    </ul>
  `},
      sa20: {
  title: 'SA-20 Transporter',
  image: 'sa20-logo.png',
  text: `
    <h2>SA-20 Transporter – Avion lourd de soutien et porteur orbital</h2>
    <p><strong>Statut :</strong> Projet en développement</p>

    <h3>🔷 Présentation</h3>
    <p>Le SA-20 Transporter est un avion lourd polyvalent, pensé pour remplir deux rôles majeurs :</p>
    <ul>
      <li>Porter une navette spatiale sur son dos pour des missions suborbitales, de lancement ou de récupération</li>
      <li>Assurer le transport de fret ou d’équipement lourd, y compris les deux exemplaires du SA-30 Skylover ou d’autres modules expérimentaux</li>
    </ul>
    <p>Le SA-20 est ainsi un pilier logistique de l’écosystème CASUCEM, conçu pour la stabilité, la modularité, et la force de propulsion.</p>

    <h3>🔧 Caractéristiques techniques</h3>
    <table>
      <tr><td><strong>Rôle principal</strong></td><td>Porteur de navette / Transport logistique lourd</td></tr>
      <tr><td><strong>Longueur totale</strong></td><td>Environ 65 mètres</td></tr>
      <tr><td><strong>Envergure</strong></td><td>52 mètres (aile droite classique)</td></tr>
      <tr><td><strong>Motorisation</strong></td><td>6 moteurs Flat-6 hydrogène (dérivé du Flat-8)</td></tr>
      <tr><td><strong>Position des moteurs</strong></td><td>3 moteurs par aile, montés en nacelles externes</td></tr>
      <tr><td><strong>Vitesse de croisière</strong></td><td>~Mach 0.7</td></tr>
      <tr><td><strong>Autonomie</strong></td><td>~7 000 à 8 500 km selon la charge</td></tr>
      <tr><td><strong>Charge utile max (sur dos)</strong></td><td>Navette jusqu’à 30 tonnes</td></tr>
      <tr><td><strong>Fuselage</strong></td><td>Long, renforcé, structure en aluminium + composite carbone</td></tr>
      <tr><td><strong>Système d’atterrissage</strong></td><td>Train tricycle renforcé + amortisseurs haute capacité</td></tr>
      <tr><td><strong>Configuration dérive</strong></td><td>Mono-dérive classique</td></tr>
      <tr><td><strong>Navigation et commandes</strong></td><td>Interface semi-analogique + boutons physiques</td></tr>
      <tr><td><strong>Carburant</strong></td><td>Hydrogène liquide (réservoirs internes + dorsaux)</td></tr>
    </table>

    <h3>🚀 Fonctions spéciales</h3>
    <ul>
      <li>Système de fixation dorsal universel pour accueillir différents modules (navette, conteneur pressurisé, charge utile expérimentale)</li>
      <li>Compatibilité avec opérations spatiales : largage de navette à haute altitude, missions de récupération ou de repositionnement</li>
      <li>Soute interne secondaire pour pièces détachées, modules scientifiques ou véhicules d’escorte</li>
      <li>Capacité à opérer depuis des pistes semi-préparées ou des zones isolées pour missions spéciales</li>
    </ul>
  `},
      karman1: {
  title: 'Karman-1',
  image: 'karman1-logo2.png',
  text: `
    <h2>Mission Karman-1</h2>
    <p><strong>Statut :</strong> En préparation</p>
    <p><strong>Objectif :</strong> Atteindre et dépasser la ligne de Kármán (100 km) avec récupération complète des éléments et premières expériences scientifiques & éducatives</p>

    <h3>🎯 Objectifs principaux</h3>
    <ul>
      <li>Atteindre une altitude de 102 km</li>
      <li>Démontrer la récupération propulsée des boosters et du 1er étage</li>
      <li>Effectuer une rentrée atmosphérique contrôlée du 2e étage</li>
      <li>Tester le système de coiffe ouvrable et refermable</li>
      <li>Collecter des données scientifiques (caméras, magnétomètre, capteur IR, capteur GGR…)</li>
      <li>Valider l’architecture modulaire de mission avec deux types de charges utiles :
        <ul>
          <li>Modules scientifiques de l’équipe Vili-Fly</li>
          <li>Expériences partenaires (lycées / universités)</li>
        </ul>
      </li>
    </ul>

    <h3>🧩 Architecture de la mission</h3>
    <table>
      <tr><td>🚀 <strong>Fusée</strong></td><td>Falkor-1, 2 étages + 2 boosters latéraux, propulsion liquide</td></tr>
      <tr><td>🔋 <strong>Carburants</strong></td><td>Éthanol + N₂O pour les étages/boosters – Éthanol + H₂O₂ pour l’étage 2</td></tr>
      <tr><td>📡 <strong>Transmission</strong></td><td>Télémétrie en direct + vidéo multi-angle (drone, pas de tir, fusée)</td></tr>
      <tr><td>☁️ <strong>Altitude visée</strong></td><td>102 km</td></tr>
      <tr><td>🛰 <strong>Modules embarqués</strong></td><td>Caméras, capteurs atmosphériques, instruments scientifiques et éducatifs</td></tr>
      <tr><td>🎥 <strong>Caméras</strong></td><td>Sur boosters, étage 1, étage 2, coiffe, drone & sol – Diffusion YouTube live</td></tr>
      <tr><td>📉 <strong>Télémétrie</strong></td><td>Pression, laser altimètre, radio triangulée (calcul d’inclinaison & position)</td></tr>
    </table>

    <h3>📖 Déroulé du vol</h3>
    <ol>
      <li>Décollage vertical – montée jusqu’à ~60 km</li>
      <li>Séparation des boosters – retour propulsé au sol</li>
      <li>Inclinaison de la trajectoire (~5°) – entre 60 et 80 km</li>
      <li>Séparation étage 1 / allumage étage 2 – montée jusqu’à 102 km</li>
      <li>Ouverture de la coiffe à l’apogée – déploiement panneaux solaires, caméras, instruments</li>
      <li>Fermeture coiffe automatique juste avant la rentrée</li>
      <li>Rentrée atmosphérique contrôlée de l’étage 2</li>
      <li>Allumage final des moteurs pour atterrissage doux à 1 km du sol</li>
    </ol>

    <h3>📌 Données et récupération</h3>
    <ul>
      <li>Données transmises en direct via onde radio</li>
      <li>Enregistrements locaux sur disques attribués à chaque partenaire</li>
      <li>Tous les éléments sont récupérables et réutilisables</li>
    </ul>

    <h3>🎨 Emblème de mission</h3>
    <blockquote>"La science de la jeunesse amène le ciel"</blockquote>
  `},
      karman2: {
  title: 'Mission Karman‑2',
  image: 'karman2-logo.png',
  text: `
    <h2>🚀 Mission Karman‑2</h2>
    <p><strong>Statut :</strong> Planifiée</p>
    <p><strong>Objectif :</strong> Atteindre 110 km d’altitude, tester une rentrée atmosphérique directe, et valider un module autonome scientifique.</p>

    <h3>🎯 Objectifs principaux</h3>
    <ul>
      <li>Atteindre une altitude de <strong>110 km</strong></li>
      <li>Tester une rentrée <strong>abrupte</strong> avec angle d’attaque élevé (étage 2)</li>
      <li>Tester un <strong>module détachable atmosphérique autonome</strong> :
        <ul>
          <li>Analyse du rayonnement solaire et cosmique</li>
          <li>Spectrométrie atmosphérique</li>
          <li>Expériences embarquées (lycées, universités)</li>
        </ul>
      </li>
      <li>Récupération complète de tous les composants (atterrissage propulsé ou contrôlé)</li>
      <li>Organisation scientifique en 3 blocs :
        <ul>
          <li><strong>Vili‑Fly</strong></li>
          <li><strong>Partenaires</strong></li>
          <li><strong>Module détachable</strong></li>
        </ul>
      </li>
    </ul>

    <h3>🧩 Architecture de la mission</h3>
    <table>
      <tr><td><strong>🚀 Fusée</strong></td><td>Falkor‑1 réutilisée (identique à Karman‑1)</td></tr>
      <tr><td><strong>🛠️ Modifications</strong></td><td>Algorithme de rentrée modifié + module atmosphérique</td></tr>
      <tr><td><strong>🔋 Carburants</strong></td><td>Identiques à Karman‑1</td></tr>
      <tr><td><strong>🛰 Nouveaux systèmes</strong></td><td>Module motorisé + stabilisation active</td></tr>
      <tr><td><strong>🧪 Chargement scientifique</strong></td><td>Vili‑Fly, écoles/universités, module détachable</td></tr>
    </table>

    <h3>📖 Déroulé du vol</h3>
    <ol>
      <li>Décollage vertical, séparation boosters à ~60 km</li>
      <li>Inclinaison légère (5°) jusqu’à 80 km</li>
      <li>Séparation étage 1 / allumage étage 2</li>
      <li>Apogée atteinte à 110 km – ouverture de coiffe</li>
      <li>Éjection latérale du module atmosphérique (stabilisation initiale à air comprimé)</li>
      <li>Repli de la coiffe de l’étage 2</li>
      <li>Rentrée brutale de l’étage 2 – atterrissage propulsé</li>
      <li>Descente indépendante du module :
        <ul>
          <li>Maintien en altitude par air comprimé</li>
          <li>Stabilisation + freinage par bras/hélices</li>
          <li>Atterrissage contrôlé au sol</li>
        </ul>
      </li>
    </ol>

    <h3>📡 Communication & données</h3>
    <ul>
      <li>Télémétrie radio en direct</li>
      <li>Captation vidéo multi-sources (fusée, sol, drone)</li>
      <li>Données scientifiques distribuées par segment</li>
    </ul>

    <h3>🎨 Emblème de mission</h3>
    <blockquote><em>« Un avenir scientifique prometteur »</em></blockquote>
  `
},
      climosphere1: {
  title: 'Mission ClimOsphère‑1',
  image: 'climosphere1-logo.png',
  text: `
    <h2>🌍 Mission ClimOsphère‑1</h2>
    <p><strong>Statut :</strong> Planifiée</p>
    <p><strong>Objectif :</strong> Réaliser un profil atmosphérique complet jusqu’à ~105 km pour étudier les gaz climatiques en haute altitude.</p>

    <h3>🎯 Objectifs principaux</h3>
    <ul>
      <li>Atteindre une altitude d’environ <strong>105 km</strong></li>
      <li>Analyser la <strong>concentration de gaz à effet de serre</strong>, d’ozone, et de particules fines</li>
      <li>Tester un module atmosphérique dérivé de <strong>Karman‑2</strong>, adapté à la mesure climatique</li>
      <li>Fournir des <strong>données ouvertes</strong> à la communauté scientifique internationale</li>
    </ul>

    <h3>🧪 Cibles scientifiques</h3>
    <ul>
      <li><strong>CO₂, CH₄, N₂O</strong> : suivi haute altitude des gaz à effet de serre</li>
      <li><strong>O₃</strong> : profil détaillé de l’ozone stratosphérique</li>
      <li><strong>Poussières volcaniques / aérosols</strong> : spectrométrie des particules fines</li>
      <li><strong>Profil vertical</strong> : température, pression, humidité</li>
      <li><strong>Ondes gravitationnelles atmosphériques</strong> : détection via capteurs inertiels avancés</li>
    </ul>

    <h3>🛠️ Architecture de la mission</h3>
    <table>
      <tr><td><strong>🚀 Fusée</strong></td><td>Falkor‑1 (architecture identique à Karman‑1/2)</td></tr>
      <tr><td><strong>🧩 Module climatique</strong></td><td>Dérivé du module Karman‑2, 100% dédié aux capteurs atmosphériques</td></tr>
      <tr><td><strong>⚗️ Expériences</strong></td><td>100% climatologie – possible participation scolaire & universitaire</td></tr>
      <tr><td><strong>🔋 Carburants</strong></td><td>Identiques aux missions précédentes</td></tr>
      <tr><td><strong>🌡️ Stabilité thermique</strong></td><td>Renforcée pour mesures précises en mésosphère</td></tr>
    </table>

    <h3>📖 Déroulé du vol</h3>
    <ol>
      <li>Décollage vertical, séparation boosters à ~60 km</li>
      <li>Inclinaison faible (~5°) jusqu’à 80 km</li>
      <li>Allumage étage 2 – apogée à ~105 km</li>
      <li>Ouverture coiffe, déploiement du module atmosphérique</li>
      <li>Descente contrôlée du module :
        <ul>
          <li>Mesures continues en chute verticale</li>
          <li>Stabilisation active (air comprimé)</li>
          <li>Freinage terminal via hélices motorisées</li>
        </ul>
      </li>
      <li>Récupération au sol dans zone prédéfinie</li>
    </ol>

    <h3>📡 Transmission & données</h3>
    <ul>
      <li>Télémétrie scientifique en direct</li>
      <li>Captation vidéo depuis fusée, module et sol</li>
      <li><strong>Données publiques</strong> exportables (CSV / JSON)</li>
    </ul>

    <h3>🤝 Partenariats attendus</h3>
    <ul>
      <li>Établissements scolaires & universités (Europe, Afrique, international)</li>
      <li>Laboratoires spécialisés en climatologie</li>
      <li>Organisations environnementales (ex. WMO, CNES, etc.)</li>
    </ul>

    <h3>🌐 Nom & message</h3>
    <blockquote><em>« Explorer l'atmosphère pour le planète. »</em></blockquote>
  `
},
      sin1: {
  title: 'Sîn‑1 — Mission lunaire artisanale',
  image: 'sin1-logo.png',
  text: `
    <h2>Mission lunaire artisanale : Sîn‑1</h2>

    <h3>🎯 Objectifs</h3>
    <ul>
      <li>Réaliser une première mission lunaire complète à très bas coût.</li>
      <li>Démontrer la viabilité de technologies artisanales : propulsion, énergie, atterrissage, survie nocturne.</li>
      <li>Collecter des données scientifiques simples à la surface lunaire.</li>
      <li>Préparer les futures missions low-cost vers des objets plus lointains (Chariklo, Pluton...).</li>
    </ul>

    <h3>🚀 Profil de mission</h3>
    <ul>
      <li>Lancement depuis la Terre via le lanceur Luna‑1.</li>
      <li>Injection trans-lunaire directe (sans orbite terrestre préalable).</li>
      <li>Assistance gravitationnelle pour capture par la Lune.</li>
      <li>Insertion en orbite basse lunaire (LLO).</li>
      <li>Séparation et descente de l’atterrisseur avec moteurs hypergoliques (H₂O₂ + éthanol).</li>
      <li>Allunissage contrôlé, déploiement du rover.</li>
      <li>Expériences scientifiques pendant le jour lunaire.</li>
      <li>Survie nocturne via pile H₂O₂ et mini-turbine éthanol/O₂.</li>
    </ul>

    <h3>🚀 Lanceur Luna‑1</h3>
    <table>
      <tr><td><strong>Étages</strong></td><td>3 + 2 boosters latéraux</td></tr>
      <tr><td><strong>Réutilisation</strong></td><td>Boosters + 1er étage (atterrissage motorisé)</td></tr>
      <tr><td><strong>Moteurs boosters</strong></td><td>Aerospike, éthanol + N₂O, refroidissement à l’azote liquide</td></tr>
      <tr><td><strong>1er étage</strong></td><td>Même moteur, pressurisé via N₂ gazeux</td></tr>
      <tr><td><strong>Étages 2 & 3</strong></td><td>Moteurs hypergoliques éthanol + H₂O₂, refroidis à la vapeur</td></tr>
      <tr><td><strong>Structure</strong></td><td>Inox soudé + fûts de bière + pièces imprimées 3D</td></tr>
      <tr><td><strong>Charge utile (surface lunaire)</strong></td><td>Jusqu’à 120 kg</td></tr>
    </table>

    <h3>🛰️ Orbiteur</h3>
    <ul>
      <li><strong>Propulsion :</strong> Moteurs à effet Hall (argon)</li>
      <li><strong>Rôle :</strong> Mise en orbite lunaire + relais de communication</li>
      <li><strong>Énergie :</strong> Panneaux solaires + batterie Li-ion</li>
    </ul>

    <h3>🛬 Atterrisseur</h3>
    <ul>
      <li><strong>Propulsion :</strong> H₂O₂ + éthanol (hypergolique, simple)</li>
      <li><strong>Énergie :</strong> pile H₂O₂ + mini-turbine éthanol/O₂ + batteries Li-ion</li>
      <li><strong>Autonomie :</strong> Capacité à survivre à la nuit lunaire</li>
    </ul>

    <h3>🤖 Rover</h3>
    <ul>
      <li>Poids : ~850 g</li>
      <li>Équipements : thermomètre, radiomètre, spectromètre, mini-foreuse</li>
      <li>Alimentation : panneaux solaires + batterie Li-ion</li>
      <li>Mobilité réduite, courte portée</li>
    </ul>

    <h3>🔋 Gestion de l’énergie</h3>
    <ul>
      <li><strong>Jour :</strong> Panneaux solaires → alimentation directe + recharge</li>
      <li><strong>Début nuit :</strong> pile H₂O₂ → chaleur + production d’O₂</li>
      <li><strong>Nuit prolongée :</strong> micro-turbine éthanol/O₂ → électricité</li>
      <li><strong>Mode veille :</strong> activé si énergie critique</li>
    </ul>

    <h3>⚙️ Technologies clés</h3>
    <ul>
      <li>Moteurs artisanaux Aerospike</li>
      <li>Refroidissement régénératif (azote ou vapeur)</li>
      <li>Pile H₂O₂ + turbine = survie sans RTG</li>
      <li>Propulsion, structure & électronique imprimées 3D</li>
      <li>Coût réduit grâce à l’ingénierie artisanale</li>
    </ul>
  `
},
      data: { title: 'Données publiques', image: 'data-logo.png', text: 'Photos, vidéos et résultats des expériences...' },
      about: { title: 'Qui sommes-nous ?', image: 'team-logo.png', text: 'Présentation de notre équipe et de notre mission.' }
    };

    const content = pageInfo[page] || { title: 'Page inconnue', image: '', text: 'Contenu indisponible.' };

    if (page === 'home') {
  main.innerHTML = `
    <div class="home-header no-blur anim-intro">
      <img src="${content.image}" alt="Logo accueil" class="home-logo anim-logo">
      <h1 class="home-title full-page-title anim-title">Vili‑Fly</h1>
    </div>
    <div class="page-content">
      <p>${content.text}</p>
    </div>
   /* Active le clic‑zoom sur chaque image de la galerie */
main.querySelectorAll('.gallery img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => openLightbox(img.src));
});

  `;

  /* ── force un reflow, puis rejoue l’animation à chaque arrivée ── */
  const intro  = main.querySelector('.anim-intro');
  const logo   = main.querySelector('.anim-logo');
  const title  = main.querySelector('.anim-title');

  void intro.offsetWidth;          // reflow → reset
  requestAnimationFrame(() => {
    intro.classList.add('show');
    logo.classList.add('show');
    title.classList.add('show');
  });
}
     else {
      main.innerHTML = `
        <div id="intro" class="intro">
          <img src="${content.image}" alt="${content.title}" class="intro-logo" />
        </div>
        <div class="page-content">
          <p>${content.text}</p>
        </div>
      `;

      // Applique animation à nouveau
      const introLogo = main.querySelector('.intro-logo');
      if (introLogo) {
        introLogo.style.animation = 'none';
        void introLogo.offsetWidth; // forcer reflow
        introLogo.style.animation = 'logoIn 1s ease-out forwards';
      }
    }

    const intro = document.getElementById('intro');

    function handleScroll() {
      if (window.scrollY > 80) {
        intro?.classList.add('hide');
      } else {
        intro?.classList.remove('hide');
      }
    }

    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);

    // Force scroll top
    window.scrollTo(0, 0);
  };

  window.toggleDropdown = function (id) {
    const dropdown = document.getElementById(id);
    if (!dropdown) return;

    document.querySelectorAll('.dropdown').forEach(menu => {
      if (menu !== dropdown) menu.classList.add('hidden');
    });

    dropdown.classList.toggle('hidden');
  };

  navigate('home');
});
