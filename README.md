# ObjectiveJS

## Table

#### - A simple Html table tag
```javascript
var table = new Table();
var body = document.getElementById("body");
  body.appendChild(table.getHTMLTable());
```
##### - How to add attributes to the table.
```javascript
let attributes = { id: "mainTable", class: "table" };
  var table = new Table(attributes);
```
##### - Result
```HTML
<table id="mainTable" class="table"></table>
```

#### - How to add header to the table
  
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
   table.initHeader(headerData, headerAttributes);
  table.initBody(bodyData);
```