/* eslint-disable no-unused-vars */
import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

const activities2 = [
  {
    id: 211,
    status: "unconfirmed",
    numNights: 3,
    Guests: {
      fullName: "Vaibhav Tyagi",
      nationality: "Indian",
      countryFlag: "https://flagcdn.com/in.svg",
    },
  },
  {
    id: 184,
    status: "checked-in",
    numNights: 5,
    Guests: {
      fullName: "Rohan Sharma",
      nationality: "Indian",
      countryFlag: "https://flagcdn.com/in.svg",
    },
  },
  {
    id: 191,
    status: "checked-in",
    numNights: 6,
    Guests: {
      fullName: "Rashid Khan",
      nationality: "Afghan",
      countryFlag: "https://flagcdn.com/af.svg",
    },
  },
  {
    id: 190,
    status: "unconfirmed",
    numNights: 3,
    Guests: {
      fullName: "Meera Kumari",
      nationality: "Nepali",
      countryFlag: "https://flagcdn.com/np.svg",
    },
  },
  {
    id: 192,
    status: "unconfirmed",
    numNights: 4,
    Guests: {
      fullName: "Nima Dorji",
      nationality: "Bhutanese",
      countryFlag: "https://flagcdn.com/bt.svg",
    },
  },
];

function TodayActivity() {
  const { isLoading, activities } = useTodayActivity();
  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>

      {!isLoading ? (
        activities2?.length > 0 ? (
          <TodayList>
            {activities2.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No Activity</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default TodayActivity;
