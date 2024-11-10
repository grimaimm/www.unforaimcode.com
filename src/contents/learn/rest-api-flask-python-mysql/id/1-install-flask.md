<div class="space-y-3">
  <p>
    Pertama-tama, kita mesti install Flask dulu buat bikin API. Flask ini kayak framework kecil buat Python yang sering dipakai buat bikin aplikasi web, termasuk REST API yang bakal kita bikin nanti.
  </p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah-langkah Install Flask</strong></h3>
  <ol className="list-decimal space-y-3 pb-2 pl-10">
  <li>
    <p>Buat Virtual Environment:</p>
    <p>Sebaiknya bikin virtual environment (env) biar semua paketnya gak numpuk sama project lain. Ini penting biar dependencies project rapi.</p>
    
```bash
python -m venv .venv
```

  <p><strong>Terus, aktifin env-nya:</strong></p>
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
    <p>Kalau virtual env-nya udah aktif, sekarang tinggal install Flask:</p>
    
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
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731231163/Screenshot_2024-11-10_031810_jwdu5e.png" 
      alt="Lessons-1"
    />
  </p>
  <p>Kalau gak ada pesan error, berarti Flask udah berhasil terinstal.</p>
</div>