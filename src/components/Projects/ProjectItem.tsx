import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';
import { useLanguage } from '../hooks/useLanguage';
import { showProjects } from '../../../data';

interface ProjectProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export function ProjectItem({ title, type, slug, img }: ProjectProps) {
  const { language } = useLanguage();
  const data = showProjects[language];
  return (
    <ProjectContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1 className="">{title}</h1>
          <h1 className="">- {type}</h1>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a href="" className="">
            {data.buttonProject} <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
