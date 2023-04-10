/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { Header } from '../components/Header';
import { HomeContainer } from '../styles/HomeStyles';
import { HomeHero } from '../components/HomeHero';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Knowledge } from '../components/Knowledge';
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
import messagesPtBr from '../../messages-pt-br.json';
import messagesEnUs from '../../messages-en-us.json';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface HomeProps {
  projects: IProject[];
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);

  const [language, setLanguage] = useState('pt-br');
  const messages = language === 'pt-br' ? messagesPtBr : messagesEnUs;

  return (
    <HomeContainer>
      <h1>
        {messages.hello}, {messages.world}!
      </h1>

      <Header setLanguage={setLanguage} />
      <main className="container">
        <HomeHero />
        <Experience />
        <Projects projects={projects} />
        <Knowledge />
        <FormContact />
        <Footer />
      </main>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    {
      orderings: '[document.first_publication_data desc]'
    }
  );
  /*   console.log(projectsResponse.results); */
  const projects = projectsResponse.results.map(project => ({
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
