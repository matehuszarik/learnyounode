Keszits egy programot ami HTTP GET muveletet hajt vegre a megadott URL cimre, amit a program elso argumentumkent kap meg. Gyujtsd ossze az **osszes** adatot a szervertol (nem csak az elso "data" esemeny eredmenyet) es jelenitsd meg ket sor a konzolon (stdout).

Az elso sorban csak egy szamot irj ki, ami megmutatja hany karaktert kapott vissza a HTTP keres a szervertol. A masodik sornak a teljes String-et tartalmaznia kell amit a szerver visszakuldott.

----------------------------------------------------------------------
## SEGITSEG

Ket kulonbozo modszerrel kozelitheted meg a problema megoldasat:

**1)** Gyujtsd ossze az osszes adatot amit a "data" esemeny kibocsat es fuzd ossze oket a megjelenites elott. Hasznald az "end" esemenyt, hogy ertesulj amikor az adatfolyam befejezodott.

**2)** Hasznalj egy third-party megoldast, hogy ne kelljen az adat osszegyujtes es fuzes nehezsegeivel foglalkoznod. Ket kulonbozo konyvtar (tobb is letezik valoszinuleg) is nyujthat segitseget a problema megoldasaban: `bl` (Buffer List) es `concat-stream`; valassz egyet!
 
  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

Egy Node package telepitesehez, hasznald a Node Package Manager-t `npm`.

```sh
$ npm install bl
```

A parancs letolti es telepiti a package legkorabbi verziojat a `node_modules` konytarba. Barmelyik package a `node_modules` konyvtar alatt betoltheto a programodban a `require` kulcsszot hasznalva. A './' prefix nem szukseges ilyen esetekben:

```js
var bl = require('bl')
```

A Node eloszor a sajat alap moduljai kozott fogja keresni a megadott package-t, majd a `node_modules` konyvtarban.

Ha nincs Internet kapcsolatod, csak keszits egy `node_modules` konytvarat es masold be azt a mappat amit a {appname} konyvtarbol hasznalni szeretnel.

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

`bl` es `concat-stream` is tud egy adatfolyamott fogadni es osszegyujteni az adat reszeit szamodra. Amint a stream befejezodik, egy callback fog meghivodni az osszefuzott adattal:

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

Figyelj ra, hogy valoszinuleg hasznalnod kell a `data.toString()` metodust hogy szoveges formatumra konvertald a Buffer-t.

Dokumentacio mindket modulrol itt talalhato:

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
