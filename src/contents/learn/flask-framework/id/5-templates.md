<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Templates dalam Aplikasi Flask</strong></h3>
  <p>
    Template di Flask digunakan untuk merender HTML dengan konten dinamis. Secara default, Flask menggunakan mesin templating Jinja2, yang memungkinkan kamu untuk menyertakan ekspresi seperti Python di dalam file HTML. Berikut adalah cara mengatur template dengan struktur routing dan view yang sudah ada.
  </p>
</div>


<div class="space-y-3">
  <h4><strong>1. Struktur Folder Template</strong></h4>
  <p>
    Folder template terletak di <code>app/templates/</code> dan berisi beberapa subfolder:
  </p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
    <li>
      <p><code>_layout/</code> Menyimpan template dasar seperti <code>base.html</code>, yang menjadi kerangka untuk halaman lainnya.</p>
    </li>
    <li>
      <p><code>home-page/</code> Menyimpan template khusus untuk halaman home.</p>
    </li>
    <li>
      <p><code>_includes/</code>: (Opsional) Menyimpan potongan kode HTML yang digunakan secara berulang, seperti header atau footer, jika diperlukan di masa mendatang.</p>
    </li>
  </ol>
</div>


<div class="space-y-3 pb-4">
  <h4><strong>2. Template Dasar <code>base.html</code></strong></h4>
  <p>
    Template ini menyediakan struktur dasar untuk semua halaman. Berikut adalah <code>base.html</code> di <code>app/templates/_layout/</code>:
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

  <p><strong>Penjelasan:</strong></p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
    <li>
      <p><code>{% block content %}{% endblock %}</code> adalah tempat di mana konten halaman spesifik akan dimasukkan.</p>
    </li>
    <li>
      <p><code>url_for('static', filename='css/style.css')</code> digunakan untuk mengarahkan ke file CSS statis.</p>
    </li>
    <li>
      <p><code>url_for('static', filename='js/script.js')</code> digunakan untuk mengarahkan ke file JS statis.</p>
    </li>
  </ol>

  <p><strong>Tangkapan Layar:</strong></p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725616023/Lessons-4-05_vdcc0o.png" 
      alt="Lessons-4-05" 
    />
  </p>
</div>


<div class="space-y-3 pb-4">
  <h4><strong>3. Tambahkan Template HTML untuk Halaman Beranda</strong></h4>
  <p>
    Isi template <code>home.html</code> di <code>app/templates/home-page/</code>:
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
      <p>Template ini mewarisi struktur dasar dari <code>base.html</code>.</p>
    </li>
    <li>
      <p>Konten utama ditempatkan dalam <code>{% block content %}</code> untuk menjaga konsistensi tata letak.</p>
    </li>
  </ol>
  

  <p><strong>Tangkapan Layar:</strong></p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725616020/Lessons-4-03_y7jtsa.png" 
      alt="Lessons-4-03" 
    />
  </p>
</div>


<div class="space-y-3 pb-4">
  <h4><strong>4. Tambahkan Template HTML untuk Halaman Error</strong></h4>
  <p>
    Isi template <code>error.html</code> di <code>app/templates/</code>:
  </p>

```html
{% extends '_layout/base.html' %}

{% block content %}
  <h1>Error!</h1>
  <p>{{ error }}</p>
{% endblock %}
```

  <p><strong>Penjelasan:</strong></p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
    <li>
      <p>Template ini digunakan untuk menampilkan pesan error yang diteruskan dari penanganan error.</p>
    </li>
  </ol>
  
  <p><strong>Tangkapan Layar:</strong></p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725620103/Lessons-5-03_wlwrie.png" 
      alt="Lessons-5-03" 
    />
  </p>
</div>


<div class="space-y-3">
  <h4><strong>4. Menjalankan Aplikasi</strong></h4>
  <p>
    Terakhir, jalankan aplikasimu menggunakan <code>run.py</code>:
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
      <p>Aplikasi berjalan dalam mode debug, yang membantu kamu melihat kesalahan secara langsung selama pengembangan.</p>
    </li>
  </ol>
  
  <p><strong>Tangkapan Layar:</strong></p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725620884/Lessons-5-04_kj0vld.png" 
      alt="Lessons-5-04" 
    />
  </p>

  <p><br/>Buka browser web dan navigasikan ke <a>http://127.0.0.1:5000</a>.</p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725620977/Lessons-5-05_er65l7.png" 
      alt="Lessons-5-04" 
    />
  </p>
</div>