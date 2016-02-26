# Universal(Isomorphic) React JSPM Boilerplace

With Universal App, JavaScript runs on both the client and server side.

#### Universal Javascript Benefits:

* Better overall user experience
* Search engine indexable
* Easier code maintenance
* Free progressive enhancements

###  Contains

- [x] Server Side Rendering
- [x] [JSPM](http://jspm.io/)
- [x] [Express](http://expressjs.com/)
- [x] [React](https://facebook.github.io/react/)
- [x] [Baobab](https://github.com/Yomguithereal/baobab)
- [ ] [Babel](https://babeljs.io/)
- [x] [React Router](https://github.com/rackt/react-router)
- [x] Authentication [Passportjs](http://passportjs.org/)
- [x] [Bootstrap](http://getbootstrap.com/)

### Setup

Install node modules

```npm install ```

Install jspm packages

```jspm install ```

### Running

``` node server.js```

### Create bundle

```sh
export NODE_ENV=production
make build
node server.js
```

After this you can check public folder with `js` and `css` minified files

#### Credits

* [DavidWells/isomorphic-react-example](https://github.com/DavidWells/isomorphic-react-example)
* [Let's create our own router component with React.js](https://enome.github.io/javascript/2014/05/09/lets-create-our-own-router-component-with-react-js.html)
* [True isomorphic apps with React and Baobab](http://christianalfoni.github.io/javascript/2015/03/01/true-isomorphic-apps-with-react-and-baobab.html)

#### Note

This is my personal boilerplate, it may or may not be a good boilerplate, if you have suggestions or suggestions, all forms of contribution are welcome

####  Licence

MIT
