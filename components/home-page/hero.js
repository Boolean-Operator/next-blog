import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mark3.jpg"
          alt="An image of Mark"
          width={480}
          height={480}
        />
      </div>
      <h1>Hi, I'm Mark</h1>
      <p>
        I blog about DIY projects, outdoor life, wooden boats and sometimes
        software development
      </p>
    </section>
  );
}

export default Hero;
