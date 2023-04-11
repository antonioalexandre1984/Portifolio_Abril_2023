import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';
import { ProjectItem } from './ProjectItem';
import { useLanguage } from '../hooks/useLanguage';
import { showProjects } from '../../../data';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectItemProps {
  projects: IProject[];
}
export function Projects({ projects }: ProjectItemProps) {
  const { language } = useLanguage();
  const data = showProjects[language];

  return (
    <Container>
      <SectionTitle title={data.title} />
      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItem
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">
          <a>{data.button}</a>
        </Link>
      </button>
    </Container>
  );
}
