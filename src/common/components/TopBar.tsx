import { Close } from "@assets/header/VSCode";
import { Context, OpenedPageProps } from "@common/context";
import { pages } from "@utils/constants/pages";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import LinkedItem from "./LinkedItem";

const TopBar = () => {
  const router = useRouter();
  const pathname = router.asPath;

  const { openedPages } = useContext(Context);
  const { currentlyOpenedPages, setCurrentlyOpenedPages } = openedPages;

  const currentPage = currentlyOpenedPages.find(
    (page: OpenedPageProps) => page.href === pathname
  );

  const removeRecentFile = (name: string, href: string) => {
    const filterCurrentlyOpenedPage = currentlyOpenedPages.filter(
      (page: OpenedPageProps) => page.name !== name
    );
    setCurrentlyOpenedPages(filterCurrentlyOpenedPage);

    if (currentPage ? currentPage.name !== name : pathname !== href) return;

    const length = filterCurrentlyOpenedPage.length;

    router.replace(
      length !== 0 ? filterCurrentlyOpenedPage[length - 1].href : "/blank"
    );
  };

  return (
    <>
      <header className="fixed top-0 w-full h-8 bg-[#252526]">
        <div className="flex items-center h-full">
          {currentlyOpenedPages.map((page: OpenedPageProps) => (
            <div
              key={page.name}
              className={clsx(
                "flex items-center h-full px-3 gap-2",
                currentPage?.href === page.href
                  ? "bg-[#1e1e1e]"
                  : "!bg-[#2d2d2d]"
              )}
            >
              <LinkedItem
                key={page.name}
                href={page.href}
                className="relative h-full flex items-center gap-1"
              >
                {page.Icon && <page.Icon />}
                {`${page.name}`}
                {page.language && `.${page.language}`}
              </LinkedItem>
              <button
                className="-mr-2 px-1"
                onClick={() => removeRecentFile(page.name, page.href)}
              >
                <Close />
              </button>
            </div>
          ))}
        </div>
      </header>

      {currentPage && (
        <header className="fixed top-8 w-full h-8 bg-[#1e1e1e] py-1 px-2">
          <div className="flex items-center gap-2">
            {"WORKSPACE > PORTFOLIO >"}
            <p className="flex items-center gap-1 hover:underline hover:text-sky-500 cursor-pointer">
              {<currentPage.Icon />}
              {currentPage?.name}.{currentPage?.language}
            </p>
          </div>
        </header>
      )}
    </>
  );
};

export default TopBar;
