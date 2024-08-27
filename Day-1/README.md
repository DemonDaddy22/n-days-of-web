# DAY 1

## Flexbox

_Tag_: CSS

The flexible box layout module (usually referred to as flexbox) is a one-dimensional layout model for distributing space between items and includes numerous alignment capabilities. When we describe flexbox as being one-dimensional we are describing the fact that flexbox deals with layout in one dimension at a time — either as a row or as a column. This can be contrasted with the two-dimensional model of CSS Grid Layout, which controls columns and rows together. When working with flexbox you need to think in terms of two axes — the main axis and the cross axis.

For more info, refer to the [flexbox documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) on MDN web docs.

### Useful points

- We can use a shorthand property `flex-flow` to set **flex-direction** and **flex-wrap** values.

eg.

```css
display: flex;
flex-flow: row wrap;
```

- When a flex container has **positive free space**, it has more space than required to display the flex items inside the container. A flex container has **negative free space** when the combined value of the natural sizes of the flex items is larger than the available space in the flex container.
- `flex-grow` defaults to 0, meaning the flex item won't grow by default even if some space is available in the flex container.
- `flex-shrink` defaults to 1, meaning the flex item would shrink even less than the size specified using flex-basis when negative free space is distributed among all the items.
- `flex-basis` property specifies the initial size of a flex item before any distribution of the positive or negative free space happens. It defaults to auto, meaning the flex item would take the size of item (width/height depending upon main axis) if specified, or falls back to the size of content in the item.
- We can use the shorthand property `flex` to set **flex-grow**, **flex-shrink** and **flex-basis** values.

eg.

```css
display: flex;
flex: 0 1 auto; /* or we could simply use flex: initial */
```

- We can target individual items and change where they appear in the visual order with the `order` property. We can also specify negative values which could be useful in placing a particular item at the start of the flexbox without disturbing the order of other flex items. _Note_: Use of the order property has the same implications for accessibility. Using order changes the order in which items are painted, and the order in which they appear visually. It does not change the sequential navigation order of the items.
- We can use the shorthand property `gap` to set **row-gap** and **column-gap** values and create gaps or gutters between the flex items.
- When dealing with multiple-line flex containers, the wrapping is re-done after collapsing. So the browser needs to re-do the wrapping behavior to account for the new space that the collapsed item has left in the inline direction.
