export type StateType = {
  message: string | null;
  error: string | null;
};

export type SearchParamsType = {
  [key: string]: string | string[] | undefined;
};
