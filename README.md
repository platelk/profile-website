# Profile RH website

## Apropos
Ce projet est une proposition de site vitrine pour la plateforme Profile RH.

## Technologie utilisé
Plusieur bibliothèque et outils sont utilisé pour ce site web. Le coeur est basé sur le Web Starter Kit.

* Serveur
    * nodejs : Serveur
    * gulp   : Système d'automatisation de build
* Client
    * JQuery    : Bibliothèque d'outils Javascript
    * Bootstrap : Style
    * MaterialBootstrap : Donne un look "material" à bootstrap
    
## Installation

### Pre-requis

Avant de procèder à l'installation, il faut vous assurer de pocèder une installation de nodejs à la version 0.12
Pour le vérifier, executer la commande :
> $> node -v

et vérifier que la commande ne retourne pas d'

### Installation

Après avoir cloner le dépot :

1. Installer gulp
> $> npm -g install gulp

2. Installer les packages :
> $> npm install

3. Build le projet :
> $> gulp default

## Lancez le projet :

Afin de lancer le projet, il suffit de lancer le serveur grace à la commande suivante:
> $> node server/app.js
