import { Box } from "@navikt/ds-react";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <main className={styles.main}>
      <Box className={styles.theContainer}>
        <p>i have 50% left margin of the-container!</p>
      </Box>
    </main>
  );
};

export default Page;
