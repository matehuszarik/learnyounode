Keszits egy HTTP **szervert** ami JSON adatot ad vissza, amikor egy GET keres erkezik a '/api/parsetime' vegpontra. A keres tartalmazni fog egy query string-t az 'iso' kulccsal aminek az erteke egy ISO ido formatum lesz.

Peldaul:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

A JSON valaszban csak az ora, perc es masodperc tulajdonsagok legyenek jelen. Peldaul:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Adj hozza egy ujabb '/api/unixtime' vegpontot, ami ugyanezt a query string-t varja, de UNIX ido formatumot adja vissza (eltelt ms szama 1970 januar 1. 00:00:00 UTC ota) a 'unixtime' tulajdonsag ertekekent. Peldaul:

```json
{ "unixtime": 1376136615474 }
```

A szervered portja a program altal megkapott elso argumentum.

----------------------------------------------------------------------
## HINTS
## SEGITSEG

A `request` objektum rendelkezik egy `url` tulajdonsaggal, ami alapjan tovabb kell iranyitani *"route"* a kerest a vegpontok fele.

Az URL es a query string parse-olhato a Node 'url' moduljaval. Az `url.parse(request.url, true)` metodus parse-olja a request.url tartalmat es visszaad egy objektumot a szuksegses tulajdonsagokkal.

A parancssoron a kovetkezo parancsot hasznalhatod peldaul:

```sh
$ node -pe "require('url').parse('/test?q=1', true)"
```

Dokumentacio a `url` modulrol itt talalhato:
  {rootdir:/node_apidoc/url.html}

A valasznak JSON string formatumban kell lennie. Nezd meg a `JSON.stringify()` metodust tobb informacioert.

A Content-Type atallitasara szinten szukseged lesz:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

A JavaScript `Date` objektum kepes arra, hogy ISO formatumban irja ki a datumot, pl.: `new Date().toISOString()`. Ezt a formatumot fel is tudja olvasni, ha megadod a `Date` konstruktornak. `Date.getTime()`szinten segitsegedre lehet a feladat soran.
