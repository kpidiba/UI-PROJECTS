# tailwindcss_learning

Create simple responsive landing page with tailwind css

**launch in development**

```bash
npm run build
```

### IMPORT FONT

- Go to google font select font  select

- choose style and copy the style content in the input.css

- in tailwind.config.js

add this 

```js
 theme: {
    extend: {
      fontFamily:{
        playfair:"'Playfair Display', serif"
      }
    },
  },
```

## [Using CSS and @layer](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer)

When you need to add truly custom CSS rules to a Tailwind project, 
the easiest approach is to just add the custom CSS to your stylesheet:

main.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.my-custom-style {
  /* ... */
}
```

For more power, you can also use the `@layer` directive to add styles to Tailwind’s `base`, `components`, and `utilities` layers:

main.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .my-custom-style {
    /* ... */
  }
}
```

The `@layer` directive helps you control declaration order by automatically relocating your styles to the corresponding `@tailwind` directive, and also enables features like [modifiers](https://tailwindcss.com/docs/adding-custom-styles#using-modifiers-with-custom-css) and [tree-shaking](https://tailwindcss.com/docs/adding-custom-styles#removing-unused-custom-css) for your own custom CSS.

### [Adding base styles](https://tailwindcss.com/docs/adding-custom-styles#adding-base-styles)

If you just want to set some defaults for the page (like the text 
color, background color, or font family), the easiest option is just 
adding some classes to the `html` or `body` elements:

```html
<!doctype html>
<html lang="en" class="text-gray-900 bg-gray-100 font-serif">
  <!-- ... -->
</html>
```

This keeps your base styling decisions in your markup alongside all 
of your other styles, instead of hiding them in a separate file.

If you want to add your own default base styles for specific HTML elements, use the `@layer` directive to add those styles to Tailwind’s `base` layer:

main.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
  /* ... */
}
```

Use the [`theme`](https://tailwindcss.com/docs/functions-and-directives#theme) function or [`@apply`](https://tailwindcss.com/docs/functions-and-directives#apply) directive when adding custom base styles if you want to refer to any of the values defined in your [theme](https://tailwindcss.com/docs/theme).

 

### [Adding component classes](https://tailwindcss.com/docs/adding-custom-styles#adding-component-classes)

Use the `components` layer for any more complicated 
classes you want to add to your project that you’d still like to be able
 to override with utility classes.

Traditionally these would be classes like `card`, `btn`, `badge` — that kind of thing.

main.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .card {
    background-color: theme('colors.white');
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.xl');
  }
  /* ... */
}
```

By defining component classes in the `components` layer, you can still use utility classes to override them when necessary:

```html
<!-- Will look like a card, but with square corners -->
<div class="card rounded-none">
  <!-- ... -->
</div>
```

Using Tailwind you probably don’t need these types of classes as often as you think. Read our guide on [Reusing Styles](https://tailwindcss.com/docs/reusing-styles) for our recommendations.

The `components` layer is also a good place to put custom styles for any third-party components you’re using:

main.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .select2-dropdown {
    @apply rounded-b-lg shadow-md;
  }
  .select2-search {
    @apply border border-gray-300 rounded;
  }
  .select2-results__group {
    @apply text-lg font-bold text-gray-900;
  }
  /* ... */
}
```

Use the [`theme`](https://tailwindcss.com/docs/functions-and-directives#theme) function or [`@apply`](https://tailwindcss.com/docs/functions-and-directives#apply) directive when adding custom component styles if you want to refer to any of the values defined in your [theme](https://tailwindcss.com/docs/theme).
