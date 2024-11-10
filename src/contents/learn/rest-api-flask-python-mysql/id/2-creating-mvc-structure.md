<div class="space-y-3">
  <p>
    MVC adalah singkatan dari <b>Model, View, Controller</b>, tapi kali ini kita ganti <b>Views</b> jadi <b>Routes</b> biar sesuai sama istilah di Flask. MVC ini buat ngatur kode kita supaya lebih rapi dan gampang di-maintain:
  </p>
  <div class="content">
    <ul className="list-disc space-y-3 pb-2 pl-10">
      <li><code>Models</code> : tempat ngurus data atau database, misalnya MySQL.</li>
      <li><code>Routes</code> : di sini kita definisiin endpoint atau rute buat user akses data.</li>
      <li><code>Controllers</code> : penghubung antara Model dan Routes, di sini kita nulis aturan atau logika aplikasi.</li>
    </ul>
  </div>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah-langkah Membuat Struktur Folder</strong></h3>
  <p>
    Langsung aja kita bikin folder dan file yang dibutuhin dengan perintah ini di terminal:
  </p>

```bash
mkdir models controllers routes
touch config.py app.py requirements.txt
```

  <p>
    Setelah menjalankan perintah ini, struktur folder kamu bakal jadi kayak gini:
  </p>

```bash
project/
│
├── models/           # Untuk model (database)
├── controllers/      # Logic buat controller
├── routes/           # Definisi routes
│
├── config.py         # Config database dan lainnya
├── app.py            # Main file buat jalanin aplikasi
└── requirements.txt  # List dependencies (misal Flask)

```

</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Tangkapan Layar</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731231199/Screenshot_2024-11-10_040341_zdai2k.png" 
      alt="Lessons-2-01"
    />
  </p>
  <p>Pastikan struktur folder dan filenya seperti gambar diatas</p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Install Dependencies dari <code>requirements.txt</code></strong></h3>
  <p>
    Selanjutnya, kita isi <code>requirements.txt</code> dengan daftar dependency yang kita butuhkan:
  </p>

```bash
requests
mysql-connector-python
flask-sqlalchemy
PyMySQL
```

  <p>
    Setelah itu, install semua dependency dengan menjalankan perintah ini di terminal:
  </p>

```bash
pip install -r requirements.txt
```

  <p>
    Ini akan menginstall semua package yang diperlukan untuk menjalankan aplikasi kita, seperti <code>requests</code>, <code>mysql-connector-python</code>, <code>flask-sqlalchemy</code>, dan <code>PyMySQL</code>.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Tangkapan Layar</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731231201/Screenshot_2024-11-10_040701_wxx4n7.png" 
      alt="Lessons-2-02"
    />
  </p>
  <p>pastikan semua dependensi yang dibutuhkan terinstall, lalu cek menggunakan <code>pip list</code>.</p>
</div>