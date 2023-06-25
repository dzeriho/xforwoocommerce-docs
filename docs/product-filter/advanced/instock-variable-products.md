---
sidebar_position: 2
---

# Variable Products In Stock/Out of Stock

Product Filter has the ability to filter in stock and out of stock variable products. For this to work, products need to be set out correctly. This guide will explain the basic principles behind it.

## In stock/Out of stock variable products filtering

To achieve this filtering products need to be configured properly. Basically all products require all information and it needs to be correct and inline to get the results.

### So, how does it work?

A variable product is defined by its variations. The variations are defined by the product attributes used for variations.

To make things work properly follow these next steps.

1. Make sure you assign only attribute terms that are used in variations. For example. If you have a shirt with size terms XS, S, M, L and XL, but the current product only has 3 variations of S, M and L, you'll assing only these three attributes in your Products Attributes tab.
2. Next step is to configure the product variations properly. If you manage stock, any product variation that hits `0` in stock will become `out of stock` and it'll be detected by the filter. This process happens automatically, if a customer orders the last item. Other variations that have the stock quantity option `larger than 0` will show as `in stock`.
3. If you don't manage product stock, setting a product manually to `out of stock` will result in detecting this product when searched. When option is set to `in stock` product will be detected as is.
4. In our example, we would need to have a filter for product size, where all terms are present. When term `L` is selected and the `In stock` filter is checked product with the `out of stock` detection should be hidden.
5. If the `In stock` filter is not selected, product should be marked with the out of stock badge. This is a Product Filter badge and can be styles with CSS if you need it.
6. To summarize, basically you need to set the terms straight and use correct values.

## FAQ

### Q: Why don I need to set only these terms to the product?

**A:** The problem here is known, the products are filtered by their added attributes, not variations, so this complex process requires some calculations and only exact matches work. Currently better solution isn't available anywhere to my knowledge, correct me if I'm wrong. Thanks.

