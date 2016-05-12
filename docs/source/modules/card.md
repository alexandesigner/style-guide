---
title: Card
order: 13
description: 
---

## Basic
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deleniti reprehenderit velit hic, assumenda incidunt ut corporis quis, eaque sapiente ullam voluptatibus magni fugiat harum cupiditate quibusdam asperiores molestiae esse!

<div class="card"><div class="card-content">Hello my friend</div></div>

```html
<div class="card">
	<div class="card-content">
		Basic card
	</div>
</div>
```

## With header and footer
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus tempore sit ipsam, ipsa dolor perspiciatis soluta ducimus vel architecto debitis. Enim dolores consequatur, quos quae dignissimos asperiores. Aspernatur, iure, doloremque!

<div class="card"><header class="card-header card-icon-left card-icon-right"><span class="card-title"><img src="/logo/logo.png" height="32" /></span><div class="card-header-left"><button type="button" class="button button-clear"><i class="icon-menu"></i></button></div><div class="card-header-right"><button type="button" class="button button-clear"><i class="icon-export"></i></button><button type="button" class="button button-clear"><i class="icon-cog-2"></i></button></div></header><div class="card-content">Hello my friend !</div><footer class="card-footer">Footer</footer></div>

```html
<section class="panel">
  <header class="panel-header panel-icon-left panel-icon-right">
 
    <h2 class="panel-title">
      Panel title
    </h2>

    <div class="panel-header-left">
      <button type="button" class="button button-clear">
        <i class="icon-menu"></i>
      </button>
    </div>

    <div class="panel-header-right">
      <button type="button" class="button button-clear">
        <i class="icon-export"></i>
      </button>
      <button type="button" class="button button-clear">
        <i class="icon-cog-2"></i>
      </button>
    </div>

  </header>
  <div class="panel-content">
    Panel Content
  </div>
  <footer class="panel-footer">
    Panel Footer
  </footer>
</section>
```

## Placeholder

<div class="placeholder">Hello my friend !</div>

```html
<div class="placeholder">
  Placeholder
</div>
```