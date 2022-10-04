// using Employee constructor
const Employee = require("../lib/Employee");

// creates employee object
test("creates an employee object", () => {
  const employee = new Employee("William", 90, "example@email.com");

  expect(employee.name).toEqual("William");
  expect(employee.id).toEqual(90);
  expect(employee.email).toEqual("example@email.com");
});

// gets id from getId()
test("gets employee name", () => {
  const employee = new Employee("William", 90, "example@email.com");

  expect(employee.getName()).toEqual("William");
});

// gets id from getId()
test("gets employee ID", () => {
  const employee = new Employee("William", 90, "example@email.com");

  expect(employee.getId()).toEqual(90);
});

// gets emails from getEmail()
test("gets employee email", () => {
  const employee = new Employee("William", 90, "example@email.com");

  expect(employee.getEmail()).toEqual("example@email.com");
});

// gets role from getRole()
test("gets role of employee", () => {
  const employee = new Employee("William", 90, "example@email.com");

  expect(employee.getRole()).toEqual("Employee");
});
