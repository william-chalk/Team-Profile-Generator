// using Manager constructor
const Manager = require("../lib/Manager");

// creating manager object
test("creates an Manager object", () => {
  const manager = new Manager("William", 90, "example@email.com", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("William", 90, "example@email.com");

  expect(manager.getRole()).toEqual("Manager");
});
