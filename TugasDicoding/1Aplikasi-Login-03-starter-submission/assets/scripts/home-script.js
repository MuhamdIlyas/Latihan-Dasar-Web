/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */


//Comment : Membuat Variabel untuk log-out
const buttonLogoutElement = document.querySelector('#buttonLogout');

//Coment : Menambahkan aksi pada button log-out
buttonLogoutElement.addEventListener('click', function() {
    goToLogin();
   
});
