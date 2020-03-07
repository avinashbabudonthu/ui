# DataBinding

## Create project
```
ng new data-binding
```

## Development server
* Run any of the following commands
```
ng serve
ng serve -o
npm start
```
* Navigate to `http://localhost:4200/`

## Examples
* Refer [src/app/app.component.html](src/app/app.component.html) and [src/app/app.component.ts](src/app/app.component.ts)
    * Interpolation
    * Property Binding
    * Event Binding
    * Two Way Binding
        * For two way binding we need to use `ngModel` for that we need to add `FormsModule` in [src/app/app.module.ts](src/app/app.module.ts)
        * We need to import `FormsModule` from `angular/forms`
    * Transforming Data With Pipes