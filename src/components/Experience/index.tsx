import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';

export function Experience() {
  return (
    <Container>
      <SectionTitle title=" 02 Anos" subtitle="de experiência" />
      <section>
        <ExperienceItem
          year="2019"
          title="Foco nos estudos e transição de carreira"
          description="Migrando da area de telecomunicações para a area TI.Cursando ADS e buscando aperfeiçoar soft skills e desenvolvimento academico de sites e sistemas web"
        />
        <ExperienceItem
          year="2020"
          title="Formação Dev FullStack"
          description="Conclusão do curso de ADS, inicio de especialização em front e back e atuação em projetos na area de desenvolvimento."
        />
        <ExperienceItem
          year="2021"
          title="Fortalecimento de Soft e Hard Skills"
          description="Atuação em projetos onde aplicamos os mais diversos conceitos da programação além de refinamento de soft skills através de trabalho prático na Uau Internet."
        />
        <ExperienceItem
          year="2022"
          title="Atuação em desenvolvimento de sistemas Web responsivos"
          description="Atuando nas mais modernas e atuais tecnologias do mercado como ReactJs,NextJs e Tailwindcss em projetos práticos com o CoffeeDelivery e ProjectHub"
        />
      </section>
    </Container>
  );
}
