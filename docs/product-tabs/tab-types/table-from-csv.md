---
sidebar_position: 1
---

# Table from CSV

This product tab type lets you render a tables from CSV files. Rendering supports images, HTML and shortcodes that can replace CSV values adding versitile rendering options. CSV files once updated will reflect on your rendered website tables.

To create such a product table, upload a CSV file to your WordPress website and set it as a CSV file option in this newly created tab.

Rendering options by replacing CSV values is available using the **CSV Values** manager.

If you want to replace for instance all string of "Checked" with an icon image of a checkmark follow these steps:

- In the **CSV Values** manager select **Image** type and click **Add Item+**
- Set the name of this replace option
- Set the CSV string to replace, use something unique not to replace everything, like better to replace **%%CHECKED%%** string then just simple number **1** which might occure in the headings as well etc.
- Now, set the image that will replace this string
- In order to save the options click the **Save** button

:::tip
Plugin options are not saved unless the **Save** button is pressed. So, you can set and edit options, make changes as much as you like, but for these new settings to take effect, you need to click the **Save** button!
:::

The CSV table render will replace all occurences of this string with a set image. Check this demo page for reference https://demos.xforwoocommerce.com/product/brandy-display/

Using the same principle use the other value type such as HTML or shortcode to achieve different rendering effects.