console.log('welcom to project lib');

// constuctor

function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type
}

// Display Constuctor
function Display() {

}

// Add Method to display prototype
Display.prototype.add = function (book) {
    console.log('addingg to uI');
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                   <td>${book.name}</td>
                   <td>${book.author}</td>
                   <td>${book.type}</td>
            </tr>`;
    tableBody.innerHTML += uiString

}

// Implement the  clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();

}

// Implement the  validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function(type,displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert ${type}  alert-dismissible fade show" role="alert">
                         <strong>Massage:</strong> ${displayMessage}
                         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                         <span aria-hidden="true">×</span>
                     </div>`
    setTimeout(function (){
        message.innerHTML = ""
    }, 2002);
                


}





// Add submit event listner to formlibraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();

    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programing');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programing.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('succes','Your book has been sucseesfully add ')
    }
    else {
        // show error to the user
        display.show('danger','Sorry you can not add this book');
    }

    e.preventDefault();
}