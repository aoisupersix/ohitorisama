/**
 * Local data store used by Jalan site.
 */
export interface JalanStore {

  /**
   * The number of people selected by the user.
   */
  numOfPeople: string

  /**
   * Whether or not to check the user-selected undecided date checkbox.
   */
  undate: boolean
}
