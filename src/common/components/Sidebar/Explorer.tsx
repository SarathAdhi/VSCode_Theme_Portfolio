import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpened,
  NextJSFolder,
  NextJSFolderOpened,
} from "@assets/header/VSCode";
import { Context, OpenedPageProps } from "@common/context";
import LinkedItem from "@components/LinkedItem";
import { pages } from "@utils/constants/pages";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

export const folderStructure = {
  workspace: {
    name: "WORKSPACE",
    closedIcon: NextJSFolder,
    openIcon: NextJSFolderOpened,
  },
  portfolio: {
    name: "PORTFOLIO",
    closedIcon: Folder,
    openIcon: FolderOpened,
  },
};

const ExplorerSideBar = () => {
  const [folder, setFolder] = useState({
    isWorkspaceOpened: true,
    isPortfolioOpened: true,
  });

  const router = useRouter();
  const currentPage = router.asPath;

  const { openedPages } = useContext(Context);
  const { currentlyOpenedPages, setCurrentlyOpenedPages } = openedPages;

  return (
    <div className="py-2 w-56 h-full bg-[#252526] flex flex-col gap-5">
      <div className="ml-5">
        <p>EXPLORER</p>
      </div>

      <div className="flex flex-col gap-1">
        <button
          className="flex items-center gap-1"
          onClick={() =>
            setFolder({
              ...folder,
              isWorkspaceOpened: !folder.isWorkspaceOpened,
            })
          }
        >
          {folder.isWorkspaceOpened ? (
            <>
              <ChevronDown />
              <folderStructure.workspace.openIcon />
            </>
          ) : (
            <>
              <ChevronRight />
              <folderStructure.workspace.closedIcon />
            </>
          )}
          {folderStructure.workspace.name}
        </button>

        {folder.isWorkspaceOpened && (
          <button
            className="ml-5 flex items-center gap-1"
            onClick={() =>
              setFolder({
                ...folder,
                isPortfolioOpened: !folder.isPortfolioOpened,
              })
            }
          >
            {folder.isPortfolioOpened ? (
              <>
                <ChevronDown />
                <folderStructure.portfolio.openIcon />
              </>
            ) : (
              <>
                <ChevronRight />
                <folderStructure.portfolio.closedIcon />
              </>
            )}
            {folderStructure.portfolio.name}
          </button>
        )}

        {folder.isPortfolioOpened && folder.isWorkspaceOpened && (
          <div className="mt-1 flex flex-col gap-1">
            {pages.map((page) => (
              <LinkedItem
                key={page.name}
                href={page.href}
                className={clsx(
                  "flex items-center gap-1 w-full pl-10 border-[1px]",
                  page.href === currentPage
                    ? "bg-[#16385b] border-[#007fd4]"
                    : " border-transparent"
                )}
                onClick={() => {
                  setCurrentlyOpenedPages((pre: OpenedPageProps[]) => {
                    const isPageExist = pre.some(
                      (e: OpenedPageProps) => e.name === page.name
                    );
                    if (isPageExist) return pre;

                    return [...currentlyOpenedPages, { ...page }];
                  });
                }}
              >
                <page.Icon />
                {page.name}.{page.language}
              </LinkedItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorerSideBar;
