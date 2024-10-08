<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Routing and Views dalam Aplikasi Flask</strong></h3>
  <p>
    <strong>Routing</strong> adalah konsep dasar di Flask yang mengatur bagaimana aplikasi merespons permintaan (request) yang datang ke berbagai URL. <strong>Views</strong> adalah fungsi yang memproses request dan mengembalikan respons, biasanya berupa halaman HTML yang dirender. Pada bagian ini, kita akan mengatur routing dan views dalam aplikasi kita sesuai struktur folder yang telah dibangun.
  </p>
</div>

<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Langkah-langkah Implementasi Routing dan Views</strong></h3>

  <div class="space-y-3 pb-4">
    <p><strong>1.  Inisialisasi Aplikasi Flask di <code>app/__init__.py</code></strong></p>
    <p>Di <code>app/__init__.py</code>, kita akan menginisialisasi aplikasi Flask dan mendaftarkan blueprints yang berisi routes. Isi file ini dengan kode berikut:</p>

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

  <strong>Penjelasan:</strong>

  <ol className="list-disc space-y-3 pb-2 pl-10">
  <li>
    <p><code>create_app()</code> adalah fungsi factory yang membuat dan mengkonfigurasi aplikasi Flask.</p>
  </li>
  <li>
    <p>Blueprint untuk routing halaman home didaftarkan dari <code>home_routes.py</code>.</p>
  </li>
  <li>
    <p>Penanganan error didaftarkan dari <code>error_handlers.py</code>.</p>
  </li>
  </ol>

  <strong>Tangkapan Layar:</strong>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725616019/Lessons-4-01_plw8vp.png" 
      alt="Lessons-4-01" 
    />
  </p>
  </div>

  <div class="space-y-3 pb-4">
    <p><strong>2. Menambahkan Route untuk Halaman Home di <code>home_routes.py</code></strong></p>
    <p>Buat route untuk halaman home di <code>app/routes/home/home_routes.py</code>:</p>

```python
from flask import Blueprint, render_template

# Inisialisasi blueprint untuk halaman home
home_bp = Blueprint('home', __name__, url_prefix='/')

@home_bp.route('/')
def home():
    return render_template('home-page/home.html')

```

  <strong>Penjelasan:</strong>

  <ol className="list-disc space-y-3 pb-2 pl-10">
  <li>
    <p>Blueprint digunakan untuk memisahkan logika routing ke dalam modul yang berbeda, menjadikan kode lebih terorganisir.</p>
  </li>
  <li>
    <p>Route <code>'/'</code> merender template <code>home.html</code>  yang terletak di folder <code>home-page</code>.</p>
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
    <p><strong>3. Menambahkan Error Handlers di <code>error_handlers.py</code></strong></p>
    <p>Buat penanganan error di <code>app/routes/error_handlers.py</code> :</p>

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

  <strong>Penjelasan:</strong>

  <ol className="list-disc space-y-3 pb-2 pl-10">
  <li>
    <p>Fungsi <code>register_error_handlers</code> mendefinisikan penanganan error 404 dan 500.</p>
  </li>
  <li>
    <p>Saat error terjadi, aplikasi akan menampilkan <code>error.html</code> dengan pesan yang relevan.</p>
  </li>
  </ol>

  <strong>Tangkapan Layar:</strong>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725616022/Lessons-4-04_wslzg4.png" 
      alt="Lessons-4-04" 
    />
  </p>
  </div>
</div>
