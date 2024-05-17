document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    String.prototype.hashCode = function () {
      var hash = 0,
        i,
        chr;
      if (this.length === 0) return hash;
      for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }
      return hash;
    };
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let hash = password.hashCode();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // let passwordPattern = {6,12}$;

    let isValid = true;

    if (!emailPattern.test(email)) {
      document.getElementById("email").style.border = "2px solid red";
      document.getElementById("emailError").innerHTML =
        "Please enter your Email";
      isValid = false;
    } else {
      document.getElementById("emailError").innerText = "";
    }

    if (password === "") {
      document.getElementById("password").style.border = "2px solid red";
      document.getElementById("passwordError").innerText =
        "Password must be 6-12 characters long and contain at least one numeric digit, one uppercase and one lowercase letter.";
      isValid = false;
    } else {
      document.getElementById("passwordError").innerText = "";
    }

    let staticEmail = "admin@example.com";
    let hashedPassword = "987456321";
    const hashPassword1 = hashedPassword.hashCode();
    let ogj = {
      Useremail: staticEmail,
      uesrpassword: hashPassword1,
    };

    if (isValid && email === staticEmail && hash === hashPassword1) {
      let stored = JSON.parse(localStorage.getItem("UserloggedIn")) || [];
      stored.push(ogj);

      localStorage.setItem("UserloggedIn", JSON.stringify(stored));

      localStorage.setItem("adminEmail", email);
      localStorage.setItem("adminPassword", hashPassword1);
      alert("Login successful!");
      window.location.href = "../html/homepage.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

/* employee */
let logoutBtn = document.getElementById("Logout");
logoutBtn.addEventListener("click", Logout);
function Logout() {
  localStorage.clear();
  window.location.href = "../html/homepage.html";
}

function createTable() {
  // Create a new table element
  var table = document.createElement("table");
  table.setAttribute("border", "5px");
  table.setAttribute("width", "100%");
  // Add headers (optional)
  var headers = [
    "Name",
    "Email",
    "Phone Number",
    "Gender",
    "Department",
    "Salary",
  ];
  var headerRow = table.insertRow();
  headers.forEach(function (headerText) {
    var th = document.createElement("th");
    var text = document.createTextNode(headerText);
    th.appendChild(text);
    headerRow.appendChild(th);
  });

  return table;
}

function addRow(i) {
  var tableContainer = document.getElementById("table");

  if (!tableContainer.firstChild) {
    tableContainer.appendChild(createTable());
  }

  debugger;
  var table1 = tableContainer.firstElementChild;
  const addnewclient = JSON.parse(localStorage.getItem("addnewclient"));
  // for(let i = 0; i<addnewclient.length;i++){
  // Insert a new row
  var newRow = table1.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  let name = localStorage.getItem("name");
  let gender = localStorage.getItem("gender");
  let storedata = JSON.parse(localStorage.getItem("addnewclient"));

  if (storedata[i].name == name && (gender == "" || gender == null)) {
    cell1.appendChild(document.createTextNode(addnewclient[i].name));
    cell2.appendChild(document.createTextNode(addnewclient[i].email));
    cell3.appendChild(document.createTextNode(addnewclient[i].phoneno));
    cell4.appendChild(document.createTextNode(addnewclient[i].gender));
    cell5.appendChild(document.createTextNode(addnewclient[i].department));
    cell6.appendChild(document.createTextNode(addnewclient[i].salary));
  }
  if (storedata[i].gender == gender && gender != "" && name == null) {
    cell1.appendChild(document.createTextNode(addnewclient[i].name));
    cell2.appendChild(document.createTextNode(addnewclient[i].email));
    cell3.appendChild(document.createTextNode(addnewclient[i].phoneno));
    cell4.appendChild(document.createTextNode(addnewclient[i].gender));
    cell5.appendChild(document.createTextNode(addnewclient[i].department));
    cell6.appendChild(document.createTextNode(addnewclient[i].salary));
  }

  if (
    storedata[i].gender == gender &&
    gender != "" &&
    storedata[i].name == name
  ) {
    cell1.appendChild(document.createTextNode(addnewclient[i].name));
    cell2.appendChild(document.createTextNode(addnewclient[i].email));
    cell3.appendChild(document.createTextNode(addnewclient[i].phoneno));
    cell4.appendChild(document.createTextNode(addnewclient[i].gender));
    cell5.appendChild(document.createTextNode(addnewclient[i].department));
    cell6.appendChild(document.createTextNode(addnewclient[i].salary));
  }
  if (name != "" && storedata.length - 1 == i) {
    localStorage.removeItem("name");
  }

  if (gender != "" && storedata.length - 1 == i) {
    localStorage.removeItem("gender");
  }
  if (name == null && gender == "") {
    cell1.appendChild(document.createTextNode(addnewclient[i].name));
    cell2.appendChild(document.createTextNode(addnewclient[i].email));
    cell3.appendChild(document.createTextNode(addnewclient[i].phoneno));
    cell4.appendChild(document.createTextNode(addnewclient[i].gender));
    cell5.appendChild(document.createTextNode(addnewclient[i].department));
    cell6.appendChild(document.createTextNode(addnewclient[i].salary));
  }
  if (name == null && gender == null) {
    cell1.appendChild(document.createTextNode(addnewclient[i].name));
    cell2.appendChild(document.createTextNode(addnewclient[i].email));
    cell3.appendChild(document.createTextNode(addnewclient[i].phoneno));
    cell4.appendChild(document.createTextNode(addnewclient[i].gender));
    cell5.appendChild(document.createTextNode(addnewclient[i].department));
    cell6.appendChild(document.createTextNode(addnewclient[i].salary));
  }

  // }
}

let current_page = 1;
JSON.stringify(localStorage.setItem("pageno", current_page));

function prevPage() {
  let current_page = JSON.parse(localStorage.getItem("pageno"));
  if (current_page > 1) {
    current_page -= 1;
    JSON.stringify(localStorage.setItem("pageno", current_page));
    changePage(current_page);
  }
}

function nextPage() {
  let current_page = JSON.parse(localStorage.getItem("pageno"));

  if (current_page < numPages()) {
    current_page += 1;
    JSON.stringify(localStorage.setItem("pageno", current_page));
    changePage(current_page);
  }
}

function changePage(page) {
  let records_per_page = 5;
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  var listing_table = document.getElementById("table");
  var page_span = document.getElementById("page");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_table.innerHTML = "";

  for (
    var i = (page - 1) * records_per_page;
    i < page * records_per_page;
    i++
  ) {
    if (JSON.parse(localStorage.getItem("addnewclient")).length > i) {
      addRow(i);
    }
  }
  page_span.innerHTML = page;

  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btn_next.style.visibility = "hidden";
  } else {
    btn_next.style.visibility = "visible";
  }
}

