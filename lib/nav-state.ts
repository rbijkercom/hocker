/** Shared across client navigations; resets on a full page load. */
export const navState = {
  /** False until the first page has mounted, so effects can tell a fresh load from a client navigation. */
  hydrated: false,
  introPlayed: false,
};
