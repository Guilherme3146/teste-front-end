import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import styles from './ProductCarousel.module.scss';

import { X } from 'lucide-react';
import Counter from '../Counter/Counter';

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);

  /* ===== FORMATADOR ===== */
  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  /* ===== RESPONSIVO ===== */
  const getProductsPerPage = () => {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 4;
  };

  useEffect(() => {
    setProductsPerPage(getProductsPerPage());

    const handleResize = () => {
      setProductsPerPage(getProductsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===== FETCH ===== */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) throw new Error();

        const data = await res.json();
        setProducts(Array.isArray(data.products) ? data.products : []);
      } catch {
        setError("Não foi possível carregar os produtos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* ===== PAGINAÇÃO ===== */
  const startIndex = currentPage * productsPerPage;
  const visibleProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const nextPage = () => {
    if (startIndex + productsPerPage < products.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  /* ===== MODAL ===== */
  const closeModal = () => {
    setModalProduct(null);
    setQuantity(1);
  };

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>{error}</p>;
  if (!products.length) return <p>Nenhum produto encontrado.</p>;

  return (
    <div className={styles.carouselWrapper}>

      <button className={styles.prevBtn} onClick={prevPage}>‹</button>

      <div className={styles.productCarousel}>
        {visibleProducts.map((product) => (
          <div key={`${product.productName}-${product.price}`} className={styles.productCard}>
            <img
              src={product.photo}
              alt={product.productName}
              loading="lazy"
            />

            <h3>{product.productName}</h3>

            <p className={styles.productDescription}>
              {product.descriptionShort}
            </p>

            <p className={styles.oldPrice}>
              {formatPrice(product.price / 0.9)}
            </p>

            <strong className={styles.price}>
              {formatPrice(product.price)}
            </strong>

            <p className={styles.installments}>
              ou 2x de {formatPrice(product.price / 2)} sem juros
            </p>

            <p className={styles.shipping}>Frete grátis</p>

            <button
              className={styles.btn}
              onClick={() => setModalProduct(product)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>

      <button className={styles.nextBtn} onClick={nextPage}>›</button>

      {/* ===== MODAL ===== */}
      {modalProduct && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className={styles.productImg}
              src={modalProduct.photo}
              alt={modalProduct.productName}
            />

            <div className={styles.modalInfo}>
              <h4>{modalProduct.productName}</h4>

              <strong>
                {formatPrice(modalProduct.price * quantity)}
              </strong>

              <p>
                Many desktop publishing packages and web page editors now many desktop publishing
              </p>

              <a href="#" className={styles.showMore}>
                Veja mais detalhes do produto &gt;
              </a>

              {/* BOTÃO FECHAR COM LUCIDE */}
              <X
                className={styles.closeButton}
                size={24}
                onClick={closeModal}
              />

              <div className={styles.cart}>
                <Counter onChange={setQuantity} />
                <button className={styles.btn}>
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}