// ArtistsResponse must include both ArtworksData and ErrorHandling.
var handleArtistsResponse = function (response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
// CreateArtistBioRequest requires artistID and either html or markdown.
// Valid Request:
var workingRequest = {
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
