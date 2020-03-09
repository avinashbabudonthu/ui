# Components

## Development server
* Run any of the following commands
```
ng serve
ng serve -o
npm start
```
* Navigate to `http://localhost:4200/`

## Create component manually
* Create a folder `employees` under `src/app`
* Create files
    * employee.component.ts
    * employee.component.html
* write class `EmployeeComponent` in [src/app/employees/employee.component.ts](src/app/employees/employee.component.ts)
* Declare `@Component` directive in [src/app/employees/employee.component.ts](src/app/employees/employee.component.ts)
* Import `EmployeeComponent` in [src/app/app.module.ts](src/app/app.module.ts)
* Give `emps` selector in [src/app/app.component.html](src/app/app.component.html)