<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Persyaratan untuk Menginstal Flask (Python dan pip)</strong></h3>
  <p>
    Sebelum menginstal Flask, pastikan Python dan pip (pengelola paket Python) sudah terpasang di komputer kamu. Python adalah bahasa pemrograman utama yang digunakan oleh Flask, dan pip digunakan untuk mengelola dan menginstal paket-paket Python.
  </p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah-langkah Menginstal Flask</strong></h3>
  <ol className="list-decimal space-y-3 pb-2 pl-10">
  <li>
    <p>Buat Virtual Environment (Opsional tapi Disarankan):</p>
    <p>Membuat virtual environment membantu menjaga proyek kamu tetap bersih dan terisolasi dari instalasi Python lainnya.</p>
    
```bash
python -m venv .venv
```

  <p><strong>Aktifkan virtual environment:</strong></p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
  <li>
    <p>Di Windows:</p>

```bash
.venv\Scripts\activate
```

  </li>
  <li>
    <p>Di MacOS/Linux:</p>

```bash
source .venv/bin/activate
```

  </li>
  </ol>
  </li>

  <li>
    <p>Install Flask:</p>
    <p>Setelah mengaktifkan virtual environment, instal Flask dengan perintah:</p>
    
```bash
pip install flask
```
  </li>
  </ol>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Tangkapan Layar</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725611982/Lessons-1_iphcnz.png" 
      alt="Lessons-1"
    />
  </p>
  <p>Jika tidak ada pesan error, berarti Flask sudah berhasil diinstal.</p>
</div>
