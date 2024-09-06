<p>
Oh My Posh is a tool that lets you customize the appearance of your terminal prompt with rich themes and additional information. Here are the steps to install it and configure your terminal on Windows.
</p>

> Prerequisites
<div class="space-y-3">
  <p>
    Before starting, ensure you have:
  </p>
  <ol className="list-disc space-y-3 pb-2 pl-10">
    <li>
      <p>PowerShell version 7.x or later (recommended for full functionality).</p>
    </li>
    <li>
      <p>Windows Terminal or Command Prompt (supports Unicode and TrueColor).</p>
    </li>
    <li>
      <p>Winget (Windows Package Manager) installed on your system.</p>
    </li>
  </ol>
</div>

> Installation Steps

<div class="space-y-3">
  <h4><strong>Step 1: Install Oh My Posh Using Winget</strong></h4>
  <ol className="list-decimal space-y-3 pb-2 pl-10">
  <li>
    <p>Open PowerShell.</p>
  </li>
  <li>
    <p>Install Oh My Posh by running the following command:</p>

```bash
winget install JanDeDobbeleer.OhMyPosh -s winget
```
  </li>
  <li>
    <p>This command will download and install Oh My Posh from the Winget repository. Wait until the installation completes.</p>
  </li>
  </ol>

  <p><strong>Screenshot: </strong></p>
  <p>If you have installed it before, the result will be like this</p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725628801/Screenshot_2024-09-06_201816_cgbmip.png" 
      alt="Already Install Oh My Posh" 
    />
  </p>
  <p>If you have just done the installation, the result might be like this</p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725625910/Screenshot_Installation_Oh_My_Posh_faezji.png" 
      alt="Successfully Install Oh My Posh" 
    />
  </p>
</div>


<div class="space-y-3">
  <h4><strong>Step 2: Set Up Oh My Posh Theme</strong></h4>
  <ol className="list-decimal space-y-3 pb-2 pl-10">
  <li class="pb-4">
    <p><strong>Themes Location</strong>: After installing Oh My Posh, themes are typically located at:</p>

```bash
C:\Users\<yourname>\AppData\Local\Programs\oh-my-posh\themes
```
  
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725629538/Screenshot_2024-09-06_203155_vtdcj6.png" 
      alt="Themes Location Oh My Posh" 
    />
  </p>
  </li>


  <li class="pb-4">
    <p><strong>Edit PowerShell Profile</strong>: To change your theme, adjust the init script in your PowerShell profile. Open the profile using the command:</p>

```bash
notepad $PROFILE
```
  <p class="pb-2">This command will open your PowerShell profile file in Notepad. If the file doesn’t exist, you’ll be prompted to create it.</p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725632164/Screenshot_2024-09-06_211531_dowmgz.png" 
      alt="Notepad files Oh My Posh" 
    />
  </p>
  </li>
  
  <li class="pb-4">
    <p>
      <strong>Edit PowerShell Profile</strong>: To change your theme, adjust the init script in your PowerShell profile. Open the profile using the command:
    </p>

```bash
$path_theme = "C:\Users\<yourname>\AppData\Local\Programs\oh-my-posh\themes"
& ([ScriptBlock]::Create((oh-my-posh init pwsh --config "$path_theme\jandedobbeleer.omp.json" --print) -join "`n"))
```
  <p class="pb-2">
    Replace <code>jandedobbeleer.omp.json</code> with your desired theme file from the themes location.
  </p>
  <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
    <img 
      src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725628809/Screenshot_2024-09-06_201934_tytmjv.png" 
      alt="Notepad files Oh My Posh" 
    />
  </p>
  </li>


  <li class="pb-4">
    <p class="pb-2">
      <strong>Save and Close</strong> the Notepad, then restart PowerShell to apply the changes.
    </p>
    <p class="rounded-xl w-full border border-zinc-200 dark:border-zinc-800">
      <img 
        src="https://res.cloudinary.com/aiiimmmm/image/upload/v1725631289/Screenshot_2024-09-06_210103_lzfksm.png" 
        alt="Done Oh My Posh" 
      />
    </p>
  </li>
  </ol>
</div>
