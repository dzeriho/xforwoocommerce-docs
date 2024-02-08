---
slug: xforwoocommerce-2-0-2-change-log
title: XforWooCommerce 2.0.2 Change Log
authors:
  name: XforWooCommerce
  title: Maintainer of Code
  url: https://github.com/dzeriho
  image_url: https://avatars.githubusercontent.com/u/5435570
tags: [woocommerce, xforwoocommerce, ecommerce, wordpress, docs]
---

### XforWooCommerce 2.0.2 - 12/22/2023 Released

The changes made in this update are large. We belive in these new settings and principles as they will make room for more progress.

If you have any concerns use our Help Center here https://help.xforwoocommerce.com

The most important thing. To use the new version, you will have to activate the plugin, one license per website will work.

### Product Filter 9.0.2
- Fixed array_unique problems for terms selection
- Fixed thumbnail size bug
- Fixed multicurrency support
- Fixed prepare query standards
- Fixed filter title on empty pages
- Fixed WPML issues
- Fixed terms customizations and WPML
- Fixed one row display
- Fixed popups on right are now opening properly
- Improved visible/hidden filters and close button. Additionally, in widget areas this option now works, so if your widgets are hidden and they were not before, make sure you set the Always Visible option correctly in your filter presets
- Improved CSS
- Changed widget appearance settings (widgets and elements are now more standardized). Now it's common to have a wide widget area, so we cannot limit widgets to 1 column anymore
- Deprecated widget style option
- Added widget option to force one column
- Added widget option not to use theme widget titles. This caused some problems before, switching it off can work for some installs
- Updated JS dependencies
- General plugin performance improvements
- Fixed PHP deprecated creation of dynamic property
- Fixed problems with removing adoptive active and unclickable terms

### Product Options 6.0.2
- Fixed multicurrency and prices support
- Fixed term display glitches on shop page
- Fixed automatic/manual installation product prices problems
- Improved CSS

### Product Badges 5.0.2
- Added shortcode support to detect when in the product loop
- Fixed admin badge preview problems

### Bulk Add to Cart 2.0.2
- Fixed multicurrency

### Search Engine Optimization (SEO) 2.0.2
- Removed alexa rating

### PDF, Share and Print 2.0.2
- Replaced twitter with x icon
- Added Viber and WhatsApp shares
- Changed network share icons. Brandnames have brand guidelines, so from now on we'll follow those

### Floating Cart 2.0.2
- Fixed text options

### XforWooCommerce 2.0.2
- XforWooCommerce code is cleaned with a **PHPCodeSniffer** on **WordPress** standards and all noteable errors were fixed. This means that the items are more reliable than ever
- Added compatibility confirmation for HPOS storage (High-performance order storage which is now recommended)
- Warranties and Returns for WooCommerce is deprecated and discontinued
- Live Editor for WooCommerce is deprecated and discontinued
- Fixed SVX get_option problems with default options

**This release is tested on WordPress 6.4.2, WooCommerce 8.4.0 and XforWooCommerce 2.0.2 using VestaCP NGINX, PHP 8.2.12.**
