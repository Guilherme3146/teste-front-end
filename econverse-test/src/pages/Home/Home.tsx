import Banner from '../../assets/images/banner.webp';
import styles from './Home.module.scss';

import technology from '../../assets/icons/technology.svg';
import superMarket from '../../assets/icons/superMarket.svg';
import drinks from '../../assets/icons/whiskey.svg';
import tools from '../../assets/icons/tools.svg';
import health from '../../assets/icons/health.svg';
import sports from '../../assets/icons/run.svg';
import fashion from '../../assets/icons/fashion.svg';
import logo from '../../assets/images/logo.png';

import ProductCarousel from '../../components/ProductsCarrousel/ProductsCarrousel';
import Partners from '../../components/Partners/Partners';
import Newsletter from '../../components/Newsletter/Newsletter';

import type { CategoryItemProps } from '../../types/category';

const categories = [
  { img: technology, name: 'Tecnologia' },
  { img: superMarket, name: 'Super Mercado' },
  { img: drinks, name: 'Bebidas' },
  { img: tools, name: 'Ferramentas' },
  { img: health, name: 'Saúde' },
  { img: sports, name: 'Esportes e Fitness' },
  { img: fashion, name: 'Moda' },
];

const productLinks = [
  'Celular',
  'Acessórios',
  'Tablets',
  'Notebooks',
  'TVs',
  'Ver todos',
];

const brands = [logo, logo, logo, logo, logo];

function CategoryItem({ img, name }: CategoryItemProps) {
  return (
    <div className={styles.categoryItem}>
      <img
        src={img}
        alt={name}
        className={styles.categoriesImg}
      />
      <h3>{name}</h3>
    </div>
  );
}

function SectionProducts({ showNav = false }) {
  return (
    <section className={styles.relatedProducts}>
      <h2 className={styles.relatedTitle}>Produtos relacionados</h2>

      {showNav && (
        <nav>
          <ul>
            {productLinks.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
      )}

      <ProductCarousel />
    </section>
  );
}

export default function Home() {
  return (
    <main>

      <section className={styles.banner}>
        <div className={styles.bannerContainer}>
          <h1>
            Venha conhecer nossas <span>promoções</span>
          </h1>
          <h2>
            <span>50% Off</span> nos produtos
          </h2>
          <button className={styles.btn}>Ver Produto</button>
        </div>

        <img
          src={Banner}
          alt="Banner Econverse"
          className={styles.bannerImage}
        />
      </section>

      {/* Categorias */}
      <section className={styles.categories}>
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </section>

      <SectionProducts showNav />
      <Partners />
      <SectionProducts />
      <Partners />

      {/* Marcas */}
      <section className={styles.brands}>
        <h2>Navegue por marcas</h2>

        <div className={styles.brandsContainer}>
          {brands.map((brand, index) => (
            <div key={index} className={styles.brand}>
              <img src={brand} alt="Marca" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <SectionProducts />

      <Newsletter />
    </main>
  );
}