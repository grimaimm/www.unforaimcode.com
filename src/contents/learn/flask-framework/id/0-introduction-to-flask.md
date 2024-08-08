<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Pengantar Flask sebagai Microframework untuk Python</strong></h3>
  <p>
    Flask adalah salah satu mikroframework yang paling populer untuk bahasa pemrograman Python. Disebut "mikroframework" karena Flask punya inti yang sederhana dan cuma fokus pada kebutuhan dasar buat bikin aplikasi web. Dengan Flask, pengembang bisa bebas memilih dan menambah komponen lain sesuai kebutuhan proyek mereka.
  </p>
  <p>
    Flask adalah pilihan yang bagus buat pengembang yang mau punya kontrol penuh atas struktur dan komponen yang dipakai di proyek web mereka, tanpa kerumitan yang sering ada di framework yang lebih besar dan kaku.
  </p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-neutral-300"><strong>Kelebihan dan Alasan Menggunakan Flask</strong></h3>
  <div class="content">
    <ul className="list-disc space-y-3 pb-2 pl-10">
      <li><code>Sederhana dan Mudah Dipelajari</code> : Flask dirancang agar mudah dipahami, dengan kurva pembelajaran yang lebih cepat dibandingkan beberapa framework web lainnya.</li>
      <li><code>Fleksibel</code> : Flask tidak memaksakan struktur atau pola proyek tertentu, sehingga pengembang bisa memilih dan menggunakan komponen sesuai kebutuhan aplikasi mereka.</li>
      <li><code>Ringan</code> : Dengan inti yang minimalis, Flask cocok untuk aplikasi skala kecil hingga menengah. Meskipun ringan, Flask tetap bisa menangani aplikasi web dengan efisien.</li>
      <li><code>Prototyping Cepat</code> : Karena kesederhanaan dan kemudahannya, Flask sangat bagus untuk membuat prototipe aplikasi dengan cepat.</li>
      <li><code>Ekosistem Ekstensi yang Luas</code> : Meskipun intinya ringan, Flask memiliki ekosistem yang luas dengan berbagai ekstensi yang bisa digunakan untuk menambah fitur seperti autentikasi pengguna, integrasi database, dan lainnya.</li>
    </ul>
  </div>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-neutral-300"><strong>Gambaran Umum Cara Kerja Flask</strong></h3>
  <div class="content">
    <ul className="list-disc space-y-3 pb-2 pl-10">
      <li><code>Routing</code> : Flask menggunakan dekorator <code>@app.route()</code> untuk menentukan URL mana yang memicu fungsi tertentu (fungsi tampilan). Ini memudahkan pengembang untuk mendefinisikan bagaimana aplikasi merespons permintaan HTTP yang masuk.</li>
      <li><code>Templating</code> : Flask menggunakan Jinja2 sebagai mesin template defaultnya, memungkinkan pengembang untuk menghasilkan konten HTML dinamis dengan menyisipkan variabel dan logika kontrol ke dalam template.</li>
      <li><code>Web Server Gateway Interface (WSGI)</code> : Flask beroperasi berdasarkan WSGI, sebuah antarmuka standar untuk menghubungkan aplikasi web Python ke server web seperti Apache atau Nginx.</li>
      <li><code>Siklus Permintaan-Respon</code> : Ketika aplikasi Flask menerima permintaan HTTP, Flask mencocokkan URL yang diminta dengan fungsi yang sesuai dan menghasilkan respon yang dikirim kembali ke klien.</li>
    </ul>
  </div>
</div>
