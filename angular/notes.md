# Angular Nots

## Notes
* Starting file
    * app.module.ts

## Angular 2 language choices
* ES5
    * No compilation is needed
* ES6/ES2015
* TypeScript
* Dart
    * This is not javascript
    * Lowest adopted than above 2

## Driectives
* ngFor, ngIf
* These are call **Structural Directives** because they change the structure of DOM
    * Structural directives have prefix - *
    ```
    *ngFor, *ngIf
    ```

## Data Binding
* Interpolation
    * Component to DOM
```
{{emp.name}}
```
* One Way Binding
    * Component to DOM
```
<h4 [innerText]="emp.name"></h4>
```
* Event Binding
```
<button (click)="buttonClick('jack')" (blur)="buttonBlur("jill")">Send</button>
```
* Two Way Binding
```
<input [(ngModel)]="story.name" />
```

## Services
* We define class and write business logic