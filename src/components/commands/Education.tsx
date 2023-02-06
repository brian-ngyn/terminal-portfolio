import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Bachelor of Science - Software Engineering (Major)",
    desc: "University of Calgary | 2020 ~ 2025 | GPA: 3.86",
  },
  {
    title: "Bachelor of Science - Data Science (Minor)",
    desc: "University of Calgary | 2020 ~ 2025",
  },
];

export default Education;
