/**
 * Tipus de fenomen (`pluja_estels`, `eclipsi`…). Els valors es fixen a P14 (TG-106/109,
 * acordats amb Aprop); fins aleshores és un `string` i no se n'ha d'inventar cap.
 */
export type TipusFenomen = string;

/**
 * Ocurrència concreta d'un fenomen astronòmic (`GET /api/v1/esdeveniments`).
 * Segueix la proposta de `docs/serveis-externs.md`, pendent de validar amb Aprop (TG-109).
 * Les dates són ISO 8601 en UTC.
 */
export type Esdeveniment = {
  id: string;
  tipus: TipusFenomen;
  nom: string;
  inici: string;
  fi: string;
  /** Moment de màxima visibilitat. */
  maxim: string;
  /** `previst`… Els valors es defineixen amb el contracte (TG-109). */
  estat: string;
  descripcio: string;
  /** Origen de la dada (`IMO`, `NASA`, càlcul propi). */
  font: string;
};
