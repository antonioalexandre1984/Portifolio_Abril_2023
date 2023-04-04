import { Container } from './styles';

interface BannerProjectProps {
  title: string;
  type: string;
  imgUrl: string;
}
export function BannerProject({ title, type, imgUrl }: BannerProjectProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay">
        <section className="">
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </div>
    </Container>
  );
}
