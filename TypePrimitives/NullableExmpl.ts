type PotentialString = string | undefined | null;

function getID(): PotentialString {
  const ids = ["user123", undefined, null];
  return ids[Math.floor(Math.random() * ids.length)];
}

const userID = getID();

if (userID) {
  console.log("User Logged in:", userID);
} else {
  console.log("No user ID found.");
}

const definitelyString1 = getID() as string;
const definitelyString2 = getID()!;

const voidFunction = (): void => { console.log('22'); };
const resultOfVoidFunction = voidFunction();