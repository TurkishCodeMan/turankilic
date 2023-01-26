import React, { PropsWithChildren } from "react";

export function Wrapper({ children }: PropsWithChildren) {
  return <div className="wrapper">{children}</div>;
}
