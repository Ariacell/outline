import * as React from "react";
import Frame from "../components/Frame";
import { EmbedProps as Props } from ".";

function Redmine({ matches, ...props }: Props) {
  return (
    <Frame
      {...props}
      src={`/embeds/redmine?url=${encodeURIComponent(props.attrs.href)}`}
      width="100%"
      height={250}
      title="Redmine"
    />
  );
}

export default Redmine;
