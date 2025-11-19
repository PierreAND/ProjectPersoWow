export interface ClassIndexDTO {
  _links: {
    self: { href: string };
  };
  classes: Array<{
    key: { href: string };
    name: string;
    id: number;
  }>;
}