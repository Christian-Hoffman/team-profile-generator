const Intern = require("../lib/intern");

// Test intern
describe("Intern", () => {
    const newInt = new Intern('Christian', 4200, 'cdh21@gmail.com', 'UNCW');
    describe('name', () => {
        it('get name', () => {
            expect(newInt.getName()).toBe('Christian');
        });
    });
    describe('id', () => {
        it('get id', () => {
            expect(newInt.getId()).toEqual(4200);
        });
    });
    describe('email', () => {
        it('get email', () => {
            expect(newInt.getEmail()).toBe('cdh21@gmail.com');
        });
    });
    describe('school', () => {
        it('get school', () => {
            expect(newInt.getSchool()).toBe('UNCW');
        });
    });
    describe('role', () => {
        it('get role', () => {
            expect(newInt.getRole()).toBe('Intern');
        });
    });
});
