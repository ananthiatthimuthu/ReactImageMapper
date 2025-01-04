**React Image Mapper Widget**

**Description**
The React Image Mapper Widget is a custom pluggable widget for Mendix that enables developers to integrate interactive image mapping functionality into their applications. This widget allows users to define clickable regions on images, offering a rich and engaging way to navigate or interact with visual content. Use cases include interactive floor plans, product image hotspots, and custom navigation maps.

**Dependencies**
Mendix 9.24.0 or higher

**Properties**

 **Image:** The image object which is used for mapping
 
 **Map Data:** An attribute holding the JSON string defining the clickable areas (regions) on the image. This includes details such as shape, coordinates, and optional metadata.
 
  _Example:
 [ {
    "id": "26af1b00-dfae-47bf-92eb-0b482b4dd8f7",
    "title": "Tile",
    "shape": "rect",
    "name": "2",
    "fillColor": "#9acd324d",
    "strokeColor": "blue",
    "coords": [100, 200, 300, 400],
    "polygon": [
      [100, 200],
      [300, 200],
      [300, 400],
      [100, 400]
    ]
  },
  {
    "id": "94ecad00-b9c4-41d7-bc2b-b58ea7de12c2",
    "title": "Carpet",
    "shape": "circle",
    "name": "3",
    "fillColor": "#ff63474d",
    "strokeColor": "red",
    "coords": [150, 150, 50],
    "polygon": []
  }
]_

**Installation**

To use this widget in your Mendix application, follow these steps: 
1.	Import the React Image Mapper Widget to your Mendix project from Mendix Marketplace
2.	Place the widget inside a data view or snippet. 
3.	Set Properties: 
  o	Select the image entity for the interactive map.
  o	Define the clickable regions using the Map Data property.

**Screenshots:**
 
 Widget Settings
 ![image](https://github.com/user-attachments/assets/6c9e03ef-5c7f-4df1-8f38-6c5a4e3ac581)

 Image Before Map Selection
 ![image](https://github.com/user-attachments/assets/3d94fdaa-d19c-4411-a537-cd71a625097b)

 Image After Map Selection
 ![image](https://github.com/user-attachments/assets/d51a2e34-5f62-4da4-bdb9-7290de6f6f52)




 
 
