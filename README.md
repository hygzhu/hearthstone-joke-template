# Hearthstone Joke Website Template
Demo: https://hearthstone-template.firebaseapp.com/
Made with React and Hosted on Firebase

## Which files do I need to modify?
To make your own Hearthstone meme page you will need to modify the following files
```
# Little image icon in the page tab
/public/favicon.png

# The text title of the page
/public/index.html

# The background image being used (1920x1280 for best results) 
/src/background.jpg

# Images for normal and golden card art (Download them off https://hearthstone.gamepedia.com/Hearthstone_Wiki)
/src/normal.png
/src/gold.png

# Sound files for nromal and golden card (Download them off https://www.hearthpwn.com/)
/src/sound.ogg
/src/sound_gold.ogg
```

## Try it out locally
```
git clone https://github.com/hygzhu/hearthstone-joke-template.git
yarn install
yarn start
```

## Deploy it to Firebase
 1. Create an account on https://firebase.google.com/
 2. Go to the console and add a project
 3. In your project directory do a

```
firebase init
```
 4. Sign in to firebase and select the project you created on your firebase console
 5. Select default options until you get to select *Firebase CLI features*, then select Hosting 
 6. Configure as single page app
 7. Set your public directory to "build" and do not overwrite if it asks
 8. Now do the following commands
 
``` 
yarn build
firebase deploy
```
 9. It should give you a *Hosting URL* which you can access your app and share to your friends
 10. Done!


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
