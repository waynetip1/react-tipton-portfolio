import React from "react";
import resume from "../docs/tiptonResume.pdf";

export default function PDF() {
  return <embed className="pdf" src={resume} />;
}
