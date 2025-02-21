// TypeScript Utility Types Explained
// This code demonstrates TypeScript's built-in utility types 
// that help modify and compose types more effectively. Here's a concise breakdown:

// 1. ✅ Partial<Type>
// Makes all properties optional.
type StickerUpdateParam = Partial<Sticker>; 
// { id?: number; name?: string; createdAt?: string; updatedAt?: string; submitter?: string | undefined }

// 2. 🔒 Readonly<Type>
// Makes all properties read-only (immutable).
type StickerFromAPI = Readonly<Sticker>; 
// Properties can't be changed after assignment.

// 3. 📋 Record<Keys, Type>
// Creates an object type with keys from a union and values of a specific type.
type NavigationPages = "home" | "stickers" | "about" | "contact";
const navigationInfo: Record<NavigationPages, PageInfo> = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/about" },
  contact: { title: "Contact", url: "/contact" },
  stickers: { title: "Stickers", url: "/stickers/all" },
};

// 4. 🎯 Pick<Type, Keys>
// Extracts specific properties from a type.
type StickerSortPreview = Pick<Sticker, "name" | "updatedAt">; 
// Only "name" and "updatedAt" fields.

// 5. 🚫 Omit<Type, Keys>
// Removes specific properties from a type.
type StickerTimeMetadata = Omit<Sticker, "name">; 
// All properties except "name".

// 6. ❌ Exclude<Type, ExcludedUnion>
// Removes specific types from a union.
type HomeNavigationPages = Exclude<NavigationPages, "home">; 
// "stickers" | "about" | "contact"

// 7. ✔️ Extract<Type, MatchUnion>
// Keeps only types that match a specific union.
type DynamicPages = Extract<NavigationPages, "home" | "stickers">; 
// "home" | "stickers"

// 8. 🚫 NonNullable<Type>
// Removes null and undefined from a type.
type StickerLookupResult = Sticker | undefined | null;
type ValidatedResult = NonNullable<StickerLookupResult>; 
// Only Sticker

// 9. 📤 ReturnType<Type>
// Extracts the return type of a function.
declare function getStickerByID(id: number): Promise<StickerLookupResult>;
type StickerResponse = ReturnType<typeof getStickerByID>; 
// Promise<Sticker | undefined | null>

// 10. 🏷️ InstanceType<Type>
// Gets the instance type from a class.
class StickerCollection { stickers: Sticker[]; }
type CollectionItem = InstanceType<typeof StickerCollection>; 
// StickerCollection

// 11. 🔄 Required<Type>
// Converts all optional properties to required.
type AccessiblePageInfo = Required<PageInfo>; 
// All properties are mandatory.

// 12. ⚡ ThisType<Type>
// Provides a type for this inside functions (used with noImplicitThis).
// Useful for defining object contexts.
// 💡 Summary:
// These utility types simplify type transformations, ensuring type safety and cleaner code. They're essential for working with complex TypeScript applications. 