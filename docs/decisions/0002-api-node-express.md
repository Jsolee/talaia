# ADR-0002: API i worker propis amb Node.js + TypeScript + Express

**Estat:** Acceptada · **Data:** 2026-09 (Incepció 2)

## Context

El càlcul de l'índex és pesat, periòdic i és el nucli del producte. L'assignatura demana una API pròpia documentada i servidors justificats.

## Decisió

Servidor propi Node.js + TypeScript: API REST Express a `/api/v1` documentada amb OpenAPI, i un worker separat que recalcula l'índex cada hora. Descartats: només Supabase Edge Functions (límits de temps i memòria, ràsters), Python/FastAPI (segon llenguatge), Java/Spring (tercer llenguatge, verbós).

## Conseqüències

Un sol llenguatge a tot el projecte. La lògica de negoci no depèn del proveïdor de base de dades. Cal mantenir una VM (ADR-0006).
