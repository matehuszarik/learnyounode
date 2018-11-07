Keszits egy programot ami megjeleniti a fajlokat egy megadott konyvtarban kiterjesztesuk szerint szurve. A konyvtar neve a program elso parametere (pl.: '/path/to/dir'), a masodik pedig a fajl kiterjesztes ami szerint szurni kell.

Peldaul, ha 'txt' a masodik argumentum akkor le kell szurnod a listat hogy csak azokat a fajlokat tartalmazza, amik **.txt**-re vegzodnek. Figyelj ra, hogy a program masodik argumentuma _nem kapja meg_ a '.' prefixet.

Emlekeztetoul, a program elso argumentuma nem az elso eleme a `process.argv` tombnek, mivel az elso ket ertek a Node szamara van fenn tartva.

A fajl listanak a konzolon kell megjelennie soronkent. **Hasznalj** aszinkron I/O muveleteket.

----------------------------------------------------------------------
## SEGITSEG

Az `fs.readdir()` metodus egy utvonalat var elso parameternek es egy callback-t masodiknak. A callback szignaturaja a kovetkezokeppen nez ki:

```js
function callback (err, list) { /* ... */ }
```

ahol a `list` valtozo egy tomb a fajl nevekkel.

Dokumentacio az `fs` modulrol itt talalhato:
  {rootdir:/node_apidoc/fs.html}

A node `path` modulja is hasznos lehet a feladat soran, kimondottan az `extname` metodus.

Dokumentacio a `path` modulrol itt talalhato:
  {rootdir:/node_apidoc/path.html}
