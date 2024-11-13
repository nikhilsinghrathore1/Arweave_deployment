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
               const stack = [];
           
for (let char of str) {
    if (char === '(') {
        stack.push(char);
    } else if (char === ')') {
        if (stack.length === 0) {
            return false;
        }
        stack.pop();
    }
}
return true ;
}
           


          
console.log(isParenthesisBalanced("((())())")) 
           

// rat in maze problem 


// write rat in a maze problem algorithm in just 5 points 



const direction = "DLRU";

const dr = [1, 0, 0, -1];
const dc = [0, -1, 1, 0];

function isValid(row, col, n, maze) {
    return row >= 0 && col >= 0 && row < n && col < n
        && maze[row][col] === 1;
}

function findPath(row, col, maze, n, ans, currentPath) {

    if (row === n - 1 && col === n - 1) {
        ans.push(currentPath);
        return;
    }
    maze[row][col] = 0;

    for (let i = 0; i < 4; i++) {

        const nextrow = row + dr[i];

        const nextcol = col + dc[i];

        if (isValid(nextrow, nextcol, n, maze)) {
            currentPath += direction[i];
            findPath(nextrow, nextcol, maze, n, ans, currentPath);
            currentPath = currentPath.slice(0, -1);
        }
    }
    maze[row][col] = 1;
}

const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];

const n = maze.length;
const result = [];
let currentPath = "";

if (maze[0][0] !== 0 && maze[n - 1][n - 1] !== 0) {

    findPath(0, 0, maze, n, result, currentPath);
}

if (result.length === 0)
    console.log(-1);
else
    console.log(result.join(" "));
