<div class="space-y-3">
  <p>
   Sekarang kita bakal lanjutin ke langkah berikutnya, yaitu mendaftarkan semua route yang udah kita buat di <code>app.py</code> . Ini penting biar aplikasi kita bisa mengakses endpoint yang udah kita buat di <code>UserRoute</code> dan <code>LevelRoute</code> .
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langka-langkah:</strong></h3>
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li className="font-bold">Buka <code>app.py</code></li>
    <p>File  <code>app.py</code> ini adalah tempat kita nyambungin aplikasi Flask dan konfigurasi lainnya. Sekarang kita bakal mendaftarkan semua route yang udah dibuat.</p>
    <li className="font-bold">Import Blueprint dari Routes</li>
    <p>Di <code>app.py</code>, kita perlu import <code>UserRoute</code> dan <code>LevelRoute</code> uang udah kita buat sebelumnya di folder <b>routes</b>.</p>
    <li className="font-bold">Register Blueprints</li>
    <p>Kita pakai <code>app.register_blueprint()</code> buat mendaftarkan blueprint yang udah di-import tadi. Dengan begitu, semua route di <code>UserRoute</code> dan <code>LevelRoute</code> bakal aktif.</p>
  </ul>

  <p><b>File: <code>app.py</code></b></p>

```py
from config import app, db
from routes.UserRoute import UserRoute
from routes.LevelRoute import LevelRoute

# Test database connection
def test_connection():
    try:
        with app.app_context():
            db.engine.connect()
        print("Database connection successful!")
    except Exception as e:
        print("Database connection failed:", e)

# Register routes
app.register_blueprint(UserRoute)
app.register_blueprint(LevelRoute)
        
if __name__ == "__main__":
    test_connection()
    with app.app_context():
        db.create_all()
    app.run(port=5006, debug=True)
```

  <p><b>Penjelasan Kode::</b></p>
  <div class="content">
    <ul className="list-disc space-y-3 pb-2 pl-10">
      <li>Import Blueprint: Kita import <code>UserRoute</code> dan <code>LevelRoute</code> dari folder <b>routes</b>, supaya bisa digunakan di aplikasi utama.</li>
      <li>Register Blueprints: <code>app.register_blueprint(UserRoute)</code> dan <code>app.register_blueprint(LevelRoute)</code> nambahin route dari blueprint ke aplikasi utama Flask.</li>
      <li>Test Database Connection: <code>test_connection()</code> ngecek apakah bisa terkoneksi dengan baik.</li>
      <li>Run the App: <code>app.run(port=5006, debug=True)</code> bakal jalanin aplikasi Flask di port <code>5006</code>.</li>
    </ul>
  </div>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Tangkapan Layar</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731338068/Screenshot_2024-11-11_215023_ydyoh8.png" 
      alt="Lessons-9-01"
    />
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah Selanjutnya</strong></h3>
  <p>
   Sekarang, semua route sudah terdaftar di aplikasi Flask. Selanjutnya, kita lanjut untuk ngejalanin aplikasinya!
  </p>
</div>
