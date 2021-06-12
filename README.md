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
llet headerData = {
    Id: { Caption: "ID", DataType: Type.DataType.MUMBER, SortType: Type.OrderType.ASC, Display: true },
    FirstName: { Caption: "First Name", DataType: Type.DataType.STRING, SortType: Type.OrderType.NONE, Display: true, Link: "https://google.com" },
    LastName: { Caption: "Last Name", DataType: Type.DataType.STRING, SortType: Type.OrderType.NONE, Display: true, Link: null },
    Phone: { Caption: "Phone", DataType: Type.DataType.PHONE, SortType: Type.OrderType.NONE, Display: true, Link: null }
  };
    // this is optional. This way you can add edit and remove button to each row.
    Edit: { Display: true },
    Remove: { Display: true },
    Links: { Display: false }
  };
  let headerAttributes = {
    Header: {
      class: "header-info",
      id: "header"
    },
    HeaderRow: {
      id: "row",
      class: "class-name"
    },
    HeaderCell: {
      class: "cell-info"
    },
  }
  table.initHeader(headerData, headerAttributes);
  table.initBody(bodyData);
```
- Note : If you don't have defined attributes just run table.initHeader(headerData);
- Notice that in the headerData object the Id object does not have Link property and FirstName object has the link set.

#### - Result

```HTML


```