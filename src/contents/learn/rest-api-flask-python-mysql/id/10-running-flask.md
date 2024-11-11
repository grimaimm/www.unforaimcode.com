<div class="space-y-3">
  <p>
    Setelah kita selesai mendaftarkan route di <code>app.py</code>, sekarang saatnya buat jalanin aplikasinya! Di bagian ini kita bakal ngebahas gimana cara menjalankan aplikasi Flask di lokal komputer.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah-langkah:</strong></h3>
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li className="font-bold">Buka Terminal dan Pastikan Laragon Sudah Aktif</li>
  <p>Pertama, buka terminal atau command prompt di komputer kamu. Pastikan Laragon sudah aktif dan berjalan, karena Laragon akan menjalankan server MySQL lokalmu. Setelah itu, pastikan kamu berada di folder utama proyek Flask kamu.</p>
  <li className="font-bold">Jalankan Flask dengan <code>python app.py</code></li>
  <p>Di terminal, ketik perintah berikut untuk menjalankan aplikasi:</p>

```bash
python app.py
```
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731340021/Screenshot_2024-11-11_224511_vwppck.png" 
      alt="Lessons-10-01"
    />
  </p>
  <p>Jika semuanya berjalan lancar, kamu akan melihat aplikasi Flask kamu aktif. Kalau ada error, cek di terminal untuk detailnya dan pastikan semua dependensi dan konfigurasi sudah benar.</p>
  </ul>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Cek Database</strong></h3>
  <p>Jika tidak ada error di terminal dan aplikasi berjalan dengan baik, kamu bisa memverifikasi apakah database sudah terbuat dengan benar. Ikuti langkah-langkah berikut:</p>
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li>Pada Control Panel Laragon, klik Database.</li>
    <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
      <img 
        src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731340760/Screenshot_2024-11-11_225559_kmjbht.png" 
        alt="Lessons-10-02"
      />
    </p>
    <li>Pada Control Panel HeidiSQL, klik Open.</li>
    <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
      <img 
        src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731340747/Screenshot_2024-11-11_225629_yajgfd.png" 
        alt="Lessons-10-03"
      />
    </p>
    <li>Setelah itu, cek database yang sudah kamu buat sebelumnya, apakah ada tabel <code>Users</code> dan <code>Levels</code> yang ter-create atau tidak.</li>
    <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
      <img 
        src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731340750/Screenshot_2024-11-11_225720_jc03wu.png" 
        alt="Lessons-10-04"
      />
    </p>
  </ul>
  <p>Jika tabel-tabel tersebut ada, berarti aplikasi kamu sukses dijalankan dan tidak ada kesalahan pada proses pembuatan database.</p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah Selanjutnya</strong></h3>
  <p>
   Sekarang aplikasi Flask udah berjalan dengan baik! Selanjutnya, kita akan coba testing endpoint API yang udah dibuat menggunakan tools seperti <code>Postman</code> atau <code>cURL</code>, untuk memastikan semua fungsi CRUD (Create, Read, Update, Delete) bisa jalan dengan baik.
  </p>
</div>