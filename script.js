const myLibrary = []
const newBookForm = document.querySelector("#newBook")
const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pagesInput = document.querySelector("#pages")
const libraryDiv = document.querySelector("#library")

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`
    }
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook)
    addBookCard(newBook)
}

function addBookCard(book) {
    const bookCard = document.createElement("div")
    const title = document.createTextNode(`${book.title} by ${book.author}`)
    bookCard.appendChild(title)
    bookCard.classList.add("book")
    libraryDiv.appendChild(bookCard)
}

addBookToLibrary("Le Test", "Person Personus", 3243, "not read yet")
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")

newBookForm.addEventListener("submit", e => {
    e.preventDefault()
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value)
})
