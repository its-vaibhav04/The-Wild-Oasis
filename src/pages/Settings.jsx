import styled from "styled-components";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Div = styled.div`
  margin-top: 2rem;
`;

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <Div>
        <UpdateSettingsForm />
      </Div>
    </Row>
  );
}

export default Settings;
