<div class="space-y-3">
  <p>
    Now we will proceed to the next step, namely registering all the routes that we have created in <code>app.py</code> . This is important so that our application can access the endpoints that we have created in <code>UserRoute</code> and <code>LevelRoute</code> .
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Steps:</strong></h3>
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li className="font-bold">Open <code>app.py</code></li>
    <p>This <code>app.py</code> file is where we connect the Flask application and other configurations. Now we will register all the routes that have been created.</p>
    <li className="font-bold">Import Blueprint from Routes</li>
    <p>In <code>app.py</code>, we need to import the <code>UserRoute</code> and <code>LevelRoute</code> that we created previously in the <b>routes</b> folder.</p>
    <li className="font-bold">Register Blueprints</li>
    <p>We use <code>app.register_blueprint()</code> to register the blueprint that was imported earlier. That way, all routes in <code>UserRoute</code> and <code>LevelRoute</code> will be active.</p>
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

  <p><b>Code Explanation:</b></p>
  <div class="content">
    <ul className="list-disc space-y-3 pb-2 pl-10">
      <li>Import Blueprint: We import <code>UserRoute</code> and <code>LevelRoute</code> from the <b>routes</b> folder, so they can be used in the main application.</li>
      <li>Register Blueprints: <code>app.register_blueprint(UserRoute)</code> and <code>app.register_blueprint(LevelRoute)</code> add routes from the blueprint to the main Flask application.</li>
      <li>Test Database Connection: <code>test_connection()</code> checks whether the database can be connected properly.</li>
      <li>Run the App: <code>app.run(port=5006, debug=True)</code> will run the Flask application on port <code>5006</code>.</li>
    </ul>
  </div>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Screenshot</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731338068/Screenshot_2024-11-11_215023_ydyoh8.png" 
      alt="Lessons-9-01"
    />
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>The next step</strong></h3>
  <p>
   Now, all routes are registered in the Flask application. Next, let's move on to running the application!
  </p>
</div>
