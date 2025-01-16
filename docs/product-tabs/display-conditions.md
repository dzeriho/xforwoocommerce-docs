---
sidebar_position: 10
---

# Display conditions

Best way to learn our conditions is to show a few samples. Every line is one condition and is explained what it does.

- `is_single:my-product-slug` - Show on a product page that matches slug my-product-slug (you can use IDs as well)
- `!is_single:my-product-slug` - Hide on a product page that matches slug my-product-slug
- `is_single:slug-1,slug-2,slug-5` - Show on product pages with slugs slug-1, slug-2 and slug-5 (use comma to separate)
- `!is_single:slug-1,slug-2,slug-5` - Hide on product pages with slugs slug-1, slug-2 and slug-5
- `has_term:green` - Show on product pages that have green term from color attributes perhaps or tags etc.
- `!has_term:green` - Hide on product pages that have green term from color attributes perhaps or tags etc.
- `has_term:xl,xxl,xxxl` - Show on product pages that have terms xl, xxl or xxxl
- `!has_term:xl,xxl,xxxl` - Hide on product pages that have terms xl, xxl or xxxl

So, use these two, but maybe use more conditional tags in this form `function:term(s)`. Any WordPress or WooCommerce conditional function that makes sence should work. Use terms (slugs) or IDs. IDs are permanent and term slugs may change. Decide wisely.