function numPages() {
  let records_per_page = 5;
  return Math.ceil(
    JSON.parse(localStorage.getItem("addnewclient")).length / records_per_page
  );
}

function loadtable() {
  // addRow();
  localStorage.removeItem("gender");
  localStorage.removeItem("name");
  changePage(1);
}

function addnewemployee() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let gender = document.getElementById("gender").value;
  let department = document.getElementById("department").value;
  let salary = document.getElementById("salary").value;

  let storedata = JSON.parse(localStorage.getItem("addnewclient")) || [];
  const duplicate = storedata.some((data) => data.email === email);

  if (duplicate) {
    alert("email allready exist");
    return;
  }

  const addnewclient = {
    name: name,
    email: email,
    phoneno: phone,
    gender: gender,
    department: department,
    salary: salary,
  };

  storedata.push(addnewclient);
  localStorage.setItem("addnewclient", JSON.stringify(storedata));
  alert("user Added sucessful");
  window.location.href = "homepage.html";
}

function searchemp() {
  let name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  console.log(name);
  if (name != "") {
    let storedata = JSON.parse(localStorage.getItem("addnewclient"));
    const namesearch = storedata.some((data) => data.name == name);

    if (namesearch) {
      if (JSON.parse(localStorage.getItem("pageno")) > 0) {
        localStorage.removeItem("pageno");
        changePage(1);
      } else {
        changePage(1);
      }
    } else {
      document.getElementById("table").innerHTML = "";
      document.getElementById("table").appendChild(createTable());
    }
  }
}

function gendersearch() {
  let gender = document.getElementById("gender").value;
  localStorage.setItem("gender", gender);
  console.log(gender);

  if (gender != "") {
    let storedata = JSON.parse(localStorage.getItem("addnewclient"));
    const namesearch = storedata.some((data) => data.gender == gender);

    if (namesearch) {
      if (JSON.parse(localStorage.getItem("pageno")) > 0) {
        localStorage.removeItem("pageno");
        changePage(1);
      } else {
        changePage(1);
      }
    } else {
      document.getElementById("table").innerHTML = "";
      document.getElementById("table").appendChild(createTable());
    }
  } else {
    changePage(1);
  }
}
