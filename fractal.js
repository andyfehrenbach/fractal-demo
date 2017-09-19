'use strict';


/* Create a new Fractal instance and export it for use elsewhere if required */
var fractal = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Getting Started in Fractal');

/* Specify default preview layout */
fractal.components.set('default.preview', '@preview');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Configure server port. */
// fractal.web.set('server.port', (process.env.PORT || 8000));

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');

/* Static assets */
fractal.web.set('static.path', __dirname + '/src');

fractal.web.set('server.sync', true);

module.exports = fractal;
