---
title: Forms
order: 3
description: 
---

## Text fields
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quod esse similique nam culpa praesentium nisi molestiae maxime aliquid ea quibusdam sequi fugit debitis, minus deserunt perspiciatis iure accusamus repellendus.

### Basic

<div class="full-width">
  <label class="input-label" for="input-name">Label for input</label>
  <input id="input-name" class="input-field" type="text" name="input-name" placeholder="user@example.com" />
</div>

```html
<div class="full-width">
  <label class="input-label" for="input-name">Label for input</label>
  <input id="input-name" class="input-field" type="text" name="input-name" placeholder="user@example.com" />
</div>
```

<h2 id="Select-fields">Select fields</h2>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quod esse similique nam culpa praesentium nisi molestiae maxime aliquid ea quibusdam sequi fugit debitis, minus deserunt perspiciatis iure accusamus repellendus.

<div class="box-container">
  <div class="select-field"><select name="select-name" id="select-name"><option id="1">Select name</option><option id="2">Select name</option><option id="3">Select name</option><option id="4">Select name</option></select></div>
</div>

```html
<div class="select-field">
  <select name="select-name" id="select-name">
    <option id="1">Select name</option>
    <option id="2">Select name</option>
    <option id="3">Select name</option>
    <option id="4">Select name</option>
  </select>
</div>
```

<h2 id="Checkbox">Checkbox</h2>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quod esse similique nam culpa praesentium nisi molestiae maxime aliquid ea quibusdam sequi fugit debitis, minus deserunt perspiciatis iure accusamus repellendus.

<div class="checkbox"><input id="check1" type="checkbox" name="check" value="check1"><label for="check1">Checkbox No. 1</label><br><input id="check2" type="checkbox" name="check" value="check2"><label for="check2">Checkbox No. 2</label></div>

```html
<div class="checkbox">
  <input id="check-name" type="checkbox" name="check" value="check-name">
  <label for="check-name">Checkbox No. 1</label>
</div>
```

<h2 id="Radio">Radio</h2>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quod esse similique nam culpa praesentium nisi molestiae maxime aliquid ea quibusdam sequi fugit debitis, minus deserunt perspiciatis iure accusamus repellendus.

<div class="radio"><input id="male" type="radio" name="gender" value="male"><label for="male">Male</label><input id="female" type="radio" name="gender" value="female"><label for="female">Female</label></div>

```html
<div class="radio">
  <input id="male" type="radio" name="gender" value="male">
  <label for="male">Male</label>
  <input id="female" type="radio" name="gender" value="female">
  <label for="female">Female</label>
</div>
```

<h2 id="Toggles">Toggles</h2>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quod esse similique nam culpa praesentium nisi molestiae maxime aliquid ea quibusdam sequi fugit debitis, minus deserunt perspiciatis iure accusamus repellendus.
<div class="toggle"><input id="toggle-1" type="checkbox" class="toggle-input"><label for="toggle-1" class="toggle-label">Toggle</label></div><div class="toggle activated"><input id="toggle-2" type="checkbox" class="toggle-input"><label for="toggle-2" class="toggle-label">Toggle</label></div><div class="toggle disabled"><input id="toggle-3" type="checkbox" class="toggle-input"><label for="toggle-3" class="toggle-label">Toggle</label></div>

```html
<div class="toggle">
  <input id="toggle-1" type="checkbox" class="toggle-input">
  <label for="toggle-1" class="toggle-label">Toggle</label>
</div>
<div class="toggle activated">
  <input id="toggle-2" type="checkbox" class="toggle-input">
  <label for="toggle-2" class="toggle-label">Toggle</label>
</div>
<div class="toggle disabled">
  <input id="toggle-3" type="checkbox" class="toggle-input">
  <label for="toggle-3" class="toggle-label">Toggle</label>
</div>
```