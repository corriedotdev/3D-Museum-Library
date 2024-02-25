# "Augmenting Heritage: AR Application"

<div align="center">

[alt text](https://cdnb.artstation.com/p/assets/images/images/062/910/051/original/corrie-ar-museum.gif)


[Link to the website](https://augmentedfashion.github.io/3D-Museum-Library/) | [Link to pre-print](https://arxiv.org/abs/2310.13700)
</div>


<h2>Task</h2>

Was assigned the task to scan and create an AR application that showcases the scanned content on an iPad and Android tablet for a Scottish museum. Deployment was therefore essential as these are different os so decided to use a progresssive web application which would allow the site to be accessed offline, where the high file size of the models can be cached and viewed in low WiFi areas of the museum.

Project consisted of; 

<h2>Scanning</h2>

- Using DSLR and nerf, metashape and autodesk products to see what produced the best in a timely mannar

- Luma.ai using nerf on the iPhone

- Scanniverse

- 10 Artifacts ranging from garments to childrens toys

  
Due to extensive processing times for the DSLR images and ensuring the camera frames were correctly alligned, luma.ai data was primarily used. One day of scanning was allocated so all artifacts were scanned in one working day.

<h2>Data Cleanup</h2>

- Luma.ai allowed for files to be exported to .obj which was then loaded into Maya and cleaned, by removing mesh that was background and not critical to the asset being scanned. 

- Once cleaned it was exported to an .fbx file which is a binary file and contains all the textures. From this various techniques were explored to get a low binary size that would work with the model-viewer platform.
https://github.com/facebookincubator/FBX2glTF was used to convert files from fbx to gltf and the command used was as follows. Unlit material was used as demonstrated too much specular mapping in the end .glb

FBX2glTF-windows-x64.exe --binary --verbose --khr-materials-unlit --input Blue_Dress_Low_Clean.fbx --output new-blue.glb3

<h2>Hosting</h2>

- As no webserver was used in the budget hosted using gitpages at the above url. 

<h2>Result</h2>

A small, fast website that allows for 3D artifacts to be displayed on mobile and desktop devices. The AR funtionality on mobile and tablet allows users to place the model in the real world and take photos and videos with it and save directly to their device without having to download an application. 

https://github.com/corriedotdev/3D-Museum-Library/assets/8880520/e6415d57-9676-46e9-824d-3266a7f1a230

