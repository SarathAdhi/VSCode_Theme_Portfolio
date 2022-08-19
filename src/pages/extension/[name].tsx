import PageLayout from "@layouts/PageLayout";
import ExtensionTheme from "module/Extension/Theme";
import { useRouter } from "next/router";
import React from "react";

export enum Extension {
  Theme = "theme",
}

const ViewExtension = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <PageLayout showDirectory={false}>
      {name === Extension.Theme && <ExtensionTheme />}
    </PageLayout>
  );
};

export default ViewExtension;
