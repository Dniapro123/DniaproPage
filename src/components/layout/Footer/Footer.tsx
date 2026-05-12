import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Uladzislau Budziankou. Portfolio project.</p>
    </footer>
  );
}

export default Footer;