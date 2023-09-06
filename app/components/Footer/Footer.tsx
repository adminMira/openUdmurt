import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={style.footer}>
      <Image
        src="https://visitudmurtia.org/local/templates/visitudmurtia/public/assets/img/logo-color.svg"
        alt="logo"
        width={174}
        height={45}
      />
      <h4>для хакатона</h4>
      <a href="https://github.com/adminMira/openUdmurt" style={{textDecoration:"underline"}} target="_blank">Эщэщэщ</a>
    </div>
  );
};

export default Footer;
