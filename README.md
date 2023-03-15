<!-- # React Vitest Template

A starter template for building React apps with Vite. Includes Vitest for unit testing and
a hefty .gitignore file.

## Usage

```
mkdir your-app-name
cd your-app-name
npx degit criesbeck/react-vitest
npm install
```

## Test

Verify that the initial app works. Run

```
npm start
```

and open the URL displayed.

Verify that the unit tests work with

```
npm test
```

Two tests should run and pass. 

## Scripts

**package.json** defines the following scripts:

| Script         | Description                                         |
| -------------- | --------------------------------------------------- |
| npm start      | Runs the app in the development mode.               |
| npm run dev    | Runs the app in the development mode.               |
| npm run build  | Builds the app for production to the `dist` folder. |
| npm run serve  | Serves the production build from the `dist` folder. |
| npm test       | Starts a Jest-like test loop                        |


## Git

If everything is working, set up [your local and remote repositories](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git).

## Folder Structure

```
your-app-name
├── node_modules
├── public
│   ├── favicon.svg
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    └── logo.svg
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Credits

React-Vitest built and maintained by [Chris Riesbeck](https://github.com/criesbeck).

Inspired by [SafdarJamal/vite-template-react](https://github.com/SafdarJamal/vite-template-react).
Expanded to include Vitest and some sample tests.

Thanks to Rich Harris for [degit](https://www.npmjs.com/package/degit).

Gitignore file created with [the Toptal tool](https://www.toptal.com/developers/gitignore/api/react,firebase,visualstudiocode,macos,windows).


## License

This project is licensed under the terms of the [MIT license](./LICENSE). -->


<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
<a href="https://github.com/394-w23/DogSpace">
    <img src="./src/svgs/logo_zendog.svg" alt="Logo" width="80" height="80">
  </a>
<h3 align="center">ZenDog</h3>

  <p align="center">
    An app for pet owners to explore curated content and connect with pet experts.
    <br />
    <a href="https://github.com/394-w23/DogSpace"><strong>Explore the docs »</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#repository">Repository</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [![FireBase][FireBase.js]][FireBase-url]
* [![Material-UI][Material-UI.js]][Material-UI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* You will need to create a Firebase account at [https://console.firebase.google.com/](https://console.firebase.google.com/). 

### Installation

0. If you do not have Node.js installed, install it from [https://nodejs.org/en/](https://nodejs.org/en/) to run ```npm``` commands.
1. Open a terminal and navigate to inside this project directory.
2. Run ```npm install``` to install all dependencies.
3. In Firebase, create a new project in Firebase for this app (Google Analytics is optional). Leave default settings for everything else.
4. Once the app has been created, go to Project Settings -> Your Apps (there should be nothing there) -> Add new web app.
5. For the "Register App" step, enter the app name, enable hosting as well (create your host domain with your app name as well). 
6. For the "Add Firebase SDK step," select "Use NPM." Copy the data that looks like the following into src/utils/firebase.js at line 21 (replacing the placeholder that's there at the moment)
```
 export const firebaseConfig = {
   apiKey: '[INSERT FIREBASE API KEY HERE]',
   authDomain: '[INSERT DOMAIN AUTHENTICATION HERE]',
   projectId: '[INSERT PROJECT ID HERE]',
   storageBucket: '[INSERT CLOUD STORAGE BUCKET HERE]',
   messagingSenderId: '[INSERT CLOUD MESSAGING SENDER ID HERE]',   
   appId: '[INSERT APP ID HERE]',
   measurementId: '[INSERT MEASUREMENT ID HERE]'
 };
```
7. Now open the terminal, and type ```npm install firebase``` like it says on this step, then click next to proceed to the next step.
8. Open the terminal again and run ```npm install -g firebase-tools``` like it says
9. Now run  ```firebase login``` and login to the same Firebase account, then run ```firebase init```. Next, go to the .firebaserc file and paste the app's host id (whatever you entered to go before the .web.app in step 5) into anywhere that says "[HOST_ID]"

### Firestore
10. To initialize the FireStore, visit [https://firebase.google.com/docs/firestore/quickstart](https://firebase.google.com/docs/firestore/quickstart) and follow the provided steps. Make collections for "dogs," "expert content," "experts," "users," using the formats below. Populate the "expert content" and "experts" collections with the content found in "Content_Dump.xlsx," the other two collections will be filled by users of the app.

```
dogs: {
    "age": number,
    "birthday": string,
    "breed": string,
    "email": string,
    "gender": string,
    "health issues": array[string]
    "name": string
}

expert content: {
    "category": string,
    "expert": string,
    "numOfRatings": number,
    "rating": number,
    "url": string
}

experts: {
    "bio": string,
    "categories": array[string],
    "email": string,
    "experience": number,
    "expertise breeds": array[string],
    "location": string,
    "name": string,
    "pfp": string,
    "rating": number,
    "whatsapp": string,
}

users: {
    "age": number,
    "email": string,
    "gender": string,
    "name": string
}
```

### Deployment
11. Finally, run ```firebase deploy --only hosting:[HOST_ID]``` where HOST_ID is what you used for step 9. Once the deployment finishes, the app should be live at HOST_ID.web.app
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

The React Vitest template used for this app is distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Repository

Project Link: [https://github.com/394-w23/DogSpace](https://github.com/394-w23/DogSpace)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Developed by: Team Sage, COMP_SCI 394-0
    - Melanie Flowers, Tianze Liu, Brevan Mitchell, Ryan Newkirk, Mercedes Sandu, Isaac Winoto, Andrew Zhuang
* Designed by: Team Sage, MPD 405-0
    - Barkha Gogoi, Sidhant Khadanga, Jonah Reisen, Aastha Singh, Pariphat Sinma 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[FireBase.js]: https://img.shields.io/badge/Firebase-20232A?style=for-the-badge&logo=firebase&logoColor=61DAFB
[FireBase-url]: https://firebase.google.com/
[Material-UI.js]: https://img.shields.io/badge/Material--UI-20232A?style=for-the-badge&logo=material-ui&logoColor=61DAFB
[Material-UI-url]: https://material-ui.com/