# DropdownTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Hosted Site
You can access [https://kianmeng.com/temp/dropdown/](https://kianmeng.com/temp/dropdown/) to access the hosted version of the comparison. 

## Building Web Component

Run `npm run build:lib`. Complied files will be located at `dist/components/output`.

2 files will be generated.
> main.js
>
> styles.css

## Rendering Web Component
You can test out the web component using the following sample code, or access [https://kianmeng.com/temp/dropdown/dist/](https://kianmeng.com/temp/dropdown/dist/)

>You can change the `labelprop` value from `title` to any property of the object. i.e. for the sample HTML below you can change its to `labelprop="description"` 

```
<!doctype html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Components</title>
      <base href="/">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/x-icon" href="favicon.ico">
      <link rel="stylesheet" href="https://kianmeng.com/temp/dropdown/dist/styles.css">
   </head>
   <body>
      <app-ng-select placeholder="Please Select" labelprop="title"></app-ng-select>
      <app-mat-select placeholder="Please Select" labelprop="title"></app-mat-select>
      <script>
		 var data = generateData();
		 
         document.querySelector('app-ng-select').items = data;
         document.querySelector('app-mat-select').items = data;
		
         function generateData()
         {
             var data = [];
             for (var i = 1; i < 10000; i++) {
                 data.push({
                     id: i,
                     title: i + " Sample Item",
                     description: "Some dummy description for " + i
                 });
             }
             return data;
         }
         
      </script>
      <script src="https://kianmeng.com/temp/dropdown/dist/main.js" defer></script>
   </body>
</html>
```