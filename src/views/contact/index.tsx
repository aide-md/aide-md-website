import React from "react";
import styled from "styled-components";
import { ContactForm } from "../../components/ContactForm";
import { Hero } from "../../components/Hero";

const Section = styled.section``;

const Heading = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

interface ContactViewProps {}

export const ContactView: React.FC<ContactViewProps> = () => {
  return (
    <Section>
      <Heading>Gotowi na pytania. Czekamy na Twoją wiadomość.</Heading>
      <Text>
        Chcesz dowiedzieć się więcej o Automatycznym Asystencie Medycznym? Nasi
        eksperci są tutaj, aby pomóc. Skontaktuj się z nami, a wspólnie
        znajdziemy najlepsze rozwiązanie dla Twojej placówki.
      </Text>
      <Hero
        title="AIDE.MD PSA"
        bullets={[
          "E-mail: aide.md.app@gmail.com",
          "ul. GOSPODARCZA 26, 20-213 LUBLIN",
        ]}
      />
      <ContactForm />
    </Section>
  );
};
