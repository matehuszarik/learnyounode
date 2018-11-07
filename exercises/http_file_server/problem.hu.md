Keszits egy HTTP **szervert** ami egy szoveges fajlt kuld vissza minden egyes keresre amit fogad.

A szervernek azon a porton kell figyelnie amit a program elso argumentumkent megkap.

A fajl eleresi utvonalat a program masodik argumentumkent kapja meg. **Hasznald** az `fs.createReadStream()` metodust, hogy a fajl tartalmat a HTTP valaszba streameld.

----------------------------------------------------------------------
## SEGITSEG

Mivel ehhez a feladathoz egy HTTP szervert kell kesziteni egy altalanos TCP szerver helyett, a `http` Node modult kell hasznalnod. Hasonloan a `net` modulhoz, a `http` modul szintent rendelkezik egy `http.createServer()` metodussal de ez egy olyan szervert hoz letre, amit a HTTP protokollon keresztul lehet megszolitani.

`http.createServer()` egy callback-t var parameterkent ami lefut minden egyes keres kiszolgalasakor. A callback szignaturaja igy nez ki:

```js
function callback (request, response) { /* ... */ }
```

Ahol ket objektum reprezentalja a HTTP kerest es a hozzatartozo valaszt az adott kereshez. `request` objektumon keresztul erhetoek el a kereshez tartozo header, query-string adatok, a `response` objektum felelos a header es a body beallitasaert, illetve a valasz elkuldeserol.

Mind a `request` es `response` Node stream, ami azt jelenti, hogy ugyanazt a streamelesi absztrakcio hasznalhato az adat fogadasahoz es kuldesehez.

`http.createServer()` egyben visszaadja `server` peldanyodat. Ha egy megadott porton szeretnel figyelni a bejovo keresekre, meg kell hivnod `server.listen(portNumber)` metodust.

Egy tipikus Node HTTP szerver a kovetkezokepp nez ki:

```js
var http = require('http')
var server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

Dokumentacio a `http` modulrol itt talalhato:
  {rootdir:/node_apidoc/http.html}

Az `fs` modul is rendelkezik API-val a fajl streameleshez. Az `fs.createReadStream()` metodust kell hasznalnod, hogy letrehozz egy stream-t, ami reprezentalja a parancssor argumentumkent megkapott fajlt. A metodus visszaad egy stream objektumot amit tovabbithatsz `src.pipe(dst)` a `src` stream-bol a `dst` stream-be. Igy osszekotheted a fajl adatfolyamat a HTTP valasz adatfolyamaval.