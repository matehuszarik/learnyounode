Keszits egy programot ami egyetlen **aszinkron** fajl rendszer muveletet hasznal, hogy felolvassa egy fajl tartalmat es kiirja konzolra a fajlban talalhato uj sorok szamat. A feladat hasonlo a `cat file | wc -l` parancs futtatasahoz.

A program elso argumentumkent kapja meg a fajl eleresi utvonalat.

----------------------------------------------------------------------
# SEGITSEG

A problema megoldasa nagyon hasonlo az elozo feladatehoz, viszont most **aszinkron** megkozelitest kell alkalmaznod.

Az `fs.readFileSync()` metodus helyett az `fs.readFile()` metodust kell hasznalnod. A visszateresi ertek helyett egy callback fuggvenyben kell osszegyujtened a metodus eredmenyet, amit masodik argumentumkent kell atadnod. A callback fuggvenyekrol itt tudhatsz meg tobbet: https://github.com/maxogden/art-of-node#callbacks.


Emlekezz ra, hogy a callback fuggvenyek altalaban a kovetkezo szignaturaval rendelkeznek:

```js
function callback (err, data) { /* ... */ }
```

hogy ertesulj rola ha valamilyen hiba kovetkezett be a muvelet soran. Ha nincs hiba, a masodik argumentumkent megkapod a `Buffer`-t ami tartalmazza az eredmenyt. Ugyanugy ahogy a `readFile` muvelet eseten, at tudod adni az 'utf8' erteket masodik parameterkent, igy `Buffer` helyett egybol `String` formatumban kaphatod meg a fajl tartalmat.

Dokumentacio az `fs` modulrol itt talalhato:
  {rootdir:/node_apidoc/fs.html}
