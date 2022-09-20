// untuk bisa baca file butuh menggunakan fs
// Ingat bila pada browser
// yang dibutuhkan adalah FileReader API
// (bedakan browser dengan nodejs !)
const fs = require('fs');

/* -----
fs readFile menerima 3 parameter 
parameter ke-1 adalah nama dan posisi filenya
parameter ke-2 adalah options atau (string encoding) yang digunakan
parameter ke-3 adalah fnCallback
  fnCallbackyang memiliki 2 parameter:
    - parameter ke-1 adalah err
    - parameter ke-2 adalah data yang dibaca
----- */

// baca file1.json
fs.readFile('./dummies/file1.json', 'utf8', (err, data1) => {
  // Bila terjadi error
  if (err) {
    return console.log('Terjadi Error data 1' + err);
  }

  // data1 nya kita tahan dulu
  // nanti kita gunakan setelah panggil file3.json
  // (karena scopenya ini lebih tinggi dari yang file3, jadi bisa digunakan)

  // baca file2.json
  fs.readFile('./dummies/file2.json', 'utf8', (err, data2) => {
    // bila terjadi error
    if (err) {
      return console.log('Terjadi Error data 2' + err);
    }

    // data2 nya kita tahan lagi
    // nanti kita gunakan setelah panggil file3.json

    fs.readFile('./dummies/file3.json', (err, data3) => {
      if (err) {
        return console.log('Terjadi Error data 2' + err);
      }

      // setelah semua sudah selesai dibaca, baru dhe kita buat outputnya
      // ingat data1, data2, data3 merupakan suatu output dalam bentuk STRING
      // padahal kita butuh array of objectnya
      let jsonFile1 = JSON.parse(data1);
      let jsonFile2 = JSON.parse(data2);
      let jsonFile3 = JSON.parse(data3);

      console.log(jsonFile1);
      console.log(jsonFile2);
      console.log(jsonFile3);

      // Misanya sekarang kita ingin mengambil namanya saja
      let namaDariJson1 = jsonFile1[0].name;
      let namaDariJson2 = jsonFile2[0].name;
      let namaDariJson3 = jsonFile3[0].name;

      // Kita gabungkan semuanya
      console.log(
        'Halo nama kami adalah ' +
          namaDariJson1 +
          ' ' +
          namaDariJson2 +
          ' ' +
          namaDariJson3
      );
    });
  });
});
