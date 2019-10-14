# Upload-File-AWS

![Screenshot](Screenshot.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Dependences

* aws-amplify-angular 
`npm install aws-amplify aws-amplify-angular`

* sdk-aws
`npm install aws-sdk`

## Config

Add these lines of code in the `polyfills.ts` file.

~~~
(window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
};
~~~

Add these lines of code in the `tsconfig.app.json` file.
~~~
 "compilerOptions": {
    "types": ["node"]
  }
~~~

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Source

Revisar esta [guía](https://grokonez.com/aws/angular-4-amazon-s3-example-how-to-upload-file-to-s3-bucket)
