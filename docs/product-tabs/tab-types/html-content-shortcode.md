---
sidebar_position: 4
---

# HTML, content and shortcodes

Adding more versitile content can be done using the text, HTML, shortcode tab type. Here you can even create your own shortcode that can depend on product condition, etc. like category, and then show appropriate content. To do this, use and create a new tab of the text, HTML, shortcode type:

- Set the tab type to text, HTML, shortcode and click **Add Item+**
- Newly created tab will appear in the manager, enter a name for this tab
- In the textarea enter your content that will appear in the tab
- Hit **Save** button

:::tip
For advanced use, create your own shortcodes and use WooCommerce conditional functions inside to show advanced content.
:::


Once completed a newly created product tab will appear and show the content you've set.

## A sample

Here's a sample, we'll create a simple shortcode that'll read the color attribute and set a square of that color etc.

Put this code in your child theme `functions.php` file. This code adds a new WordPress shortcode that you can use in the shortcodes tab. You can make a custom function of your own that'll do whatever you need. This one detects the first term of product color attribute and displays it in a small square swatch.

```php
add_shortcode('my_element_for_product_tab', 'my_element_for_product_tab_shortcode');
function my_element_for_product_tab_shortcode( $atts ) {
    $html = '';

    if (is_product()) {
        $color_terms = wp_get_post_terms( get_the_ID(), 'pa_color' );

        if (!is_wp_error($color_terms) && !empty($color_terms)) {
            // Get the slug of the first color term
            $first_color_slug = $color_terms[0]->slug;

            $html = '<div style="display:inline-block;width:20px;height:20px;background-color:' . $first_color_slug . '" />';
        } else {
            error_log( 'No color term found for this product.' );
        }
    }

    return $html;
}
```

Once this is in the `functions.php`file, create a tab, and in the textearea content put the shortcode `[my_element_for_product_tab]`. Hit **Save** button.