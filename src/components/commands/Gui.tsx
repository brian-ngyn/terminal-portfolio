import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");
  console.log(currentCommand);

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "gui") {
    window.location.href = "https://bnguyen.ca/";
  }

  return <span></span>;
};

export default Gui;
