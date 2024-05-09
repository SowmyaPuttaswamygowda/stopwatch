<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->

# Stop watch
Stop watch page.

## Title
- As a user I want to see the section with title .

### HTML:
- Objective: Define the structure of the stopwatch interface using HTML.
- Steps:
1.Create a container with appropriate class names.
2.Add an image container to display the stopwatch image.
3.Include elements to display time (minutes, seconds, milliseconds).
4.Implement buttons for start, stop, and reset actions.

###  CSS :
- Objective: Style the stopwatch interface using CSS to make it visually appealing and user-friendly.
- Steps:
1.Design the layout, positioning, and sizing of elements.
2.Apply styles to the image container, time display, and buttons.
3.Ensure responsiveness for various screen sizes.

### Handlers and Logic:
- Objective: Define event handlers to respond to user interactions and update the stopwatch accordingly.
- Steps:
1.Develop a start handler to begin the stopwatch timer when the start button is clicked.
2.Implement a stop handler to pause the stopwatch timer when the stop button is clicked.
3.Create a reset handler to reset the stopwatch timer and display when the reset button is clicked.

### Components:
- Objective: Develop JavaScript components to manage stopwatch functionality.
- Steps:
1.Create a time object to store milliseconds, seconds, and minutes.
2.Implement functions to format time units and update the time display.
3.Write logic to start, stop, and reset the stopwatch.
4.Utilize event listeners to trigger actions based on button clicks.