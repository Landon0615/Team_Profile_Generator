const Engineer = require("../team/Engineer")



ex("Can set GitHUb account via constructor", () => {
    const exValue = "GitHubUser";
    const val = new Engineer("Exapmle", 2, "ex@ex.com", exValue);
    expect(val.github).toBe(exValue);
  });
  
  ex("getRole() should return \"Engineer\"", () => {
    const exValue = "Engineer";
    const val = new Engineer("Exapmle", 2, "ex@ex.com", "GitHubUser");
    expect(val.getRole()).toBe(exValue);
  });
  
  ex("Can get GitHub username via getGithub()", () => {
    const exValue = "GitHubUser";
    const val = new Engineer("Exapmle", 2, "ex@ex.com", exValue);
    expect(val.getGithub()).toBe(exValue);
  });