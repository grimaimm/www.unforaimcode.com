<div class="space-y-3">
  <p>
    Di lesson ini, kita bakal mulai bikin controller untuk ngatur logika aplikasi kita, kayak nge-handle CRUD buat data <code>Users</code> dan <code>Levels</code> . Di sini, file controller bakal jadi tempat semua fungsi buat <b>nambah, ngedit, hapus, atau ambil data</b> dari database.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>1. Buat File Controller di Folder Controllers</strong></h3>
  <p>
    Bikin dua file, <code>UserController.py</code> dan <code>LevelController.py</code> , di dalam folder <b>controllers</b>. Bisa pakai command ini buat cepetnya:
  </p>

```bash
touch controllers/UserController.py controllers/LevelController.py
```

  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731331924/Screenshot_2024-11-11_203055_fh0fqx.png" 
      alt="Lessons-7-01"
    />
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>2. Setup Basic CRUD Function di Controller</strong></h3>
  <p>
    Di tiap controller, kita bakal bikin fungsi <b>CRUD functions (Create, Read, Update, Delete)</b> buat <code>Users</code> dan <code>Levels</code> . Pastikan juga buat import model yang sesuai biar bisa akses data di database.
  </p>

  <p><b>File: <code>UserController.py</code></b></p>

  <ul className="list-decimal space-y-3 pb-2 pl-10">
  <li className="font-bold">Import <code>Module</code> :</li>

```py
from flask import jsonify, request
from config import db
from models.UserModel import User
from models.LevelModel import Level
```

  <li className="font-bold">Function <code>Create User</code> :</li>

```py
# Method POST untuk membuat user baru
def create_user():
    data = request.get_json()
    user = User(name=data["name"], email=data["email"], level_id=data["level_id"])
    db.session.add(user)
    db.session.commit()
    return (
        jsonify(
            {
                "status": "success",
                "message": "User created successfully",
                "data": user.to_dict(),
            }
        ),
        201,
    )
```

  <li className="font-bold">Function <code>Get All User</code> :</li>
  
```py
# Method GET untuk mendapatkan semua user
def get_users():
    users = User.query.all()
    user_with_levels = []
    for user in users:
        level = Level.query.get(user.level_id)
        user_with_level = {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "level": level.level_name if level else "No level assigned",
        }
        user_with_levels.append(user_with_level)

    return jsonify({"status": "success", "data": user_with_levels}), 200
```

  <li className="font-bold">Function <code>Get User by ID</code> :</li>

```py
# Method GET untuk mendapatkan user berdasarkan id
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"status": "error", "message": "User not found"}), 404
    
    level = Level.query.get(user.level_id)
    user_with_level = {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "level": level.level_name if level else "No level assigned",
    }

    return jsonify({"status": "success", "data": user_with_level}), 200
```

  <li className="font-bold">Function <code>Update User by ID</code> :</li>

```py
# Method PUT untuk memperbarui user berdasarkan id
def update_user(user_id):
    data = request.get_json()
    user = User.query.get(user_id)
    if not user:
        return jsonify({"status": "error", "message": "User not found"}), 404

    user.name = data["name"]
    user.email = data["email"]
    user.level_id = data["level_id"]
    db.session.commit()
    return jsonify({"status": "success", "message": "User updated successfully"}), 200
```

  <li className="font-bold">Function <code>Delete User by ID</code> :</li>

```py
# Method DELETE untuk menghapus user berdasarkan id
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"status": "error", "message": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({"status": "success", "message": "User deleted successfully"}), 200
```

  <li className="font-bold">Full Code <code>UserController.py</code> :</li>

```py
from flask import jsonify, request
from config import db
from models.UserModel import User
from models.LevelModel import Level


# Method POST untuk membuar user baru
def create_user():
    data = request.get_json()
    user = User(name=data["name"], email=data["email"], level_id=data["level_id"])
    db.session.add(user)
    db.session.commit()
    return (
        jsonify(
            {
                "status": "success",
                "message": "User created successfully",
                "data": user.to_dict(),
            }
        ),
        201,
    )


# Method GET untuk mendapatkan semua user
def get_users():
    users = User.query.all()
    user_with_levels = []
    for user in users:
        level = Level.query.get(user.level_id)
        user_with_level = {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "level": level.level_name if level else "No level assigned",
        }
        user_with_levels.append(user_with_level)

    return jsonify({"status": "success", "data": user_with_levels}), 200


# Method GET untuk mendapatkan user berdasarkan id
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"status": "error", "message": "User not found"}), 404
    
    level = Level.query.get(user.level_id)
    user_with_level = {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "level": level.level_name if level else "No level assigned",
    }

    return jsonify({"status": "success", "data": user_with_level}), 200


# Method PUT untuk memperbarui user berdasarkan id
def update_user(user_id):
    data = request.get_json()
    user = User.query.get(user_id)
    if not user:
        return jsonify({"status": "error", "message": "User not found"}), 404

    user.name = data["name"]
    user.email = data["email"]
    user.level_id = data["level_id"]
    db.session.commit()
    return jsonify({"status": "success", "message": "User updated successfully"}), 200


# Method DELETE untuk menghapus user berdasarkan id
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"status": "error", "message": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({"status": "success", "message": "User deleted successfully"}), 200
```

  </ul>

  <p><b>File: <code>LevelController.py</code></b></p>

  <ul className="list-decimal space-y-3 pb-2 pl-10">
  <li className="font-bold">Import <code>Module</code> :</li>

