// Type Unions
// Definition: Unions allow a variable to hold values of multiple types.
// Example:
type StringOrNumber = string | number;

// StringOrNumber can be either a string or a number.
// Literal Unions: Unions can include specific values (literals).
type ProcessStates = "open" | "closed";

// ProcessStates can only be "open" or "closed".
// Mixed Unions: Unions can combine different types.
type AMessyUnion = "hello" | 156 | { error: true };

// AMessyUnion can be a string, number, or object.
// Type Widening: Unions can be undermined if combined with broader types.
type WindowStates = "open" | "closed" | "minimized" | string;

// WindowStates becomes just string because string is broader.
// Intersection Types
// Definition: Intersections combine multiple types into one.
interface ArtworksData {
  artists: string[];
}

interface ErrorHandling {
  error?: {
    message: string;
  };
}

type ArtistsResponse = ArtworksData & ErrorHandling;

// ArtistsResponse must include both ArtworksData and ErrorHandling.
const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }
  console.log(response.artists);
};
// Handles responses with both data and error handling.
// Combining Unions and Intersections
// Example:
interface CreateArtistBioBase {
  artistID: string;
}

type CreateArtistBioRequest = CreateArtistBioBase & ({ html: string } | { markdown: string });

// CreateArtistBioRequest requires artistID and either html or markdown.
// Valid Request:
const workingRequest: CreateArtistBioRequest = {
  artistID: "banksy",
  markdown: "Banksy is an anonymous England-based graffiti artist...",
};

// Invalid Request:
// const badRequest: CreateArtistBioRequest = {
//   artistID: "banksy",
// };
// Missing html or markdown.
// Key Takeaways
// Unions (|): Allow a value to be one of multiple types.
// Intersections (&): Combine multiple types into one.
// Combining Both: Useful for complex type requirements.