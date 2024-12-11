import React from "react";
import styled from "styled-components";

type ButtonVariants = "primary" | "secondary";

type ButtonSizes = "normal" | "xl";

const StyledButton = styled.button<{
  variant: ButtonVariants;
  size: ButtonSizes;
}>`
  background-color: ${({ variant, theme }) =>
    variant === "secondary" ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ size }) => (size === "normal" ? "10px 20px" : "15px 30px")};
  border: none;
  border-radius: ${({ theme }) => theme.radius.s};
  font-size: ${({ size }) => (size === "normal" ? "1rem" : "1.5rem")};
  cursor: pointer;

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === "secondary"
        ? theme.colors.secondaryHover
        : theme.colors.primaryHover};
  }
`;

interface ButtonProps {
  onClick(): void;
  variant?: ButtonVariants;
  size?: ButtonSizes;
}

export const Button: React.FCC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "normal",
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};
