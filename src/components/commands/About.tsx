import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
  HighlightAltClick,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Brian Nguyen</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Software Engineering Student</HighlightAlt> based in
        Calgary, Alberta, Canada.
      </p>
      <p>
        Currently in my 3rd year and an incoming{" "}
        <HighlightAlt>Back End Developer Intern</HighlightAlt> at IBM. <br />
        I'm passionate about applying engineering solutions to real-life
        problems! <br />
      </p>
      <p>
        Take a look at my resume{" "}
        <HighlightAltClick
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1Dz8O-aOeLunV0lyCCh2b7P0-G5LpOUOo/view?usp=sharing"
            );
          }}
        >
          here!
        </HighlightAltClick>
      </p>
    </AboutWrapper>
  );
};

export default About;
