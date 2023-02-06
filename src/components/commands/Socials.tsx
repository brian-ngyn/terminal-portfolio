import { useContext } from "react";
import _ from "lodash";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import { checkRedirect, generateTabs } from "../../utils/funcs";
import { UsageDiv } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (checkRedirect(arg, rerender, currentCommand, "socials")) {
    socials.forEach(({ id, url }) => {
      id === parseInt(arg[1]) && window.open(url, "_blank");
    });
    return null;
  }

  /* ===== check arg is valid ===== */
  const checkArg = (a: string[]) => {
    if (a[0] !== "go" || !_.includes([1, 2, 3], parseInt(a[1])))
      return (
        <UsageDiv data-testid="socials-invalid-arg">
          Usage: socials go &#60;social-no&#62; <br />
          eg: socials go 1
        </UsageDiv>
      );
    return null;
  };

  return arg.length > 0 ? (
    checkArg(arg)
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro></ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <UsageDiv marginY>
        Usage: socials go &#60;social-id&#62; <br />
        eg: socials go 1
      </UsageDiv>
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "This Portfolio!",
    url: "https://bnguyen.ca/",
    tab: 0,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/nguyennbrian/",
    tab: 7,
  },
  {
    id: 3,
    title: "GitHub",
    url: "https://github.com/brian-ngyn",
    tab: 9,
  },
];

export default Socials;
