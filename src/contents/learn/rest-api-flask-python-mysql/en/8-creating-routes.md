<div class="space-y-3">
  <p>
    Now we go to the step of creating <b>routes</b> that will connect the client and the function in the controller to process data to the database. In other words, this route is the entry point that accepts client requests (such as requests for create, read, update, delete) and directs them to the appropriate controller function.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>1. Create Route Files</strong></h3>
  <p>
    In the <b>routes</b> folder, we create the <code>UserRoute.py</code> and <code>LevelRoute.py</code> files with this command (if they haven't already been created):
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
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>2. Setting Routes for <code>Users</code> and <code>Levels</code></strong></h3>
  <p>
    Each route will be directed directly to the function in the appropriate controller, as shown below.
  </p>

  <p><b>File: <code>UserRoute.py</code></b></p>

```py
from flask import Blueprint
from controllers.UserController import *

UserRoute = Blueprint("UserRoute", __name__)

# Define routes for User API
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

# Define routes for Level API
LevelRoute.route("/api/levels", methods=["POST"])(create_level)
LevelRoute.route("/api/levels", methods=["GET"])(get_levels)
LevelRoute.route("/api/levels/<int:level_id>", methods=["GET"])(get_level)
LevelRoute.route("/api/levels/<int:level_id>", methods=["PUT"])(update_level)
LevelRoute.route("/api/levels/<int:level_id>", methods=["DELETE"])(delete_level)
```

  <p><b>Short Explanation:</b></p>
  <div class="content">
    <ul className="list-decimal space-y-3 pb-2 pl-10">
      <li>Blueprint : We’re using <code>Blueprint</code> here to group related routes for User and Level, keeping everything organized and making the routes easier to manage.</li>
      <li>Decorator <code>.route</code> : The <code>.route</code> decorator directly maps each endpoint to its respective controller function, making the routes concise and easy to read.</li>
    </ul>
  </div>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>The next step</strong></h3>
  <p>
   After the <b>routes</b> are ready, we need to add <code>UserRoute</code> and <code>LevelRoute</code> in the <code>app.py</code> file so that the application can access all the API endpoints that we have created.
  </p>
</div>