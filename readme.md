# RecipeApp

This web app has been developed as part of the second assignment for web services development. While there is another repo for the first RecipeApi, it was felt that the 
changes made to version 2 warrented its own repo.

RecipeApp v2 is currently not completely finished, however it implements a node/Express Web Api with a React frontend. The current routing table is:

## Routing Table

|**Resource**                     |**Get**  	                        |**Post**   	    |**Put**   	       |**Delete**            |   	
|---	                          |---	                                |---	            |---	           |---	                  |
|/api/recipes  	                  |Get all recipes   	                |create recipe   	|N/A   	           |N/A                   |
|/api/recipes/:recipe_id   	      |Get a recipe with id 	                |N/A 	    |Update a recipe 	           |Delete a recipe                   |
|/api/recipes/:recipe_id/comments |N/A  	                            |Post a comment to a recipe |N/A   	           |N/A                   |
|/api/recipes/:recipe_id/
  comments/:comment_id            |Get a comment with id  	            |N/A   	            |Update a comment   	           |Delete a comment                  |
  
  The readme and routing table will be updated once the RecipeApp is completed.

