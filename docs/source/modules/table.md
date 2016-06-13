---
title: Table
order: 22
description: 
---

The Table element represents data in two dimensions or more. We encourage the use of proper formatting with **``<thead>``** and **``<tbody>``** to create a **``<table>``**. The code becomes cleaner without disturbing understanding.

Add the class **``.table``** to any **``<table>``** element. The class will add padding, border and emphasized table header. Use **``.striped``** to add zebra striped style. For hoverable table rows, you can add the class **``.hoverable``** to enable hover style.

<div class="box-container">

<table class="bordered striped"><thead><tr><th scope="col">Name</th><th scope="col">E-mail</th><th scope="col">Job role</th></tr></thead><tbody><tr><td>Célula 3</td><td>Célula 4</td><td>Célula 4</td></tr><tr><td>Célula 3</td><td>Célula 4</td><td>Célula 4</td></tr><tr><td>Célula 3</td><td>Célula 4</td><td>Célula 4</td></tr><tr><td>Célula 3</td><td>Célula 4</td><td>Célula 4</td></tr><tr><td>Célula 3</td><td>Célula 4</td><td>Célula 4</td></tr></tbody></table>

</div>

```html
<table class="bordered striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Job role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Célula 3</td>
      <td>Célula 4</td>
      <td>Célula 4</td>
    </tr>
    <tr>
      <td>Célula 3</td>
      <td>Célula 4</td>
      <td>Célula 4</td>
    </tr>
    <tr>
      <td>Célula 3</td>
      <td>Célula 4</td>
      <td>Célula 4</td>
    </tr>
    <tr>
      <td>Célula 3</td>
      <td>Célula 4</td>
      <td>Célula 4</td>
    </tr>
    <tr>
      <td>Célula 3</td>
      <td>Célula 4</td>
      <td>Célula 4</td>
    </tr>
  </tbody>
</table>
```
