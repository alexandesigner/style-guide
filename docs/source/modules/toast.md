---
title: Toast
order: 23
description: 
---

Toasts are used to show alert or information to users.

**`info`** **`error`** **`success`** **`assertive`** 

<div class="toast"><button type="button" class="button button-clear close"><i class="icon-cancel-3"></i></button><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="toast toast-error"><button type="button" class="button button-clear close"><i class="icon-cancel-3"></i></button><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class="toast toast-info toast-rounded"><button type="button" class="button button-clear close"><i class="icon-cancel-3"></i></button><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>

```html
<!-- Basic Toast -->
<div class="toast">
    <button type="button" class="button button-clear close">
      <i class="icon-cancel-3"></i>
    </button>
    <p>
      Text
    </p>
</div>

<!-- Toast Rounded -->
<div class="toast toast-rounded">
    <button type="button" class="button button-clear close">
      <i class="icon-cancel-3"></i>
    </button>
    <p>
      Text
    </p>
</div>
```