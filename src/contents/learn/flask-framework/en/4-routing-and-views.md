<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Routing and Views in Flask Applications</strong></h3>
  <p>
    <strong>Routing</strong> is a fundamental concept in Flask that governs how applications respond to requests coming to various URLs. <strong>Routing</strong> are functions that process requests and return responses, usually rendered HTML pages. In this section, we will set up routing and views in our application according to the folder structure that has been built.
  </p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Steps for Implementing Routing and Views</strong></h3>

  <div class="space-y-3 pb-4">
    <p><strong>1. Initialize Flask Application in <code>app/__init__.py</code></strong></p>
    <p>In <code>app/__init__.py</code>, we will initialize the Flask application and register blueprints containing routes. Fill this file with the following code:</p>

```python
from flask import Flask

def create_app():
  app = Flask(__name__, instance_relative_config=True)
  app.config.from_pyfile('config.py', silent=True)

  # Register blueprints
  from .routes.home.home_routes import home_bp
  app.register_blueprint(home_bp)

  # Error handlers
  from .routes.error_handlers import register_error_handlers
  register_error_handlers(app)

  return app
```

  <strong>Explanation:</strong>

  <ol className="list-disc space-y-3 pb-2 pl-10">
  <li>
    <p><code>create_app()</code> is a factory function that creates and configures the Flask application.</p>
  </li>
  <li>
    <p>The blueprint for routing the home page is registered from <code>home_routes.py</code>.</p>
  </li>
  <li>
    <p>Error handling is registered from <code>error_handlers.py</code>.</p>
  </li>
  </ol>

  <strong>Screenshot:</strong>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725616019/Lessons-4-01_plw8vp.png" 
      alt="Lessons-4-01" 
    />
  </p>
  </div>

  <div class="space-y-3 pb-4">
    <p><strong>2. Add Route for Home Page in <code>home_routes.py</code></strong></p>
    <p>Create a route for the home page in <code>app/routes/home/home_routes.py</code>:</p>

```python
from flask import Blueprint, render_template

# Initialize blueprint for home page
home_bp = Blueprint('home', __name__, url_prefix='/')

@home_bp.route('/')
def home():
    return render_template('home-page/home.html')

```

  <strong>Explanation:</strong>

  <ol className="list-disc space-y-3 pb-2 pl-10">
  <li>
    <p>A blueprint is used to separate routing logic into different modules, making the code more organized.</p>
  </li>
  <li>
    <p>The route <code>'/'</code> renders the <code>home.html</code> template located in the <code>home-page</code> folder.</p>
  </li>
  </ol>

  <strong>Screenshot:</strong>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725616019/Lessons-4-02_peuroj.png" 
      alt="Lessons-4-02" 
    />
  </p>
  </div>


  <div class="space-y-3 pb-4">
    <p><strong>3. Add Error Handlers in <code>error_handlers.py</code></strong></p>
    <p>Create error handlers in <code>app/routes/error_handlers.py</code> :</p>

```python
from flask import render_template

def register_error_handlers(app):
    @app.errorhandler(404)
    def page_not_found(e):
        return render_template('error.html', error="404 - Page Not Found"), 404

    @app.errorhandler(500)
    def internal_server_error(e):
        return render_template('error.html', error="500 - Internal Server Error"), 500

```

  <strong>Explanation:</strong>

  <ol className="list-disc space-y-3 pb-2 pl-10">
  <li>
    <p>The <code>register_error_handlers</code> function defines handlers for 404 and 500 errors.</p>
  </li>
  <li>
    <p>When an error occurs, the application will display <code>error.html</code> with the relevant message.</p>
  </li>
  </ol>

  <strong>Screenshot:</strong>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725616022/Lessons-4-04_wslzg4.png" 
      alt="Lessons-4-04" 
    />
  </p>
  </div>
</div>
