import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';
import { useLanguage } from '../hooks/useLanguage';
import { experience } from '../../../data';

export function Experience() {
  const { language } = useLanguage();
  const data = experience[language];
  return (
    <Container>
      <SectionTitle title={data.title} subtitle={data.subtitle} />
      <section>
        {data.experience.map(item => (
          <ExperienceItem
            key={item.year}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </Container>
  );
}
