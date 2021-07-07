const Intern = require("../team/Intern")

test("Can set school via constructor", () => {
    const testValue = "DU";
    const val = new Intern("Foo", 1, "test@test.com", testValue);
    expect(val.school).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const val = new Intern("Foo", 1, "test@test.com", "DU");
    expect(val.getRole()).toBe(testValue);
  });
  
  test("Can get school via getSchool()", () => {
    const testValue = "DU";
    const val = new Intern("Foo", 1, "test@test.com", testValue);
    expect(val.getSchool()).toBe(testValue);
  });