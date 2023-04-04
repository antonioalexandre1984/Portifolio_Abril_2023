import { ItemContainer } from './styles';

interface ExperienceItemProps {
  year: string;
  title: string;
  description: string;
}
export function ExperienceItem({
  year,
  title,
  description
}: ExperienceItemProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1 className="">{year}</h1>
        <h2 className="">{title}</h2>
        <p className="">{description}</p>
      </div>
    </ItemContainer>
  );
}
