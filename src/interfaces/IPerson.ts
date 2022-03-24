interface IPet {
  name: string;
  /**
   * @minimum 1
   * @maximum 100
   */
  legs: number;
}

export default interface IPerson {
  /**
   * Some description
   * @minLength 1
   * @maxLength 5
   */
  name: string;
  age?: number;
  /**
   * Some description
   * @minItems 1
   * @maxItems 4
   */
  pets: IPet[];
}
