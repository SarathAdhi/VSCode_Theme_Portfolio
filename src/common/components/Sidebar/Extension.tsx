import { ChevronDown, FileSvg } from "@assets/header/VSCode";
import { Context, OpenedPageProps } from "@common/context";
import LinkedItem from "@components/LinkedItem";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const ExtensionSideBar = () => {
  const router = useRouter();
  const pathname = router.asPath;

  const { openedPages } = useContext(Context);
  const { currentlyOpenedPages, setCurrentlyOpenedPages } = openedPages;

  const currentPage = currentlyOpenedPages.find(
    (page: OpenedPageProps) => page.href === pathname
  );

  return (
    <div className="py-2 w-56 h-full bg-[#252526] flex flex-col gap-5">
      <div className="ml-5">
        <p>EXTENSION</p>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <button className="flex items-center gap-1 text-sm font-semibold">
          <ChevronDown />
          INSTALLED
        </button>

        <div className="!bg-[#1d1f23] flex-1">
          <LinkedItem
            href="/extension/theme"
            className={clsx(
              "pl-5 flex gap-2 items-start leading-none px-1 py-2 hover:bg-[#2d3139]",
              currentPage ? "bg-[#1e1e1e]" : ""
            )}
            onClick={() =>
              setCurrentlyOpenedPages((pre: OpenedPageProps[]) => {
                const isPageExist = pre.some(
                  (e) => e.href === "/extension/theme"
                );

                if (isPageExist) return pre;
                return [
                  ...currentlyOpenedPages,
                  {
                    name: "Extension: Theme",
                    Icon: FileSvg,
                    href: "/extension/theme",
                  },
                ];
              })
            }
          >
            <img
              src="https://cdn.dribbble.com/users/21253/screenshots/1977311/themes_logo.jpg"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold mb-1">Theme</span>
              <span>UI Theme extension</span>
              <span className="text-sm flex items-center gap-1">
                <img src="/assets/verified-badge.png" className="w-4 h-4" />
                Sarath
              </span>
            </div>
          </LinkedItem>
        </div>
      </div>
    </div>
  );
};

export default ExtensionSideBar;
