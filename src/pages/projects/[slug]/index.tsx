import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import { BannerProject } from '../../../components/BannerProject';
import { Header } from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectContainer } from '../../../styles/ProjectStyles';
import LoadingScreen from '../../../components/LoadingScreen';
import { SectionTitle } from '../../../components/SectionTitle';
import { allprojects } from '../../../../data';
import { useLanguage } from '../../../components/hooks/useLanguage';
import { Footer } from '../../../components/Footer';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  const Router = useRouter();
  const { language } = useLanguage();
  const data = allprojects[language];

  if (Router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjectContainer>
      <Header isDark={false} activeLanguage="" />
      <SectionTitle title={data.title} subtitle={data.subtitle} />
      <h1 className="">{data.description}</h1>
      <main className="container">
        <BannerProject
          title={project.title}
          type={project.type}
          imgUrl={project.thumbnail}
        />

        <p>{project.description}</p>
        <button type="button">
          <a href={project.link} className="">
            Ver Projeto online
          </a>
        </button>
      </main>
      <Footer />
    </ProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'project')
  ]);

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

type IProjectProps = {
  slug: string;
  title: string;
  type: string | null;
  description: string;
  link: string;
  thumbnail: string;
};

type PrismicProjectResponse = {
  uid: string;
  data: {
    title: string;
    type: string;
    description: string;
    link: {
      url: string;
    };
    thumbnail: {
      url: string;
    };
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = (await prismic.getByUID(
    'project',
    String(slug),
    {}
  )) as PrismicProjectResponse;

  const project: IProjectProps = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type || null,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      project
    },
    revalidate: 86400 // 24horas
  };
};
