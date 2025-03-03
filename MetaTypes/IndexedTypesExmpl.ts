/**
 * Indexed types help avoid duplication by extracting nested types 
 * from complex structures, keeping them in sync with API responses.
 */

interface ArtworkSearchResponse {
    artists: {
      name: string;
      artworks: {
        name: string;
        deathdate: string | null;
        bio: string;
      }[];
    }[];
}
  
// Instead of manually defining Artwork, infer it from the response.
type InferredArtwork = ArtworkSearchResponse["artists"][0]["artworks"][0];

// Now, InferredArtwork dynamically reflects any changes in the API.
  