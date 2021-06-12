# ObjectiveJS

## Table

### - A simple Html table tag
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
###### - Result
```HTML
<table id="mainTable" class="table"></table>
```

##### - How to add header to the table
  
```JavaScript
let headerData = {
    Id: { 
        Caption: "ID",
        DataType: Type.DataType.MUMBER,
        SortType: Type.OrderType.ASC,
        // does not have link
        Display: true 
    },
    FirstName: { 
        Caption: "First Name", 
        DataType: Type.DataType.STRING, 
        SortType: Type.OrderType.NONE, 
        Display: true, 
        Link: "https://google.com" 
    },
    LastName: { 
        Caption: "Last Name",
        DataType: Type.DataType.STRING, 
        SortType: Type.OrderType.NONE, 
        Display: true, 
        Link: null 
    },
    Phone: { 
        Caption: "Phone", 
        DataType: Type.DataType.PHONE, 
        SortType: Type.OrderType.NONE, 
        Display: true, 
        Link: null 
    }
  };
   
  let headerAttributes = {
    Header: {
      class: "header-info",
      id: "header",
      user_added_attribute:"leave a value"
    },
    HeaderRow: {
      id: "row",
      class: "class-name"
    },
    HeaderCell: {
      class: "cell-info"
    }
  }
  table.initHeader(headerData, headerAttributes);
```
- Notice in the header data object; Id object does not have a Link property, and the FirstName has the link set. In the rest, the Link property is set to null. So You can either set the link property to null or remove it from the header object.
- You can add as many attributes as you want. If there are no attributes for any section, just remove it from headerAttribute object or set it to null. For example: 
```JavaScript
let headerAttributes = {
    Header: {
      class: "header-info",
      id: "header",
      user_added_attribute:"leave a value"
    },
    HeaderCell: {
      class: "cell-info"
    }
  }
```
- Note : If you don't have defined attributes just run table.initHeader(headerData);

###### - Result

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
##### Tale Body

```javascript

 bodyData = [
    {
      Id: 1,
      FirstName: "Joe",
      LastName: "Last Name(fully linked)",
      Phone: 10001,
      Links: {
        Id: "id_link",
        FirstName: "firstname_link",
        LastName: "lastname_link",
        Phone: "phone_link"
      }
    },
    { 
        Id: 2, 
        FirstName: "Jack", 
        LastName: "Last Name (lastname has no link)", 
        Phone: 9101,
        Links: {
            Id: "leave a link",
            FirstName: "leave a link",
            // last name has no link 
            Phone: "leave a link"
            }
    },
    { 
        Id: 3, 
        FirstName: "Alice", 
        LastName: "Last Name(links is null)", 
        Phone: 5678, 
        // Links set to null
        Links: null 
    },
    { 
        Id: 4, 
        FirstName: "Sam", 
        LastName: "Last Name(links is not defined)", 
        Phone: 5678 
        // Links property removed
    },
    { 
        Id: 5, 
        FirstName: "Peter", 
        LastName: "Last Name(id's link is null)", 
        Phone: 1234, 
        Links: { 
            Id: null, 
            FirstName: "leave a link", 
            LastName: "leave a link", 
            Phone: "leave a link" 
            } 
    }
  ];
```
- Every cell in the row can have a link. You can set the links to the null or remove it. 
- Notice the properties of each row are exactly same as the name of each Column in data header.
Example: 
```JavaScript
let headerData = {
    Id: { 
        Caption: "ID",
        DataType: Type.DataType.MUMBER,
        SortType: Type.OrderType.ASC,
        // does not have link
        Display: true 
    },
    FirstName: { 
        Caption: "First Name", 
        DataType: Type.DataType.STRING, 
        SortType: Type.OrderType.NONE, 
        Display: true, 
        Link: "https://google.com" 
    },
  };
let bodyData = [
    {
      Id: 1,
      FirstName: "Joe",
    }
    ];
```
##### - Footer
```JavaScript
 let dataFooter = { FirstGap: {}, Id: { Caption: "Number of people: " }, SecondGap: {}, Sum: { Caption: 5 } };
  table.initFooter(dataFooter);
```
###### - Result
```HTML
<table id="mainTable" class="table">
    <thead class="aaa" id="ss">
        <tr id="id2" class="trClass">
            <th class="cell-info">ID</th>
            <th class="cell-info"><a href="https://google.com">First Name</a></th>
            <th class="cell-info">Last Name</th>
            <th class="cell-info">Phone</th>
            <th class="cell-info" style="display:none;"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="id_link">1</a></td>
            <td><a href="firstname_link">Joe</a></td>
            <td><a href="lastname_link">Last Name(fully linked)</a></td>
            <td><a href="phone:phone_link">10001</a></td>
            <td style="display: none;">[object Object]</td>
        </tr>
        <tr>
            <td><a href="leave a link">2</a></td>
            <td><a href="leave a link">Jack</a></td>
            <td>Last Name (lastname has no link)</td>
            <td><a href="phone:leave a link">9101</a></td>
            <td style="display: none;">[object Object]</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Alice</td>
            <td>Last Name(links is null)</td>
            <td>5678</td>
            <td style="display: none;">[object Object]</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Sam</td>
            <td>Last Name(links is not defined)</td>
            <td>5678</td>
        </tr>
        <tr>
            <td>5</td>
            <td><a href="leave a link">Peter</a></td>
            <td><a href="leave a link">Last Name(id's link is null)</a></td>
            <td><a href="phone:leave a link">1234</a></td>
            <td style="display: none;">[object Object]</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td></td>
            <td>Number of people: </td>
            <td></td>
            <td>5</td>
        </tr>
    </tfoot>
</table>
```
- Notice in each row there is <td style="display: none;">[object Object]</td>. This is an issue which will be addressed in the next update.