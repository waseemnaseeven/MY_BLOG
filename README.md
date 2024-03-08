# MY_BLOG

## Here is what i've learned

```JavaScript
<Nav.Link href="#Home" className={activeLink === "Home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Home")}>Home</Nav.Link>
```
- Il y a un composant Bootstrap qui fournit des liens dans une barre de navigation.
- href="#Home", lorsque ce lien est clique, il va naviguer vers l'element avec l'ID "Home" sur la page.
- onClick={() => onUpdateActiveLink("Home")}: C'est un gestionnaire d'événements qui est déclenché lorsque le lien est cliqué. Il appelle la fonction onUpdateActiveLink avec l'argument "Home". Cela pourrait être utilisé pour mettre à jour l'état de l'application, par exemple, pour indiquer quel lien est actuellement actif.


### Usefull commands

- npm create vite@latest
- npm run dev

