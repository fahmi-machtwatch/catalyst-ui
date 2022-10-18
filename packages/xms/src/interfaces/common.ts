export type ActionsPayload<T = unknown> = {
  method: 'PUT' | 'POST';
  path: string;
  body?: T;
};

export type ActionsType = {
  onCreate?: ActionsPayload;
  onUpdate?: ActionsPayload;
  onDelete?: string;
  onLoad?: string;
};

export type Actions = {
  actions?: ActionsType;
};

export type Response<T = unknown> = {
  data: T;
};
