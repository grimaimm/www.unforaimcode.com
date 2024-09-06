<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Understanding Folder Structure in Flask Applications</strong></h3>
  <p>
    When building web applications using Flask, having a good folder structure is essential to keep the code clean, manageable, and scalable. In this guide, I will share the folder structure I use in developing Flask applications, which is designed to organize code efficiently and professionally.
  </p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Flask Project Folder Structure</strong></h3>
  <p>
    Here is the folder structure I use in my Flask projects:
  </p>

```bash
project/
│
├── app/
│   ├── __init__.py               # Initialize Flask app and register blueprint
│   ├── routes/                   # Folder for all routes
│   │   ├── __init__.py           # Initialize routes
│   │   ├── home/
│   │   │   ├── __init__.py       # Initialize home module
│   │   │   └── home_routes.py    # Routes for home page
│   │   └── error_handlers.py     # Application error handling
│   │
│   ├── static/                   # Static files (CSS, JS, images)
│   │   ├── css/
│   │   ├── js/
│   │   └── img/
│   │
│   ├── templates/                # HTML template files
│   │   ├── _includes/            # Reused HTML snippets
│   │   ├── _layout/
│   │   │   └── base.html         # Base template
│   │   ├── home-page/
│   │   │   └── home.html         # Template untuk halaman home
│   │   ├── index.html            # Home page
│   │   └── error.html            # Error page
│   │
│   └── utils.py                  # Utility functions used throughout the application
│
├── instance/
│   └── config.py                 # Confidential application configuration
│
├── .venv/                        # Virtual environment (optional but recommended)
│
├── .env                          # Environment variables for sensitive configuration
├── .gitignore                    # File to ignore certain files when committing
├── requirements.txt              # List of application dependencies
└── run.py                        # File to run the application
```

</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Steps to Create This Folder Structure</strong></h3>
  <p>Run the following commands in the terminal to create the folder and file structure:</p>

```bash
# Creating Folder Structure:
mkdir -p app/routes/home
mkdir -p app/static/css app/static/js app/static/img
mkdir -p app/templates/_includes app/templates/_layout app/templates/home-page
mkdir instance

# Creating Files:
touch app/__init__.py app/routes/__init__.py app/routes/home/__init__.py app/routes/home/home_routes.py app/routes/error_handlers.py
touch app/static/css/style.css app/static/js/script.js
touch app/templates/_layout/base.html app/templates/home-page/home.html app/templates/index.html app/templates/error.html
touch app/utils.py instance/config.py .gitignore requirements.txt run.py .env
```
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Screenshot</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725612244/Lessons-3_ugbm5c.png" 
      alt="Lessons-3" 
    />
  </p>
</div>
