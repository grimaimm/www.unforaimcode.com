<div class="space-y-3">
  <p>
    Sebelum mulai bikin API, kita butuh bikin <b>ERD (Entity-Relationship Diagram)</b> untuk bantu kita memahami struktur database dan relasi antar tabel. ERD ini kayak blueprint yang bakal ngasih kita panduan soal gimana data diatur dan saling berhubungan di database. Di lesson ini, kita bakal pakai <b>DBML</b> buat nyusun ERD-nya. Sebagai contoh, kita bakal buat dua tabel: <code>Users</code> dan <code>Levels</code> dengan relasi <b>many-to-one</b> di mana tiap user terhubung ke satu level.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Kenapa Perlu ERD Sebelum Buat API?</strong></h3>
  <p>
    Membuat ERD sebelum bikin API itu penting banget karena:
  </p>
  
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li className="font-bold">Bantu Memahami Alur Data</li>
    <p>ERD ngasih gambaran soal gimana data dari satu tabel terhubung ke tabel lain. Misalnya, dengan relasi ini kita tahu kalau tiap user punya satu level, tapi satu level bisa dimiliki banyak user.</p>
    <li className="font-bold">Mempermudah Pembuatan API</li>
    <p>Dengan struktur yang jelas, kita bisa bikin API endpoint sesuai kebutuhan. Misalnya, kita bisa bikin endpoint untuk mendapatkan semua users dalam satu level atau buat menambahkan user dengan level tertentu.</p>
    <li className="font-bold">Memudahkan Pengembangan</li>
    <p>Dengan ERD yang terencana, struktur database jadi rapi dan lebih mudah dikelola. Kalau ada fitur baru, kita nggak perlu bongkar-bongkar struktur database karena udah punya fondasi yang kuat.</p>
  </ul>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Steps:</strong></h3>
  
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li className="font-bold">Buat ERD dengan DBML</li>
    <p>Di sini kita bakal bikin tabel <code>Users</code> dan <code>Levels</code>. Tabel <code>Users</code> buat nyimpan data pengguna, sedangkan <code>Levels</code> buat nyimpan informasi tentang level atau tingkatan dari tiap user. Relasinya <b>many-to-one</b> dari <code>Users</code> ke <code>Levels</code>.</p>
    <li className="font-bold">Struktur DBML Code</li>
    <p>
    Kita pakai sintaks DBML buat nyusun struktur ERD ini. Hasilnya bisa kita visualisasikan jadi diagram dengan tools kayak <a href="https://dbdiagram.io">dbdiagram.io</a>.</p>
  </ul>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Code DBML:</strong></h3>
  <p>
    Berikut adalah DBML Code untuk tabel <code>Users</code> dan <code>Levels</code> :
  </p>

```sql
Table users {
  id int [pk, increment] // Primary Key, auto increment
  name varchar
  email varchar [unique]
  level_id int [ref: > levels.id] // Foreign Key referensi ke levels.id
}

Table levels {
  id int [pk, increment] // Primary Key, auto increment
  level_name varchar
}
```
  
  <p><b>Penjelasan Kode:</b></p>
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li className="font-bold">Tabel <code>Users</code> :</li>
    <ul className="list-disc space-y-3 pb-2 pl-10">
      <li><code>id</code> : Primary Key (unik buat tiap user), auto-increment.</li>
      <li><code>name</code> : Nama user.</li>
      <li><code>email</code> : Email user yang unik.</li>
      <li><code>level_id</code> : Foreign Key yang ngereferensi ke <code>id</code> di tabel <code>Levels</code>, nunjukin level user.</li>
    </ul>
    <li className="font-bold">Tabel <code>Levels</code> :</li>
    <ul className="list-disc space-y-3 pb-2 pl-10">
      <li><code>id</code> : Primary Key buat tiap level, auto-increment.</li>
      <li><code>level_name</code> : Nama level (misalnya: Subscriber, Admin, Super Admin).</li>
    </ul>
    <li className="font-bold">Relasi :</li>
    <p>Relasi <b>many-to-one</b> antara <code>Users</code> dan <code>Levels</code> berarti satu user hanya punya satu level, tapi satu level bisa dimiliki oleh banyak user.</p>
  </ul>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Tangkapan Layar</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731324716/Screenshot_2024-11-11_182843_lnmxrd.png" 
      alt="Lessons-5-01"
    />
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah Selanjutnya</strong></h3>
  <p>
    Setelah ERD kita siap, langkah berikutnya adalah mengimplementasikan tabel ini di MySQL. Di lesson berikutnya, kita bakal bikin model di Flask menggunakan SQLAlchemy untuk representasi tabel <code>Users</code> dan <code>Levels</code> .
  </p>
</div>