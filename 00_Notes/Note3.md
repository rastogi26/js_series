**Advanced Array Theory**

1. Two types of arrays in JavaScript:
   A) Continuous/Packed
   B) Holey

2. These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.

3. `const arr = [1,2,3,,5]` is called a Holey array.

4. `const arr = [1,2,3,4,5]` is called a Packed array.

5. `const arrTwo = [1,2,3,4,5]` is a Packed_SMI_Elements array, optimized for numbers, but it doesn't allow decimals.

6. `arrTwo.push(6.0)` converts it into a Packed_Double_Elements array.

7. `arrTwo.push("7")` makes it a Packed_Elements array, allowing strings.

8. When SMI is converted to Double, reversing the process is not allowed. The same goes for Packed_Elements.

9. `arrTwo[10] = 11` results in a Holey_Elements array, with different types and holes.

10. To access `arrTwo[9]` (which is a hole), it performs these steps:
    - Step 1: Bound check (true)
    - Step 2: `hasOwnProperty(arrTwo, 9)` (false)
    - Step 3: `hasOwnProperty(arrTwo.prototype, 9)` (false)
    - Step 4: `hasOwnProperty(Object.prototype, 9)` (false)
    Hence, Holey arrays are not optimized, as they involve all 4 steps. Arrays without holes perform only the first 2 steps.

11. Optimized order: Continuous > Holey

12. Optimized order in Continuous: SMI > DOUBLE > PACKED

13. Optimized order in Packed: H_SMI > H_Double > H_Packed

14. "Packed" is a general term that means it contains all types.

15. If an array moves into a downgraded state, it will never go back to the original state, even if elements are deleted. For example, if you remove an element from an array, it creates a hole and won't go back to being packed.

16. Let an example be:- 
 ```javascript
const arrFour = new Array(3) /* has 3 holes, making it  
                                HOLEY_SMI_ELEMENTS.*/
                                 
     arrFour[0] = '1' //makes it HOLEY_ELEMENTS
     arrFour[1] = '2' // makes it HOLEY_ELEMENTS
     arrFour[2] = '3' // makes it HOLEY_ELEMENTS
 ```
17. An optimized approach would be:
    ```javascript
    const arrFive = [] // SMI
    arrFive.push('1')  // Packed_Elements
    arrFive.push('2')  // Packed_Elements
    arrFive.push('3')  // Packed_Elements
    ```

18. `const arrSix = [1,2,3,4,5]`
    - Adding `arrSix.push(NaN)` or `arrSix.push(Infinity)` turns it into a Packed_Double array.

19. Common array iteration methods in JavaScript: `for`, `for-of`, `forEach`

20. ```javascript
    const arr= []
    %DebugPrint(myArr)
    ```