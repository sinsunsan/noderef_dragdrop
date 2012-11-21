The module should be compatible with the latest drupal 6 version, 
and should have an admin page where it's possible to set the drag and drop settings.

### Exemple

You have two content types "images" and "projects". 
The images nodes have a node reference field (field_image_project ) pointing to a projects nodes. 
It's a image of a given project. 

I have a display with two views side to side. 
The first view is a list of images node, the second view is a list of selected project node. 

### Behavior

I want people can drag images (left side) on project view (right side). 
This drag and drop should use jquery ui draggable javascript. 
* When dropped trigger an ajax call, that load the image node (the image that was dragged)
* fill the field_image_project node reference field, with the value of the project nid (the project on which the image was dropped). 

The field_image_project should be compatible with noderefcreate module. 
The project's node will always exist in this case (as it is shown in the view), 
but per aps there is compatibility issue with the noderefcreate widget. 

To make the display I will use panels, so I suggest you test with a panel assembling the two views.
But jquery ui draggable should trigger on a css selector which is not dependent of a drupal module, 
so don't make you module dependant of panel.
The view should be able to be in unformatted display 
(contrary to module like draggable view where it create a table display in fact)

If possible the ajax implementation would be done in a way it'll be easier to convert it in drupal 7 later.

### Admin page

The module should be generic in a way an admin can set with a UI the following datas and make as much of this view type as he want :

* name of the containing node type (image in my case)
* name of the container node type (project in my case)
* machine name of the field on the containing node pointing to the container node ( a node reference field)
* name of the css selector to identify draggable element
* name of the css selector to identify droppable element.

There could be several displays, so in the admin view you'll have "add another drag and drop reference display"



