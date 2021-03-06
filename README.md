# BackEnd-Semana_4-Code_Challenge
## Launch X | Semana 4 | BackEnd | 5 Code Challenge

## Parte 1: Dependencias Usadas.

Comenzamos el proyecto iniciando el administrador de dependencias `npm init`. Nos crea el archivo [`package.json`](package.json).

| Dependencia | Comando | Función |
|---|---|---|
|`Jest` | `npm install --save-dev jest` | `Esta dependencia nos permite realizar pruebas de unidad` |
| `EXpress` | `npm install express --save` | `Express nos permite crear un servidor de Node` |
| `ESLint` | `npm install eslint --save-dev`  &&  `npm init @eslint/config` | `Este linter nos da herramientas para cuidar la legibilidad de nuestro código` |

## Parte 2: Diseño

```mermaid
graph TD;
    Reader-->VPartnerService;
    VPartnerService-->VPartnerController;
    VPartnerController-->Server
```
1. La clase [`Reader`](\lib\utils\Reader.js) nos permite leer un archivo [json](visualpartners.json).
<img src="./pictures/code.png">

2. La clase [`VPartnerService`](\lib\services\VPartnerServices.js) nos da los diferentes métodos para cumplir la actividad.
    * El método `getAllVPartners` nos muestra todos los datos de los alumnos.
    <img src="./pictures/code1.png">
    * El método `getEmailPartnersCert` nos entrega los correos de los alumnos siempre y cuando estos tengan certificado.
    <img src="./pictures/code2.png">
    * El método `getNamePartnersCredits` nos entrega los nombres de los alumnos con creditos mayores a 500 puntos.
    <img src="./pictures/code3.png">

3. La clase [`VPartnerController`](\lib\controllers\VPartnerController.js) se llaman las funcionalidades de `VPartnerService` para implementarla en el server.
<img src="./pictures/code4.png">

## Parte 3: API como consultarla

Para ello tenemos el archivo [`server.js`](\lib\server.js)

| EndPoint | Response |
|---|---|
| `/v1/students` | `[{"id":"6264d5d89f1df827eb84bb23","name":"Warren","email":"Todd@visualpartnership.xyz","credits":508,"enrollments":["Visual Thinking Intermedio","Visual Thinking Avanzado"],"previousCourses":1,"haveCertification":true}]` |
| `/v1/students/emails` | `{"haveCertification":true,"emails":["Todd@visualpartnership.xyz","Sexton@visualpartnership.xyz","Sharlene@visualpartnership.xyz"]}` |
| `/v1/students/credits` | `{"credits":"500+","names":["Warren","Lucinda","Phillips","Taylor","Mindy","Kara","Cora","Roxanne","Bennett","Bessie","Obrien","Lynda","Carey","Gilda","Elba","Wall","Cecile","Reyna","Richards","Lindsey","Margret","Laverne","Ayers","Tillman","Mosley","Chase","Ware"]}` |

    


1. Se agrega un EndPoint para mostrar todos los estudiantes. Se llama al método `getAllVPartners()` de la clase `VPartnerController` y el resultado se muestrea en la ruta `/v1/students`.

    ```javascript
    app.get("/v1/students",(request,response)=>{
    const Students = VPartnerController.getAllVPartners();
    response.json(Students);
    });
    ```

2. Se agrego otro EndPoint tipo GET para obtener el email de los alumnos que tienen certificado. Llamamos al método `getEmailPartnersCert` y el resultado se expone en `/v1/students/emails` de la clase `VPartnerController`.
    ```javascript
    app.get("/v1/students/emails",(request,response)=>{
    const emails = VPartnerController.getEmailPartnersCert("true");
    response.json({"haveCertification": true,"emails":emails});
    });
    ```
3. El último EndPoint GET recibe el nombre de los alumnos que tienen creditos arriba de 500 puntos. Este método es `getNameByCredits(500)` en la clase `VPartnerController`.
    ```javascript
    app.get("/v1/students/credits",(request,response)=>{
    const names = VPartnerController.getNameByCredits(500);
    response.json({"credits": "500+","names":names});
    });
    ```