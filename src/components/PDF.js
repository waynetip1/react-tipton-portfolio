import React from "react";
import resume from "../docs/tiptonResume.pdf";

export default function PDF() {
  return <iframe className="pdf" src={resume} />;
}
