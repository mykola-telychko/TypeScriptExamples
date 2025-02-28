/** 
 * Discriminated unions use a common property to determine the exact type.
 */

type TimingEvent = { name: "start"; userStarted: boolean } | { name: "closed"; duration: number };

/** Handles events using discriminated unions */
const handleEvent = (event: TimingEvent) => {
  switch (event.name) {
    case "start":
      console.log(event.userStarted);
      break;
    case "closed":
      console.log(event.duration);
      break;
  }
};

/** Example with numbers as discriminators */
type APIResponses = { version: 0; msg: string } | { version: 1; message: string; status: number } | { error: string };

const handleResponse = (response: APIResponses) => {
  if ("error" in response) {
    console.error(response.error);
    return;
  }

  switch (response.version) {
    case 0:
      console.log(response.msg);
      break;
    case 1:
      console.log(response.status, response.message);
      break;
  }
};
