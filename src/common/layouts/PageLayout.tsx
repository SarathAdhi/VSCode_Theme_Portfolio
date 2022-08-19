import Sidebar from "@components/Sidebar";
import TopBar from "@components/TopBar";
import React from "react";
import clsx from "clsx";

type Props = {
  showDirectory?: boolean;
  className?: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<Props> = ({
  showDirectory = true,
  className,
  children,
}) => {
  return (
    <>
      <main className="sticky top-0 flex">
        <Sidebar />

        <section className="w-full">
          <TopBar />

          <div
            className={clsx(
              "flex flex-col overflow-x-hidden h-screen overflow-y-auto",
              showDirectory ? "pt-16" : "pt-10",
              className
            )}
          >
            {children}
          </div>
        </section>
      </main>
    </>
  );
};

export default PageLayout;
