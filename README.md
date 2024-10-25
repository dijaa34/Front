# Angular Template Structure

## Introduction

Ce template a été créé pour faciliter la structuration et le développement d'une application Angular. Il utilise les technologies suivantes :
- **Angular CLI**: 18.2.1
- **Node.js**: 20.11.1
- **npm**: 10.5.0
- **Tailwind CSS** pour la gestion des styles, incluant des classes prédéfinies pour le mode sombre et clair.

Le projet est organisé en trois parties principales :
- `core`: Pour les services et les utilitaires partagés au niveau de l'application.
- `modules`: Les différentes fonctionnalités de l'application sont regroupées en modules.
- `shared`: Contient les composants, directives, modèles, pipes et utilitaires réutilisables dans plusieurs modules.

## Structure du Projet

### Core
Le dossier `core` contient les éléments globaux et partagés, comme les services ou les modèles qui sont utilisés partout dans l'application.

- **constants**: Définit les constantes utilisées dans tout le projet.
- **guards**: Implémente les garde-fous pour sécuriser les routes (ex. `AuthGuard`).
- **interceptors**: Gère les intercepteurs HTTP (ex. pour les tokens JWT).
- **models**: Définit les interfaces et types partagés.
- **services**: Contient les services injectables pour la logique métier.
- **utils**: Regroupe les fonctions utilitaires générales.

### Modules
Les modules sont utilisés pour diviser les fonctionnalités de l'application. Cela permet une gestion claire et facilitée des fonctionnalités.

Exemple de structure d'un module (`home`):
- `components`: Contient les composants spécifiques au module.
- `models`: Définit les modèles (interfaces, types) propres au module.
- `pages`: Regroupe les pages spécifiques à ce module.

Chaque module inclut son propre fichier de routage et de configuration:
- `home-routing.module.ts`: Gère les routes internes du module `home`.
- `home.module.ts`: Déclare et configure le module.

### Shared
Le dossier `shared` contient des éléments réutilisables dans plusieurs modules.
- **components**: Les composants réutilisables.
- **directives**: Les directives personnalisées.
- **models**: Les modèles partagés.
- **pipes**: Les pipes pour transformer les données.
- **utils**: Les utilitaires partagés.
- **validators**: Les validateurs personnalisés pour les formulaires.

## Modules et Lazy Loading

Dans ce projet, chaque module est chargé de manière asynchrone grâce au **lazy loading**. Cela permet d'optimiser les performances en ne chargeant que le nécessaire au fur et à mesure de la navigation.

L'ajout d'un module se fait dans le fichier `app-routing.module.ts`. Exemple d'ajout d'un module :

```typescript
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'errors',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  { path: '**', redirectTo: 'errors/404' },
];
```

L'avantage du **lazy loading** est d'améliorer la performance de l'application en ne chargeant que les modules requis au moment opportun.

## Gestion des Styles avec Tailwind CSS

Le projet utilise **Tailwind CSS** pour la gestion des styles. Des classes CSS préconfigurées sont déjà définies, telles que :
- `text-foreground`: Couleur du texte en fonction du thème.
- `text-background`: Couleur de fond.
- `text-primary`: Couleur principale pour mettre en avant certains éléments.

Ces classes sont adaptées pour supporter à la fois le **light mode** et le **dark mode**, et s'adaptent aux différents schémas de couleurs configurés dans le projet.

## Comment commencer

1. **Installation**: Clonez le projet et installez les dépendances avec npm :
   ```bash
   git clone <repository-url>
   cd <project-directory>
   npm install
   ```

2. **Lancer l'application**:
   - Une fois les dépendances installées, lancez l'application avec la commande suivante :
     ```bash
     ng serve
     ```
   - L'application sera disponible à l'adresse par défaut [http://localhost:4200](http://localhost:4200).

3. **Créer un nouveau module**:
   - Créez un nouveau module avec la commande Angular CLI :
     ```bash
     ng generate module <module-name> --routing
     ```
   - Ajoutez ce module dans le fichier `app-routing.module.ts` pour le rendre accessible via lazy loading.

4. **Créer des composants**:
   - Utilisez la commande suivante pour créer un composant dans le module souhaité :
     ```bash
     ng g c <module-name>/<component-name>
     ```
   - Organisez vos composants dans des sous-dossiers tels que `components` ou `pages` selon leur utilisation.

5. **Utilisation des classes Tailwind**:
   - Dans vos templates HTML, appliquez les classes Tailwind prédéfinies pour gérer les couleurs, les marges, les alignements, etc.
   Exemple :
   ```html
   <h1 class="text-primary">Bienvenue dans l'application</h1>
   ```

## Conclusion

Ce template offre une structure modulaire et bien organisée, facilitant la maintenabilité et l'évolutivité des projets Angular. L'utilisation de **lazy loading** et de **Tailwind CSS** améliore les performances et la gestion des thèmes.

N'hésitez pas à consulter les dossiers `core` et `shared` pour réutiliser les services et composants, et à ajouter vos propres modules pour répondre aux besoins spécifiques de votre application.
