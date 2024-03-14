import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <div style={{ textAlign: "center", fontSize: "14px", color: "#888" }}>
      <p>&copy; {new Date().getFullYear()} All rights reserved Legally</p>
    </div>
  );
};

export default Footer;
