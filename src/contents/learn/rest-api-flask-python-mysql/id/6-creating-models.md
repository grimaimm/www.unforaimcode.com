<div class="space-y-3">
  <p>
    Sekarang kita bakal bikin model untuk database kita di Flask menggunakan <b>SQLAlchemy</b>. Model ini kayak cermin dari tabel yang kita bikin di ERD, yang nantinya bakal kita pakai untuk berinteraksi dengan database MySQL, seperti memasukkan, mengambil, mengupdate, atau menghapus data. Di sini kita bakal bikin model untuk tabel <code>Users</code> dan <code>Levels</code> yang sudah kita tentuin di ERD tadi.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>1. Buat File Model <code>Users</code> dan <code>Levels</code></strong></h3>
  <p>
    Pastikan kamu udah bikin dua file baru <code>UserModel.py</code> dan <code>LevelModel.py</code> di dalam folder <b>models</b>. Kalau belum, bisa gunakan perintah berikut untuk bikin file-nya:
  </p>

```bash
touch models/UserModel.py models/LevelModel.py
```

  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731231199/Screenshot_2024-11-10_040341_zdai2k.png" 
      alt="Lessons-6-01"
    />
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>2. Tulis Kode Model untuk <code>Users</code> dan <code>Levels</code></strong></h3>
  <p>
    Di file ini, kita bakal define kolom-kolom yang ada di tabel <code>Users</code> dan <code>Levels</code>. Kita juga tambahin relasi antara <code>Users</code> dan <code>Levels</code> .
  </p>

  <p><b>File: <code>UserModel.py</code></b></p>

```py
from config import db

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.String(100), nullable=False)
  email = db.Column(db.String(255), nullable=False, unique=True)
  level_id = db.Column(db.Integer, db.ForeignKey('levels.id'), nullable=False)
  
  # Relasi ke Level 
  levels = db.relationship('Level', backref='users', lazy=True)
  
  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'email': self.email,
      'level_id': self.level_id
    }
```

  <p><b>File: <code>LevelModel.py</code></b></p>

```py
from config import db

class Level(db.Model):
  __tablename__ = 'levels'

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  level_name = db.Column(db.String(100), nullable=False)

  # Relasi User
  users = db.relationship('User', backref='levels', lazy=True)

  def to_dict(self):
    return {
      'id': self.id,
      'level_name': self.level_name
    }
```

  <p><b>Penjelasan Kode:</b></p>
  <div class="content">
    <ul className="list-decimal space-y-3 pb-2 pl-10">
      <li>User Model <code>UserModel.py</code> :</li>
      <ul className="list-disc space-y-3 pb-2 pl-10">
        <li>Kolom <code>id</code>, <code>name</code> dan <code>email</code> buat nyimpen data user.</li>
        <li><code>level_id</code> : Foreign key yang ngubungin user ke level mereka di tabel <code>Levels</code> .</li>
        <li><code>levels</code> : Relasi ke model Level yang pakai <code>backref</code> <code>users</code>, jadi kita bisa langsung akses level tiap user dan lihat list user dari tiap level.</li>
        <li><code>to_dict</code> : Method ini buat convert objek user jadi dictionary, biar gampang diubah ke JSON pas dikirim lewat API.</li>
      </ul>
      <li>Level Model <code>LevelModel.py</code> :</li>
      <ul className="list-disc space-y-3 pb-2 pl-10">
        <li>The <code>id</code> dan <code>level_name</code> buat nyimpen data level.</li>
        <li><code>users</code> : Relasi ke model User, pakai <code>backref</code> <code>levels</code> biar bisa connect level ke semua user yang ada di level itu.</li>
        <li><code>to_dict</code> : Method buat ubah objek level jadi dictionary juga, buat lebih gampang di-serialize.</li>
      </ul>
    </ul>
  </div>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah Selanjutnya</strong></h3>
  <p>
    Setelah model udah kelar, next kita lanjut ke lesson berikutnya, yaitu bikin <b>controller</b> di folder <b>controllers</b>. Di sini kita bakal bikin dua file, yaitu <code>UserController.py</code> dan <code>LevelController.py</code> . Di kedua file ini nanti kita bakal setup fungsi-fungsi CRUD biar bisa ngatur data <code>Users</code> dan <code>Levels</code> di database.
  </p>
</div>