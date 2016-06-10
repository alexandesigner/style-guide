---
title: Dialogs
order: 18
description: 
---


## Dark
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur earum suscipit, expedita magni vel accusamus libero inventore, velit quidem maiores, architecto incidunt! Voluptate fuga recusandae adipisci excepturi, dolor maiores voluptatibus!

<a href="#dialog1" class="button button-info" data-dialog="modalDialog">Button</a><div id="dialog1" class="overlay"><div class="dialog"><span>Dialog box</span><a class="close" href="#">&times;</a></div></div>

```html
<!-- button click -->
<a href="#dialog1" class="button button-info" data-dialog="modalDialog">
	Data Dialog
</a>

<!-- Dialog box -->
<div id="dialog1" class="overlay">
  <div class="dialog">
    <h2>Dialog Title</h2>
    <a class="close" href="#">&times;</a>
  </div>
</div>
```

## Light
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ea sequi consectetur! Fugit possimus expedita, nulla quidem, dolor amet, culpa repellendus architecto, alias nemo voluptate quia est temporibus. Expedita, dolor?

<a href="#dialog2" class="button button-error">Button</a><div id="dialog2" class="overlay light"><a class="cancel" href="#"></a><div class="dialog"><strong>Dialog box</strong><div class="content"><p>Click outside the dialog to close.</p></div></div></div>


```html
<!-- button click -->
<a href="#dialog2" class="button button-assertive">Button</a>

<!-- Dialog box -->
<div id="dialog2" class="overlay light">
  <a class="cancel" href="#"></a>
  <div class="dialog">
    <h2>Dialog Title</h2>
    <div class="content">
      <p>Click outside the dialog to close.</p>
    </div>
  </div>
</div>
```
