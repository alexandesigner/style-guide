---
title: Grid
order: 6
description: 
---

## Simple Syntax

All you need to remember is row, column, content.

```html
<div class="row">
    <div class="col-xs-12">
        <div class="box">12</div>
    </div>
</div>
```

## Basic Grid

## Flexbox Grid

Grid based on the flex display property.

### Responsive

Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.

<div class="row"><div class="col-xs-12 col-sm-3 col-md-2 col-lg-1"><div class="box-row"></div></div><div class="col-xs-6 col-sm-6 col-md-8 col-lg-10"><div class="box-row"></div></div><div class="col-xs-6 col-sm-3 col-md-2 col-lg-1"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-12 col-sm-3 col-md-2 col-lg-1"><div class="box-row"></div></div><div class="col-xs-12 col-sm-9 col-md-10 col-lg-11"><div class="box-row"></div></div></div>

### Fluid

Percent based widths allow fluid resizing of columns and rows.

<div class="row"><div class="col-xs-12"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-1"><div class="box-row"></div></div><div class="col-xs-11"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-2"><div class="box-row"></div></div><div class="col-xs-10"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-3"><div class="box-row"></div></div><div class="col-xs-9"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-4"><div class="box-row"></div></div><div class="col-xs-8"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-5"><div class="box-row"></div></div><div class="col-xs-7"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-6"><div class="box-row"></div></div><div class="col-xs-6"><div class="box-row"></div></div></div>

```html
<div class="row">
    <div class="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
        <div class="box">Responsive</div>
    </div>
</div>
```

### Offsets

Offset a column

<div class="row"><div class="col-xs-offset-11 col-xs-1"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-offset-10 col-xs-2"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-offset-9 col-xs-3"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-offset-8 col-xs-4"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-offset-7 col-xs-5"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-offset-6 col-xs-6"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-offset-5 col-xs-7"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-offset-4 col-xs-8"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-offset-3 col-xs-9"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-offset-2 col-xs-10"><div class="box-row"></div></div></div><div class="row"><div class="col-xs-offset-1 col-xs-11"><div class="box-row"></div></div></div>

```html
<div class="row">
    <div class="col-xs-offset-3 col-xs-9">
        <div class="box">offset</div>
    </div>
</div>
```

### Auto Width

Add any number of auto sizing columns to a row. Let the grid figure it out.

<div class="row"><div class="col-xs-7"><div class="box container-grid"><div class="row"><div class="col-xs-9"><div class="box-first container-grid"><div class="row"><div class="col-xs-4"><div class="box-nested"></div></div><div class="col-xs-8"><div class="box-nested"></div></div></div></div></div><div class="col-xs-3"><div class="box-first container-grid"><div class="row"><div class="col-xs"><div class="box-nested"></div></div></div></div></div></div></div></div><div class="col-xs-5"><div class="box container-grid"><div class="row"><div class="col-xs-12"><div class="box-first container-grid"><div class="row"><div class="col-xs-6"><div class="box-nested"></div></div><div class="col-xs-6"><div class="box-nested"></div></div></div></div></div></div></div></div></div>

```html
<div class="row">
    <div class="col-xs">
        <div class="box">auto</div>
    </div>
</div>
```

### Alignment

Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column

**`.start-`**

<div class="row"><div class="col-xs-12"><div class="box container-grid"><div class="row start-xs"><div class="col-xs-6"><div class="box-nested"></div></div></div></div></div></div>

```html
<div class="row start-xs">
    <div class="col-xs-6">
        <div class="box">
            start
        </div>
    </div>
</div>
```

**`.center-`**

<div class="row"><div class="col-xs-12"><div class="box container-grid"><div class="row center-xs"><div class="col-xs-6"><div class="box-nested"></div></div></div></div></div></div>

```html
<div class="row center-xs">
    <div class="col-xs-6">
        <div class="box">
            start
        </div>
    </div>
</div>
```

**`.end-`**

<div class="row"><div class="col-xs-12"><div class="box container-grid"><div class="row end-xs"><div class="col-xs-6"><div class="box-nested"></div></div></div></div></div></div>

```html
<div class="row end-xs">
    <div class="col-xs-6">
        <div class="box">
            end
        </div>
    </div>
</div>
```

Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes.

<div class="row"><div class="col-xs-12"><div class="box container-grid"><div class="row center-xs end-sm start-lg"><div class="col-xs-6"><div class="box-nested"></div></div></div></div></div></div>

