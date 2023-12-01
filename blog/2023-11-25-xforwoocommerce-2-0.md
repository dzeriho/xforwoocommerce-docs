---
slug: xforwoocommerce-2-0-change-log
title: XforWooCommerce 2.0 Change Log
authors:
  name: XforWooCommerce
  title: Maintainer of Code
  url: https://github.com/dzeriho
  image_url: https://avatars.githubusercontent.com/u/5435570
tags: [woocommerce, xforwoocommerce, ecommerce, wordpress, docs]
---

**XforWooCommerce 2.0 - Released November 25. 2023.**

The changes made in this update are large. We belive in these new settings and principles as they will make room for more progress.

If you have any concerns use our Help Center here https://help.xforwoocommerce.com

The most important thing. To use the new version, you will have to activate the plugin, one license per website will work.

### Product Filter 9.0.0
- fixed array_unique problems for terms selection
- fixed thumbnail size bug
- fixed multicurrency support
- fixed prepare query standards
- fixed filter title on empty pages
- fixed WPML issues
- fixed terms customizations and WPML
- fixed one row display
- fixed popups on right opening properly
- improved visible/hidden filters and close button. Additionally, in widget areas this option now works, so if your widgets are hidden and they were not before, make sure you set the Always Visible option correctly in your filter presets
- changed widget appearance settings (widgets and elements are now more standardized). Now it's common to have a wide widget area, so we cannot limit widgets to 1 column anymore. If something breaks with your widgets, like you have more columns and there was only one in the sidebar, make sure you set 1 column in your filter preset
- deprecated widget style option
- updated js dependencies
- general plugin performance improvements

### Product Options 6.0.0
- fixed multicurrency and prices support

### Product Badges 5.0.0
- added shortcode support to detect when in the product loop
- fixed admin badge preview problems

### Bulk Add to Cart 2.0.0
- fixed multicurrency

### Search Engine Optimization (SEO) 2.0.0
- removed alexa rating

### XforWooCommerce 2.0.0
- all XforWooCommerce code is cleaned with a **PHPCodeSniffer** on **WordPress-Core** standards and all noteable errors were fixed. This means that the items are more reliable than ever
- added compatibility confirmation for HPOS storage (High-performance order storage which is now recommended)
- Warranties and Returns for WooCommerce is deprecated and discontinued
- Live Editor for WooCommerce is deprecated and discontinued

:::info
Our servers run WordPress 6.4.1, WooCommerce 8.3.1 and XforWooCommerce 2.0.0 using VestaCP NGINX, PHP 8.2.12.
:::
