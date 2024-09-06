<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Creating Your First Python File for a Flask Application</strong></h3>
    <p>Create a new Python file named <code>app.py</code> .</p>
    
```bash
touch app.py
```
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Explanation of a Simple "Hello, World!" Application</strong></h3>
  <p>Open <code>app.py</code> in your preferred text editor and add the following code:</p>

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
```

  <p>Code explanation:</p>
  <ul className="list-disc space-y-3 pb-2 pl-10">
    <li><code>Import Flask</code> : Import the Flask class from the flask module.</li>
    <li><code>Initialize the App</code> : Create an instance of the Flask class.</li>
    <li><code>Route</code> : Define the root route <code>('/')</code> and link it to the <code>hello_world</code> function.</li>
    <li><code>Run Server</code> : Run the Flask application with debug mode enabled.</li> 
  </ul>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Running the Application and Accessing it through the Browser</strong></h3>
  <ol className="list-decimal space-y-3 pb-2 pl-10">
  <li>
    <p>Run the Flask application by typing the following command in the terminal:</p>
    
```bash
python app.py
```
  </li>

  <li>
    <p>Open a web browser and navigate to <code>http://127.0.0.1:5000</code>. You should see the message <code>"Hello, World!"</code> displayed on the screen.</p>
  </li>
  </ol>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Screenshot</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725611982/Lessons-2-02_ilddw0.png" 
      alt="Lessons-2" 
    />
  </p>
</div>
