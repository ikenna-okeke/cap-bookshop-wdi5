const ManageBooksPage = require("../pageobjects/manageBooks.page");
const NewBookPage = require("../pageobjects/newBook.page");

describe("Manage bookshop", () => {
  it("should should create a new book ", async () => {
    await ManageBooksPage.iClickOnCreateNewBook();
  });
});
