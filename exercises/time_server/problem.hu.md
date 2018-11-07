Keszits egy **TCP ido szervert**!

A szervernek a program altal megkapott porton (elso argumentum) kell figyelnie a bejovo TCP kapcsolatokra. Minden egyes bejovo keresre vissza kell adnod a jelenlegi datumot es az idot 24 oras formatumban:

```
"YYYY-MM-DD hh:mm"
```

amit egy **uj sor** karakter kovet. A honap, nap, ora es perc ertekeket ket karakterre kell kiegesziteni. Peldaul:

```
"2013-07-06 17:42"
```

A string elkuldese utan, zard le a kapcsolatot.

----------------------------------------------------------------------
## SEGITSEG

Ehhez a feladathoz egy nyers TCP szervert kell letrehoznod. HTTP protokoll meg nem szukseges, ezert hasznald a `net` Node modult ami tartalmazza az osszes alapveto halozati funkcionalitast.

A `net` modul rendelkezik egy `net.createServer()` metodussal ami egy fuggvenyt var. Ez a fuggveny figyel a bejovo kapcsolatokra, tobbszor is meghivodhat. Minden szerverhez bejovo kapcsolat egy ujabb fuggveny hivast valt ki. A fuggveny szignaturaja a kovetkezokepp nez ki:

```js
function listener(socket) { /* ... */ }
```

`net.createServer()` visszaad egy `szerver` peldanyt is. Ha egy megadott porton akarsz hallgatozni hasznald a `server.listen(portNumber)` metodust.

Egy tipikus Node TCP szerver a kovetkezokepp nez ki:

```js
var net = require('net')
var server = net.createServer(function (socket) {
  // socket handling logic
})
server.listen(8000)
```

Ne feledd megadni portnak a program elso argumentumat.

A `socket` objektum rengeteg meta adatot tartalmaz a kapcsolatra vonatkozoan viszont az objektum egy Node duplex Stream is, tehat olvasni lehet belole es irni ra. Ehhez a feladathoz csak irasra lesz szukseg, majd a socket bezarasara.

Hasznald a `socket.write(data)` fuggvenyt az adat irashoz es a `socket.end()` hivast hogy lezard a socket-t. Alternativakent egyszerusitheted ezt az `.end()` metodussal: `socket.end(data)`.

Dokumentacio a `net` modulrol itt talalhato:

  {rootdir:/node_apidoc/net.html}

A datum letrehozasahoz egy egyedi formatumra lesz szukseg a `new Date()` objektumbol. A feladat soran hasznos metodusok:

```js
date.getFullYear()
date.getMonth()     // 0-tol indul
date.getDate()      // visszaadja a honap napjat
date.getHours()
date.getMinutes()
```

Ha esetleg kiserletezni szeretnel, hasznald az `strftime` package-t az npm-n. A `strftime(fmt, date)` fuggveny kaphat egy formatumot, tobbet itt olvashatsz rola: https://github.com/samsonjs/strftime
