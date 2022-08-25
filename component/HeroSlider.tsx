import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
// bootstrap and styles
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/HeroSlider.module.scss'
// image
import hero_1 from '../public/asset/header (1).jpg'
import hero_2 from '../public/asset/header (2).jpg'
import hero_3 from '../public/asset/header (3).jpg'
import hero_4 from '../public/asset/header (4).jpg'
import hero_5 from '../public/asset/header (5).jpg'

function HeroSlider() {
  return (
    <Carousel fade>
      <Carousel.Item className={styles.carousel_item}>
        <Image
        className="d-block w-100"
        src={hero_1}
        width='500px'
        height='600px'
        />
        <Carousel.Caption>
            <div className={styles.caption__wrapper}>
                <h1>
                NVIDIA GTC: The Developer Conference for the Era of AI and the Metaverse
                </h1>
                <h2>September 19-22, 2022</h2>
                <button className={styles.cta__btn}>
                    Register Free
                </button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.carousel_item}>
      <Image
        className="d-block w-100"
        src={hero_2}
        width='500px'
        height='600px'
        />

        <Carousel.Caption>
            <div className={styles.caption__wrapper}>
            <h1>VIDIA at VMware Explore 2022</h1>
                <h2>Join us at the center of the multi-cloud universe at VMware Explore, August 29 September 1 at the Moscone Center in San Francisco.</h2>
                <button className={styles.cta__btn}>
                    Register Now
                </button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.carousel_item}>
      <Image
        className="d-block w-100"
        src={hero_3}
        width='500px'
        height='600px'
        />

        <Carousel.Caption>
            <div className={styles.caption__wrapper}>
            <h1>NVIDIA Announces Major Release of NVIDIA Omniverse</h1>
                <h2>Commitment to multi-year development roadmap for Universal Scene Description in collaboration with ecosystem partners.</h2>
                <button className={styles.cta__btn}>
                    Read Press Release
                </button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.carousel_item}>
      <Image
        className="d-block w-100"
        src={hero_4}
        width='500px'
        height='600px'
        />

        <Carousel.Caption>
            <div className={styles.caption__wrapper}>
            <h1>Introducing NVIDIA Omniverse Avatar Cloud Engine</h1>
                <h2>New suite of cloud-native AI models and services make it easier to build, customize and deploy interactive avatars.</h2>
                <button className={styles.cta__btn}>
                    Read Press Release
                </button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.carousel_item}>
      <Image
        className="d-block w-100"
        src={hero_5}
        width='500px'
        height='600px'
        />

        <Carousel.Caption>
         <div className={styles.caption__wrapper}>
            <h1>NVIDIA Presents USD as Foundation of the Metaverse</h1>
                <h2>Commitment to multi-year development roadmap for Universal Scene Description in collaboration with ecosystem partners.</h2>
                <button className={styles.cta__btn}>
                Read Press Release
                </button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;