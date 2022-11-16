# Zelda Item Details

​A web app that holds a list of important and iconic Zelda Items. Clicking on an item gives the user a separate page with more details.
​

## Wireframe

​
![wireframe page 1]()
![wireframe page 2]()

## HTML elements (stuff present upon page load)

HOME PAGE

-   Menu Button
    - h3 title
    - img icon with anchor
-   Header
    - h1 title
    - h2 light description
-   Items
    - div wrapped in anchor that contains image (img) and item name (h3)

DETAIL PAGE

-   Menu Button
    - h3 title
    - img icon with anchor
-   Header
    - h1 title (details)
    - h2 light description (more about (span) item (span)!)
-   Item: 
    - div that contains the name (h2), detailed description of the item (p), the game that the item first appeared (p), and an image (img)

## State

​N/A

## Events (anything that happens via JS when the user interacts with your site)

-   Load
    -   fetch function for Zelda Item supabase database
        -   client is created for supabase
        -   create a response variable that awaits all the variables in the table
        -   return the response data to the variable that called the fetch
    -   for loop goes through every piece of data in the item's variable
        -   Item element is set to render function
        -   render function creates elements for specific image and name to display
        -   appends elements to a div
        -   returns div to the Item element
        -   appends Item element to the Item list and repeat
-   Item Link
    -   second description page is loaded
    -   second page loads event listener
        -   fetch function for finding a Item by id is called
        -   create a response variable that awaits the table data matching the id of the Item
        -   returns response data to the function call
        -   render function creates all of the elements in the data table

-   Home Button
    -   Returns to home page with the Items loaded

## Functions

### Render Functions

-   renderItems function- creates elements and displays all of the Items in the database.
-   renderItemInfo function - creates elements and displays all of the info of a specific Item by ID

### Display functions

-   displayItems function - for loop that calls the render Items function and uses the returned data to append an element to the displayList div

### Fetch Functions

-   fetchItems function- grabs the data from supabase and returns all of the rows

-   fetchItemsDescription - grabs and returns ALL of the data from ONE specific Item by ID to display on the second page
    ​

## Slices​

1. Create second page files and write HTML to both pages
2. Mess with some CSS styling by hard coding some divs, delete after push
3. On load on the home page, see a list of Items, fetched from supabase
4. On clicking a Item, user should be taken to that Items’s detail page.
5. Detail page should get the id from the URL and use that id to fetch that Item from supabase.
6. Detail page should show the user details about the Item with more details than on the list page