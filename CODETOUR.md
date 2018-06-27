# Code Tour

A quick introduction to the folders and files in this repo.

## Website anatomy

The website is split into two parts, [`server`](server/index.js) and client, which is further organized in individual folders. Current server is an implementation of [Express](https://expressjs.com/) server. Its a very simple server that makes use of a dummy [`API`](server/api/index.js) and lets all other routes to be handled by [`Next.js`](https://nextjs.org/). When you run `npm run dev`, you are actually running this file [`index.js`](server/index.js).

[`Next.js`](https://nextjs.org/) is our framework of choice, which acts as a thin glue between [ReactJS](https://reactjs.org/) and our [Express](https://expressjs.com/) server together. It will take care of Server Side Rendering, Routing, etc. It also covers [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) configuration, and comes with [style-jsx](https://github.com/zeit/styled-jsx), their [CSS-in-JS](https://hackernoon.com/all-you-need-to-know-about-css-in-js-984a72d48ebc) solution that would remind you of old days or how [Vue](https://vuejs.org/v2/guide/single-file-components.html) components are styled today.

## Source Organisation

To keep things modular, the resources are divided into folders namely `/components`, `/constants`, `/pages`, `/public` and `/server`. We can obviously introduce more as required.

### [`pages`](pages/): Different pages of our website

Contains all the pages a user can see or navigate to. This is a Next.js feature. For example;

- [`index.js`](pages/index.js): Home page (`/`)

  The home page of our website.

- [`about.js`](pages/about.js): About page (`/about`)
  An introduction to UPAY, its vision, its mission, how it works.

### [`public`](public/): Serves static files like images, SVGs, videos, fonts, etc.

- [`public/images`](public/images/): Serves images for our website

### [`components`](components/): Contains the different React components used in the site.

You can check the component library in an interactive way using `npm run styleguide`. [styleguidist](https://react-styleguidist.js.org/) powers the same.

For example;

- [`components/NavBar`](components/NavBar/): Contains code for implementing `<NavBar/>` component

- [`components/Item`](components/Item/): Contains code for implementing `<Item/>` component

### [`server`](server/): Contains our express server and dummy API

- [`server/index.js`](server/index.js/): A simple server implementation using express

- [`server/api/index.js`](server/api/index.js): Our dummy API

## Testing

The [`jest`](https://facebook.github.io/jest/) framework is used for testing the Javascript code, along with airbnb's [Enzyme](https://github.com/airbnb/enzyme) for testing React components.

In the folder of the file (`xyz.js`) you want to test, create `__tests__` folder with a `xyz.test.js` file, that would include tests for `xyz.js` file. This way all our tests will be contained in `__tests__` folder, and would still be colocated with the source code. Naming the test file as `*.test.js` helps us to quickly find the test of using Command P on your editor.

## Config files/folders

- [`package.json`](package.json): npm config file. It also includes several scripts for running/building the server, testing etc.
- [`package-lock.json`](package-lock.json): npm config file (genertaed alongwith package.json). This shouldn't be modified unless you're adding new dependencies or updating them.
- [`jest.setup.js`](jest.setup.js): Jest config file
- [`.eslintrc.js`](.eslintrc.js): ESLint config file
- [`.now.json`](.now.json): [now](https://zeit.co/now) deployment configuration
- [`.vscode/settings.json`](.vscode/settings.json): [VSCode](https://code.visualstudio.com/docs/getstarted/settings) project settings
- [`.all-contributorsrc`](.all-contributorsrc): Source file to store all contributors
- [`styleguide.config.js`](styleguide.config.js): [styleguidist](https://react-styleguidist.js.org/) configuration

## Others

### [`.gitignore`](.gitignore): Contains a list of files and folders to be ignored by git. [More about gitignore..](https://medium.com/@haydar_ai/learning-how-to-git-ignoring-files-and-folders-using-gitignore-177556afdbe3)

### [`LICENSE`](LICENSE): license file

A software license tells others what they can and can't do with your source code. The most common licenses for open source projects are MIT, Apache, GNU... licenses. The license used in this project is the MIT license.

### MARKDOWNS

- [`README.md`](CONTRIBUTING.md): Introduction to this project alongwith instructions to build and contribute to this project.

- [`CONTRIBUTING.md`](CONTRIBUTING.md): Deatiled instructions on contributing to this project.

- [`CODETOUR.md`](CODETOUR.md): A tour through all the files and folders of this project.

Please feel free to make changes to the above documentation :)
