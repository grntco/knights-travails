# Knight Travails

This is a project using for [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails) to find the shortest path from a starting position to ending position on a chessboard for a knight. This project is part of the Comptuer Science section of the JavaScript course, focusing on data structures and algorithms.

To find the shortest possible path, all the possible next moves from the starting position are treated as nodes in a tree (or graph). These nodes (each of which has a connection to its parent) are added to a queue and traversed via a breadth-first search approach. When the ending position is reached, the path is created by traversing the parent nodes backward, and the final path is output to the console.