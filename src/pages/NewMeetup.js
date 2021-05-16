import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetupsPage() {
  const history = useHistory();

  function createMeetup(meetup) {
    fetch("https://fir-test-e8a20.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onSubmit={createMeetup} />
    </section>
  );
}

export default NewMeetupsPage;
