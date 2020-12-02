# Simple App Debugging

Terdapat 6 buah bug yang saya temukan yang menyebabkan hasil tidak seperti yang diharapkan

### 1. Dalam `App.js` kekurangan clientId, clientSecret, redirectUri
Pada github, saya membuat aplikasi baru untuk mendapatkan clientId dan clientSecret, juga untuk mengatur redirectUri-nya ke `http://localhost:3000/`.

### 2. Pada baris ke 17 dalam `utils.js`

Dari:

    let query = `${str}${key}==${params[key]}`;

Analisis error: kelebihan `=`

Perbaikan menjadi:

    let query = `${str}${key}=${params[key]}`;

### 3. Pada fungsi `onSuccess` dalam `GithubLogin.js`

Dari:

    this.onGetAccessToken(data);

Analisis error: variabel `data` bertipe objek, sedangkan argumen yang diharapkan oleh `this.onGetAccessToken()` adalah variabel bertipe string.

Perbaikan menjadi:

    this.onGetAccessToken(data.code);

Argumen yang dimasukkan direferensikan pada isi objek `data` dengan nama `code`.

### 4. Permasalahan `CORS` dari github yang tidak menerima request dari `http://localhost:3000`
solusi: menggunakan `https://cors-anywhere.herokuapp.com/`

### 5. Pada fungsi `onGetAccessToken` dalam `GithubLogin.js`

Dari:

    .then((access_token) => {
        this.onGetProfile(access_token);

Analisis error: variabel `access_token` dalam `then((access_token) =>` menetapkan keseluruhan respons berupa objek dari axios post request ke variabel `access_token`. Solusinya adalah mengubah variabel tersebut ke `response` atau sesuai keinginan lalu mereferensikan key `response.data.access_token` ke `this.onGetProfile()`.

menjadi

    .then((response) => {
        this.onGetProfile(response.data.access_token);

### 6. Pada fungsi `onGetProfile` dalam `GithubLogin.js`

Dari:

    .then((response) => {
      this.props.onSuccess(response.data);

Analisis error: variabel `response.data` bertipe objek sedangakan argumen yang diharapkan oeh `this.props.onSuccess` adalah string. Solusinya referensikan pada referensi key `nama` sesuai dengan kriteria hasil yang diharapkan.

Menjadi:

    .then((response) => {
      this.props.onSuccess(response.data.name);

Agar nama keluar diperlukan waktu selama beberapa saat untuk menunggu requests selesai.