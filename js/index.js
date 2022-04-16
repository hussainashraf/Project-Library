console.log("CONECTED");

// constructor intilize
function Book(name, author, date, time) {
  this.name = name;
  this.author = author;
  this.date = date;
  this.time = time;
}
// Display Constructor
function Display() {}

Display.prototype.validate = function (book) {
    if(book.name.length < 2 || book.author.length<2){
        return false;
    }else{
        return true;
    }
};

Display.prototype.show = function (type,displayMessage) {
    alert = document.getElementById('alert')
    let text ;
    if(text=="success"){
        text = "success"
    }else{
        text = "Error"
    }
     alert.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
     <strong>${text}:</strong> ${displayMessage}
     </div>`;

     setTimeout(function () {
        alert.innerHTML = ''
    }, 2000);
   };


Display.prototype.add = function (book) {
  tablebody = document.getElementById("tablebody");
  let string = ` 
     <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.date}</td>
    <td>${book.time}</td>
    </tr>`;
  tablebody.innerHTML += string;
};

Display.prototype.clear = function () {
  let libraryform = document.getElementById("libraryForm");
  libraryform.reset();
};

let libraryform = document.getElementById("libraryForm");
libraryform.addEventListener("submit", libraryformSubmit);

function libraryformSubmit(e) {
  console.log("Form Submitted");
  let name = document.getElementById("Issuer").value;
  localStorage.setItem('Issuer name',name)
  let author = document.getElementById("bookName").value;
  let date = document.getElementById("issueDate").value;
  let time = document.getElementById("issueTime").value;
  let book = new Book(name, author, date, time);

  console.log(book);

  let display = new Display();
  
  if (display.validate(book)) {
    display.add(book);
    display.show('success',"Book Added Successfully")
    display.clear();
  } else {
    display.show('danger',"Not Able to add this book")
    display.clear();
  }

  e.preventDefault();
}
