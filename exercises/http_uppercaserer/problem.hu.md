Keszits egy HTTP **szervert** ami csak POST kereseket fogad es atalakitja a beerkezo POST body tartalmat nagy betusse es visszakuldi a kliensnek.

A szervernek azon a porton kell figyelnie amit a program elso argumentumkent megkap.

----------------------------------------------------------------------
## SEGITSEG

Bar nem vagy kenyszeritve, hogy a `request` es `response` objektum streamelesi kepesseget hasznald, konyebbe tehetik a feladat megoldasat.


Szamos package letezik npm-en aminek segitsegevel *"transzformalhatod"* az adatfolyamat. A feladathoz a `through2-map` kinalja a legegyszerubb API-t.

`through2-map` lehetove teszi hogy *transzformalhato stream*-t hozz letre egyetlen fuggvennyel. A fuggveny az adat egy reszet kapja meg parameterkent es ezt adja vissza. Hasonloan mukodik az `Array#map()`-hez csak stream-ekkel.

```js
var map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

A fenti peldaban az `inStream`-n beerkezo adat Sgtring-e lesz konvertalva (ha meg nem tortent meg), a karakterek visszafele megcserelodnek es a vegeredmeny pedig az `outStream`-n megjelenik. Ne feledd el, hogy a reszadat merete up-stream dol el es nagyon minimalis befolyasod van felette.

A `through2-map` telepitesehez add ki a kovetkezo parancsot:

```sh
$ npm install through2-map
```

Ha nincs Internet kapcsolatod, csak keszits egy `node_modules` konytvarat es masold be azt a mappat amit a {appname} konyvtarbol hasznalni szeretnel.
  {rootdir:/node_modules/through2-map}

Dokumentacio a `through2-map` modulrol itt talalhato:

  {rootdir:/docs/through2-map.html}
