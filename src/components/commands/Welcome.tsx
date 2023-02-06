import { HighlightAltClick } from "../styles/About.styled";
import {
  Cmd,
  HeroContainer,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
  ░█▀▄░█▀▄░▀█▀░█▀█░█▀█░░░█▀█░█▀▀░█░█░█░█░█▀▀░█▀█
  ░█▀▄░█▀▄░░█░░█▀█░█░█░░░█░█░█░█░█░█░░█░░█▀▀░█░█
  ░▀▀░░▀░▀░▀▀▀░▀░▀░▀░▀░░░▀░▀░▀▀▀░▀▀▀░░▀░░▀▀▀░▀░▀
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
  ░█▀▄░█▀▄░▀█▀░█▀█░█▀█░
  ░█▀▄░█▀▄░░█░░█▀█░█░█░
  ░▀▀░░▀░▀░▀▀▀░▀░▀░▀░▀░
  ░█▀█░█▀▀░█░█░█░█░█▀▀░█▀█
  ░█░█░█░█░█░█░░█░░█▀▀░█░█
  ░▀░▀░▀▀▀░▀▀▀░░▀░░▀▀▀░▀░▀
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Hey, welcome to my terminal portfolio site!</div>
        <div>I hope you enjoy your stay :)</div>
        <div>
          If you'd like to check out my personal portfolio, click{" "}
          <HighlightAltClick
            onClick={() => (window.location.href = "https://bnguyen.ca")}
          >
            here
          </HighlightAltClick>
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <Seperator />
      </div>
    </HeroContainer>
  );
};

export default Welcome;
