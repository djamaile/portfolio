import React, { ReactElement } from "react";
import Chip from "@material-ui/core/Chip";

interface Props {
  stack: Array<string>;
}

const TechStacks: React.FC<Props> = ({ stack }): ReactElement => {
  return (
    <>
      {stack.map((tech) => {
        return (
          <Chip label={tech} color="secondary" style={{ marginRight: 5 }} />
        );
      })}
    </>
  );
};

export default TechStacks;
