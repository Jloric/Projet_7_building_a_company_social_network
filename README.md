
# fabriquer avec:
Front:
-Vue 3

Back:
-NodeJs
-MySQL

Les dependances utilisées sont dans les fichiers ``package.json`` dédiés.

## Mise en place du Projet
Afin de faciliter le développement et les futures évolutions le back à était séparé du front dans un dossier \backend.
Pour lancer le projet , installer d'abord le projet ensuite suivez le guide suivant:
```
cd backend
npm install
//le projet est installé

nodemon start
//le serveur est en place
```
Le serveur à été créer pour fonctionner avec MYSQL, penser donc à cous créer une Base de donnée avec les critères suivants:
```
    HOST: "localhost",
    USER: "yourRootUser",
    PASSWORD: "YourPassword",
    DB: "groupomania",
    dialect: "mysql"
```
Les réglages peuvent être modifier dans le projet/backend/config

Une fois le Back lancer revener à la racine du projet et installer les dépendances et initialiser eslint:
```
npm install
npm init @eslint/config
√ How would you like to use ESLint? · problems    
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
```
Une fois eslint initialiser copier les information suivante dans le fichier JS ``.eslint.js`` crée
```
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

```
### Compilation et recahrgement automatique pour le développement
```
npm run serve
```
A partir de là le projet devrait fonctionner dans problème.

###Comment fonctionne le projet
Le projet est assez sommaire en tant que MVP.
Le fichier ``app.vue`` sers de fichier vue racine.
La page Homeview est appeler au lancement de l'application.
Les pages pages Login et Signup qui gèrent respectivement la connexion et l'insription y sont imbriquées.

Depuis la page Signup on peut créer des comptes uniquement "Standard" sans droit particulier.
Toute le serveur est programmé pour créer un compte admin si la reqête comtient un rôle: admin. Par ex:
```
la requête:
{
    "email": "admin@mail.com",
    "password": "Password",
    "nom":"admin" ,
    "prénom":"joe",
    "role" :"admin"
}
créera un utilisateur admin.
```
Ce compte admin pour modifier/supprimer le contenu de tous les autres utilisateurs.

Une fois connecté l'application enregistre l'id utilisateur et le token pour le réutiliser quand nécessaire.
Le project à été sépares en plusieurs partie afin de le rendre plus facile à lire et à entretenir.

Chaque fonctionnalité du projet possède sa propre page.

Dans le composant users:

  S'inscrire: ```LoginUser```
  Se conencter:```SignupUser```
  Voir son compte: ```UserAccount```

  
Dans le composant article:

  Afficher tous les articles: ```ArticlesList```
  Afficher un articles précis: ```ArticleSelected``` Permet aussi de charger la page "mettre à jour" ou supprimer un article
  Ajouter un article: ```AddArticle```
  Mettre à jour un article: ```UpdateArticle```

  
Dans le composant messages:

  Afficher tous les messages:```MessageBoard```

Chaque article est surmontés d'un header, HeaderArticles qui appelle deux composants:

  Une partie pour le logo et l'option de retour: ```HeaderLogo```
  une partie pour gerer son compte: ```AccountNav```

Dans les services on retrouve les services utiliser pour récuperer les données de l'API.


une fois le project terminé:

#### Compiler et minifier pour la production
```
npm run build
```


