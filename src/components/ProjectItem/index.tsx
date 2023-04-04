import Link from 'next/link';
import { Container } from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
}

export function ProjectItem({ title, type, slug, imgUrl }: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="overlay" />
          <section className="overlay">
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}
