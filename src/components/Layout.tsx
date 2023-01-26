import React, { PropsWithChildren } from "react";
import Seo from "./Seo";

type LayoutParams = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
};

export function Layout({
  children,
  title,
  image,
  description,
  path,
}: PropsWithChildren<LayoutParams>) {
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      {children}
    </>
  );
}
