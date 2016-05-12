---
title: Navigation
order: 9
description: 
---

## Navbar
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas deleniti praesentium qui quo nobis quas optio repellendus, asperiores sequi omnis quos dolor suscipit dolorum, impedit ipsam nihil, quod sunt tenetur.

### Basic

<nav class="navbar"><div class="menu h-menu"><a href="#">Link</a><a href="#" class="activated">Link</a><a href="#">Link</a><a href="#">Link</a></div><div class="pull-right"><button type="button" class="button button-clear"><i class="icon-bell"></i><span class="badge badge-notification badge-error">3</span></button></div></nav>

```html
<nav class="navbar">

  <div class="menu h-menu">
    <a href="#">Link</a>
    <a href="#" class="activated">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
  </div>


  <div class="pull-right">
    <button type="button" class="button button-clear">
      <i class="icon-bell"></i>
      <span class="badge badge-notification badge-error">3</span>
    </button>
  </div>

</nav>
```

### With logo and search

<nav class="navbar"><h1 class="title"><img src="/logo/logo.png" height="38" /></h1><div class="menu h-menu"><a href="#">Link</a><a href="#" class="activated">Link</a><a href="#">Link</a><a href="#">Link</a></div><div class="search-toolbar"><input id="input-search" class="input-field" type="search" name="input-search" placeholder="Search" /><button type="submit" class="button button-clear button-search"><i class="icon-search"></i></button></div></nav>

```html
<nav class="navbar">

  <h1 class="title">
    <img src="images/logo.png" height="38" />
  </h1>

  <div class="menu h-menu">
    <a href="#">Link</a>
    <a href="#" class="activated">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
  </div>

  <div class="search-toolbar">
    <input id="input-search" class="input-field" type="search" name="input-search" placeholder="Search" />
    <button type="submit" class="button button-clear button-search">
      <i class="icon-search"></i>
    </button>
  </div>

</nav>
```

## Menu
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum optio ullam, quis autem perspiciatis cum ad provident consequatur itaque expedita ab explicabo sint quos quo reiciendis! Tempora aliquid sed magni!

**`v-menu`** and **`h-menu`** 

### Vertical
<nav class="menu v-menu"><a href="#">Link</a><a href="#" class="activated">Link</a><a href="#">Link</a><a href="#">Link</a></nav>

```html
<nav class="menu v-menu">
  <a href="#">Link</a>
  <a href="#" class="activated">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
</nav>
```

### Horizontal
<nav class="menu h-menu"><a href="#">Link</a><a href="#" class="activated">Link</a><a href="#">Link</a><a href="#">Link</a></nav>

```html
<nav class="menu h-menu">
  <a href="#">Link</a>
  <a href="#" class="activated">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
</nav>
```