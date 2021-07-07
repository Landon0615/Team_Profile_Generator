const Manager = require("../team/Manager")

test("I should be able to create an object by invoking Manager", () => {
    const testObj = new Manager()
    console.log(testObj)
    expect(typeof testObj).toBe("object")
})

test("When I input a name it is stored in the object", () => {
    const testObj = new Manager("Landon")

    expect(testObj.name).toBe("Landon")
})

test("When I input a Id it is stored in the object", () => {
    const testObj = new Manager("Landon",3)

    expect(testObj.id).toBe(3)
})

test("When I input an email it is stored in the object", () => {
    const testObj = new Manager("Landon", 3, "Landon.waddell@gmail.com")

    expect(testObj.email).toBe("Landon.waddell@gmail.com")
})

test("When I input an office number it is stored in the object", () => {
    const testObj = new Manager("Landon", 3, "Landon.waddell@gmail.com", 204)
    
    expect(testObj.officeNumber).toBe(204)
})