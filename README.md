# Paul Wagner's Resume
This project presents my resume - or any given resume in JSON Resume Schema format (https://jsonresume.org/) - with ReactJS, using Gulp, Babel, and Browserify to compile the ES6 code to a single ES5 bundle.

[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/pwagner/my-resume-stack)

# Getting started
1. Clone the repo and run `npm install`
2. Adapt `src/resume.json` according to your needs.
3. Development mode: `npm start` or `npm run dev`
4. Tests (mocha): `npm test` or `npm run test:watch`
5. Build dist: `npm run build`

## Private vs Public Resume
By default, the phone number and exact address will not be displayed in the Contact component. A hint is shown instead.
If your résumé contains sensitive data that you don't want to publish to the whole world, you can create a `resume.private.json` file in `src`, which contains the full information, and delete the unwanted fields in `resume.jon`
You can then develop and build the private resume based on `resume.private.jon` using the following commands:
* `npm run dev:private`
* `npm run build:private`


## Remarks
In order to provide more information, I had to extend the JSON Resume Schema with additional fields:
* isPrivate (should be set to true in `resume.private.json` and false in the public `resume.json`)
* basics.birthday
* basics.children
* basics.citizenship
* basics.location.countryName
* basics.quote.text
* basics.quote.author
* education[].educationType
* education[].remark
* publications[].keywords
* publications[].isOffline

# Demo
My public resume can be viewed at http://resume.appgarage.at.
