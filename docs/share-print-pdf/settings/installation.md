---
sidebar_position: 3
---

# Installation

Sometimes theme integration isn't quite right. To adjust how there share buttons are integrated there are a couple of options.

The plugin can be integrated in two ways. One is to replace the share template that WooCommerce uses and the other is to hook it on an action.

The share template in some WooCommerce themes is just empty, but is still displayed on page. If this option is used, it'll replace either this empty space with the share buttons, or perhaps if theme adjusts this template, it'll replace it with the plugin one.

Second option to install is using a hook. Hooks can be added to dynamic actions that are executed on pages as they render in WooCommerce or WordPress. There are many actions you can hook into, but the one that is used in the product pages is the `woocommerce_single_product_summary` and is probably the best one to hook onto. To alter when the share buttons are displayed, you can use the priority number. This number is added to the hook action option in this form `woocommerce_single_product_summary:60`. So, you put a number separated by `:`. To put the share buttons earlier, like before tags and categories, or even short description, use smaller numbers, like 10 etc. If you'd like to output it later, use bigger number for priority.