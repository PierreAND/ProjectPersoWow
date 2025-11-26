export class Glyphe {
  constructor(
    public id: number,
    public majeur: string,
    public mineur: string,
    public speId: number,
  ) {}
}

export class Template {
  constructor(
    public id: number,
    public opti1: string,
    public opti2: string,
    public speId: number,
  ) {}
}

export class Cycle {
  constructor(
    public id: number,
    public monocible: string,
    public zone: string,
    public speId: number,
  ) {}
}

export class Specialisation {
  constructor(
    public id: number,
    public glyphes: Glyphe[],
    public templates: Template[],
    public cycles: Cycle[],
  ) {}
}
