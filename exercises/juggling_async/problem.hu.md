A kovetkezo problema megegyezik az elozovel (HTTP COLLECT) ahol a `http.get()`-t kellett hasznalnod. Ebben az esetben viszont **harom** URL-t kapsz parancssor argumentumkent.

Ossze kell gyujtened az osszes adatot amit az URL-k visszaadnak es azt megjeleniteni a konzolon (stdout). Nem kell kiirni a hosszat, csak az adatot String formatumban; egy sor / URL. Amire figyelned kell, hogy ugyanabban a sorrendben **kell** megjelenitened az URL lekerdezesek eredmenyet, ahogy azokat megkapta a program.

----------------------------------------------------------------------
## SEGITSEG

Ne vard, hogy a szerverek egymas utan fognak valaszolni! Nem fogjak a teljes valaszt sorrendben visszaadni ahogy remeled, tehat nem teheted meg azt, hogy csak sorban kiirod az output-ra oket.

Sorba kell allitanod a valaszokat es meg kell figyelned hany URL adta vissza a teljes tartalmat. Amint megvan mindegyikre a valasz, csak akkor jelenitheted meg oket a konzolon.

A callback-k szamon tartasa az egyik alapveto modszer aszinkron muveletek kezelesere Node-ban. Ahelyett hogy Te oldanad ezt meg, talalhatsz egyszeru megoldasokat third-party package-kben mint pl [async](https://npmjs.com/async) vagy [after](https://npmjs.com/after). Azonban ehhez a feladathoz, probald meg eloszor kulso konyvtar segitsege nelkul megoldani ezt.
