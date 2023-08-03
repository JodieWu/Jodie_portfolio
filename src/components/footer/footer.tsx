import styles from "../../styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <p>Jodie Wu @ 2023. All rights reserved.</p>
      <ul>
        <li>
          <a href="">
            <Image
              src="/social_media/fb.svg"
              width={24}
              height={24}
              alt="fackbook_icon"
            />
          </a>
        </li>
        <li>
          <a href="">
            <Image
              src="/social_media/ins.svg"
              width={24}
              height={24}
              alt="instagram_icon"
            />
          </a>
        </li>
        <li>
          <a href="">
            <Image
              src="/social_media/linkedin.svg"
              width={24}
              height={24}
              alt="linkedin_icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
