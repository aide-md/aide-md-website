import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 1rem;
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

const Button = styled.button`
  background-color: #00796b;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005f56;
  }
`;

export const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name:</Label>
      <Input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        required
      />
      <Label>Email:</Label>
      <Input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
        required
      />
      <Label>Message:</Label>
      <Textarea
        name="message"
        value={formState.message}
        onChange={handleChange}
        required
      />
      <Button type="submit">Send</Button>
    </Form>
  );
};
