<div class="space-y-3">
  <p>
  Now we will create a model for our database in Flask using <b>SQLAlchemy</b>. This model is like a mirror of the table that we created in ERD, which we will later use to interact with the MySQL database, such as inserting, retrieving, updating, or deleting data. Here we will create a model for the <code>Users</code> and <code>Levels</code> tables that we defined in the ERD earlier.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>1. Create <code>Users</code> and <code>Levels</code> Model Files</strong></h3>
  <p>
    Make sure you have created two new files <code>UserModel.py</code> and <code>LevelModel.py</code> in the <b>models</b> folder. If not, you can use the following command to create the file:
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
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>2. Write Model Code for <code>Users</code> and <code>Levels</code></strong></h3>
  <p>
    Once the file is ready, we define each table column in each model using SQLAlchemy.
    In this file, we will define the columns in the <code>Users</code> and <code>Levels</code> tables. We also add a relationship between <code>Users</code> dan <code>Levels</code> .
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
  
  # Relationship to Level 
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

  # Relationship to User
  users = db.relationship('User', backref='levels', lazy=True)

  def to_dict(self):
    return {
      'id': self.id,
      'level_name': self.level_name
    }
```

  <p><b>Code Explanation:</b></p>
  <div class="content">
    <ul className="list-decimal space-y-3 pb-2 pl-10">
      <li>User Model <code>UserModel.py</code> :</li>
      <ul className="list-disc space-y-3 pb-2 pl-10">
        <li><code>id</code>, <code>name</code> and <code>email</code> columns to store user data.</li>
        <li><code>level_id</code> : Foreign key that links the user to their level in the <code>Levels</code> table.</li>
        <li><code>levels</code> : Relationship to the Level model that uses the <code>users</code> <code>backref</code>, so we can directly access the level of each user and see the list of users from each level.</li>
        <li><code>to_dict</code> : This method converts user objects into a dictionary, so that it can easily be converted to JSON when sent via the API.</li>
      </ul>
      <li>Level Model <code>LevelModel.py</code> :</li>
      <ul className="list-disc space-y-3 pb-2 pl-10">
        <li>The <code>id</code> and <code>level_name</code> columns are used to store level data.</li>
        <li><code>users</code> : Relationship to the User model, using <code>levels</code> <code>backref</code> so you can connect the level to all users at that level.</li>
        <li><code>to_dict</code> : Method for converting level objects into dictionaries too, making them easier to serialize.</li>
      </ul>
    </ul>
  </div>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>The next step</strong></h3>
  <p>
    Once the model is complete, next we move on to the next lesson, namely creating a <b>controller</b> in the <b>controllers</b> folder. Here we will create two files, namely <code>UserController.py</code> and <code>LevelController.py</code> . In these two files, we will later setup CRUD functions so we can manage <code>Users</code> and <code>Levels</code> data in the database.
  </p>
</div>