import { ReactNode } from 'react';
import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Container data-aos="fade-right">
      <h1>#{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </Container>
  );
}
