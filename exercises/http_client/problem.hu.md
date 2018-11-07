Keszits egy programot ami HTTP GET muveletet hajt vegre a megadott URL cimre, amit a program elso argumentumkent kap meg. Jelenitsd meg minden egyes szoveges tartalmat a konzolon (stdout), ami a valasz "data" esemenyekor erkezik.

----------------------------------------------------------------------
## SEGITSEG

Ehhez a feladathoz a `http` modult kell hasznalnod.

Dokumentacio a `http` modulrol itt talalhato:
  {rootdir:/node_apidoc/http.html}

A `http.get()` metodus hasznalhato egyszeru GET lekeredezesekre, probald ki, hogy egyszerusitsd a megoldasodat. A `http.get()` elso parametere az URL lehet ahonnan informaciot akarsz lekerdezni; a masodik argumentum pedig egy callback.

Mas callback fuggvenyekkel ellentetben, igy nez ki a szignaturaja:

```js
function callback (response) { /* ... */ }
```

Ahol a `response` objektum egy Node **Stream** objektum. A Node Stream olyan objektum ami esemenyeket bocsathat ki. A kovetkezo harom esemeny lehet erdekes szamodra: "data", "error" es az "end". Igy tudsz figyelni egy megadott esemeny tipusra:

```js
response.on("data", function (data) { /* ... */ })
```

A "data" esemeny akkor valtodik ki, amikor a lekeredezett adat egy resze megerkezik es feldolgozhato allapotba kerul. A reszadat merete a lekerdezett adat mennyisegtol fugg.

A `response` objektum / Stream amit a `http.get()` metodus ad vissza rendelkezik egy `setEncoding()` metodussal. Ha meghivod ezt a metodust az "utf8" parameterrel, akkor a "data" esemeny String-eket ad vissza a Node-s Buffer objektum helyett.
