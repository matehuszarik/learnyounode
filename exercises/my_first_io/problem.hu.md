Keszits egy programot ami egyetlen **szinkron** fajl rendszer muveletet hasznal, hogy felolvassa egy fajl tartalmat es kiirja konzolra a fajlban talalhato uj sorok (\n) szamat. A feladat hasonlo a `cat file | wc -l` parancs futtatasahoz.

A program elso argumentumkent (pl.: process.argv[2]) kapja meg a fajl eleresi utvonalat.

----------------------------------------------------------------------
## SEGITSEG

Egy fajl rendszer muvelet vegrehajtasahoz az `fs` modulra van szukseg ami a Node resze. Ahhoz, hogy hasznalni tudd ezt a "globalis" modult, hasznald a kovetkezo sort:

```js
var fs = require('fs')
```

Igy az egesz `fs` modul elerheto az `fs` neven elnevezett valtozodon keresztul.

Minden szinkron (vagy blokkolo) muvelet 'Sync' nevre vegzodik az `fs` modulon belul. Fajl olvasashoz az `fs.readFileSync('/path/to/file')` metodust kell hasznalnod. A metodus visszater egy `Buffer`-l ami tartalmazza a fajl tartalmat.

Dokumentacio az `fs` modulrol itt talalhato:
  {rootdir:/node_apidoc/fs.html}

A `Buffer` Node objektumok reprezentaljak a fajl tartalmat tombok formajaban, ascii, binaris vagy egyeb formatumban. A `Buffer` objektumok szoveges formatumra konvertalhatoak a `toString()` metodus meghivasaval, pl.: `var str = buf.toString()`.

Dokumentacio a `Buffer` objektumrol itt talalhato:
  {rootdir:/node_apidoc/buffer.html}

Egy egyszeru megoldas az uj sorok megszamlalasara egy szovegen belul, ha hasznalod a JavaScript `String` `.split()` metodusat, ami egy tombot keszit a szovegdarabokrol a megadott `\n` elvalaszto szimbolummal. Figyelj arra, hogy a tesz fajloknak nincs uj sor a vegen, ezert a metodus hasznalataval egy olyan tombot kaphatsz aminek eggyel tobb eleme van, mint az uj sorok szama.