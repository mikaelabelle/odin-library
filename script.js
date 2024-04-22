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
    const title = document.createElement("div")
    const author = document.createElement("div")
    const pages = document.createElement("div")
    title.innerText = (book.title)
    title.classList.add("title")
    bookCard.appendChild(title)
    author.innerText = (book.author)
    bookCard.appendChild(author)
    author.classList.add("author")
    pages.innerText = (`${book.pages} pages`)
    title.classList.add("pages")
    bookCard.appendChild(pages)
    bookCard.classList.add("book")
    libraryDiv.appendChild(bookCard)
}

addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1001, "not read yet")
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 305, "not read yet")

newBookForm.addEventListener("submit", e => {
    e.preventDefault()
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value)
})
