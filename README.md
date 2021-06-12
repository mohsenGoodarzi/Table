# ObjectiveJS

## Table

### A simple table
```javascript
var table = new Table();
```
##### - Element attributes cab be added to the table.
```javascript
let attributes = { id: "mainTable", class: "table" };
  var table = new Table(attributes);
```
#### - Adding the table to the body.

```JavaScript
var body = document.getElementById("body");
  body.appendChild(table.getHTMLTable());
```

#### - Tables' header
  
```JavaScript
let headerData = {
    Id: { Caption: "ID", DataType: Type.DataType.MUMBER, SortType: Type.OrderType.ASC, Display: true, Link: null },
    FirstName: { Caption: "First Name", DataType: Type.DataType.STRING, SortType: Type.OrderType.NONE, Display: true, Link: "https://google.com" },
    LastName: { Caption: "Last Name", DataType: Type.DataType.STRING, SortType: Type.OrderType.NONE, Display: true, Link: null },
    Phone: { Caption: "Phone", DataType: Type.DataType.PHONE, SortType: Type.OrderType.NONE, Display: true, Link: null },
    // this is optional. This way you can add edit and remove button to each row.
    Edit: { Display: true },
    Remove: { Display: true },
    Links: { Display: false }
  };
```