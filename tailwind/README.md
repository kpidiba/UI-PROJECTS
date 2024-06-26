# tailwindcss_learning

**DOCUMENTATION OFFICIEL:** https://tailwindcss.com/ 

**tailwind CSS** est un [framework](https://fr.wikipedia.org/wiki/Framework "Framework") [CSS](https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade "Feuilles de style en cascade") [open source](https://fr.wikipedia.org/wiki/Open_source "Open source"). La fonctionnalité principale de cette bibliothèque est, contrairement à d'autres frameworks CSS comme [Bootstrap](https://fr.wikipedia.org/wiki/Bootstrap_(framework) "Bootstrap (framework)"), qu'elle ne procure pas une série de classes prédéfinies pour des [éléments](https://fr.wikipedia.org/wiki/%C3%89l%C3%A9ment_HTML "Élément HTML") tels que des boutons ou des tables. À la place, Tailwind crée une liste
 de classes CSS « utilitaires » pouvant être utilisés pour ajouter un 
style à chaque élément en les mélangeant et en les agençant[3](https://fr.wikipedia.org/wiki/Tailwind_CSS#cite_note-3),[4](https://fr.wikipedia.org/wiki/Tailwind_CSS#cite_note-4).

Par exemple, dans d'autres systèmes, il y aurait une classe `message-warning​` qui appliquerait le jaune comme couleur d'arrière-plan et du texte 
gras. Pour avoir ce résultat dans Tailwind, il faudrait appliquer un 
ensemble de classes créé par la bibliothèque: `bg-yellow-200​` et `font-bold​`.

En date du 17 mai 2023, Tailwind CSS a plus de 68 400 étoiles sur [GitHub](https://fr.wikipedia.org/wiki/GitHub "GitHub")[5](https://fr.wikipedia.org/wiki/Tailwind_CSS#cite_note-5).

## Fonctionnalités

En raison de la différence sur les concepts de base liés à d'autres frameworks CSS traditionnels tels que Bootstrap, il est important de connaitre la philosophie à partir de laquelle Tailwind a été créé, ainsi que son utilisation de base.

### Classes utilitaires

Le concept *utility-first* fait référence à la fonctionnalité différentielle principale de Tailwind[6](https://fr.wikipedia.org/wiki/Tailwind_CSS#cite_note-6).Au  lieu de créer des classes autour des composantes (bouton, panneau, 
menu, champ de texte...), les classes sont conçues autour d'un élément de style spécifique (couleur jaune, police de caractère grasse, texte large, élément du centre...). Toutes ces classes sont nommées **classes utilitaires** (*utility classes*).

Il y a beaucoup de classes utilitaires dans Tailwind CSS qui permettent de contrôler un grand nombre de propriétés [CSS](https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade "Feuilles de style en cascade") telles que les couleurs, la bordure, le type d'affichage (*display*), la taille du texte et la police calligraphique, la mise en page, l'ombrage...

### TAILWIND ??

Tailwind CSS is a utility-first CSS framework that allows you to quickly build modern and responsive web designs. It's a popular choice among developers because it provides a set of pre-designed utility classes that you can apply directly in your HTML, making it easy to create stylish and consistent interfaces. Here's a breakdown of the key concepts and usage for beginners:

1. **Installation:** To use Tailwind CSS, you need to install it in your project. You can do this via npm or yarn. For example, using npm:
- `npm install tailwindcss`

- **Configuration:** After installation, you need to generate a configuration file. You can do this using the following command:
1. `npx tailwindcss init`
   
   This will create a `tailwind.config.js` file where you can customize the framework's settings.

2. **Including Styles:** Include Tailwind CSS in your project. You can either include it in your main CSS file or use PostCSS to process it. Make sure to import the stylesheet in your HTML or include it in your build process.

3. **Utility Classes:** Tailwind relies heavily on utility classes. These are pre-defined classes that you apply directly in your HTML to style elements. For example, to set the text color to red, you would use the class `text-red-500`.

4. **Responsive Design:** Tailwind makes it easy to create responsive designs. You can add responsive prefixes to classes, such as `sm`, `md`, `lg`, and `xl`, to apply styles based on screen sizes. For example, `lg:text-2xl` applies a larger text size on large screens.

5. **Flexbox and Grid:** Tailwind provides utility classes for Flexbox and Grid layouts. You can use classes like `flex`, `flex-row`, `flex-col`, `grid`, `grid-cols-2`, etc., to build flexible and responsive layouts without writing custom CSS.

6. **Customization:** Tailwind allows you to customize the default styles by editing the `tailwind.config.js` file. You can add your colors, fonts, spacing, and more.

7. **Plugins:** Tailwind supports plugins that can extend its functionality. You can add third-party plugins or create your own to tailor Tailwind to your specific project needs.

8. **PurgeCSS:** In production, it's recommended to use a tool like PurgeCSS to remove unused styles. This helps keep your stylesheet size minimal.

9. **Learning Resources:** Tailwind CSS has comprehensive documentation available on their [official website](https://tailwindcss.com/). Additionally, there are tutorials, videos, and community forums that can help you get started and improve your skills.

Here's a simple example of using Tailwind CSS in an HTML file:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="path/to/your/tailwind.css">
  <title>Your Tailwind CSS Example</title>
</head>
<body class="bg-gray-200 p-8">
  <div class="container mx-auto bg-white p-4 shadow-md">
    <h1 class="text-2xl font-bold text-blue-500">Hello, Tailwind!</h1>
    <p class="text-gray-700">This is a simple example.</p>
  </div>
</body>
</html>
```

This example applies background color, padding, and text styles using Tailwind utility classes. You can build more complex designs by combining and customizing these classes.

#### *JIT*

Le mode JIT (*Just-In-Time*,
 soit « Juste-À-Temps ») est une manière alternative de générer le CSS qui, au lieu de générer toutes les classes CSS possibles et d'enlever celles qui sont inutilisées, analyse le contenu des fichiers HTML (ou d'extensions configurées ou d'emplacements) et, de manière instantanée, génère uniquement les classes nécessaires et utilisées.Étant donné que ce ne sont plus toutes les variables qui sont générées, le temps d'attente et la taille des fichiers CSS sont grandement réduits.[[réf. nécessaire]](https://fr.wikipedia.org/wiki/Aide:R%C3%A9f%C3%A9rence_n%C3%A9cessaire "Aide:Référence nécessaire") Cette amélioration technique a rendu possible l'introduction de plusieurs nouvelles variantes et classes utilitaires, ainsi que la possibilité de créer des classes utilitaires à la volée avec des valeurs arbitraires qui ne sont pas établies dans la configuration. JIT est devenu le mode par défaut de Tailwind depuis la version 3.

### BENEFITS

- No reinventing of classes required

- You CSS doesn't  grow with your html and designs

- When you make a change no risk of breaking existing templates

- 
