const Employee = require("../team/Employee")

test("I should be able to create an object by invoking Employee", () => {
    const testObj = new Employee()
    console.log(testObj)
    expect(typeof testObj).toBe("object")
})

test("When I input a name it is stored in the object", () => {
    const testObj = new Employee("Landon")

    expect(testObj.name).toBe("Landon")
})

test("When I input a Id it is stored in the object", () => {
    const testObj = new Employee("Landon",2)

    expect(testObj.id).toBe(2)
})

test("When I input an email it is stored in the object", () => {
    const testObj = new Employee("Landon", 2, "Landon.waddell@gmail.com")

    expect(testObj.email).toBe("Landon.waddell@gmail.com")
})