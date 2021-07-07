const Intern = require("../team/Intern")

test("I should be able to create an object by invoking Intern", () => {
    const testObj = new Intern()
    console.log(testObj)
    expect(typeof testObj).toBe("object")
})

test("When I input a name it is stored in the object", () => {
    const testObj = new Intern("Landon")

    expect(testObj.name).toBe("Landon")
})

test("When I input a Id it is stored in the object", () => {
    const testObj = new Intern("Landon",5)

    expect(testObj.id).toBe(5)
})

test("When I input an email it is stored in the object", () => {
    const testObj = new Intern("Landon", 5, "Landon.waddell@gmail.com")

    expect(testObj.email).toBe("Landon.waddell@gmail.com")
})

test("When I input an school it is stored in the object", () => {
    const testObj = new Intern("Landon", 5, "Landon.waddell@gmail.com", "Denver University")

    expect(testObj.school).toBe("Denver University")
})