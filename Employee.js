class Employee {
  #name;
  #salary;

  constructor(name, salary = 0) {
    if (!name) {
      throw new Error("Employee name is required.");
    }

    this.#name = name;
    this.#salary = salary;
  }

  // TODO: Implement the getName() method
  getName() {
    return this.#name;
  }

  // TODO: Implement the getSalary() method
  getSalary() {
    return this.#salary;
  }

  // TODO: Implement the raiseSalary() method (talk about value and coverage)
  raiseSalary(byPercent) {
    if (byPercent <= 0) {
      throw new Error("Percentage must be positive.");
    }

    const raise = (this.#salary * byPercent) / 100;
    this.#salary += raise;
  }
}

module.exports = Employee;
