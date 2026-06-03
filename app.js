// ============================================================
//  CERAMIK GENERATOR — app.js
//  Logika losowania. Słowa kluczowe są w data.js.
// ============================================================

const INSPIRACJE_KATEGORIE = ['natura', 'zwierzeta', 'emocje', 'pojecia', 'style'];

let mode = 1;

// --- helpers ---

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickForma() {
  const all = [...DB.forma_uzytkowe, ...DB.forma_ozdobne];
  return pick(all);
}

function pickInsp() {
  const kat = pick(INSPIRACJE_KATEGORIE);
  return pick(DB[kat]);
}

// --- mode switch ---

function setMode(m) {
  mode = m;
  document.getElementById('btn-mode1').classList.toggle('active', m === 1);
  document.getElementById('btn-mode2').classList.toggle('active', m === 2);
  document.getElementById('empty').classList.remove('hidden');
  document.getElementById('results').classList.add('hidden');
}

// --- roll ---

function roll() {
  const forma    = pickForma();
  const technika = pick(DB.technika);
  const kolor    = pick(DB.kolor);

  document.getElementById('empty').classList.add('hidden');
  document.getElementById('results').classList.remove('hidden');

  // forma
  document.getElementById('val-forma').textContent = forma.v;
  document.getElementById('sub-forma').textContent = forma.s;

  if (mode === 1) {
    const insp = pickInsp();
    document.getElementById('val-inspiracja').textContent = insp.v;
    document.getElementById('sub-inspiracja').textContent = insp.s;

    document.getElementById('card-inspiracja').classList.remove('hidden');
    document.getElementById('chips-inspiracje').classList.add('hidden');
    document.getElementById('card-ogr').classList.add('hidden');

  } else {
    const insp1 = pickInsp();
    let insp2 = pickInsp();
    let tries = 0;
    while (insp2.v === insp1.v && tries < 10) {
      insp2 = pickInsp();
      tries++;
    }

    document.getElementById('val-insp1').textContent = insp1.v;
    document.getElementById('sub-insp1').textContent = insp1.s;
    document.getElementById('val-insp2').textContent = insp2.v;
    document.getElementById('sub-insp2').textContent = insp2.s;

    document.getElementById('chips-inspiracje').classList.remove('hidden');
    document.getElementById('card-inspiracja').classList.add('hidden');

    const ogr = pick(DB.ograniczenia);
    document.getElementById('val-ogr').textContent = ogr;
    document.getElementById('card-ogr').classList.remove('hidden');
  }

  document.getElementById('val-technika').textContent = technika;
  document.getElementById('val-kolor').textContent    = kolor;
}
