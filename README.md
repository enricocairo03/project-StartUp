# Incentivi Startup e Attività Sportive

Questo progetto implementa un sistema di gestione degli incentivi per startup e la partecipazione dei cittadini alle attività offerte dalle startup. Utilizza TypeScript per definire le interfacce e le classi necessarie.

## Descrizione

Il progetto fornisce un modello per gestire le startup, gli incentivi e la partecipazione dei cittadini alle attività sportive offerte dalle startup. Le startup possono ricevere incentivi, e i cittadini possono partecipare alle attività delle startup.

## Struttura del Progetto

Il progetto è composto dalle seguenti interfacce e classi:

### Interfacce

- **IStartup**: Definisce una startup con proprietà come nome, focus, descrizione e prodotti offerti. Include un metodo per ricevere incentivi.
- **IIncentivo**: Definisce un incentivo con proprietà come codice ID, descrizione, valore e criteri di eleggibilità. Include un metodo per assegnare l'incentivo a una startup.
- **ICittadino**: Definisce un cittadino con proprietà come nome, cognome, età e interessi sportivi. Include un metodo per partecipare alle attività di una startup.

### Classi

- **Startup**: Implementa l'interfaccia IStartup.
- **Incentivo**: Implementa l'interfaccia IIncentivo.
- **Cittadino**: Implementa l'interfaccia ICittadino.

## Requisiti del Sistema

- Node.js
- TypeScript

## Installazione

1. Clona il repository:
   ```sh
   git clone <url-del-repository>

## Prova qui l'applicazione

https://codepen.io/Enrico-Cairo/pen/ZEdYNPj