```html
<div class="row center-xs end-sm start-lg">
    <div class="col-xs-6">
        <div class="box">
            All together now
        </div>
    </div>
</div>
```

**`.top-`**

<div class="row top-xs"><div class="col-xs-6"><div class="box-large"></div></div><div class="col-xs-6"><div class="box"></div></div></div>

```html
<div class="row top-xs">
    <div class="col-xs-6">
        <div class="box">
            top
        </div>
    </div>
</div>
```

**`.middle-`**

<div class="row middle-xs"><div class="col-xs-6"><div class="box-large"></div></div><div class="col-xs-6"><div class="box"></div></div></div>

```html
<div class="row middle-xs">
    <div class="col-xs-6">
        <div class="box">
            center
        </div>
    </div>
</div>
```

**`.bottom-`**

<div class="row bottom-xs"><div class="col-xs-6"><div class="box-large"></div></div><div class="col-xs-6"><div class="box"></div></div></div>

```html
<div class="row bottom-xs">
    <div class="col-xs-6">
        <div class="box">
            bottom
        </div>
    </div>
</div>
```

### Distribution

Add classes to distribute the contents of a row or column.

**`.around-`**

<div class="row"><div class="col-xs-12"><div class="box container-grid"><div class="row around-xs"><div class="col-xs-2"><div class="box-nested"></div></div><div class="col-xs-2"><div class="box-nested"></div></div><div class="col-xs-2"><div class="box-nested"></div></div></div></div></div></div>

```html
<div class="row around-xs">
    <div class="col-xs-2">
        <div class="box">
            around
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            around
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            around
        </div>
    </div>
</div>
```

**`.between-`**

<div class="row"><div class="col-xs-12"><div class="box container-grid"><div class="row between-xs"><div class="col-xs-2"><div class="box-nested"></div></div><div class="col-xs-2"><div class="box-nested"></div></div><div class="col-xs-2"><div class="box-nested"></div></div></div></div></div></div>

```html
<div class="row between-xs">
    <div class="col-xs-2">
        <div class="box">
            between
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            between
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            between
        </div>
    </div>
</div>
```

### Reordering

Add classes to reorder columns.

**`.first-`** 

<div class="row"><div class="col-xs-12"><div class="box container-grid"><div class="row"><div class="col-xs-2"><div class="box-first">1</div></div><div class="col-xs-2"><div class="box-first">2</div></div><div class="col-xs-2"><div class="box-first">3</div></div><div class="col-xs-2"><div class="box-first">4</div></div><div class="col-xs-2"><div class="box-first">5</div></div><div class="col-xs-2 first-xs"><div class="box-nested">6</div></div></div></div></div></div>

```html
<div class="row">
    <div class="col-xs-2">
        <div class="box">
            1
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            2
        </div>
    </div>
    <div class="col-xs-2 first-xs">
        <div class="box">
            3
        </div>
    </div>
</div>
```

**`.last-`** 

<div class="row"><div class="col-xs-12"><div class="box container-grid"><div class="row"><div class="col-xs-2 last-xs"><div class="box-nested">1</div></div><div class="col-xs-2"><div class="box-first">2</div></div><div class="col-xs-2"><div class="box-first">3</div></div><div class="col-xs-2"><div class="box-first">4</div></div><div class="col-xs-2"><div class="box-first">5</div></div><div class="col-xs-2"><div class="box-first">6</div></div></div></div></div></div>

```html
<div class="row">
    <div class="col-xs-2 last-xs">
        <div class="box">
            1
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            2
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            3
        </div>
    </div>
</div>
```

### Reversing

**`.reverse`**

<div class="row"><div class="col-xs-12"><div class="box container-grid"><div class="row reverse"><div class="col-xs-2"><div class="box-nested">1</div></div><div class="col-xs-2"><div class="box-nested">2</div></div><div class="col-xs-2"><div class="box-nested">3</div></div><div class="col-xs-2"><div class="box-nested">4</div></div><div class="col-xs-2"><div class="box-nested">5</div></div><div class="col-xs-2"><div class="box-nested">6</div></div></div></div></div></div>

```html
<div class="row reverse">
    <div class="col-xs-2">
        <div class="box">
            1
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            2
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            3
        </div>
    </div>
</div>
```
