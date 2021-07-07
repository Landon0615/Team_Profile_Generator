const Engineer = require("../team/Engineer")

test("I should be able to create an object by invoking Engineer", () => {
    const testObj = new Engineer()
    console.log(testObj)
    expect(typeof testObj).toBe("object")
})

test("When I input a name it is stored in the object", () => {
    const testObj = new Engineer("Landon")

    expect(testObj.name).toBe("Landon")
})

test("When I input a Id it is stored in the object", () => {
    const testObj = new Engineer("Landon",4)

    expect(testObj.id).toBe(4)
})

test("When I input an email it is stored in the object", () => {
    const testObj = new Engineer("Landon", 4, "Landon.waddell@gmail.com")

    expect(testObj.email).toBe("Landon.waddell@gmail.com")
})

test("When I input an github user name it is stored in the object", () => {
    const testObj = new Engineer("Landon", 4, "Landon.waddell@gmail.com","Landon0615")

    expect(testObj.github).toBe("Landon0615")
})