# Pod - Podcast Publisher

Pod is a landing page for a fictional podcast publisher that is currently in its early access phase. This fully responsive single-page application (SPA) also features custom form validation to enhance user experience.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Link](#link)
  - [Functionality](#functionality)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![Pod - Podcast Publisher](/src/assets/screenshot.png)

### Link

- Live Site URL: (https://toki-pod.netlify.app)

### Functionality

Users should be able to:

- View the optimal layout for the content depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The email address field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"
  - The email was already submitted should show "This email already has granted access"
- Visualize a success modal message when the form is submitted with a valid email address

### Built with

- CSS3
- Flexbox
- Sass SCSS
- BEM methodology
- Semantic HTML5 markup
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### Useful resources

#### Email validation

- [How to Validate Emails in React](https://mailtrap.io/blog/validate-emails-in-react/)
- [RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

#### Favicon

I used the logo.svg file to create the favicon.

- [Pixlr E](https://pixlr.com/e/) - Cut only the circle part of the logo and saved in png.
- [favicon.io](https://favicon.io/) - Converted the png into ico and replaced the favicon files in the project's public folder.

## Author

Toki Urata - Frontend Developer based in Canada

- Email - [tokiurata@outlook.com](mailto:tokiurata@outlook.com)

## Acknowledgments

This project is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges provide opportunities to improve coding skills by building realistic projects.
