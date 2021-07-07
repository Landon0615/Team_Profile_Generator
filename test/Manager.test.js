const Manager = require("../team/Manager")

test("Can set office number via constructor argument", () => {
    const testValue = 204;
    const val = new Manager("Foo", 1, "test@test.com", testValue);
    expect(val.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const val = new Manager("Foo", 1, "test@test.com", 204);
    expect(val.getRole()).toBe(testValue);
  });
  
  test("Can get office number via getOffice()", () => {
    const testValue = 204;
    const val = new Manager("Foo", 1, "test@test.com", testValue);
    expect(val.getOfficeNumber()).toBe(testValue);
  });