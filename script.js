const myLibrary = []
const newBookForm = document.querySelector("#newBook")
const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pagesInput = document.querySelector("#pages")
const libraryDiv = document.querySelector("#library")
const openDialog = document.querySelector("h1 + button")
const dialog = document.querySelector("dialog")


openDialog.addEventListener("click", () => {
    dialog.showModal()
})

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
    updateLibary()
}

function addBookCard(book) {
    const bookCard = document.createElement("div")
    const title = document.createElement("div")
    const author = document.createElement("div")
    const pages = document.createElement("div")
    const btn = document.createElement("button")
    title.innerText = book.title
    title.classList.add("title")
    bookCard.appendChild(title)
    author.innerText = book.author
    bookCard.appendChild(author)
    author.classList.add("author")
    pages.innerText = `${book.pages} pages`
    title.classList.add("pages")
    bookCard.appendChild(pages)
    btn.innerText = "Remove"
    bookCard.appendChild(btn)
    btn.classList.add("remove")
    bookCard.classList.add("book")
    libraryDiv.appendChild(bookCard)

    btn.addEventListener("click", () => {
        removeBook(book)
    })
}

function removeBook(remove) {
    let index = myLibrary.findIndex(book => book.title === remove.title)
    myLibrary.splice(index, 1)
    updateLibary()
}

addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1001, "not read yet")
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 305, "not read yet")

newBookForm.addEventListener("submit", e => {
    e.preventDefault()
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value)
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