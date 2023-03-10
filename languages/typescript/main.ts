/**
 * Noun is used to describe the media.
 */
interface Noun {
  /**
   * Singular form of the noun
   * E.g. "Season", "Episode", "Book", etc.
   */
  singular: string;

  /**
   * Plural form of the noun
   * E.g. "Seasons", "Episodes", "Books", etc.
   */
  plural: string;
}

/**
 * Intermediate values that is passed between states.
 */
interface Media {
  /**
   * Used for the string representation inside Awirix interface.
   */
  title: string;

  /**
   * Optional field that, if present, will be used
   * as a short description of the media.
   */
  description?: string;

  /**
   * Method that will be called to get the full description of the media.
   */
  info?: (this: Media) => string;

  // Any other fields will be preserved
  // when passing media between states.
}

interface Search {
  /**
   * Function that will be called to search for the media.
   */
  handler: (query: string, ctx: Context) => Media[];

  /**
   * Title to show when typing query.
   */
  title?: string;

  /**
   * Title in the list of search results.
   */
  subtitle?: string;

  /**
   * Placeholder to show in the search input.
   */
  placeholder?: string;

  /**
   * Optional field that, if present, will be used
   * as a name of the noun that represents the sub-media.
   */
  noun?: Noun;
}

interface Layer {
  /**
   * Function that will be called to get the list of sub-media for the given one.
   */
  handler: (media: Media, ctx: Context) => Media[];

  /**
   * Name of the layer
   * Will be used as a title of the layer in the Awirix interface.
   * E.g. "Seasons", "Episodes", "Books", etc.
   */
  title: string;

  /**
   * Optional field that, if present, will be used
   * as a name of the noun that represents the sub-media.
   */
  noun?: Noun;
}

interface Action {
  /**
   * Function that will be called to perform the action.
   */
  handler: (media: Media, ctx: Context) => void;

  /**
   * Title to show in the list of actions.
   * E.g. "Download", "Stream", etc.
   */
  title: string;

  /**
   * Description to show in the list of actions.
   */
  description?: string;
}

/**
 * Context is passed to each function to provide a way to communicate with the user.
 */
interface Context {
  /**
   * Function that will be called to show a progress message.
   * E.g. "Searching...", "Loading...", etc.
   */
  progress: (message: string) => void;

  /**
   * Function that will be called to abort the current operation
   * and show an error message.
   */
  error: (message: string) => void;
}

export const search = {
  handler: (query: string, ctx: Context): Media[] => {
    ctx.error("Not implemented");
    return [];
  },
} as Search;

/**
 * Each layer returns a list of sub-media for the given one.
 * For example, you can search for a show, then selected show will be passed to the first layer that's responsible for returning show's seasons.
 * After that, the selected season will be passed to the second layer that would return season's episodes.
 * Layers may be omitted (nil or 0 length) if this extension does not provide such functionality (e.g. just search and watch, no seasons, no episodes).
 * If `search` function is omitted, first layer will receive a `null` instead of the media.
 */
export const layers = [
  {
    title: "Layer",
    handler: (media: Media, ctx: Context): Media[] => {
      ctx.error("Not implemented");
      return [];
    },
  },
] as Layer[];

export const actions = [
  {
    title: "Stream",
    handler: (media: Media, ctx: Context): void => {
      ctx.error("Not implemented");
    },
  },
  {
    title: "Download",
    handler: (media: Media[], ctx: Context): void => {
      ctx.error("Not implemented");
    },
  },
] as Action[];
