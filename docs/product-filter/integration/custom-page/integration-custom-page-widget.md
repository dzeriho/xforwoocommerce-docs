---
sidebar_position: 3
---

# Widget

## Aside integration

To build such layout in a page builder, we assume you'd use a 2 columned layout. Left you'd put the widgets and on the right you'd probably add the products grid.

Product Filter already knows this and has an `aside` layout already integrated. To use that layout add the **one full columned row** into your page builder.

In the column add the `Shortcode` element from your page builder.

In the `Shortcode` element add the following shortcode

```
[products prdctfltr="aside" ajax="yes"]
```

This method automatically adds Product Filter aside the products grid.

## Page sidebar integration

Another way to add Product Filter to a custom page would be to use the theme sidebars for that custom page. You can use the `WooSidebars` plugin to achieve more if your theme doesn't support creating new sidebars.

Shortcode entry for that layout is different and now looks like this.

```
[products prdctfltr="widget" ajax="yes"]
```

This products shortcode only displays the products grid, it doesn't show the Product Filter aside like the `Aside integration` would. This is because we expect the Product Filter widget to be displayed in the page sidebar.
