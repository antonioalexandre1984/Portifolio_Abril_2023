import { FaCss3Alt, FaReact, FaNode, FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { SectionTitle } from '../SectionTitle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container } from './styles';

export function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Principais Stacks" />
      <section className="">
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="TailwindCSS" icon={<SiTailwindcss />} />
        <KnowledgeItem title="ReactJS" icon={<FaReact />} />
        <KnowledgeItem title="Typescript" icon={<SiTypescript />} />
        <KnowledgeItem title="Javascript" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="NodeJS" icon={<FaNode />} />
        <KnowledgeItem title="Python" icon={<FaPython />} />
      </section>
    </Container>
  );
}
