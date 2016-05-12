---
title: Toolbar
order: 7
description: 
---

## Basic
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus expedita optio aut deserunt excepturi, dolor recusandae ducimus. Excepturi autem impedit, hic odio accusantium quis, nihil modi, velit, voluptatem debitis animi.

<header class="toolbar"><div class="toolbar-content"><h1 class="title title-left"><a href="#">Title</a></h1><div class="toolbar-left"><button type="button" class="button button-clear"><i class="icon-menu-2"></i></button></div><div class="toolbar-right"><div class="search-toolbar"><input id="input-search" class="input-field" type="search" name="input-search" placeholder="Search" /><button type="submit" class="button button-clear button-search"><i class="icon-search"></i></button></div></div></div></header>

```html
<!-- Toolbar default -->
<header class="toolbar">

	 <!-- Toolbar content -->
  <div class="toolbar-content">

			 <!-- Toolbar title -->
    <h1 class="title title-left">
      <a href="#">Page Template</a>
    </h1>

			 <!-- Toolbar left -->
    <div class="toolbar-left">
      <button type="button" class="button button-clear">
        <i class="icon-left-2"></i>
      </button>
    </div>

			 <!-- Toolbar right -->
    <div class="toolbar-right">

	  		 <!-- Search box -->
      <div class="search-toolbar">
        <input id="input-search" class="input-field" type="search" name="input-search" placeholder="Search" />
        <button type="submit" class="button button-clear button-search">
          <i class="icon-search"></i>
        </button>
      </div>
    </div>

  </div>
</header>
```

## With Title
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est aliquid illum laudantium quae veritatis esse et nesciunt, vitae blanditiis molestias eos nemo modi voluptas commodi voluptates beatae. Deleniti, sapiente, dolorum!

<header class="toolbar toolbar-positive"><div class="toolbar-content"><h1 class="title"><img src="/logo/logo-white.png" /></h1><div class="toolbar-left"><button type="button" class="button button-clear"><i class="icon-menu-2"></i></button></div><div class="toolbar-right"><button type="button" class="button button-clear"><i class="icon-search"></i></button></div></div><div class="sub-header"><span class="sub-title">SUB TITLE</span></div></header>

```html
<!-- Toolbar with Sub header title -->
<header class="toolbar toolbar-assertive">

	 <!-- Toolbar content -->
  <div class="toolbar-content">
	
	   <!-- Toolbar title -->
    <h1 class="title">
      <img src="../images/logo-white.png" />
    </h1>

		  <!-- Toolbar left -->
    <div class="toolbar-left">
      <button type="button" class="button button-clear">
        <i class="icon-menu-2"></i>
      </button>
    </div>

		  <!-- Toolbar right -->
    <div class="toolbar-right">
      <button type="button" class="button button-clear">
        <i class="icon-search"></i>
      </button>
    </div>

  </div>

	 <!-- Sub header title -->
  <div class="sub-header">
    <span class="sub-title">
      SUB TITLE
    </span>
  </div>

</header>
```

## With Breadcrumb
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est aliquid illum laudantium quae veritatis esse et nesciunt, vitae blanditiis molestias eos nemo modi voluptas commodi voluptates beatae. Deleniti, sapiente, dolorum!

<!-- Toolbar with Breadcrumb -->
<header class="toolbar toolbar-positive"><div class="toolbar-content"><h1 class="title"><img src="/logo/logo-white.png" /></h1><div class="toolbar-left"><button type="button" class="button button-clear"><i class="icon-menu-2"></i></button></div><div class="toolbar-right"><button type="button" class="button button-clear"><i class="icon-search"></i></button></div></div><div class="sub-header"><div class="breadcrumb"><ul class="no-style"><li><a href="#" title="Link">Link</a></li><li><a href="#" title="Link">Link</a></li><li>Link</li></ul></div></div></header>

```html
<!-- Toolbar with breadcrumb -->
<header class="toolbar toolbar-positive">

	 <!-- Toolbar content -->
  <div class="toolbar-content">

  		<!-- Toolbar title -->
    <h1 class="title">
      <img src="../images/logo-white.png" />
    </h1>

		  <!-- Toolbar left -->
    <div class="toolbar-left">
      <button type="button" class="button button-clear">
        <i class="icon-menu-2"></i>
      </button>
    </div>
	
		  <!-- Toolbar right -->
    <div class="toolbar-right">
      <button type="button" class="button button-clear">
        <i class="icon-search"></i>
      </button>
    </div>

  </div>

	 <!-- Sub header -->
  <div class="sub-header">

  		<!-- module/breadcrumb-->
    <div class="breadcrumb">
      <ul class="no-style">
        <li>
          <a href="#" title="Link">
            Link
          </a>
        </li>
        <li>
          <a href="#" title="Link">
            Link
          </a>
        </li>
        <li>
            Link
        </li>
      </ul>
    </div>
  </div>

</header>
```