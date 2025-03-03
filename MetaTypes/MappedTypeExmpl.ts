/**
 * Mapped types transform an existing type, useful for creating 
 * variations like partial or readonly versions.
 */

interface Artist {
    id: number;
    name: string;
    bio: string;
  }
  
  // Create a partial version of any type.
  type MyPartialType<T> = { [P in keyof T]?: T[P] };
  
  // Apply it to Artist for updates.
  type MappedArtistForEdit = MyPartialType<Artist>;
  
  // Ensure id remains required.
  type MyPartialTypeForEdit<T> = { [P in keyof T]?: T[P] } & { id: number };
  
  type CorrectMappedArtistForEdit = MyPartialTypeForEdit<Artist>;
  