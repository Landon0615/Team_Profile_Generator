const Employee = require("../team/Employee")

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const val = new Employee();
        expect(typeof(val)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Landon";
        const val = new Employee(name);
        expect(val.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testValue = 205;
        const val = new Employee("Foo", testValue);
        expect(val.id).toBe(testValue);
    });

    it("Can set email via constructor argument", () => {
        const testValue = "test@test.com";
        const val = new Employee("Foo", 1, testValue);
        expect(val.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Landon";
            const val = new Employee(testValue);
            expect(val.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 205;
            const val = new Employee("Foo", testValue);
            expect(val.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.com";
            const val = new Employee("Foo", 1, testValue);
            expect(val.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const val = new Employee("Landon", 1, "test@test.com");
            expect(val.getRole()).toBe(testValue);
        });
    });
    
});