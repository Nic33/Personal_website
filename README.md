# My personal website

L'objectif de ce projet c'est de me créer un site web personnel en utilisant le framework Angular.
Toute les étapes pour créer un projet Angular sont présentes [ici](https://angular.io/guide/setup-local).

Pour commencer, il faut installer `node_modules` en utilisant `npm install`. Puis pour lancer l'application il faut utiliser la commande suivante `ng serve --port 4201` (vous pouvez changer le port).

Pour construire votre application pour la production, utilisez la commande : `ng build`.

## Le fonctionnement d'Angular 

Ce qui nous intérresse se trouve dans le fichier `src/app`. Nous avons différent type de fichier :     

### module.ts
Le fichier module.ts est un fichier qui contient la définition d'un module Angular. Les modules sont une partie importante d'Angular car ils permettent de regrouper des fonctionnalités connexes dans une application. Ils définissent également les dépendances entre différentes parties de l'application et les services disponibles.

### component.ts
Le fichier component.ts est le fichier principal d'un composant Angular. Il contient la définition de la classe de composant qui définit le comportement et les propriétés du composant. Les composants sont des éléments réutilisables qui peuvent être intégrés à des templates HTML pour créer une interface utilisateur.

### component.html
Le fichier component.html est le template HTML associé au composant. Il contient le code HTML et les directives qui définissent la structure et le contenu du composant. Le template HTML est lié à la classe de composant via le mécanisme de liaison de données d'Angular.

### component.css
Le fichier component.css est le fichier de style associé au composant. Il contient les styles CSS qui sont appliqués au template HTML du composant pour définir l'apparence du composant.

### component.spec.ts
Le fichier component.spec.ts est le fichier de spécification de test unitaire associé au composant. Il contient les tests unitaires qui vérifient le bon fonctionnement du composant.

### directive.ts
Le fichier est utilisé pour définir des directives personnalisées qui peuvent être utilisées pour ajouter des fonctionnalités personnalisées à des éléments DOM existants dans des templates Angular.

ok ok ok... mais c'est quoi un DOM ?

Le DOM est une interface de programmation qui permet aux programmes d'interagir avec les éléments d'une page web comme s'ils étaient des objets. Chaque élément HTML est représenté par un objet dans le DOM, qui expose des propriétés et des méthodes qui peuvent être utilisées pour manipuler l'élément.

## Langages utilisées 

