# Paul Wagner's Resume
This project presents my resume - or any given resume in JSON Resume Schema format (https://jsonresume.org/) - with ReactJS, using Gulp, Babel, and Browserify to compile the ES6 code to a single ES5 bundle.

# Getting started
1. Clone the repo and run `npm install`
2. Adapt `src/resume.json` according to your needs.
3. Development mode: `npm start`
4. Tests (mocha): `npm test` or `npm run test:watch`
5. Build dist: `npm run build`

# Remarks
In order to provide more information, I had to extend the JSON Resume Schema with additional fields:
* isPrivate
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
