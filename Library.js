
class Type {
  static  get OrderType() {
    return { ASC: 1, DESC: 2, NONE: 3 };
  }
  static  get DataType () {
    return { STRING: "string", NUMBER: "number", DATE: "date", MAIL: "mail", PHONE: "phone" };
  }
};

class Filter {

  #regExp;

  set setRegExp(regExp) {
    this.#regExp = regExp;
  }
  get getRegExp() {
    return this.#regExp;
  }

  filter(data, propertyName, value) {
    let filteredData = null;

    if (typeof (data[0][propertyName]) === Type.DataType.NUMBER) {

      filteredData = data.filter(row => {
        if (row[propertyName] === value) {
          return true;
        } else {
          return false;
        }
      });
    } else
      // used for string types 
      if (typeof (data[0][propertyName]) === Type.DataType.STRING) {
        //use regex here
        this.#regExp = this.#regExp || new RegExp(value + "+", "gi");
        filteredData = data.filter(row => {
          if (row[propertyName].match(this.#regExp) !== null) {
            return true;
          }
          else {
            return false;
          }
        });
      }
      return filteredData;
  }
};

class Sort {

  sort(data, columnName, sortType) {

    let dataType = typeof data[0][columnName];

    switch (dataType) {
      case Type.DataType.STRING: {
        data.sort((firstRow, secondRow) => {
          let firstValue = firstRow[columnName].toLowerCase();
          let secondValue = secondRow[columnName].toLowerCase();
          let result = 0;
          if (firstValue > secondValue) {
            result = 1;
          }
          else {
            result = -1;
          }
          if (sortType === Type.DataType.DESC) {
            result *= -1;
          }
          return result;
        });
      }
        break;
      case Type.DataType.NUMBER: {
        data.sort((firstRow, secondRow) => {
          let result = firstRow[sortBy] - secondRow[sortBy];
          if (sortType === Type.DataType.DESC) {
            result *= -1;
          }
          return result;
        });
      }

        break;
      case Type.DataType.DATE: {
        data.sort((firstRow, secondRow)=> {
          let result = new Date(firstRow[sortBy]) - new Date(secondRow[sortBy]);

          if (sortType === Type.DataType.DESC) {
            result *= -1;
          }
          return result;
        });
      }
        break;
    }
  }
};


class Table {

  #table;
  #thead;
  #tbody;
  #tfoot;

  #bodyData;
  #headerData;

  constructor(attributes = {}) {

    this.#table = document.createElement("table");
    this.setAttributes(this.#table, attributes);

  }

  getHTMLTable() {
    return this.#table;
  }

  setAttributes(element, attributes) {
    for (let attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }

  initHeader(headerData, attributes = {}) {

    this.#headerData = headerData;

    // creates thead element and adds to the table 
    this.#thead = document.createElement("thead");
    this.setAttributes(this.#thead, attributes.Header);

    // adds a row to the header
    let headerRow = document.createElement("tr");
    this.setAttributes(headerRow, attributes.HeaderRow);
    this.#thead.appendChild(headerRow);


    //adds cells to the header row
    for (let col in headerData) {
      let headerCell = document.createElement("th");
      this.setAttributes(headerCell, attributes.HeaderCell);

      if (headerData[col].Display === false) {
        headerCell.setAttribute("style", "display:none;");
      }

      if (headerData[col].Link === null || headerData[col].Link === undefined) {
        headerCell.innerText = headerData[col].Caption || "";
      } else {
        let link = document.createElement("a");
        link.setAttribute("href", headerData[col].Link);
        link.innerText = headerData[col].Caption || "";
        headerCell.appendChild(link);
      }

      headerRow.appendChild(headerCell);
    }

    // adds all above to the table
    this.#table.appendChild(this.#thead);

  }


  initBody(bodyData, attributes = {}) {

    this.#tbody = document.createElement("tbody");
    this.setAttributes(this.#tbody, attributes.Body);
    this.#table.appendChild(this.#tbody);

    for (let rowData of bodyData) {
      let rowElement = this.createRow(rowData, attributes);
      this.#tbody.appendChild(rowElement);
    }
  }


  createRow(rowData, attributes = {}) {

    let rowElement = document.createElement("tr");
    this.setAttributes(rowElement, attributes.BodyRow);
    for (let cellName in rowData) {

      let cellElement = document.createElement("td");
      this.setAttributes(cellElement, attributes.BodyCell);

      // assigns rowData.Links to an empty object, if the user took off the Links property from rows or assigned it to null
      rowData.Links = rowData.Links || {};

      // adds links to the cells if there is any
      if (rowData.Links[cellName] !== undefined && rowData.Links[cellName] !== null) {
        let link = document.createElement("a");
        link.innerText = rowData[cellName];

        // checks if the data type is mail or phone then adds appropriate tags to them.
        if (this.#headerData[cellName].DataType === Type.DataType.PHONE) {
          rowData.Links[cellName] = "phone:" + rowData.Links[cellName];
        } else if (this.#headerData[cellName].DataType === Type.DataType.MAIL) {
          rowData.Links[cellName] = "mail:" + rowData.Links[cellName];
        }

        link.setAttribute("href", rowData.Links[cellName]);
        cellElement.appendChild(link);

      } else {
        cellElement.innerText = rowData[cellName];
      }
      // checks if the columns' data should be displayed 
      if (this.#headerData[cellName].Display === false) {
        cellElement.setAttribute("style", "display: none;");
      }


      rowElement.appendChild(cellElement);

    }
    return rowElement;
  }


  initFooter(footerData, attributes = {}) {

    this.#tfoot = document.createElement("tfoot");
    this.setAttributes(this.#tfoot, attributes.Footer);
    this.#table.appendChild(this.#tfoot);

    let row = document.createElement("tr");
    this.setAttributes(row, attributes.FooterRow);
    this.#tfoot.appendChild(row);

    for (let cellData in footerData) {

      let cell = document.createElement("td");
      this.setAttributes(cell, attributes.FooterCell);
      cell.innerText = footerData[cellData].Caption || "";
      row.appendChild(cell);

    }
  }

  get getHeaderData() {
    return this.#headerData;
  }
  get getBodyData() {
    return this.#bodyData;
  }

}
