const AWS = require("aws-sdk");
const fs = require("fs");

//Credenciales
const s3 = new AWS.S3({
  accessKeyId: "AKIAWKPXIJIUIYRXXTN6",
  secretAccessKey: "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",
});

//Obtener una lista de los Buckets
//   s3.listBuckets(function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(data);           // successful response
//   });

//Obtener una lista de Objetos
// var params = {
//   Bucket: "bucket-example-relikedd",
//   MaxKeys: 2,
// };
// s3.listObjectsV2(params, function (err, data) {
//   if (err) console.log(err, err.stack);
//   else console.log(data);
// });

//Descargar un objeto
// var params = {
//     Bucket: "bucket-example-relikedd",
//     Key: "earth-1756274.jpg"
//    };
//    s3.getObject(params, function(err, data) {
//      if (err) console.log(err, err.stack); // an error occurred
//      else {
//         console.log(data)
//         // fs.writeFile("Imagen_descargada_de_S3.jpg", data.Body, 'binary', (err) => {
//         //     if (err) {
//         //         console.log("Imagen Descargada")
//         //     }
//         // })
//      }
//    });

//Cargar un objeto
// fs.readFile("información.txt", (err, data) => {
//   if (err) throw err;
//   var params = {
//     Body: data,
//     Bucket: "bucket-example-relikedd",
//     Key: "información.txt",
//   };

//   s3.putObject(params, function (err, data) {
//     if (err) console.log(err, err.stack);
//     // an error occurred
//     else console.log(data); // successful response
//   });
// });
