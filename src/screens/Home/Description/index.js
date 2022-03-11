import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Image from "../../../components/Image";

const Description = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("h3", styles.title)}>
          Introducing our FSea Governance token
          </h1>
          <div className={styles.text}>
          Stake to earn Profit Sharing
          <br/>
         
           with FSea token
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="">
              Coming Soon
            </Link>
            
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/cubes@2x.png 2x"
              srcSetDark="/images/content/cubes-dark@2x.png 2x"
              src="/images/content/cubes.png"
              srcDark="/images/content/cubes-dark.png"
              alt="Cubes"
            />
          </div>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/cube@2x.png 2x"
              srcSetDark="/images/content/cube-dark@2x.png 2x"
              src="/images/content/cube.png"
              srcDark="/images/content/cube-dark.png"
              alt="Cube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;