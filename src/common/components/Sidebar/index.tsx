import { ExtensionSvg, FileSvg, VsCodeSvg } from "@assets/header/VSCode";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ExplorerSideBar from "./Explorer";
import ExtensionSideBar from "./Extension";

export enum SideBarTabs {
  Explorer = "explorer",
  Extension = "extension",
}

const Sidebar = () => {
  const router = useRouter();
  const currentPage = router.pathname;

  const [sideBarCurrentPage, setSideBarCurrentPage] =
    useState<SideBarTabs | null>(
      currentPage === "/extension/[name]"
        ? SideBarTabs.Extension
        : SideBarTabs.Explorer
    );

  return (
    <div className="sticky h-screen top-0 flex z-50">
      <div className="w-12 h-full py-2 bg-[#333333] flex flex-col items-center gap-2">
        <VsCodeSvg />

        <button
          onClick={() =>
            setSideBarCurrentPage(
              sideBarCurrentPage === SideBarTabs.Explorer
                ? null
                : SideBarTabs.Explorer
            )
          }
          className="relative p-2.5 mt-2"
        >
          {sideBarCurrentPage === SideBarTabs.Explorer && (
            <span className="absolute w-[3px] h-full rounded-lg top-0 left-0 bg-[#3478c6]" />
          )}
          <FileSvg
            fill={
              sideBarCurrentPage === SideBarTabs.Explorer ? "white" : "#cccccc"
            }
          />
        </button>

        <button
          onClick={() =>
            setSideBarCurrentPage(
              sideBarCurrentPage === SideBarTabs.Extension
                ? null
                : SideBarTabs.Extension
            )
          }
          className="relative p-2.5"
        >
          {sideBarCurrentPage === SideBarTabs.Extension && (
            <span className="absolute w-[3px] h-full rounded-lg top-0 left-0 bg-[#3478c6]" />
          )}
          <ExtensionSvg
            fill={
              sideBarCurrentPage === SideBarTabs.Extension ? "white" : "#cccccc"
            }
          />
        </button>
      </div>

      {sideBarCurrentPage === SideBarTabs.Explorer && <ExplorerSideBar />}
      {sideBarCurrentPage === SideBarTabs.Extension && <ExtensionSideBar />}
    </div>
  );
};

export default Sidebar;
