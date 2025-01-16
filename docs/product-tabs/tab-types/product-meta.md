---
sidebar_position: 5
---

# Tabs from product meta

Product meta tabs allow you to read product meta keys and render tabs by using their data. Any tab type is supported when working with product meta. For instance, you can make a table from CSV tab by using a meta key that holds value of a CSV file URL, or you can show an image by reading its URL from the product meta.

To create such a tab use the tab type product meta and follow these steps:

- Select the tab type product meta and click **Add Item+**
- New tab will appear, set the meta key to read from e.g. `_custom_meta_key`
- Set the value type. In this sample, we use the table from CSV type, so that we can read the key that will provide a link to the CSV file
- Set the **Add product filed** option if you want this meta key and value visible on the product edit screen in the WordPress dashboard
- Set rendering of the CSV values you need, for details on this visit the table from CSV guide
- Hit **Save** and you're done!


:::tip
Meta keys are any values in the database associated with the product. To add product meta key you can use the database editor itself, or the WordPress function update_post_meta() for complex things, or you can switch on our plugin option to show this meta key and value direcly on your product edit screen in WordPress dashboard.
:::

## Sample

```php
$product_id = 123; // Replace with your product ID
$meta_key = '_custom_meta_key'; // Use a unique meta key
$meta_value = 'https://myurl.com/csvfiles/my-table-01.csv'; // The value to store

// Add or update the meta value for the product
update_post_meta($product_id, $meta_key, $meta_value);
```

This code adds a product meta key named `_custom_meta_key` with an URL of a CSV file. This code should be only run once of course. So, if you're doing something wild, know what you're doing.

Versitility here is the key. With these product tab options you'll cover pretty much any use you can think of, and probably imagine more things you can use and make your shop better and more converting.