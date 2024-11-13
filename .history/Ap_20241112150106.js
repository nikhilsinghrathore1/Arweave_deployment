function solveNQueens(n) {
               const result = [];
               const board = new Array(n).fill(null).map(() => new Array(n).fill('.'));
           
               // Helper function to check if it's safe to place a queen
               function isSafe(row, col) {
                   // Check the column
                   for (let i = 0; i < row; i++) {
                       if (board[i][col] === 'Q') return false;
                   }
           
                   // Check the left diagonal
                   for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
                       if (board[i][j] === 'Q') return false;
                   }
           
                   // Check the right diagonal
                   for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
                       if (board[i][j] === 'Q') return false;
                   }
           
                   return true;
               }
           
               // Helper function to solve the problem using backtracking
               function solve(row) {
                   if (row === n) {
                       // Found a valid configuration, add it to the result
                       const solution = board.map(r => r.join(''));
                       result.push(solution);
                       return;
                   }
           
                   for (let col = 0; col < n; col++) {
                       if (isSafe(row, col)) {
                           // Place the queen
                           board[row][col] = 'Q';
           
                           // Recursively place queens in the next row
                           solve(row + 1);
           
                           // Backtrack, remove the queen
                           board[row][col] = '.';
                       }
                   }
               }
           
               // Start the backtracking from the first row
               solve(0);
           
               return result;
           }
           
           // Example: Solve for 4 Queens
           const n = 4;
           const solutions = solveNQueens(n);
           console.log(solutions);

           
//            tortose algo 