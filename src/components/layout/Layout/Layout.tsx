import type { ReactNode } from "react";

import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

import type { Language, Theme } from "../../../App";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
  language: Language;
  theme: Theme;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
};

function Layout({
  children,
  language,
  theme,
  onToggleLanguage,
  onToggleTheme,
}: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header
        language={language}
        theme={theme}
        onToggleLanguage={onToggleLanguage}
        onToggleTheme={onToggleTheme}
      />

      {/* <div className={styles.body}>
        <Sidebar language={language} />
        <main className={styles.main}>{children}</main>
        
      </div> */}

        <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;