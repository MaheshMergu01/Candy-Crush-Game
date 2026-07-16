# Candy-Crush
Building a Candy Crush clone using HTML, CSS, and JavaScript is a fantastic project. It moves you past simple static pages and forces you to think about game logic, grid manipulation, and event handling.


🏗️ Core Architecture Breakdown
1. The Structure (HTML)
The HTML layer is incredibly simple because JavaScript handles the heavy lifting. Instead of hardcoding every single square, you create a simple container div (e.g., #grid). JavaScript will dynamically generate the game board tiles inside this container when the page loads.

2. The Styling & Layout (CSS)
CSS turns a flat list of elements into a cohesive game board.

Grid Layout: Typically uses CSS Grid or Flexbox to force a 64-tile array into an 8x8 layout.

Visuals: Defines the size of the squares, background colors, smooth transitions for falling candies, and clear indicators for when a candy is selected or dragged.

3. The Engine (JavaScript)
JavaScript runs the logic, tracking the state of the board and reacting to player actions. It can be broken down into four distinct engines:

[ Board Generation ] ➔ [ Drag & Drop Engine ] ➔ [ Match Checking Engine ] ➔ [ Refill Engine ]


⚙️ How the JavaScript Logic Works
Step 1: Board Generation
When the game starts, an array of 64 elements is created. The script randomly assigns one of five or six distinct candy types (represented by different colors or image URLs) to each square. It then injects these squares into the HTML grid.

Step 2: Drag & Drop Engine
To make the game interactive, you attach HTML5 Drag and Drop API event listeners to every single candy tile:

dragstart: Tracks which candy the player wants to move.

dragover & dragenter: Allows candies to be dragged over neighboring slots.

drop: Records where the player releases the candy.

dragend: The brain of the swap. It checks if the target square is exactly one slot away (left, right, up, or down). If it is, it temporarily swaps their positions in the array and on the screen.

Step 3: Match Checking Engine
Once a swap happens, a validation function runs to check for matches of 3, 4, or 5 identical candies in a row.

Row Checks: Loops through the grid array to see if index i, i+1, and i+2 match (ensuring it doesn't accidentally wrap around to the next row).

Column Checks: Loops to see if index i, i+8, and i+16 match.

If a match is found, those squares are cleared (emptied), and points are added to the player's score. If the player's swap doesn't result in a match, the Drag & Drop engine immediately swaps them back.

Step 4: The Refill Engine (Gravity)
Once matches are cleared, you are left with empty spaces. The game shifts into a loop:

Drop Down: It looks at the grid from the bottom up. If a square is empty, it pulls the candy from the square directly above it (i - 8) down into the empty space.

Generate Top Row: For the very top row, if slots become empty, the script randomly generates brand-new candies to fill them.

Re-check: Once the board is full again, the Match Checking Engine automatically runs again to catch any accidental combos caused by the falling candies. This loops until no new matches are found.

💡 The Biggest Challenge: Managing the timing. You have to use JavaScript functions like setTimeout or setInterval to make sure the game waits for candies to finish clearing and dropping before letting the player drag another candy.
