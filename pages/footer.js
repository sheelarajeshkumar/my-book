import styles from "../styles/Home.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <a
          href="https://rajeshkumarsheela.surge.sh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          Developed by{" Rajesh Kumar Sheela"}
          <img src="https://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-business-man-free1.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    )
}