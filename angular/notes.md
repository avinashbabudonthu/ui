# Angular Nots

## Notes
* Starting file
    * app.module.ts
* Angular Application == Component1 + Component2 + Service1 + Service2
	* Angular application set of components
	* Set of services provides functionality across components
* Angular Component
	* View - Template, HTML for user interface
	* class, code associated with view
		* properties
		* Methods
	* Metadata
* Angular module
	* Organize application into blocks
	* Every angular application has atlease one angular module called `Root Angular Module`

## Angular 2 language choices
* ES5 (ECMAScript5)
    * No compilation is needed
* ES6/ES2015
* TypeScript
* Dart
    * This is not javascript
    * Lowest adopted than above 2

## What is TypeScript
* Open source language
* Superset of Javascript
* Transpile to plain Javascript
* Strongly typed
	* TypeScript type definition files (*.d.ts)
* class based object orientation

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