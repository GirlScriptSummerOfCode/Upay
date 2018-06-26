# Code tour

A quick introduction to the folders and files in this repo.

## Website anatomy

The meat of the website lies inside the server folder inside the [`index.js`](server/index.js) file which contains the implementation of express server. Its a very simple server that makes use of a dummy [`API`](server/api/index.js)(/items) and lets all other routes to be handled by nextjs. When you run ```npm run dev```, you are actually running this file [`index.js`](server/index.js).

[`Next.js`](https://nextjs.org/) is basically a thin glue that binds react and our express server together. It will take care of server side rendering, routing, etc. It also covers webpack configuration. and comes with style-jsx which is their css-in-js solution. 


## Source organisation
To keep things modular, the resources are divided into folders namely components, constants, pages, public and server.

### [`pages`](pages/): Different pages of our website

Contains all the pages a user can see or navigate to.

- [`index.js`](pages/index.js): Home page

    The home page of our website.

- [`about.js`](pages/about.js): About page 
    
    An introduction to UPAY, its vision, its mission, how it works.
 

### [`public`](public/): Serves static files like images, svgs, videos, fonts, etc
- [`public/images`](public/images/): Serves images for our website

### [`components`](components/): Contains the different react components used in the site. 

- [`components/NavBar`](components/NavBar/): Contains code for implementing ```<NavBar/>```  component
 
- [`components/Item`](components/Item/): Contains code for implementing ```<Item/>``` component


### [`server`](server/): Contains our express server and dummy API
- [`server/index.js`](server/index.js/): A simple server implementation using express
- [`server/api/index.js`](server/api/index.js): Our dummy API


The [`Jest`](https://facebook.github.io/jest/) framework is used for testing the Javascript code. 
Next.js manages automatic transpilation and bundling(with Webpack and Babel).

## Config files/folders
- [`package.json`](package.json): npm config file
- [`package-lock.json`](package-lock.json): npm config file (genertaed alongwith package.json)
- [`jest.setup.js`](jest.setup.js): Jest config file
- [`.eslintrc.js`](.eslintrc.js): ESLint config file
- [`.all-contributorsrc`](.all-contributorsrc): Source file to store all contributors
## Others

### [`.gitignore`](.gitignore): Contains a list of files and folders to be ignored by git. [More about gitignore..](https://medium.com/@haydar_ai/learning-how-to-git-ignoring-files-and-folders-using-gitignore-177556afdbe3)

### [`LICENSE`](LICENSE): license file

A software license tells others what they can and can't do with your source code. The most common licenses for open source projects are MIT, Apache, GNU... licenses. The license used in this project is the MIT license.

### MARKDOWNS

- [`README.md`](CONTRIBUTING.md): Introduction to this project alongwith instructions to build and contribute to this project.

- [`CONTRIBUTING.md`](CONTRIBUTING.md): Deatiled instructions on contributing to this project.

- [`CODETOUR.md`](CODETOUR.md): A tour through all the files and folders of this project.


Please feel free to make changes to the above documentation :)
