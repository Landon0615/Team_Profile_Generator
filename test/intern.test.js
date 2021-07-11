const Intern = require("../team/Intern")

ex("Can set school via constructor", () => {
    const exValue = "DU";
    const val = new Intern("Example", 1, "ex@ex.com", exValue);
    expect(val.school).toBe(exValue);
  });
  
  ex("getRole() should return \"Intern\"", () => {
    const exValue = "Intern";
    const val = new Intern("Example", 1, "ex@ex.com", "DU");
    expect(val.getRole()).toBe(exValue);
  });
  
  ex("Can get school via getSchool()", () => {
    const exValue = "DU";
    const val = new Intern("Example", 1, "ex@ex.com", exValue);
    expect(val.getSchool()).toBe(testValue);
  });