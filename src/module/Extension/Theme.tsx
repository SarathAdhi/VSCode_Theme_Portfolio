import { Downloaded, StarFilled, StarHalfFilled } from "@assets/header/VSCode";
import { Context } from "@common/context";
import { PopOver } from "@components/PopOver";
import { H2, P } from "@elements/Text";
import React, { useContext } from "react";
import * as themes from "react-syntax-highlighter/dist/cjs/styles/hljs";

const ExtensionTheme = () => {
  const themeNames = Object.entries(themes);

  const { extension } = useContext(Context);
  const { ideTheme, setIdeTheme } = extension;

  return (
    <div className="px-28 py-5">
      <div className="flex items-start gap-5">
        <img
          src="https://cdn.dribbble.com/users/21253/screenshots/1977311/themes_logo.jpg"
          className="w-36 h-36 rounded-full object-cover"
        />

        <div className="flex flex-col gap-1">
          <H2 className="relative">
            Theme{" "}
            <span className="px-1 absolute ml-3 bg-[#383b40] text-sm rounded-sm">
              v1.0.0
            </span>
          </H2>

          <div className="flex gap-2">
            <P className="flex items-center gap-1">
              <img src="/assets/verified-badge.png" className="w-5 h-5" />
              Sarath
            </P>

            <P className="flex items-center gap-1">
              |
              <Downloaded />
              9,046,727
            </P>

            <P className="flex items-center gap-1">
              |
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarHalfFilled />
            </P>
          </div>

          <P>UI Theme extension</P>

          <div className="flex items-center gap-5">
            <PopOver
              button={{
                text: "Set Color Theme",
                className:
                  "text-sm px-1 tracking-tighter bg-[#4f5564] text-white",
              }}
            >
              <div className="flex flex-col gap-1 w-full max-h-96 overflow-auto">
                {themeNames.map((theme) => (
                  <button
                    onClick={() => setIdeTheme(theme[1])}
                    className="text-left capitalize px-2 hover:bg-[#2d3139] "
                  >
                    {theme[0]}
                  </button>
                ))}
              </div>
            </PopOver>
            <button
              onClick={() => setIdeTheme(null)}
              className="text-sm px-1 tracking-tighter bg-[#4f5564] text-white"
            >
              Disable
            </button>
          </div>
        </div>
      </div>

      {/* <header className="fixed top-0 w-1/2 max-h-96 overflow-auto bg-[#252526] rounded-md">
        <div className="flex flex-col gap-2">
          {themeNames.map((theme) => (
            <button onClick={() => setIdeTheme(theme[1])}>{theme[0]}</button>
          ))}
        </div>
      </header> */}
    </div>
  );
};

export default ExtensionTheme;
