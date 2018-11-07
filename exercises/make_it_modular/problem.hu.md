Ez a problema megegyezik az elozovel de bevezeti a **modulok** fogalmat. Ket fajlt kell letrehoznod.

Keszits egy programot ami megjeleniti a fajlokat egy megadott konyvtarban kiterjesztesuk szerint szurve. A konyvtar neve a program elso parametere, a masodik pedig a fajl kiterjesztes ami szerint szurni kell. Jelenitsd meg a fajlok nevet soronkent a konzolon. *Hasznalj** aszinkron I/O muveletet.

Keszits egy *modul* fajlt, ami megcsinalja a feladat nagy reszet. A modulnak exportalni kell egy fuggvenyt ami **harom** argumentumot kap: a konyvtar nevet, a fajl kiterjesztest es egy callback fuggvenyt, ebben a sorrendben. Ne modositsd a fajl kiterjesztest mielott atadod a modulodnak.

A callback fuggvenyt (err, data) konvencioval kell meghivnod. Ez biztositja azt, hogy a callback elso argumentuma null lesz ha nincs hiba es a masodik pedig az adat. Ebben a feladatban az adat a szurt fajl lista lesz egy tombben. Amennyiben hibat kapsz az `fs.readdir()` hivasakor, a callback-t a visszakapott hibaval kell meghivnod.

**Ne** irj a konzolra kozvetlenul a modul fajlodbol, csak az eredeti programodbol.

Amennyiben hibat kapsz vissza, egy informativ uzenetet irass ki a konzolra.

A modulodnak a kovetkezo negy megkotest kell kovetnie.

1. Egyetlen fuggvenyt exportalj, ami pontosan a megadott argumentumokkal dolgozik.
2. A callback-t csak egyetlen egyszer hivd meg a hibaval vagy a leirt adatokkal.
3. Ne valtoztass meg globalis valtozokat.
4. Kezelj le minden hibat ami elofordulhat, es add oket tovabb a callback-nek.

Ha koveted ezeket a pontokat, a modulod barki szamara hasznalhatova valik aki tisztaban van a leirt megkotesekkel. 

----------------------------------------------------------------------
## SEGITSEG

Keszits egy uj modult egy uj fajl letrehozasaval ami csak a konyvtar olvasasat es filterezeset vegzi el. *Egyetlen fuggveny exportalasahoz*, rendeld hozza a `module.exports`objektumot a fuggvenyedhez.

```js
module.exports = function (args) { /* ... */ }
```

Ehelyett hasznalhatsz egy elnevezett fuggvenyt is, es a fuggveny nevet adod meg exportalaskor.

Ahhoz, hogy hasznald az uj modult a programodban, hasznald a `require()` hivast hasonloan ahogy hasznaltad a `require(fs)` hivast az `fs` modul betoltesehez. Az egyetlen kulonbseg, hogy a lokalis modul betoltesehez prefixalni kell az utvonalat './'. Tehat, ha a modulod mymodule.js neven van elnevezve:

```js
var mymodule = require('./mymodule.js')
```

A '.js' opcionalis es gyakran lathatod lehagyva.

Igy a `mymodule` valtozod hozza van rendelve a `module.exports` modulod altal exportalt objektumhoz. Mivel egyetlen fuggvenyt exportalsz, `mymodule` egy fuggveny lesz, amit meghivhatsz!

Tartsd eszben, hogy celszeru hiba ellenorzeseket vegezni es megszakitani a callback fuggveny mukodeset ilyen esetekben:

```js
function bar (callback) {
  foo(function (err, data) {
    if (err)
      return callback(err) // early return

    // ... no error, continue doing cool things with `data`

    // all went well, call callback with `null` for the error argument

    callback(null, data)
  })
}
```
