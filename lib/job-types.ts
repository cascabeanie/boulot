export type StateType = {
  message: string | null;
  error: string | null;
  data: string | null;
};

export type SearchParamsType = {
  [key: string]: string | string[] | undefined;
};
