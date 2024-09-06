<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Templates in Flask Applications</strong></h3>
  <p>
    Templates in Flask are used to render HTML with dynamic content. Flask uses the Jinja2 templating engine by default, which allows you to include Python-like expressions inside your HTML files. Here’s how to set up a template with an existing routing and views structure.
  </p>
</div>


<div class="space-y-3">
  <h4><strong>1. Template Folder Structure</strong></h4>
  <p>
    Our template folder is located in <code>app/templates/</code> and contains several subfolders:
  </p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
    <li>
      <p><code>_layout/</code> Stores basic templates such as <code>base.html</code>, which is the framework for other pages.</p>
    </li>
    <li>
      <p><code>home-page/</code> Stores a custom template for the home page.</p>
    </li>
    <li>
      <p><code>_includes/</code>: (Optional) Stores recurrent HTML code snippets, such as headers or footers, in case they are needed in the future.</p>
    </li>
  </ol>
</div>


<div class="space-y-3 pb-4">
  <h4><strong>2. Base Template <code>base.html</code></strong></h4>
  <p>
    This template provides the basic structure for all pages. Here is <code>base.html</code> in <code>app/templates/_layout/</code>:
  </p>

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flask App</title>
    <link
      rel="stylesheet"
      href="{{ url_for('static', filename='css/style.css') }}"
    />
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="{{ url_for('home.home') }}">Home</a></li>
        </ul>
      </nav>
    </header>

    <main>{% block content %} {% endblock %}</main>

    <footer>
      <p>&copy; 2024 My Flask App</p>
    </footer>

    <script src="{{ url_for('static', filename='js/script.js') }}"></script>
  </body>
</html>
```

  <p><strong>Explanation:</strong></p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
    <li>
      <p><code>{% block content %}{% endblock %}</code> is where the specific page content will be inserted.</p>
    </li>
    <li>
      <p><code>url_for('static', filename='css/style.css')</code> is used to redirect to a static CSS file.</p>
    </li>
    <li>
      <p><code>url_for('static', filename='js/script.js')</code> is used to redirect to a static JS file.</p>
    </li>
  </ol>

  <p><strong>Screenshot:</strong></p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725616023/Lessons-4-05_vdcc0o.png" 
      alt="Lessons-4-05" 
    />
  </p>
</div>


<div class="space-y-3 pb-4">
  <h4><strong>3. Add HTML Template for Home Page</strong></h4>
  <p>
    Fill the <code>home.html</code> template in <code>app/templates/home-page/</code>:
  </p>

```html
{% extends '_layout/base.html' %}

{% block content %}
  <h1>Welcome to the Home Page!</h1>
  <p>This is the main landing page of our web application.</p>
{% endblock %}
```

  <p><strong>Explanation:</strong></p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
    <li>
      <p>This template inherits the basic structure from <code>base.html</code>.</p>
    </li>
    <li>
      <p>Main content is placed within <code>{% block content %}</code> to maintain layout consistency.</p>
    </li>
  </ol>
  

  <p><strong>Screenshot:</strong></p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725616020/Lessons-4-03_y7jtsa.png" 
      alt="Lessons-4-03" 
    />
  </p>
</div>


<div class="space-y-3 pb-4">
  <h4><strong>4. Add HTML Template for Error Page</strong></h4>
  <p>
    Fill the <code>error.html</code> template in <code>app/templates/</code>:
  </p>

```html
{% extends '_layout/base.html' %}

{% block content %}
  <h1>Error!</h1>
  <p>{{ error }}</p>
{% endblock %}
```

  <p><strong>Explanation:</strong></p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
    <li>
      <p>This template is used to display error messages passed from error handling.</p>
    </li>
  </ol>
  
  <p><strong>Screenshot:</strong></p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725620103/Lessons-5-03_wlwrie.png" 
      alt="Lessons-5-03" 
    />
  </p>
</div>


<div class="space-y-3">
  <h4><strong>4. Run the Application</strong></h4>
  <p>
    Finally, run your application using <code>run.py</code>:
  </p>

```python
from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
```

  <p><strong>Explanation:</strong></p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
    <li>
      <p>The application runs in debug mode, which helps you see errors directly during development.</p>
    </li>
  </ol>
  
  <p><strong>Screenshot:</strong></p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725620884/Lessons-5-04_kj0vld.png" 
      alt="Lessons-5-04" 
    />
  </p>

  <p><br/>Open a web browser and navigate to <a>http://127.0.0.1:5000</a>.</p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725620977/Lessons-5-05_er65l7.png" 
      alt="Lessons-5-04" 
    />
  </p>
</div>