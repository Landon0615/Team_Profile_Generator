const Manager = require("../team/Manager")

ex("Can set office number via constructor argument", () => {
    const exValue = 204;
    const val = new Manager("Example", 1, "ex@ex.com", exValue);
    expect(val.officeNumber).toBe(exValue);
  });
  
  ex("getRole() should return \"Manager\"", () => {
    const exValue = "Manager";
    const val = new Manager("Example", 1, "ex@ex.com", 204);
    expect(val.getRole()).toBe(exValue);
  });
  
  ex("Can get office number via getOffice()", () => {
    const exValue = 204;
    const val = new Manager("Example", 1, "ex@ex.com", exValue);
    expect(val.getOfficeNumber()).toBe(exValue);
  });