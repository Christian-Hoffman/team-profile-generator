const Manager = require("../lib/Manager");

// Test Manager
describe("Manager", () => {
    const newMan = new Manager('Christian', 4200, 'cdh21@gmail.com', 1506);
    describe('name', () => {
        it('get name', () => {
            expect(newMan.getName()).toBe('Christian');
        });
    });
    describe('id', () => {
        it('get id', () => {
            expect(newMan.getId()).toEqual(4200);
        });
    });
    describe('email', () => {
        it('get email', () => {
            expect(newMan.getEmail()).toBe('cdh21@gmail.com');
        });
    });
    describe('office', () => {
        it('get office', () => {
            expect(newMan.getOffice()).toEqual(1506);
        });
    });
    describe('role', () => {
        it('get role', () => {
            expect(newMan.getRole()).toBe('Manager');
        });
    });
});
