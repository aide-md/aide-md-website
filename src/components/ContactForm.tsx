import React from "react";
import styled from "styled-components";
import { isEmailValid } from "../utils/formValidators";
import { Button } from "./Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

export const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailValid(formState.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    console.log("Form submitted", formState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Email, numer tel, firma opcjonalnie, wiadomosc opcjo */}
      <Label>Imię i nazwisko</Label>
      <Input
        data-testid="name"
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        required
      />
      <Label>E-mail</Label>
      <Input
        data-testid="email"
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
        required
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Label>Temat wiadomości</Label>
      <Input
        data-testid="messageTitle"
        type="text"
        name="messageTitle"
        value={formState.name}
        onChange={handleChange}
        required
      />
      <Label>Treść</Label>
      <Textarea
        data-testid="message"
        name="message"
        value={formState.message}
        onChange={handleChange}
        required
      />
      <Button type="submit">Wyślij</Button>
    </Form>
  );
};
