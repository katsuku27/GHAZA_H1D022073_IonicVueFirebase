# tugas 9 dan 10 

Nama    : Ghaza Indra Pratama
NIM     : H1D022073
Shift C -> Shift D

# tugas 9

## Halaman Login
![alt text](login.png)

halaman login memiliki tombol untuk signin menggunakan auth google dengan firebase

### Pop up Login
![alt text](popupLogin.png)

Pop up login menampilkan akun login yang akan digunakan

### Gagal Login 
![alt text](gagalLogin.png)

jika memencet tombol close maka auth akan gagal dan muncul pop up gagal

### berhasil login
Jika berhasil Login maka akan berpindah halaman home

## Halaman Home
![alt text](home.png)

pada homepage terdapat 2 tab pada bawah yaitu menuju home dan menuju halaman profile

## Halaman Profile
![alt text](profile.png)

Halaman profil berisi 
- nama menggunakan ion-input
- email menggunakan ion-input
- profil menggunkan ion-avatar


## Alur Autentikasi dan Pengambilan Data Profil
### 1. Inisialisasi Firebase dan Google Auth
Aplikasi menginisialisasi Firebase dengan menggunakan konfigurasi dari file firebase.ts. Selain itu, Google Auth diatur menggunakan client ID yang telah terdaftar sebelumnya. Pinia store, dengan file auth.ts, disiapkan sebagai pengelola state untuk autentikasi user.

### 2. Proses Login
Ketika user menekan tombol "Sign In with Google", aplikasi akan memanggil method loginWithGoogle() dari Pinia store. Pada proses ini, Google Auth akan menampilkan popup untuk pemilihan akun. Setelah user memilih akun, Google memberikan token autentikasi yang kemudian digunakan untuk membuat credential pada Firebase. Data user yang berhasil login kemudian disimpan dalam state Pinia untuk kemudahan akses di seluruh aplikasi.

### 3. Pengambilan Data Profil
Setelah proses autentikasi berhasil, Firebase akan mengembalikan objek User. Data profil seperti nama, email, dan foto profil diambil dari objek tersebut. Data ini disimpan dalam Pinia store, sehingga dapat diakses oleh berbagai komponen dalam aplikasi. Pada komponen Profile, data ini diakses melalui computed property.

### 4. Proteksi Route
Untuk melindungi halaman tertentu, router guard (beforeEach) digunakan untuk memeriksa status autentikasi user. Halaman yang memerlukan autentikasi seperti home dan profile tidak dapat diakses jika user belum login, sehingga user akan diarahkan ke halaman login. Sebaliknya, jika user sudah login, halaman login tidak dapat diakses lagi.

### 5. Logout
Ketika user menekan tombol logout, aplikasi akan menjalankan method logout(). Proses ini mencakup pemanggilan fungsi signOut() pada Firebase dan Google Auth untuk mengakhiri sesi autentikasi. Setelah logout berhasil, state user di Pinia akan dibersihkan, dan user akan diarahkan kembali ke halaman login.
