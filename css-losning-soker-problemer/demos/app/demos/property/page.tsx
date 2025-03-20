import styles from "./styles.module.css";

const Page = () => {
  return (
    <main className={styles.main}>
      <p>my bg is set by a &quot;typed&quot; custom CSS property!</p>
      <p className={styles.overridden}>
        i override the custom property with another value! (check me in
        devtools)
      </p>
    </main>
  );
};

export default Page;
