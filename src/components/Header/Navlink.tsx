import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export function Navlink({ title, path, includes = false }: Props) {
  const router = useRouter();
  function verifyIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return router.pathname === path;
  }
  const isActive = verifyIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
