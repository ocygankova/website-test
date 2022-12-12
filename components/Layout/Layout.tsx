import { ReactNode } from 'react';
import { Footer, Header } from 'components';

interface Props {
  children?: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
