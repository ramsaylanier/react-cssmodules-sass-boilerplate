# webpack-react-cssmodules-boilerplate
A boilerplate for running a Webpack workflow in Node express using React with React CSS Modules (using SASS)

Please read [The ultimate Webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup) to know more about this boilerplate.
Also, read [About React CSS Modules](https://github.com/gajus/react-css-modules).

## Major update to project
Inspired by [this project](https://github.com/vesparny/react-kickstart) and the evolving of [react-transform](https://github.com/gaearon/react-transform-boilerplate) and [CSS Modules]((http://glenmaddern.com/articles/css-modules)), this project has gotten a major upgrade.

**NOTE!** Use the latest version of Node, 5.x.x.

## Get Started
Just run ```npm start```

### React by default
The project runs with React by default and hot replacement of changes to the modules.

### React CSS Modules
SASS files loaded into components are locally scoped and you can point to class names with javascript. You can also compose classes together, also from other files. These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).


### Babel and Linting
Both Node server and frontend code runs with Babel. And all of it is linted. With atom you install the `linter` package, then `linter-eslint` and `linter-jscs`. You are covered. Also run `npm run eslint` or `npm run jscs` to verify all files. I would recommend installing `language-babel` package too for syntax highlighting

### Beautify
With a beautify package installed in your editor it will also do that
