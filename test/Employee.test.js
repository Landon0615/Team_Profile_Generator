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
        const exValue = 205;
        const val = new Employee("Example", exValue);
        expect(val.id).toBe(exValue);
    });

    it("Can set email via constructor argument", () => {
        const exValue = "ex@ex.com";
        const val = new Employee("Example", 1, exValue);
        expect(val.email).toBe(exValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const exValue = "Landon";
            const val = new Employee(exValue);
            expect(val.getName()).toBe(exValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const exValue = 205;
            const val = new Employee("Example", exValue);
            expect(val.getId()).toBe(exValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const exValue = "ex@ex.com";
            const val = new Employee("Example", 1, exValue);
            expect(val.getEmail()).toBe(exValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const exValue = "Employee";
            const val = new Employee("Landon", 1, "ex@ex.com");
            expect(val.getRole()).toBe(exValue);
        });
    });
    
});