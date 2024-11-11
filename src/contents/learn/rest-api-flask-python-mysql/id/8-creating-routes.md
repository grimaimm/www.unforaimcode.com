<div class="space-y-3">
  <p>
    Sekarang kita masuk ke langkah bikin <b>routes</b> yang nantinya ngehubungin antara client sama function di controller buat proses data ke database. Dengan kata lain, routes ini jadi pintu masuk yang nerima permintaan client (kayak request buat create, read, update, delete) dan ngarahin ke function controller yang sesuai.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>1. Buat File Routes</strong></h3>
  <p>
    Di folder <b>routes</b>, kita bikin file U<code>UserRoute.py</code> dan <code>LevelRoute.py</code> dengan perintah ini (kalau belum dibuat):
  </p>

```bash
touch routes/UserRoute.py routes/LevelRoute.py
```

  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731332595/Screenshot_2024-11-11_204237_hcpnkl.png" 
      alt="Lessons-8-01"
    />
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>2. Setting Routes untuk <code>Users</code> dan <code>Levels</code></strong></h3>
  <p>
    Setiap route akan langsung diarahkan ke fungsi di dalam controller yang sesuai, kayak di bawah ini.
  </p>

  <p><b>File: <code>UserRoute.py</code></b></p>

```py
from flask import Blueprint
from controllers.UserController import *

UserRoute = Blueprint("UserRoute", __name__)

# Define routes buat User API
UserRoute.route("/api/users", methods=["POST"])(create_user)
UserRoute.route("/api/users", methods=["GET"])(get_users)
UserRoute.route("/api/users/<int:user_id>", methods=["GET"])(get_user)
UserRoute.route("/api/users/<int:user_id>", methods=["PUT"])(update_user)
UserRoute.route("/api/users/<int:user_id>", methods=["DELETE"])(delete_user)
```

  <p><b>File: <code>LevelRoute.py</code></b></p>

```py
from flask import Blueprint
from controllers.LevelController import *

LevelRoute = Blueprint("LevelRoute", __name__)

# Define routes buat Level API
LevelRoute.route("/api/levels", methods=["POST"])(create_level)
LevelRoute.route("/api/levels", methods=["GET"])(get_levels)
LevelRoute.route("/api/levels/<int:level_id>", methods=["GET"])(get_level)
LevelRoute.route("/api/levels/<int:level_id>", methods=["PUT"])(update_level)
LevelRoute.route("/api/levels/<int:level_id>", methods=["DELETE"])(delete_level)
```

  <p><b>Penjelasan Singkat:</b></p>
  <div class="content">
    <ul className="list-decimal space-y-3 pb-2 pl-10">
      <li>Blueprint : Di sini kita pakai <code>Blueprint</code> buat setiap grup routes (User dan Level). Ini bikin rute-rute kita lebih terstruktur, jadi kita bisa ngatur modul rute tanpa campur aduk.</li>
      <li>Decorator <code>.route</code> : Dengan <code>.route</code> di tiap endpoint, kita langsung arahin tiap route ke fungsi di controller. Ini bikin rute kita lebih ringkas dan gampang dibaca.</li>
    </ul>
  </div>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah Selanjutnya</strong></h3>
  <p>
   Setelah <b>routes</b> siap, kita perlu tambahin <code>UserRoute</code> dan <code>LevelRoute</code> di file <code>app.py</code> supaya aplikasi bisa akses semua endpoint API yang udah kita buat.
  </p>
</div>