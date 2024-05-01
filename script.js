const myLibrary = []
const newBookForm = document.querySelector("#newBook")
const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pagesInput = document.querySelector("#pages")
const libraryDiv = document.querySelector("#library")
const openDialog = document.querySelector("h1 + button")
const dialog = document.querySelector("dialog")
const readBox = document.querySelector("#readStatus")


openDialog.addEventListener("click", () => {
    dialog.showModal()
})

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
    info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`
    }
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook)
    updateLibary()
}

function addBookCard(book) {
    const bookCard = document.createElement("div")
    const title = document.createElement("div")
    const author = document.createElement("div")
    const pages = document.createElement("div")
    const btn = document.createElement("button")
    const checkbox = document.createElement("input")
    const label = document.createElement("label")
    title.innerText = book.title
    title.classList.add("title")
    bookCard.appendChild(title)
    author.innerText = book.author
    bookCard.appendChild(author)
    author.classList.add("author")
    pages.innerText = `${book.pages} pages`
    title.classList.add("pages")
    bookCard.appendChild(pages)
    label.innerText = "Read?"
    bookCard.appendChild(label)
    label.setAttribute("for", "read")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("name", "read")
    bookCard.appendChild(checkbox)
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22px"><title>trash-can</title><path fill="#FD4343"d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>'
    bookCard.appendChild(btn)
    btn.classList.add("remove")
    bookCard.classList.add("book")
    libraryDiv.appendChild(bookCard)

    btn.addEventListener("click", () => {
        removeBook(book)
    })

    if (book.readStatus === "read") {
        checkbox.checked = true
    }
}

function removeBook(remove) {
    let index = myLibrary.findIndex(book => book.title === remove.title)
    myLibrary.splice(index, 1)
    updateLibary()
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 305, "read")
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, "unread")
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1001, "read")
addBookToLibrary("Tress of the Emerald Sea", "Brandon Sanderson", 483, "unread")

newBookForm.addEventListener("submit", e => {
    e.preventDefault()
    let readStatus
    readBox.checked ? readStatus = "read" : readStatus = "unread"
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readStatus)
    dialog.close()
    newBookForm.reset()
})

function updateLibary() {
    libraryDiv.replaceChildren()
    myLibrary.forEach(book => {
        addBookCard(book)
    })
}

updateLibary()