const { describe, expect, it } = require("@jest/globals");
const Employee = require("./Employee.js");

describe("The Employee() constructor", function () {
  it("Throws an error if a name is not provided", function () {
    // Arrange / Act
    function createUnnamedEmployee() {
      new Employee();
    }

    // Assert
    expect(createUnnamedEmployee).toThrow();
  });
});

describe("The getName() method", function () {
  it("Returns an employee's name", function () {
    // Arrange
    const employee = new Employee("Tony Tester", 40_000);

    // Act
    const employeeName = employee.getName();

    // Assert
    expect(employeeName).toBe("Tony Tester");
  });
});

describe("The getSalary() method", function () {
  it("Returns an employee's salary", function () {
    // Arrange
    const employee = new Employee("Harry Hacker", 50_000);

    // Act
    const employeeSalary = employee.getSalary();

    // Assert
    expect(employeeSalary).toBe(50_000);
  });
});

describe("The raiseSalary() method", function () {
  it("Raises an employee's salary by a percentage", function () {
    // Arrange
    const employee = new Employee("Carl Cracker", 60_000);

    // Act
    employee.raiseSalary(10);

    // Assert
    expect(employee.getSalary()).toBe(66_000);
  });

  it("Throws an error if the percentage is not positive", function () {
    // Arrange
    const employee = new Employee("Carl Cracker", 60_000);

    // Act
    function lowerSalary() {
      employee.raiseSalary(-10);
    }

    // Assert
    expect(lowerSalary).toThrow();
  });
});
