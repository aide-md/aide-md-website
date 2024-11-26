import { isEmailValid } from "../formValidators";

describe("Form Validators", () => {
  describe("isEmailValid", () => {
    it("should return true for valid email addresses", () => {
      expect(isEmailValid("test@example.com")).toBe(true);
      expect(isEmailValid("user.name@domain.co")).toBe(true);
      expect(isEmailValid("user+name@domain.com")).toBe(true);
    });

    it("should return false for invalid email addresses", () => {
      expect(isEmailValid("plainaddress")).toBe(false);
      expect(isEmailValid("@missingusername.com")).toBe(false);
      expect(isEmailValid("username@.com")).toBe(false);
      expect(isEmailValid("username@domain@domain.com")).toBe(false);
    });
  });
});
