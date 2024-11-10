<div class="space-y-3">
  <p>
    First things first, we gotta install Flask to build the API. Flask is like a mini-framework for Python that’s super popular for building web apps, including the REST API we're gonna make.
  </p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Steps to Install Flask</strong></h3>
  <ol className="list-decimal space-y-3 pb-2 pl-10">
  <li>
    <p>Create a Virtual Environment:</p>
    <p>It’s best to create a virtual environment (env) so all packages don’t mix with other projects. It keeps dependencies neat.</p>
    
```bash
python -m venv .venv
```

  <p><strong>Then activate the env:</strong></p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
  <li>
    <p>On Windows:</p>

```bash
.venv\Scripts\activate
```

  </li>
  <li>
    <p>On MacOS/Linux:</p>

```bash
source .venv/bin/activate
```

  </li>
  </ol>
  </li>

  <li>
    <p>Install Flask:</p>
    <p>With the virtual env active, now install Flask:</p>
    
```bash
pip install flask
```
  </li>
  </ol>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Screenshot</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731231163/Screenshot_2024-11-10_031810_jwdu5e.png" 
      alt="Lessons-1"
    />
  </p>
  <p>If there’s no error message, it means Flask was installed successfully.</p>
</div>
