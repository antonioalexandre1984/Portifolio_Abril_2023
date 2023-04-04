import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { Header } from '../../components/Header';
import { ProjectItem } from '../../components/ProjectItem';
import { getPrismicClient } from '../../services/prismic';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface ProjectProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        {projects.map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'project')],
    {
      orderings: '[document.first_publication_data desc]'
    }
  );

  const projects = projectsResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }));
  /*   console.log(projectsResponse.results); */

  return {
    props: {
      projects
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
