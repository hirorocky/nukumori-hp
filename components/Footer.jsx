import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="flex text-center gap-x-1">
          <div>
            © 2023
          </div>
          <div>
            <a className="text-orange-600" href="https://twitter.com/demoii_boy"> hiro</a>
          </div>
          <div>
          All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
