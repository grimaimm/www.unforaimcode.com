<div class="space-y-3">
  <p>
  With the database ready, let’s connect Flask to MySQL. We’ll set up the config, app.py, and test the connection.
  </p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>1. Setup Config</strong></h3>
  <p>
    In <code>config.py</code>, add the MySQL settings so the app can connect to the database we just created.
  </p>
  
  <p><b>Note:</b></p>
  <ul className="list-disc space-y-3 pb-2 pl-10">
    <li>If you are using XAMPP, use <code>XAMPP_CONNECTOR</code>.</li>
    <li>If you are using Laragon, use <code>LARAGON_CONNECTOR</code>.</li>
    <li>Here I am using Laragon</li>
  </ul>
  
  
```py
import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)

# if using XAMPP
XAMPP_CONNECTOR = "mysql+mysqlconnector://"

# if using Laragon
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
    In <code>app.py</code>, we have <code>test_connection()</code> to check the database connection, and we also have code to auto-create tables if they don’t exist in the database.
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
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>3. Testing the Connection</strong></h3>
  <p>
    Run <code>app.py</code>, and check the output in the terminal. If the connection is successful, it will print <code>Database connection successful!</code>. If it fails, it will show an error message to help you troubleshoot.
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
