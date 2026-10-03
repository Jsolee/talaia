# ADR-0003: Supabase (PostgreSQL + PostGIS, Auth, Storage) a la UE

**Estat:** Acceptada · **Data:** 2026-09 (Incepció 2)

## Context

Talaia és geogràfica (punts dins d'un radi, polígons, ordenació per distància) i relacional. Necessitem login amb Google, Apple i correu i guardar fotos privades.

## Decisió

Supabase a la regió europea: PostgreSQL + PostGIS amb migracions versionades, Auth que emet JWT que la nostra API valida, Storage amb URL signades. Descartats: Firebase (documental, sense consultes geogràfiques, més lligam), Postgres i login propis (operacions i seguretat que no aporten valor).

## Conseqüències

Esquema versionat amb migracions SQL al repositori. El pla gratuït pausa projectes inactius: el worker hi escriu cada hora. Migrable a qualsevol Postgres.
