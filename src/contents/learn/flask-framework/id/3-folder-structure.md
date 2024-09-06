<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Memahami Struktur Folder dalam Aplikasi Flask</strong></h3>
  <p>
    Saat membangun aplikasi web menggunakan Flask, memiliki struktur folder yang baik sangat penting untuk menjaga kode tetap rapi, mudah dikelola, dan skalabel. Dalam panduan ini, saya akan membagikan struktur folder yang saya gunakan dalam pengembangan aplikasi Flask, yang dirancang untuk mengorganisir kode dengan efisien dan profesional.
  </p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Struktur Folder Proyek Flask</strong></h3>
  <p>
    Berikut adalah struktur folder yang saya gunakan dalam proyek Flask saya:
  </p>

```bash
project/
│
├── app/
│   ├── __init__.py               # Inisialisasi aplikasi Flask dan register blueprint
│   ├── routes/                   # Folder untuk semua routes
│   │   ├── __init__.py           # Inisialisasi routes
│   │   ├── home/
│   │   │   ├── __init__.py       # Inisialisasi home module
│   │   │   └── home_routes.py    # Route untuk halaman home
│   │   └── error_handlers.py     # Penanganan error aplikasi
│   │
│   ├── static/                   # File statis (CSS, JS, gambar)
│   │   ├── css/
│   │   ├── js/
│   │   └── img/
│   │
│   ├── templates/                # File template HTML
│   │   ├── _includes/            # Potongan HTML yang digunakan berulang
│   │   ├── _layout/
│   │   │   └── base.html         # Template dasar
│   │   ├── home-page/
│   │   │   └── home.html         # Template untuk halaman home
│   │   ├── index.html            # Halaman utama
│   │   └── error.html            # Halaman error
│   │
│   └── utils.py                  # Utility functions yang digunakan di seluruh aplikasi
│
├── instance/
│   └── config.py                 # Konfigurasi aplikasi yang bersifat rahasia
│
├── .venv/                        # Virtual environment (opsional tapi disarankan)
│
├── .env                          # Variabel lingkungan untuk konfigurasi sensitif
├── .gitignore                    # File untuk mengabaikan file tertentu saat commit
├── requirements.txt              # Daftar dependencies aplikasi
└── run.py                        # File untuk menjalankan aplikasi
```

</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah-langkah untuk Membuat Struktur Folder Ini</strong></h3>
  <p>Jalankan perintah berikut di terminal untuk membuat struktur folder dan file:</p>

```bash
# Membuat Struktur Folder:
mkdir -p app/routes/home
mkdir -p app/static/css app/static/js app/static/img
mkdir -p app/templates/_includes app/templates/_layout app/templates/home-page
mkdir instance

# Membuat File:
touch app/__init__.py app/routes/__init__.py app/routes/home/__init__.py app/routes/home/home_routes.py app/routes/error_handlers.py
touch app/static/css/style.css app/static/js/script.js
touch app/templates/_layout/base.html app/templates/home-page/home.html app/templates/index.html app/templates/error.html
touch app/utils.py instance/config.py .gitignore requirements.txt run.py .env
```

</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Screenshot</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725612244/Lessons-3_ugbm5c.png" 
      alt="Lessons-3"
    />
  </p>
</div>
