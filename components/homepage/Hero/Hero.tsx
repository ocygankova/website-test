import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import background from 'public/images/homepage/hero-bg.jpg';
import styles from './Hero.module.scss';

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], ['0%', '180%']);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Business with us</h2>
      <p className={styles.text}>Our company at the source of your success</p>

      <motion.div style={{ y }} className={styles.motion}>
        <Image className={styles.image} src={background} alt="hero" />
      </motion.div>
    </section>
  );
}

export default Hero;
