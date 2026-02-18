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

export class BestInSlots {
   [key: string]: string | number;
  constructor(
    public id: number,
    public tete: string,
    public collier: string,
    public epaule: string,
    public cape: string,
    public torse: string,
    public bracelet: string,
    public gants: string,
    public ceinture: string,
    public pantalon: string,
    public bottes: string,
    public anneaux1: string,
    public anneaux2: string,
    public bijoux1: string,
    public bijoux2: string,
    public arme1: string,
    public arme2: string,
    public arme3: string,
    public speId: number,
  ) {}
}

export class Specialisation {
  constructor(
    public id: number,
    public glyphes: Glyphe[],
    public templates: Template[],
    public cycles: Cycle[],
    public bestInSlots: BestInSlots[],
  ) {}
}
