const Employee = require("../lib/Employee");

// Test Employee
describe("Employee", () => {
    const newEM = new Employee('Christian', 4200, 'cdh21@gmail.com');

    describe('name', () => {
        it('should give name', () => {
            expect(newEM.getName()).toBe('Christian');
        });
    });
    describe('id', () => {
        it('should give id', () => {
            expect(newEM.getId()).toEqual(4200);
        });
    });
    describe('email', () => {
        it('should give email', () => {
            expect(newEM.getEmail()).toBe('cdh21@gmail.com');
        });
    });
    describe('role', () => {
        it('should give role', () => {
            expect(newEM.getRole()).toBe('Employee');
        });
    });
});
