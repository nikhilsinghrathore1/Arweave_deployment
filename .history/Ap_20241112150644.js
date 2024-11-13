// function solveNQueens(n) {
//                const result = [];
//                const board = new Array(n).fill(null).map(() => new Array(n).fill('.'));
           
//                // Helper function to check if it's safe to place a queen
//                function isSafe(row, col) {
//                    // Check the column
//                    for (let i = 0; i < row; i++) {
//                        if (board[i][col] === 'Q') return false;
//                    }
           
//                    // Check the left diagonal
//                    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
//                        if (board[i][j] === 'Q') return false;
//                    }
           
//                    // Check the right diagonal
//                    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
//                        if (board[i][j] === 'Q') return false;
//                    }
           
//                    return true;
//                }
           
//                // Helper function to solve the problem using backtracking
//                function solve(row) {
//                    if (row === n) {
//                        // Found a valid configuration, add it to the result
//                        const solution = board.map(r => r.join(''));
//                        result.push(solution);
//                        return;
//                    }
           
//                    for (let col = 0; col < n; col++) {
//                        if (isSafe(row, col)) {
//                            // Place the queen
//                            board[row][col] = 'Q';
           
//                            // Recursively place queens in the next row
//                            solve(row + 1);
           
//                            // Backtrack, remove the queen
//                            board[row][col] = '.';
//                        }
//                    }
//                }
           
//                // Start the backtracking from the first row
//                solve(0);
           
//                return result;
//            }
           
//            // Example: Solve for 4 Queens
//            const n = 4;
//            const solutions = solveNQueens(n);
//            console.log(solutions);

           
// //            tortose algo 


// class ListNode {
//                constructor(value = 0, next = null) {
//                    this.value = value;
//                    this.next = next;
//                }
//            }
           
//            class LinkedList {
//                constructor() {
//                    this.head = null;
//                }
           
//                // Add a node at the end of the list
//                append(value) {
//                    const newNode = new ListNode(value);
//                    if (!this.head) {
//                        this.head = newNode;
//                    } else {
//                        let current = this.head;
//                        while (current.next) {
//                            current = current.next;
//                        }
//                        current.next = newNode;
//                    }
//                }
           
//                // Function to detect cycle in the linked list
//                hasCycle() {
//                    if (!this.head) {
//                        return false; // If the list is empty, there can't be a cycle
//                    }
           
//                    let slowPointer = this.head;
//                    let fastPointer = this.head;
           
//                    // Traverse the list with two pointers
//                    while (fastPointer !== null && fastPointer.next !== null) {
//                        slowPointer = slowPointer.next; // Move slowPointer one step
//                        fastPointer = fastPointer.next.next; // Move fastPointer two steps
           
//                        // If slowPointer and fastPointer meet, there's a cycle
//                        if (slowPointer === fastPointer) {
//                            return true;
//                        }
//                    }
           
//                    // If we reached the end without the pointers meeting, there's no cycle
//                    return false;
//                }
           
//                // Helper function to create a cycle for testing
//                createCycle(position) {
//                    if (position === -1) return;
           
//                    let cycleNode = null;
//                    let current = this.head;
//                    let index = 0;
           
//                    // Traverse to the end of the list and the node at 'position'
//                    while (current && current.next) {
//                        if (index === position) {
//                            cycleNode = current; // Save the node where the cycle should start
//                        }
//                        current = current.next;
//                        index++;
//                    }
           
//                    // If cycleNode is not null, create a cycle by linking the last node to it
//                    if (cycleNode) {
//                        current.next = cycleNode;
//                    }
//                }
//            }
           
//            // Example usage:
//            const list = new LinkedList();
//            list.append(1);
//            list.append(2);
//            list.append(3);
//            list.append(4);
           
//            // Creating a cycle by linking the last node to the second node
//            list.createCycle(1);
           
//            console.log(list.hasCycle()); // Output: true
           
//            // For a list without a cycle:
//            const list2 = new LinkedList();
//            list2.append(1);
//            list2.append(2);
//            list2.append(3);
           
//            console.log(list2.hasCycle()); // Output: false
           

//            parenthesisi matching problem in js


function isParenthesisBalanced(str) {
               // Stack to store opening parentheses
               const stack = [];
           
               // Traverse the string
               for (let char of str) {
                   if (char === '(') {
                       // If it's an opening parenthesis, push it onto the stack
                       stack.push(char);
                   } else if (char === ')') {
                       // If it's a closing parenthesis, check if there's a matching opening parenthesis
                       if (stack.length === 0) {
                           // If the stack is empty, no matching opening parenthesis
                           return false;
                       }
                       // Pop the last opening parenthesis from the stack (match found)
                       stack.pop();
                   }
               }
           
               // If the stack is empty, all parentheses are matched
               return stack.length === 0;
           }
           
           // Example usage:
           
           console.log(isParenthesisBalanced("(())")); // true
           console.log(isParenthesisBalanced("(()"))   // false
           console.log(isParenthesisBalanced("()()"))  // true
           console.log(isParenthesisBalanced(")("))    // false
           console.log(isParenthesisBalanced("((())())")) // true
           