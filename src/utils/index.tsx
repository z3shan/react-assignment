/**
 * Utility function for conditionally joining CSS class names
 * 
 * This function takes any number of class name strings or undefined values,
 * filters out falsy values, and joins the remaining classes with a space.
 * Useful for combining Tailwind CSS classes conditionally.
 * 
 * @param classes - Array of class name strings or undefined values
 * @returns Combined class names as a single string
 * 
 * @example
 * cn('base-class', condition && 'conditional-class', undefined)
 * // Returns: 'base-class conditional-class' if condition is true
 * // Returns: 'base-class' if condition is false
 */
export const cn = (...classes: (string | undefined)[]) => {
    return classes.filter(Boolean).join(' ');
};
