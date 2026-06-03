# dzisiaj zrób — generator ceramiczny

Generator losowych projektów ceramicznych. Otwórz `index.html` w przeglądarce — działa bez serwera.

## Struktura plików

```
ceramik-generator/
├── index.html   — główna strona (nie edytuj)
├── style.css    — wygląd (nie edytuj)
├── app.js       — logika losowania (nie edytuj)
└── data.js      — ⭐ BAZA SŁÓW KLUCZOWYCH — tutaj edytujesz
```

## Jak edytować słowa kluczowe

Otwórz `data.js` w dowolnym edytorze tekstu (np. VS Code, Notepad++).

Każda kategoria to tablica w środku obiektu `DB`. 

### Dodawanie hasła (z kategorią)
```js
{ v: "twoje hasło", s: "nazwa kategorii" },
```

### Dodawanie hasła (prosty string — kolor, technika, ograniczenie)
```js
"twoje hasło",
```

### Przykład — dodanie nowej formy użytkowej
```js
forma_uzytkowe: [
  { v: "kubek",        s: "użytkowe" },
  { v: "moja nowość",  s: "użytkowe" },  // ← dodane
  ...
],
```

### Przykład — dodanie nowej techniki
```js
technika: [
  "transparentne szkliwo",
  "moja nowa technika",  // ← dodane
  ...
],
```

## Tryby

**Tryb 1 — „Nie mam pomysłu"**  
Losuje: forma + inspiracja + technika + kolorystyka

**Tryb 2 — „Wyjdź ze schematu"**  
Losuje: forma + 2 inspiracje z różnych kategorii + technika + kolorystyka + ograniczenie

## Deploy na GitHub Pages

1. Utwórz nowe repo na GitHub (np. `ceramik-generator`)
2. Wgraj wszystkie pliki
3. Settings → Pages → Source: `main` / `root`
4. Gotowe — strona działa pod `https://bezsensuhania.github.io/ceramik-generator/`
