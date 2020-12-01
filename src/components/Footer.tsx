import React from "react";
import classnames from "classnames";

import { BuildStamp } from "./BuildStamp";
import { SocialLinks } from "./SocialLinks";

import STYLES from "./Footer.module.scss";

interface FooterProps {
  withMobilePadding?: boolean;
}

export const Footer = ({ withMobilePadding = false }: FooterProps) => {
  return (
    <div
      className={classnames(STYLES.footer, {
        [STYLES.relative]: withMobilePadding,
      })}
    >
      <div className={STYLES.copy}>Destiny Power Bars &copy; Tom Corke.</div>
      <SocialLinks />
      <BuildStamp />
    </div>
  );
};
