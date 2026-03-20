import Banner from '../../assets/images/banner.webp';
import styles from './Home.module.scss';
// import technology from '../../assets/icons/technology.svg'
// import superMarket from '../../assets/icons/superMarket.svg'
// import drinks from '../../assets/icons/whiskey.svg'
// import tools from '../../assets/icons/tools.svg'
// import health from '../../assets/icons/health.svg'
// import sports from '../../assets/icons/run.svg'
// import fashion from '../../assets/icons/fashion.svg'
// import logo from '../../assets/images/logo.png';

// import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
// import Partners from '../../components/Partners/Partners'
import Newsletter from '../../components/Newsletter/Newsletter'

export default function Home() {
    return (
         <>
        <main>
            <section className={styles.banner}>
                <div className={styles.bannerContainer}>
                    <h1>Venha conhecer nossas <span>promoções</span></h1>
                    <h2><span>50% Off</span> nos produtos</h2>
                    <a href="#" className={styles.btn}>Ver Produto</a>
                </div>
                <img src={Banner} alt="Banner Econverse" title="Banner Econverse" className={styles.bannerImage} />
            </section>
            
            <Newsletter />
        </main>
        </>
    );
}