```py
from flask import jsonify, request
from config import db
from models.LevelModel import Level
```

  <li className="font-bold">Function <code>Create Level</code> :</li>

```py
# Method POST untuk membuat level baru
def create_level():
    data = request.get_json()
    level = Level(level_name=data["level_name"])
    db.session.add(level)
    db.session.commit()
    return (
        jsonify(
            {
                "status": "success",
                "message": "Level created successfully",
                "data": level.to_dict(),
            }
        ),
        201,
    )
```

  <li className="font-bold">Function <code>Get All Level</code> :</li>
  
```py
# Method GET untuk mendapatkan semua level
def get_levels():
    levels = Level.query.all()
    return (
        jsonify({"status": "success", "data": [level.to_dict() for level in levels]}),
        200,
    )
```

  <li className="font-bold">Function <code>Get Level by ID</code> :</li>

```py
# Method GET untuk mendapatkan level berdasarkan id
def get_level(level_id):
    level = Level.query.get(level_id)
    if not level:
        return jsonify({"status": "error", "message": "Level not found"}), 404

    return jsonify({"status": "success", "data": level.to_dict()}), 200
```

  <li className="font-bold">Function <code>Update Level by ID</code> :</li>

```py
# Method PUT untuk memperbarui level berdasarkan id
def update_level(level_id):
    data = request.get_json()
    level = Level.query.get(level_id)
    if not level:
        return jsonify({"status": "error", "message": "Level not found"}), 404

    level.level_name = data["level_name"]
    db.session.commit()
    return jsonify({"status": "success", "message": "Level updated successfully"}), 200
```

  <li className="font-bold">Function <code>Delete Level by ID</code> :</li>

```py
# Method DELETE untuk menghapus level berdasarkan id
def delete_level(level_id):
    level = Level.query.get(level_id)
    if not level:
        return jsonify({"status": "error", "message": "Level not found"}), 404

    db.session.delete(level)
    db.session.commit()
    return jsonify({"status": "success", "message": "Level deleted successfully"}), 200
```

  <li className="font-bold">Full Code <code>LevelController.py</code> :</li>

```py
from flask import jsonify, request
from config import db
from models.LevelModel import Level


# Method POST untuk membuat level baru
def create_level():
    data = request.get_json()
    level = Level(level_name=data["level_name"])
    db.session.add(level)
    db.session.commit()
    return (
        jsonify(
            {
                "status": "success",
                "message": "Level created successfully",
                "data": level.to_dict(),
            }
        ),
        201,
    )


# Method GET untuk mendapatkan semua level
def get_levels():
    levels = Level.query.all()
    return (
        jsonify({"status": "success", "data": [level.to_dict() for level in levels]}),
        200,
    )


# Method GET untuk mendapatkan level berdasarkan id
def get_level(level_id):
    level = Level.query.get(level_id)
    if not level:
        return jsonify({"status": "error", "message": "Level not found"}), 404

    return jsonify({"status": "success", "data": level.to_dict()}), 200


# Method PUT untuk memperbarui level berdasarkan id
def update_level(level_id):
    data = request.get_json()
    level = Level.query.get(level_id)
    if not level:
        return jsonify({"status": "error", "message": "Level not found"}), 404

    level.level_name = data["level_name"]
    db.session.commit()
    return jsonify({"status": "success", "message": "Level updated successfully"}), 200


# Method DELETE untuk menghapus level berdasarkan id
def delete_level(level_id):
    level = Level.query.get(level_id)
    if not level:
        return jsonify({"status": "error", "message": "Level not found"}), 404

    db.session.delete(level)
    db.session.commit()
    return jsonify({"status": "success", "message": "Level deleted successfully"}), 200
```

  </ul>


  <p><b>Penjelasan Kode:</b></p>
  <div class="content">
    <ul className="list-decimal space-y-3 pb-2 pl-10">
      <li>User Controllers <code>UserController.py</code> :</li>
      <ul className="list-disc space-y-3 pb-2 pl-10">
        <li><code>create_user</code> : buat nambah user baru.</li>
        <li><code>get_users</code> : buat ngambil semua data user.</li>
        <li><code>get_user</code> : buat ngambil satu user berdasarkan ID.</li>
        <li><code>update_user</code> : buat update data user yang ada.</li>
        <li><code>delete_user</code> : buat hapus user dari database.</li>
      </ul>
      <li>Level Controllers <code>LevelController.py</code> :</li>
      <ul className="list-disc space-y-3 pb-2 pl-10">
        <li><code>create_level</code> : buat nambah level baru.</li>
        <li><code>get_levels</code> : buat ngambil semua level yang ada.</li>
        <li><code>get_level</code> : buat ngambil satu level berdasarkan ID.</li>
        <li><code>update_level</code> : buat update data level.</li>
        <li><code>delete_level</code> : buat hapus level dari database.</li>
      </ul>
    </ul>
  </div>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah Selanjutnya</strong></h3>
  <p>
   Setelah controllers udah siap, next kita bakal lanjut ke lesson berikutnya buat nge-setup routes di folder <b>routes</b> dan connect ke fungsi-fungsi di controller biar bisa diakses lewat URL API.
  </p>
</div>