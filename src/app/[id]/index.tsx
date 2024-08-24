import React, { FC } from "react";

interface PageProps {
  [key: string]: any;
}

const Index: FC<PageProps> = (params) => {
  return <div>{JSON.stringify(params)}</div>;
};

export default Index;
