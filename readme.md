# RecipeApp

This web app has been developed as part of the second assignment for web services development. While there is another repo for the first RecipeApi, it was felt that the 
changes made to version 2 warrented its own repo.

RecipeApp v2 is currently not completely finished, however it implements a node/Express Web Api with a React frontend. The current routing table is:

## Routing Table

|**Resource**                     |**Get**  	                        |**Post**   	    |**Put**   	       |**Delete**            |   	
|---	                          |---	                                |---	            |---	           |---	                  |
|/   	                          |Get Index Page(All Recipes)          |N/A   	            |N/A   	           |N/A                   |
|/api/recipes  	                  |Get all recipes   	                |create recipe   	|N/A   	           |N/A                   |
|/api/recipes/:recipe_id   	      |Get a recipe   	                |N/A 	    |Update a recipe 	           |Delete a recipe                   |
|/logout   	                      |Logout User   	                    |N/A   	            |N/A   	           |N/A                   |
|/recipes/new                     |Get New Recipe Page   	            |N/A   	            |N/A   	           |N/A                   |
|/recipes/                        |N/A   	         	                |Create New Recipe  |N/A   	           |N/A                   |
|/recipes/:id/edit   	          |Get Edit Recipe Page                 |N/A   	            |N/A   	           |N/A                   |
|/recipes/:id   	              |Get a Recipe & Associated Comments   |N/A                |Update a Recipe   |Delete a Recipe       |
|/recipes/:id/comments/new   	  |Get New Comment Page   	            |N/A   	            |N/A   	           |N/A   	              |
|/recipes/:id/comments/   	      |N/A   	                            |Create New Comment |N/A   	           |N/A   	              |
|/recipes/:id/comments/:id/edit   |Get Edit Comment Page   	            |N/A   	            |N/A   	           |N/A   	              |
|/recipes/:id/comments/:id/       |N/A   	                            |N/A  	            |Update a Comment  |Delete a Comment   	  |
