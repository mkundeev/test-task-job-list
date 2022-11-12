import { Dimmer, Loader as LoaderUi } from "semantic-ui-react";
export default function Loader() {
  return (
    <Dimmer active inverted>
      <LoaderUi size="large">Loading</LoaderUi>
    </Dimmer>
  );
}
