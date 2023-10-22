# JavaScript Notes

1. **Avoid Using 'var':** 
   Avoid using 'var' due to issues with block scope and functional scope.

2. **let AccountState:**
   When using 'let', the variable is initially 'undefined' by default.

3. **"use strict";**
   Use the "use strict" directive to treat all JavaScript code as a newer version.

4. **Type of undefined:** 
   The type of 'undefined' is 'undefined'.

5. **Type of null:** 
   The type of 'null' is 'object'.

6. **Type Conversions:**
   - When converting 'null', the value becomes 0.
   - Converting strings like "33abc" or "dhruv" results in 'NaN'.
   - Converting 'undefined' also results in 'NaN'.
   - Converting 'true' yields 1, and 'false' yields 0.

7. **Boolean Conversions:**
   - Converting 1 results in 'true', and 'false' becomes 0.
   - An empty string ("") becomes 'false', while non-empty strings become 'true'.

8. **Equality Checks:**
   The equality check '==' and comparisons ('>', '<', '>=', '<=') work differently. For example, 'null' is converted to a number, treating it as 0, which is why 'null >= 0' is true, but 'null == 0' is false.

9. **Strict Equality:**
   Use '===' for strict equality, which also checks the data type. For example, '"2" === 2' evaluates to 'false'.

10. **JavaScript Data Types:**
    - Primitive Types (Copy of variable):
      - String
      - Boolean
      - Number
      - Symbol
      - Null
      - Undefined
      - BigInt
    - Non-Primitive Types (Reference):
      - Array
      - Functions
      - Objects

11. **Memory Types:**
    - Stack (for Primitive types)
    - Heap (for Non-Primitive types)

12. **String Interpolation:**
    Use string interpolation with `${}` to insert values into string literals, improving code readability.

13. **Initializing Strings:**
    You can use the 'new String()' method, but it gives an object.

14. **Precision Value:**
    Use `console.log(balance.toFixed(2)` to control precision.

15. **Generate Random Value:**
    To generate a random value within a range, you can use the following code:

    ```javascript
    const min = 10;
    const max = 20;
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    ```

## Arrays

16. **Arrays Create Shallow Copies:**
    Arrays in JavaScript always create shallow copies. Shallow copies share the same references as the source object.

17. **Deep Copy vs. Shallow Copy:**
    A deep copy of an object doesn't share references with the source object, unlike a shallow copy.

18. **Slice vs. Splice:**
    - In 'slice', you get a defined range.
    - In 'splice', you cut out a ranged array from the original array.

19. **Array Operations:**
    Some array operations include 'join', 'shift', 'unshift', 'push', 'concat', 'spread', 'flat', 'from', and 'of'.

## Objects

20. **Declaring Objects:**
    Objects can be declared using literals or constructors. Constructors create a singleton.

21. **Object Functions:**
    Useful object functions include 'Object.keys(tinderUser)', 'Object.values(tinderUser)', and 'Object.entries(tinderUser)'.

## Functions

22. **Rest Operator:**
    The rest operator (...) allows passing multiple values to a function. For example:
    
    ```javascript
    function calculatePriceCart(...num1) {
        return num1;
    }
    console.log(calculatePriceCart(200, 300, 400, 500)); // [200, 300, 400, 500]
    ```

23. **Scope in Browser and Node:**
    The global object is 'window' in the browser and an empty object in Node.

24. **'this' Keyword:**
    'this' refers to the current context. It can be used in objects but not in functions, where it gives 'undefined'.

25. **Arrow Functions:**
    Arrow functions have different behavior compared to regular functions.

26. **Implicit Return:**
    Use implicit return for concise functions. For example:

    ```javascript
    const addTwo = (num1, num2) => num1 + num2;
    const objectReturn = () => ({ username: "dhruv" });
    ```

27. **Immediately Invoked Function Expressions (IIFE):**
    IIFE is a function that executes immediately and helps prevent global scope pollution.

## JavaScript Execution Context

30. **Types of Execution Context:**
    - Global Execution Context
    - Function Execution Context
    - Eval Execution Context (MONGOOSE)

31. **JavaScript is Single-Threaded.**

32. **Global Execution Context:**
    - In the browser, 'this' refers to the 'window' object.
    - In Node, 'this' is an empty object.

33. **JavaScript Execution Context Steps:**
    - File is converted to the Global Execution Context.
    - Memory Creation Phase allocates memory for declared variables.
    - Execution Phase processes the logic, including functions in new Execution Contexts.

34. **Call Stack:**
    The call stack follows the Last-In-First-Out (LIFO) order.

35. **Falsy and Truthy Values:**
    - Falsy values: false, 0, NaN, undefined, -0.
    - Truthy values: "0", "false", " ", [], {}, function() {}

36. **Checking If an Object is Empty:**
    To check if an object is empty, use `Object.keys(myObj).length === 0`.

37. **Nullish Coalescing Operator (??):**
    The nullish coalescing operator (??) works with 'null' and 'undefined'.

38. **Ternary Operator:**
    Use the ternary operator for concise conditional statements.

39. **Loop Operations:**
    - 'for...in' works for arrays and objects but not maps.
    - 'for...of' works for arrays and maps.
    - 'forEach' works for arrays, objects, and maps.

40. **forEach Returns 'undefined'.**

41. **DOM Elements:**
    - 'innerText' displays visible text.
    - 'textContent' displays all text, including hidden text.
    - 'innerHTML' includes content and HTML.

42. **NodeList:**
    - You can use 'forEach' but not 'map'. Convert NodeList to an array for mapping.

43. **HTMLCollection:**
    - You can't perform loop operations directly. Convert it to an array using 'Array.from(tempClassList)'.

44. **Avoid innerHTML:**
    Avoid using 'innerHTML' for large projects as it can traverse the entire tree. Instead, use 'appendChild(createTextNode())' for better performance.

## Events

45. **Event Listeners:**
    Use event listeners to handle events. For example:

    ```javascript
    document.getElementById('images').addEventListener('click', function(e) {
        // Event handling code
    }, false);
    ```

46. **Event Properties:**
    Learn about various event properties, such as 'type', 'target', 'clientX', and more.

47. **Event Propagation:**
    Understand event propagation, including event bubbling and capturing.

48. **e.stopPropagation():**
    Prevent event propagation with 'e.stopPropagation()'.

49. **e.preventDefault():**
    Use 'e.preventDefault()' to prevent the default behavior of an event.

## Asynchronous Programming

50. (Refer to figures 3, 4, and 5)

## Object-Oriented Programming (OOP)

52. 'new' Keyword:
    The 'new' keyword creates a new object, links it to the constructor's prototype, and calls the constructor.

53. JavaScript Default Behavior:
    JavaScript follows prototype-based behavior, traversing up the prototype chain.

54. (Refer to Figure 7)

55. (Refer to Figure 8)

56. (Refer to 9th folder - mathpi.js)

57. Closure:
    Closures return the entire lexical scope.
