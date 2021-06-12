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
```
- Note : If you don't have defined attributes just run table.initHeader(headerData);
- Notice in the header data object; Id object does not have a Link property, and the FirstName has the link set. So You can set the link property to null or take it off.

#### - Result

```HTML
<table id="mainTable" class="table">
    <thead class="header-info" id="header">
        <tr id="row" class="class-name">
            <th class="cell-info">ID</th>
            <th class="cell-info"><a href="https://google.com">First Name</a></th>
            <th class="cell-info">Last Name</th>
            <th class="cell-info">Phone</th>
        </tr>
    </thead>
</table>
```