const Engineer = require("../team/Engineer")



test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const val = new Engineer("Foo", 2, "test@test.com", testValue);
    expect(val.github).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const val = new Engineer("Foo", 2, "test@test.com", "GitHubUser");
    expect(val.getRole()).toBe(testValue);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const val = new Engineer("Foo", 2, "test@test.com", testValue);
    expect(val.getGithub()).toBe(testValue);
  });