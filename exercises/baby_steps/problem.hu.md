Keszits egy programot ami egy vagy tobb szamot var parancssor argumentumkent es kiirja azok osszeget a konzolra.

----------------------------------------------------------------------
## SEGITSEG

A parancssor argumentumok a globalis `process` objektumon keresztul erhetoek el. A `process` objektumnak van egy `argv` tulajdonsaga, ami egy tombben tartalmazza az argumentumokat. 

Eloszor keszits egy programot ami csak kiirja az argumentumokat:

```js
console.log(process.argv)
```

Futtasd a `node program.js` paranccsal, peldaul:

```sh
$ node program.js 1 2 3
```

Az eredmeny egy tomb ami a kovetkezo elemeket tartalmazza:

```js
[ 'node', '/path/to/your/program.js', '1', '2', '3' ]
```

Gondold vegig hogyan iteralhatsz vegig csak a szam tipusu argumentumokon hogy megkapd az osszeguket. A `process.argv` elso eleme mindig a 'node', a masodik pedig az utvonal a program.js fajlodhoz, tehat a 3. elemtol kell osszeadnod a szamokat amig el nem ered a tomb veget.

Figyelj arra, hogy a `process.argv` tomb minden eleme string tipusu es *tipus kenyszeritest (coerce)* kell alkalmaznod ahhoz, hogy szamokka alakitsd oket. Ezt megteheted a tulajdonsag `+` prefixalasaval vagy a `Number()` fuggvennyel. Peldaul `+process.argv[2]` vagy `Number(process.argv[2])`.

{appname} nyujtja az argumentumokat a programod szamara amikor futtatod az `{appname} verify program.js`, tehat nem szukseges megadnod oket. Ha tesztelni akarod a programodat ellenorzes nelkul futtasd az `{appname} run program.js` parancsot. Amikor a `run` parancsot hasznalod, a teszt kornyezetben lefutnak a tesztek minden egyes feladathoz.
