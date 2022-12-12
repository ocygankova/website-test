import { ReactNode } from 'react';
import { Container } from 'components';
import variables from 'styles/variables.module.scss';
import styles from './PageHeading.module.scss';

interface Props {
  children?: ReactNode;
  title?: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
}

function PageHeading({
  children,
  title,
  description,
  bgColor,
  textColor
}: Props) {
  const background = bgColor ? bgColor : variables.colorPrimary;
  const color = textColor ? textColor : '#fff';

  return (
    <section>
      <div
        className={styles.wrapper}
        style={{ backgroundColor: background, color: color }}>
        <Container>
          {title && <h1 className={styles.title}>{title}</h1>}
          {description && <p className={styles.description}>{description}</p>}

          {children}
        </Container>
      </div>

      <svg
        style={{ marginTop: '-10px' }}
        viewBox="0 0 500 35"
        preserveAspectRatio="none">
        <path
          d="M-1.56,16.09 C158.43,1.11 272.18,57.09 502.18,9.11 L499.06,-5.89 L-3.44,-6.90 Z"
          fill={background}
        />
      </svg>
    </section>
  );
}

export default PageHeading;
