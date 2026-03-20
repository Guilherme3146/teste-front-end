import styles from "./Header.module.scss";

import logo from "../../assets/images/logo.png";

import {
  ShieldCheck,
  Truck,
  CreditCard,
  Search,
  Package,
  Heart,
  UserCircle,
  ShoppingCart,
  CrownIcon
} from "lucide-react";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>

        <div className={styles.topHeader}>
          <div className={styles.perk}>
            <ShieldCheck size={18} />
            <span>Compra <strong>100% segura</strong></span>
          </div>

          <div className={styles.perk}>
            <Truck size={18} />
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </div>

          <div className={styles.perk}>
            <CreditCard size={18} />
            <span><strong>Parcele</strong> suas compras</span>
          </div>
        </div>

        <div className={styles.middleHeader}>
          
          {/* LOGO */}
          <div className={styles.logo}>
            <img src={logo} alt="Econverse" />
          </div>

          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="O que você está procurando?"
            />
            <button type="button" aria-label="Buscar">
              <Search size={28} />
            </button>
          </div>

          <nav className={styles.actions}>
            <ul>
              <li><Package size={32} /></li>
              <li><Heart size={32} /></li>
              <li><UserCircle size={32} /></li>
              <li><ShoppingCart size={32} /></li>
            </ul>
          </nav>
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li><a href="#">Todas Categorias</a></li>
            <li><a href="#">Supermercado</a></li>
            <li><a href="#">Livros</a></li>
            <li><a href="#">Moda</a></li>
            <li><a href="#">Lançamentos</a></li>
            <li><a href="#">Ofertas do dia</a></li>

            <li>
              <a href="#" className={styles.subscription}>
                <CrownIcon size={20} />
                Assinatura Premium
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}