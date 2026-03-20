import styles from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-title">
      <div className={styles.newsletterContainer}>
        
        <div className={styles.content}>
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              required
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />

            <button type="submit" className={styles.btn}>
              Inscrever
            </button>

          </div>

          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              Aceito os termos e condições
            </label>
          </div>

        </form>

      </div>
    </section>
  );
}