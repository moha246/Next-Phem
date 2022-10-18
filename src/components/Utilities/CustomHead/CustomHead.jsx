import React from "react";
import Head from "next/head";

const CustomHead = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

CustomHead.defaultProps = {
  title: "procureX | Lorem ipsum, dolor sit amet consectetur adipisicing",

  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam enim minus perspiciatis dolor reprehenderit eius reiciendis dicta nisi illum molestiae?",
  keywords:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam enim minus perspiciatis dolor reprehenderit eius reiciendis dicta nisi illum molestiae?",
};

export default CustomHead;
