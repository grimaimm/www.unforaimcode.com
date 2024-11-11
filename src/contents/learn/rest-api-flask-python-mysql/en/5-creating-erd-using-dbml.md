<div class="space-y-3">
  <p>
    Before starting to create an API, we need to create an <b>ERD (Entity-Relationship Diagram)</b> to help us understand the database structure and relationships between tables. This ERD is like a blueprint that will give us guidance on how data is organized and interconnected in the database. In this lesson, we will use <b>DBML</b> to compile the ERD. For example, we will create two tables: <code>Users</code> and <code>Levels</code> with a <b>many-to-one</b> relationship where each user is connected to one level.
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Why do you have to create an ERD first?</strong></h3>
  <p>
    Creating an ERD before creating an API is very important because:
  </p>
  
  <p><b>Note:</b></p>
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li className="font-bold">Helps Understand Data Flow</li>
    <p>ERD provides an overview of how data from one table is connected to another table. For example, with this relationship we know that each user has one level, but one level can belong to many users.</p>
    <li className="font-bold">Makes it easier to create APIs</li>
    <p>With a clear structure, we can create API endpoints according to our needs. For example, we can create an endpoint to get all users at one level or to add users at a certain level.</p>
    <li className="font-bold">Makes Development Easier</li>
    <p>With a planned ERD, the database structure becomes neater and easier to manage. If there are new features, we don't need to dismantle the database structure because we already have a strong foundation.</p>
  </ul>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Steps:</strong></h3>
  
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li className="font-bold">Create ERD with DBML</li>
    <p>Here we will create a <code>Users</code> and <code>Levels</code> table. The <code>Users</code> table is for storing user data, while the <code>Levels</code> is for storing information about the level or level of each user. The relationship is <b>many-to-one</b> from <code>Users</code> to <code>Levels</code> .</p>
    <li className="font-bold">DBML Code Structure</li>
    <p>We use DBML syntax to compile this ERD structure. We can visualize the results into diagrams with tools like <a href="https://dbdiagram.io">dbdiagram.io</a>.</p>
  </ul>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>DBML Code:</strong></h3>

  <p>
    Following is the DBML Code for the <code>Users</code> and <code>Levels</code> tables:
  </p>

```sql
Table users {
  id int [pk, increment] // Primary Key, auto increment
  name varchar
  email varchar [unique]
  level_id int [ref: > levels.id] // Foreign Key referensi to levels.id
}

Table levels {
  id int [pk, increment] // Primary Key, auto increment
  level_name varchar
}
```
  
  <p><b>Code Explanation:</b></p>
  <ul className="list-decimal space-y-3 pb-2 pl-10">
    <li className="font-bold">Table <code>Users</code> :</li>
    <ul className="list-disc space-y-3 pb-2 pl-10">
      <li><code>id</code> : Primary Key (unique for each user), auto-increment.</li>
      <li><code>name</code> : User name.</li>
      <li><code>email</code> : Unique user email.</li>
      <li><code>level_id</code> : Foreign Key that references the ID in the levels table, indicating the user's level.</li>
    </ul>
    <li className="font-bold">Table <code>Levels</code> :</li>
    <ul className="list-disc space-y-3 pb-2 pl-10">
      <li><code>id</code> : Primary Key for each level, auto-increment.</li>
      <li><code>level_name</code> : Level name (for example: Subscriber, Admin, Super Admin).</li>
    </ul>
    <li className="font-bold">Relationship :</li>
    <p>The <b>many-to-one</b> relationship between <code>Users</code> and <code>Levels</code> means that one user only has one level, but one level can be owned by many users.</p>
  </ul>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>Screenshot</strong></h3>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1731324716/Screenshot_2024-11-11_182843_lnmxrd.png" 
      alt="Lessons-5-01"
    />
  </p>
</div>


<div class="space-y-3">
  <h3 class="text-lg leading-snug dark:text-zinc-300"><strong>The next step</strong></h3>
  <p>
    Once our ERD is ready, the next step is to implement this table in MySQL. In the next lesson, we will create a model in Flask using SQLAlchemy to represent the <code>Users</code> and <code>Levels</code> tables.
  </p>
</div>