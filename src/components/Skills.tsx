<<<<<<< HEAD
import React, { useState } from "react";
import {
  DiCss3,
  DiReact,
  DiSass,
  DiNodejs,
  DiFirebase,
  DiMongodb,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";
import { FaGit } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiAntdesign,
  SiMaterialui,
  SiStyledcomponents,
  SiBootstrap,
  SiJquery,
  SiIonic,
  SiAngular,
  SiReactrouter,
  SiLaravel,
  SiExpress,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiJest,
  SiTestinglibrary,
  SiCucumber,
  SiCypress,
  SiVisualstudio,
  SiPostman,
  SiFigma,
  SiMicrosoftoffice,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { TAB_LABELS } from "../constants";

const skillsData = {
  frontend: [
    {
      id: 1,
      name: "React",
      icon: <DiReact className="w-7 h-10 xs:w-10 xs:h-8 dark:text-slate-50" />,
    },
    {
      id: 2,
      name: "TypeScript",
      icon: <SiTypescript className="w-7 h-10 xs:w-5 xs:h-8 dark:text-slate-50" />,
    },
    {
      id: 3,
      name: "Redux",
      icon: <SiRedux className="w-7 h-10 xs:w-5 xs:h-8 dark:text-slate-50" />,
    },
    {
      id: 4,
      name: "Vanilla JS",
      icon: <SiJavascript className="w-7 h-10 xs:w-5 xs:h-8 dark:text-slate-50" />,
    },
    {
      id: 5,
      name: "HTML",
      icon: <SiHtml5 className="w-7 h-10 xs:w-5 xs:h-8 dark:text-slate-50" />,
    },
    {
      id: 6,
      name: "CSS",
      icon: <DiCss3 className="w-7 h-10 xs:w-5 xs:h-8 dark:text-slate-50" />,
    },
    //
    {
      id: 7,
      name: "SASS",
      icon: <DiSass className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 8,
      name: "Styled Components",
      icon: <SiStyledcomponents className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 9,
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 10,
      name: "Material UI",
      icon: <SiMaterialui className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 11,
      name: "Ant Design",
      icon: <SiAntdesign className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 12,
      name: "Bootstrap",
      icon: <SiBootstrap className="w-7 h-10 dark:text-slate-50" />,
    },
    //
    {
      id: 13,
      name: "React Router",
      icon: <SiReactrouter className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 14,
      name: "React Native",
      icon: <TbBrandReactNative className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 15,
      name: "Next JS",
      icon: <TbBrandNextjs className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 16,
      name: "Angular",
      icon: <SiAngular className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 17,
      name: "Ionic UI",
      icon: <SiIonic className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 18,
      name: "JQuery",
      icon: <SiJquery className="w-7 h-10 dark:text-slate-50" />,
    },
  ],
  backend: [
    {
      id: 1,
      name: "PHP",
      icon: <SiPhp className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 2,
      name: "Laravel",
      icon: <SiLaravel className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 3,
      name: "Express JS",
      icon: <SiExpress className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 4,
      name: "Node JS",
      icon: <DiNodejs className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 5,
      name: "MySQL",
      icon: <SiMysql className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 6,
      name: "MongoDB",
      icon: <SiMongodb className="w-7 h-10 dark:text-slate-50" />,
    },
    //
    {
      id: 7,
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 8,
      name: "Firebase",
      icon: <DiFirebase className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 9,
      name: "AWS",
      icon: <SiAmazonaws className="w-7 h-10 dark:text-slate-50" />,
    },
  ],
  testing: [
    {
      id: 1,
      name: "Jest",
      icon: <SiJest className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 2,
      name: "RTL",
      icon: <SiTestinglibrary className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 3,
      name: "Cucumber",
      icon: <SiCucumber className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 4,
      name: "Cypress",
      icon: <SiCypress className="w-7 h-10 dark:text-slate-50" />,
    },
  ],
  tools: [
    {
      id: 1,
      name: "VS Code",
      icon: <SiVisualstudio className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 2,
      name: "Git",
      icon: <FaGit className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 3,
      name: "Postman",
      icon: <SiPostman className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 4,
      name: "MongoDB Compass",
      icon: <DiMongodb className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 5,
      name: "Microsoft Office",
      icon: <SiMicrosoftoffice className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 6,
      name: "Figma",
      icon: <SiFigma className="w-7 h-10 dark:text-slate-50" />,
    },
    //
    {
      id: 7,
      name: "Adobe Photoshop",
      icon: <SiAdobephotoshop className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 8,
      name: "Adobe Illustrator",
      icon: <SiAdobeillustrator className="w-7 h-10 dark:text-slate-50" />,
    },
    {
      id: 9,
      name: "Adobe Premiere Pro",
      icon: <SiAdobepremierepro className="w-7 h-10 dark:text-slate-50" />,
    },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<null | string>("frontend");

  const handleTabOnClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div
      id="skills"
      className="snap-start flex flex-col items-center justify-center text-center h-screen min-h-screen xs:h-full"
    >
      <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-slate-50 mb-10 xs:mt-20 xs:my-4">
        SKILLS
      </h1>

      <div className="flex flex-col text-neutral-800 w-3/6 text-left xs:w-5/6 xs:flex-col">
        <div className="mb-4 w-full dark:text-slate-50">
          <ul className="flex flex-wrap text-sm xs:text-xs font-medium text-center border-b">
            {TAB_LABELS.map((label) => (
              <li
                key={label.id}
                className={`p-4 font-bold xs:p-2 -my-px ${
                  label.id === activeTab
                    ? "bg-[#663399] text-white active-tab dark:text-slate-50 active:text-white"
                    : "not-active-tab border"
                }`}
              >
                <button
                  onClick={() => handleTabOnClick(label.id)}
                  id={label.name}
                >
                  {label.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-60 xs:h-[24.6rem] border">
          <SkillContainer data={skillsData} tab={activeTab} />
        </div>
      </div>
    </div>
  );
};

const SkillContainer = ({ data, tab }: any) => {
  return (
    <div className="grid grid-cols-6 gap-x-2 gap-y-2 justify-items-center p-2 xs:grid-cols-4">
      {data[tab]?.map((val: any) => (
        <div
          key={val.id}
          className={`text-center hover:bg-[#663399] hover:text-white flex flex-col items-center justify-center w-full h-[4.3rem] border ${
            val.id === 1
              ? "rounded-tl-lg"
              : val.id === 4
              ? "xs:rounded-tr-lg"
              : val.id === 6
              ? "rounded-tr-lg xs:rounded-none"
              : val.id === 13
              ? "rounded-bl-lg xs:rounded-none"
              : val.id === 17
              ? "xs:rounded-bl-lg"
              : val.id === 18
              ? "rounded-br-lg xs:rounded-none"
              : val.id === 20
              ? "rounded-br-lg"
              : ""
          }`}
        >
          {val.icon}
          <span className="text-[0.5rem] xs:text-[0.30rem] dark:text-slate-50">{val.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
=======
import React from 'react'

function Skills() {
  return (
    <div
      id="skills"
      className="snap-start flex flex-col items-center justify-center text-center h-screen min-h-screen"
    >
      <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-slate-50 mb-5">
        SKILLS
      </h1>
    </div>
  )
}

export default Skills
>>>>>>> a0ee311 ([Second] Navbar, darkmode, fullpage scroll, and responsiveness)
