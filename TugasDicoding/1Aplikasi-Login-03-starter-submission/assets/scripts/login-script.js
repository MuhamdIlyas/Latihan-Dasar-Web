/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

//Coment : Membuat Variabel pada setiap elemen view
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

//Coment : Membuat Variabel untuk email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

//Coment : Menambahkan Aksi pada button login
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  //Coment : Mendapatkan Nilai dari inputan masing-masing (email dan pasword) ketika diklik 
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  //Coment : Memastikan nilai dari email dan password sudah sesuai dan tersimapn
  if (email == expectedEmail && password == expectedPassword) {
    
    //Coment : Jika telah sesuai maka program akan masuk ke halaman home
    goToHome();
  } else {

    //Coment : Jika tidak sesuai maka akan tampil bahwa input tersebut salah
    showPopUp();
  }
});
