<div class="space-y-3">
  <p>
    MVC stands for <b>Model, View, Controller</b>, but here we’re using <b>Routes</b> instead of <b>Views</b> to match Flask terminology. MVC keeps code clean and easy to manage:
  </p>
  <div class="content">
    <ul className="list-disc space-y-3 pb-2 pl-10">
      <li><code>Models</code> : where we manage data or the database, like MySQL.</li>
      <li><code>Routes</code> : defines the endpoints or “paths” users can access.</li>
      <li><code>Controllers</code> : connects Model and Routes, handling the logic or rules.</li>
    </ul>
  </div>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Steps to Create Folder Structure</strong></h3>
  <p>
    Let’s create the needed folders and files directly using these commands in the terminal:
  </p>

```bash
mkdir models controllers routes
touch config.py app.py requirements.txt
```

  <p>
    After running these commands, your folder structure will look like this:
  </p>

```bash
project/
│
├── models/           # For models (database)
├── controllers/      # Logic for controllers
├── routes/           # Define routes
│
├── config.py         # Config for database and other settings
├── app.py            # Main file to run the app
└── requirements.txt  # Dependencies list (e.g., Flask)
```

</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Screenshot</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731231199/Screenshot_2024-11-10_040341_zdai2k.png" 
      alt="Lessons-2-01"
    />
  </p>
  <p>Make sure the folder and file structure is like the image above.</p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Install Dependencies from <code>requirements.txt</code></strong></h3>
  <p>
    Next, add the following dependencies to <code>requirements.txt</code>:
  </p>

```bash
requests
mysql-connector-python
flask-sqlalchemy
PyMySQL
```

  <p>
    Then, install all dependencies by running this command in the terminal:
  </p>

```bash
pip install -r requirements.txt
```

  <p>
    This installs the necessary packages for our app, such as <code>requests</code>, <code>mysql-connector-python</code>, <code>flask-sqlalchemy</code>, and <code>PyMySQL</code>.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Screenshot</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731231201/Screenshot_2024-11-10_040701_wxx4n7.png" 
      alt="Lessons-2-02"
    />
  </p>
  <p>Make sure all required dependencies are installed, then check using <code>pip list</code>.</p>
</div>
