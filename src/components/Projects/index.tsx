import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';
import { ProjectItem } from './ProjectItem';

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
  console.log(projects);
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
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
          <a>See All Projects</a>
        </Link>
      </button>
    </Container>
  );
}
