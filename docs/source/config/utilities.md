---
title: Utilities
order: 4
description: 
---

Tips, techniques, and best practice on using Cascading Style Sheets.


## Mobile First

The Mobile First is the design strategy that takes priority development for mobile devices like smartphones and tablets. It means all styles outside of a media queries apply to all devices, then larger screens are targeted for enhancement. This prevents small devices from having to parse tons of unused CSS. Style Guide use some breakpoints like these:

- No screen: **``0``** - **``319px``**
- Mobile Portrait screen: **``320px``** - **``519px``**
- Mobile Landscape screen: **``520px``** - **``767px``**
- Tablet screen: **``768px``** - **``939px``**
- Desktop screen: **``940px``** - **``1279px``**
- Widescreen: **``only screen``** - **``1280px``**

**Using helpers on SCSS:**

- **``@include no-screen {...}``**
- **``@include portrait {...}``**
- **``@include landscape {...}``**
- **``@include tablet {...}``**
- **``@include desktop {...}``**
- **``@include widescreen {...}``**

Hide Screens display:

- **``.hide-no-screen``** / **``0``** - **``319px``** 
- **``.hide-portrait``** / **``320px``** - **``519px``**
- **``.hide-landscape``** / **``520px``** - **``767px``**
- **``.hide-tablet``** / **``768px``** - **``939px``**
- **``.hide-desktop``** / **``940px``** - **``1279px``**
- **``.hide-widescreen``** / **``only screen``** - **``1280px``**

## Alignments

- **``.full-width``** Display block width
- **``.full-height``** Display block height
- **``.pull-left``** put elements on left
- **``.pull-right``** put elements on right
- **``.pull-none``** clear elements floating

## Tips and Text

- **``.align-center``** or **``.title-center``** put elements, text or images on center
- **``.align-left``** or **``.title-left``** put elements, text or images on left
- **``.align-right``** or **``.title-right``** put elements, text or images on right
- **``.muted``** Text light opacity
- **``.informative``** Cursor helper
- **``.truncate``** Truncate text, adding ellipsis
- **``.label``** Text label, date, secondary element

## Show/Hide

- **``.indent``** Indented text, hidden
- **``.hide``** or **``[hidden]``** Hide elements
- **``.show``** Show elements

## Margins/Paddings

Add margins and padding to 0 to 50px on positions top, left, bottom and right

**Number**: Add numbers **``5``** **``10``** **``15``** **``20``** **``25``** **``30``** **``40``** **``50``**
**Position**: Add positions **``top``** **``bottom``** **``left``** **``right``**

- **``.no-margin``** No margin element
- **``.no-margin-[position]``** No Margin Position
- **``.margin-[position]-[number]``** Add Margin Position Number
- **``.no-padding``** No Padding element
- **``.no-padding-[position]``** No Padding Position
- **``.padding-[position]-[number]``** Add Padding Position Number