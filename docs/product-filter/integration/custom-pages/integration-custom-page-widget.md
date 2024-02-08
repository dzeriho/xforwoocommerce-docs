---
sidebar_position: 3
---

# Widget

There are two layouts you can use when building a products grid on a custom page with a Product Filter widget aside.

## Aside layout

To build in a page builder, we assume you'd use a 2 columned layout. Left you'd put the widgets and on the right you'd probably add the products grid.

Product Filter already knows this and has an `aside` layout already integrated. To use that layout add the **one full columned row** into your page builder.

In the column add the `Shortcode` element from your page builder.

In the `Shortcode` element add the following shortcode

```
[products prdctfltr="aside" ajax="yes"]
```

This method automatically adds Product Filter aside the products grid.

## Page sidebar layout

Another way to add Product Filter to a custom page would be to use the theme sidebars for that custom page.

Shortcode entry for that layout is different and now looks like this.

```
[products prdctfltr="widget" ajax="yes"]
```

This products shortcode only displays the products grid. This is because it expects the Product Filter widget to be displayed in the page sidebar.

In a page builder you can probably add a `+ Product Filter` widget to a column, but you can also use native sidebars in custom pages.

To add a widget to a native sidebar, avigate to the Widgets screen. To a sidebar that is displayed on your custom page add the `+ Product Filter` legacy widget.

Once the Product Filter widget is added to your custom page sidebar, it'll appear on the frontend of the website.

To quickly see if everything is right, visit your custom page and try out the filter. If it happens to work correctly, then everything is set accordingly and the theme you use with your website is recognized, so the filter adjusted and is installed properly.

If this is not the case and Product Filter doesn't work, please visit the Troubleshooting section.

Product Filter can be configured by visiting the Product Filter Settings page. This page is a power-house that runs your Product Filters. All settings are set over there, so let's now go there.

## FAQ

### Q: Why a legacy widget?

**A:** WordPress and WooCommerce are moving away to client side rendering, basically they're moving away from the PHP execution and are starting to use React technology to make the experience much better. WooCommerce recently started recommanding new extensions to be coded the new way. This means, that old plugins, like this one, are becoming legacy PHP plugins until converted to new versions that use React technology. This will not happen over night, so our product is fully ready to serve your website, but in the PHP/legacy technology, until we get the new items out. New items will compel to the new standards and will work so much better, but for now, we cannot make these both products/items the same thing.

**You will be noted about the future updates and changes in technology.**

:::tip
Sometimes you won't have a sidebar for a Shop page. In this case we suggest you use a plugin named `WooSidebars` https://wordpress.org/plugins/woosidebars/ or any similar plugin that manages sidebars. This one will help you add particular sidebars to any criteria set to match. It's pretty useful.
:::

