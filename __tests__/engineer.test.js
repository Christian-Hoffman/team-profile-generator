const Engineer = require("../lib/Engineer");

// Test engineer
describe("Engineer", () => {
    const newEn = new Engineer('Christian', 4200, 'cdh21@gmail.com', 'C_Hoff');
    describe('name', () => {
        it('get name', () => {
            expect(newEn.getName()).toBe('Christian');
        });
    });
    describe('id', () => {
        it('get id', () => {
            expect(newEn.getId()).toEqual(4200);
        });
    });
    describe('email', () => {
        it('get email', () => {
            expect(newEn.getEmail()).toBe('cdh21@gmail.com');
        });
    });
    describe('github', () => {
        it('get github', () => {
            expect(newEn.getGithub()).toBe('C_Hoff');
        });
    });
    describe('role', () => {
        it('get role', () => {
            expect(newEn.getRole()).toBe('Engineer');
        });
    });
});
