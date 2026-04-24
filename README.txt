**Ride Hailing**

users
POST /users/register/
-	Deskripsi: Endpoint ini untuk user melakukan registrasi akun
-	URL: http://localhost:5000/api/users/register
-	Request: { username, email, password, fullName }
POST /users/login/
-	Deskripsi: Endpoint ini untuk user melakukan login akun, user membutuhkan token untuk melakukan verifikasi
-	URL: http://localhost:5000/api/users/login
-	Request: { email, password }
GET /users/profile/
-	Deskripsi: Endpoint ini untuk user melihat profil secara keseluruhan
-	URL: http://localhost:5000/api/users/login
-	Syarat: Authorization lalu isi token user
PUT /users/edit/
-	Deskripsi: Endpoint ini untuk edit username atau full name
-	URL: http://localhost:5000/api/users/edit
-	Request: { username, fullName }
-	Syarat: Authorization isi token user
PUT /users/change-password/
-	Deskripsi: Endpoint ini untuk mengganti password dari user
-	URL: http://localhost:5000/api.users/change-password
-	Request: { password }
-	Syarat: Authorization lalu token user

transport
GET /transport/types
-	Deskripsi: Endpoint ini untuk melihat tipe kendaraan
-	URL: http://localhost:5000/api/transport/types
-	Syarat: Authorization lalu token user
POST/transport/orders/estimate
-	Deskripsi: Endpoint ini untuk melihat estimasi sebelum request
-	URL: http://localhost:5000/api/transport/orders/estimate
-	Request: {origin, destination }
-	Syarat: Authorization isi token user
POST/transport/orders/request
-	Deskripsi: Endpoint ini untuk membuat order request yang akan diterima oleh driver
-	URL: http://localhost:5000/api/transport/orders/estimate
-	Request: {type, origin, destination, distance, price }
-	Syarat: Authorization isi token user
GET /transport/orders/:id {id user}
-	Deskripsi: Endpoint ini untuk melihat detail order user
-	URL: http://localhost:5000/api/transport/orders/id
-	Syarat: Authorization isi token user
PUT /transport/:id/complete
-	Deskripsi: Endpoint ini untuk menyelesaikan order
-	URL: http://localhost:5000/api/transport/:id/complete
-	Syarat: Authorization isi token user
DELETE  /transport/orders/:id/cancel
-	Deskripsi : Endpoint ini untuk melakukan cancel orderan
-	URL: http://localhost:5000/api/transport/:id/cancel
-	Syarat: Authorization isi token user
GET /transport/history
-	Deskripsi : Endpoint ini untuk melihat history user 
-	URL: http://localhost:5000/api/transport/history
-	Syarat: Authorization isi token user
GET /transport/admin/all-history
-	Deskripsi: Endpoint ini untuk admin melihat semua history dari berbagai user
-	URL:http://localhost:5000/api/transport/admin/all-history
-	Syarat: Authorization lalu isi token admin
POST /payment/topup
-	Deskripsi: Endpoint ini untuk melakukan top up untuk menambah balance
-	URL: http://localhost:5000/api/transport/payment/admin/all_history
-	Request: { amount }
-	Syarat: Authorization isi token user
GET /payment/transactions
-	Deskripsi: Endpoint ini untuk melihat transaksi pembayaran
-	URL: http://localhost:5000/api/payment/transactions
-	Syarat: Authorization isi token user

