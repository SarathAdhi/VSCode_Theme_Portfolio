import { Context } from "@common/context";
import PageLayout from "@layouts/PageLayout";
import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const codeString = `const aboutMe = {
  name: "Sarath Adhithya",
  livingIn: "Chennai",
  age: 19,
  educationHistory: {
    college: "Vellore Institute of Technology, Chennai",
    twelfth: "St.Johns Public School - CBSE",
    tenth: "St.Johns Public School - CBSE",
  },
  hobbies: ["Coding", "Reading", "Watching Movies"],
  socialMedia: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sarath-adhithya-145427225/",
    },
    {
      name: "Github",
      link: "https://github.com/SarathAdhi",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/sarath_adhithya/",
    },
  ],
};`;

const aboutMe = {
  name: "Sarath Adhithya",
  livingIn: "Chennai",
  age: 19,
  educationHistory: {
    college: "Vellore Institute of Technology, Chennai",
    twelfth: "St.Johns Public School - CBSE",
    tenth: "St.Johns Public School - CBSE",
  },
  hobbies: ["Coding", "Reading", "Watching Movies"],
  socialMedia: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sarath-adhithya-145427225/",
    },
    {
      name: "Github",
      link: "https://github.com/SarathAdhi",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/sarath_adhithya/",
    },
  ],
};

const About = () => {
  const { extension } = useContext(Context);
  const { ideTheme, setIdeTheme } = extension;

  return (
    <PageLayout>
      <SyntaxHighlighter
        language="javascript"
        style={ideTheme ? ideTheme : vs2015}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={true}
        startingLineNumber={1}
      >
        {codeString}
      </SyntaxHighlighter>
    </PageLayout>
  );
};

export default About;
