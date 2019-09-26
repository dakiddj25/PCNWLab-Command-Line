/******************
PROBLEM 1:

In this problem, you will be downloading some files from online, then creating a custom project with git initialized. You will then one by one structure the files and make commits to git as needed.

1. Download this repository from the homepage by clicking "Clone or download", then "Download ZIP". You will be using the files from the /stuff directory.
2. Once the repository has been downloaded, go ahead and unzip it.

3. Achieve the following structure ONLY using command line:

~/Desktop/pset2
-cd Desktop/ 
-mkdir pset2 
    /assets
-cd pset2/ 
-mkdir assets
        /images
cd assets
mkdir images        
            amazon.jpg
        cd 
        cd Desktop
        mv stuff/amazon.jpg pset2/assets/images/    
            facebook.png
        mv stuff/facebook.png pset2/assets/images/        
            google.jpg
        mv stuff/google.jpg pset2/assets/images/      
            twitter.png
        mv stuff/twitter.png pset2/assets/images/  
        /memes
- cd pset2/assets/images/
mkdir memes         
            meme.jpg
-cd 
-cd Desktop
-mv stuff/meme.jpg pset2/assets/images/memes              
        /src
-cd 
-cd Desktop/pset2/assets/images/ 
-mkdir src
            foo.js
-cd src
-touch foo.js           
    app.js
-cd 
-cd Desktop/pset2/assets/ 
-touch app.js   
    hello.html
-touch hello.html
4. Open `hello.html` using a code editor and change "SOME_CLASS" to "Full Stack: Nights & Weekends". Save it.
code .

5. You should have the following commits:
- git initialized
- added app.js
- added hello.html
- created assets directory
- added all images & memes
- added all sources
- modified hello file
******************/
