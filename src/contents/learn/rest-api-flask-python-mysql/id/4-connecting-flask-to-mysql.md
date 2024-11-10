<div class="space-y-3">
  <p>
  Setelah database siap, kita tinggal hubungin Flask ke MySQL. Di sini kita bakal setting config, app.py, dan test koneksi ke database.
  </p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>1. Setup Config</strong></h3>
  <p>
    Di <code>config.py</code>, kita tambahin pengaturan MySQL supaya aplikasi bisa terhubung ke database yang udah kita buat.
  </p>
  
  <p><b>Note:</b></p>
  <ul className="list-disc space-y-3 pb-2 pl-10">
    <li>Jika kamu menggunakan XAMPP, pake <code>XAMPP_CONNECTOR</code>.</li>
    <li>Jika kamu menggunakan Laragon, pake <code>LARAGON_CONNECTOR</code>.</li>
    <li>Disini saya pake Laragon</li>
  </ul>
  
  
```py
import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)

# jika pake XAMPP
XAMPP_CONNECTOR = "mysql+mysqlconnector://"

# jika pake Laragon
LARAGON_CONNECTOR = "mysql+pymysql://"

DB_USERNAME = "root"
DB_PASSWORD = ""
DB_HOST = "localhost"
DB_PORT = "3306"
DB_NAME = "db_restapi_project"

app.config["SECRET_KEY"] = os.urandom(32).hex()
app.config["SQLALCHEMY_DATABASE_URI"] = f"{PYMYSQL}{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

with app.app_context():
    db.create_all()
```

</div>



<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>2. Setup App</strong></h3>
  <p>
    Di <code>app.py</code>, kita pake <code>test_connection()</code> buat ngecek koneksi ke database, dan kita juga udah ada code buat bikin tabel secara otomatis kalau belum ada di database.
  </p>
  
```py
from config import app, db

def test_connection():
    try:
        with app.app_context():
            db.session.commit()
        print("Database connection successful!")
    except Exception as e:
        print("Database connection failed:", e)
        
if __name__ == "__main__":
    test_connection()
    with app.app_context():
        db.create_all()
    app.run(port=5006, debug=True)
```

</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>3. Test Koneksi</strong></h3>
  <p>
    Jalankan <code>app.py</code>, dan cek output di terminal. Kalau koneksi berhasil, bakal keluar pesan <code>Database connection successful!</code>. Kalau gagal, bakal ada pesan error buat ngecek apa yang salah.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Screenshot</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731237157/Screenshot_2024-11-10_180935_qjva7s.png" 
      alt="Lessons-4-01"
    />
  </p>
</div>
