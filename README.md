# Getting Started in ADEL & Fractal.js

# Intro
* The goal of this exercise is to introduce the methods and standards we use for ADEL in a simplified environment, and help avoid some of the pitfalls we made in our early contributions to ADEL.
* In this code challenge, you will use the Fractal component library to build a single component with 2 variants.
* You will use Handlebars to write markup following SuitCSS's best-practice naming conventions.
* You will be using ordinary CSS that supports the use of variables and calc() functions.

# Installation
* First download or clone the repository.
* Next, navigate to the directory in a terminal and run
```
npm install
```
* If not already on the `start` branch, run
```
git checkout -b "start"
```

* We've provided a skeleton to avoid some of the initial hassle and grunt work.

# Documentation
This is a self-guided exercise, but in order to complete it you will need to reference the following sets of documentation:

* [Fractal](http://fractal.build/guide)
* [SuitCSS](https://github.com/suitcss/suit)
* [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
* [Handlebars](http://handlebarsjs.com/)
* [Git](https://git-scm.com/doc)

# Variants
The Dessert Menu component has 2 variants, as shown here:

#### Default
![Default Variant](/images/Default.png)

#### Inline
![Inline Variant](/images/Inline.png)

# Notes
* Code in CSS variables, but try to only introduce as many variables as is necessary to do the job. for example, do we need 4 margin and padding variables, or can we define one and run calc() functions on that variable when necessary?

* Fractal has two types of variants: variants that share the same markup, and variants that have different markup.
For this exercise, the inline variant can be created without needing to write a separate markup file.

* Take a look at master if you get stuck, but try to reference to the docs for answers first

* Write CSS rules alphabetically. this is the way our linter runs in ADEL.

* When you're finished, set up a pull request. There are several elements in this project that could be accomplished many different ways, and it helps to know why you chose method X over method Y.

# Resources
* Feel free to use your own fonts, colors and data--these are what I used. Google fonts are loaded in `_preview.hbs`

#### Font Stacks
* "Bungee Shade", sans-serif
* "Palatino", serif

#### Colors
* Brown:  hsla(4, 61%, 9%, 1);
* Maroon

#### Data
* Lemon Tart
fresh lemon filling, shortbread crust, whipped cream
8

* Bourbon Chocolate Pie
bourbon and dark chocolate, marshmallow, salted caramel
9

* Chocolate Macaroons
chocolate drizzles, coconut, almonds
7

* Gluten-free Chocolate Tart
orange creme anglaise, raspberry mint salsa, vanilla ice cream
7
