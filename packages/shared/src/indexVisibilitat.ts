/**
 * Franja de color de l'índex. Els valors són els noms dels tokens del design system
 * (`docs/design-system.md`): `tap` (cel tapat), `jus` (regular), `ras` (cel ras).
 * Els llindars (ara 0–39, 40–69 i 70–100) es fixen amb la fórmula v1: P12, TG-98.
 */
export type FranjaIndex = 'tap' | 'jus' | 'ras';

/** Índex de visibilitat d'un lloc en una hora (ADR-0004). */
export type IndexVisibilitat = {
  /** Enter de 0 a 100. */
  valor: number;
  franja: FranjaIndex;
};
