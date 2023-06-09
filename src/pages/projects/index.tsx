import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { Header } from '../../components/Header';
import { ProjectItem } from '../../components/ProjectItem';
import { getPrismicClient } from '../../services/prismic';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import { Footer } from '../../components/Footer';
import { SectionTitle } from '../../components/SectionTitle';
import { allprojects } from '../../../data';
import { useLanguage } from '../../components/hooks/useLanguage';

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
  const { language } = useLanguage();
  const data = allprojects[language];
  return (
    <ProjectsContainer>
      <Header isDark={false} activeLanguage="" />
      <SectionTitle title={data.title} subtitle={data.subtitle} />
      <h1 className="">{data.description}</h1>
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
      <Footer />
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'project')],
    {
      orderings: '[document.first_publication_date desc]',
      pageSize: 100
    }
  );

  const projects = projectsResponse.results.map((project: unknown) => ({
    slug: (project as { uid: string }).uid,
    title: (project as { data: { title: string } }).data.title,
    type: (project as { data: { type: string | null } }).data.type,
    description: (project as { data: { description: string } }).data
      .description,
    link: (project as { data: { link: { link_type: string; url: string } } })
      .data.link,
    thumbnail: (project as { data: { thumbnail: { url: string } } }).data
      .thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
