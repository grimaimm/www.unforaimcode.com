<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Membuat File Python Pertama untuk Aplikasi Flask</strong></h3>
  <ol className="list-decimal space-y-3 pb-2 pl-10">
  <li>
    <p>Buat direktori baru untuk proyek Flask kamu.</p>
    
```bash
mkdir my_flask_app
cd my_flask_app
```
  </li>

  <li>
    <p>Buat file Python baru dengan nama <code>app.py</code> .</p>

```bash
touch app.py
```

  </li>
  </ol>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Penjelasan Aplikasi Sederhana "Hello, World!"</strong></h3>
  <p>Buka <code>app.py</code> di text editor pilihan kamu dan tambahkan kode berikut:</p>

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
```

  <p>Penjelasan Kode:</p>
  <ul className="list-disc space-y-3 pb-2 pl-10">
    <li><code>Import Flask</code> : Mengimpor kelas Flask dari modul flask.</li>
    <li><code>Inisialisasi Aplikasi</code> : Membuat instance dari kelas Flask</li>
    <li><code>Route</code> : Mendefinisikan route utama <code>('/')</code> dan menghubungkannya ke fungsi <code>hello_world</code> .</li>
    <li><code>Jalankan Server</code> : Menjalankan aplikasi Flask dengan mode debug diaktifkan</li> 
  </ul>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Menjalankan Aplikasi dan Mengaksesnya melalui Browser</strong></h3>
  <ol className="list-decimal space-y-3 pb-2 pl-10">
  <li>
    <p>Jalankan aplikasi Flask dengan mengetikkan perintah berikut di terminal:</p>
    
```bash
python app.py
```
  </li>

  <li>
    <p>Buka browser web dan navigasikan ke <code>http://127.0.0.1:5000</code>. Kamu seharusnya melihat pesan <code>"Hello, World!"</code> ditampilkan di layar.</p>
  </li>
  </ol>
</div>
