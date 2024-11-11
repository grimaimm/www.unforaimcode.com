<div class="space-y-3">
  <p>
    After we have finished registering the route in <code>app.py</code>, now is the time to run the application! In this section we will discuss how to run the Flask application on a local computer.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Steps:</strong></h3>
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li className="font-bold">Open Terminal and make sure Laragon is active</li>
  <p>First, open a terminal or command prompt on your computer. Make sure Laragon is up and running, because Laragon will be running your local MySQL server. After that, make sure you are in the main folder of your Flask project.</p>
  <li className="font-bold">Run Flask with <code>python app.py</code></li>
  <p>In the terminal, type the following command to run the application:</p>

```bash
python app.py
```
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731340021/Screenshot_2024-11-11_224511_vwppck.png" 
      alt="Lessons-10-01"
    />
  </p>
  <p>If everything works, you will see your Flask app running. If there are any errors, check the terminal for details, and make sure all dependencies and configurations are correct.</p>
  </ul>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Check Database</strong></h3>
  <p>If there are no errors in the terminal and the application runs well, you can verify whether the database has been created correctly. Follow these steps:</p>
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li>In the Laragon Control Panel, click Database.</li>
    <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
      <img 
        src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731340760/Screenshot_2024-11-11_225559_kmjbht.png" 
        alt="Lessons-10-02"
      />
    </p>
    <li>In the HeidiSQL Control Panel, click Open.</li>
    <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
      <img 
        src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731340747/Screenshot_2024-11-11_225629_yajgfd.png" 
        alt="Lessons-10-03"
      />
    </p>
    <li>After that, check the database that you created previously, whether there are <code>Users</code> and <code>Levels</code> tables created or not.</li>
    <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
      <img 
        src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731340750/Screenshot_2024-11-11_225720_jc03wu.png" 
        alt="Lessons-10-04"
      />
    </p>
  </ul>
  <p>If these tables exist, it means your application is running successfully and there are no errors in the database creation process.</p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>The next step</strong></h3>
  <p>
   Now the Flask application is running properly! Next, we will try testing the API endpoint that has been created using tools such as <code>Postman</code> or <code>cURL</code>, to ensure that all CRUD (Create, Read, Update, Delete) functions can run properly.
  </p>
</div>