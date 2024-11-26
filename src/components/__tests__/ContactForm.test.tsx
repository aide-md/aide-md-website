import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "../ContactForm";
import "@testing-library/jest-dom";

describe("ContactForm Component", () => {
  it("updates form fields correctly", () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello!" } });

    expect(nameInput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("john@example.com");
    expect(messageInput).toHaveValue("Hello!");
  });

  it("validates email correctly", () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole("button", { name: /send/i });

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    expect(
      screen.getByText(/please enter a valid email address/i)
    ).toBeInTheDocument();
  });
});
