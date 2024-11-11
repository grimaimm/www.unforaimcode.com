<div class="space-y-3">
  <p>
    In this lesson, we’re gonna start building the controllers to handle the logic for our app, like the CRUD operations for <code>Users</code> and <code>Levels</code> data. Each controller file will be where we put all the functions for <b>adding, updating, deleting, and retrieving data</b> from the database.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>1. Create Controller Files in the Controllers Folder</strong></h3>
  <p>
    Make two files, <code>UserController.py</code> and <code>LevelController.py</code> , inside the <b>controllers</b> folder. You can use this command to make both files quickly:
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
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>2. Set Up Basic CRUD Functions in the Controllers</strong></h3>
  <p>
    In each controller, we’ll add <b>CRUD functions (Create, Read, Update, Delete)</b> for <code>Users</code> and <code>Levels</code> . Make sure to import the relevant models to access data in the database.
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
# Method POST to create a new user
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
# Method GET to get all users
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
# Method GET to get a user by id
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
# Method PUT to update a user by id
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
# Method DELETE to delete a user by id
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


# Method POST to create a new user
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


# Method GET to get all users
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


# Method GET to get a user by id
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


# Method PUT to update a user by id
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


# Method DELETE to delete a user by id
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
# Method POST to create a new level
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
# Method GET to get all levels
def get_levels():
    levels = Level.query.all()
    return (
        jsonify({"status": "success", "data": [level.to_dict() for level in levels]}),
        200,
    )
```

  <li className="font-bold">Function <code>Get Level by ID</code> :</li>

```py
# Method GET to get a level by id
def get_level(level_id):
    level = Level.query.get(level_id)
    if not level:
        return jsonify({"status": "error", "message": "Level not found"}), 404

    return jsonify({"status": "success", "data": level.to_dict()}), 200
```

  <li className="font-bold">Function <code>Update Level by ID</code> :</li>

```py
# Method PUT to update a level by id
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
# Method DELETE to delete a level by id
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


# Method POST to create a new level
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


# Method GET to get all levels
def get_levels():
    levels = Level.query.all()
    return (
        jsonify({"status": "success", "data": [level.to_dict() for level in levels]}),
        200,
    )


# Method GET to get a level by id
def get_level(level_id):
    level = Level.query.get(level_id)
    if not level:
        return jsonify({"status": "error", "message": "Level not found"}), 404

    return jsonify({"status": "success", "data": level.to_dict()}), 200


# Method PUT to update a level by id
def update_level(level_id):
    data = request.get_json()
    level = Level.query.get(level_id)
    if not level:
        return jsonify({"status": "error", "message": "Level not found"}), 404

    level.level_name = data["level_name"]
    db.session.commit()
    return jsonify({"status": "success", "message": "Level updated successfully"}), 200


# Method DELETE to delete a level by id
def delete_level(level_id):
    level = Level.query.get(level_id)
    if not level:
        return jsonify({"status": "error", "message": "Level not found"}), 404

    db.session.delete(level)
    db.session.commit()
    return jsonify({"status": "success", "message": "Level deleted successfully"}), 200
```

  </ul>


  <p><b>Code Explanation:</b></p>
  <div class="content">
    <ul className="list-decimal space-y-3 pb-2 pl-10">
      <li>User Controllers <code>UserController.py</code> :</li>
      <ul className="list-disc space-y-3 pb-2 pl-10">
        <li><code>create_user</code> : to add a new user.</li>
        <li><code>get_users</code> : to retrieve all user data.</li>
        <li><code>get_user</code> : to retrieve user data based on ID.</li>
        <li><code>update_user</code> : to update existing user data.</li>
        <li><code>delete_user</code> : to delete a user from the database.</li>
      </ul>
      <li>Level Controllers <code>LevelController.py</code> :</li>
      <ul className="list-disc space-y-3 pb-2 pl-10">
        <li><code>create_level</code> : to add a new level.</li>
        <li><code>get_levels</code> : to get all existing levels.</li>
        <li><code>get_level</code> : to retrieve existing levels based on ID.</li>
        <li><code>update_level</code> : to update level data.</li>
        <li><code>delete_level</code> : to delete a level from the database.</li>
      </ul>
    </ul>
  </div>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>The next step</strong></h3>
  <p>
   With the controllers set up, we’ll move to the next lesson to set up routes in the <b>routes</b> folder and link them to the functions in the controllers so we can access these actions through API URLs.
  </p>
</div>