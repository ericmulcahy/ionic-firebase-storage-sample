# ionic-firebase-storage-sample
Sample app to demonstrate firebase storage integration

### Overview
This app will use your device's camera and save it to Firebase storage. 
Additionally, you can select a file from your filesystem and upload it.
The libraries used in this app are:
- Ionic 3 with the Cordova camera plugin
- Firebase
- AngularFire2

This app is designed to run in a browser on a laptop. It could be built for a phone or other device too, 
but it's just for demonstration purposes and I haven't tested it on other devices.

Also, the app looks really ugly and the layout is horrible.

### What does this app do?
This app let's you take a picture with your device's camera. The picture is then stored to Firebase Storage.
The app only supports a single image at a time, but this could be changed fairly easily.

### Target Audience
I intend this to be accessible for people that want to learn these technologies and want a working example to 
start with. I will try to include instructions for everything that is required to get this up
and running, but I am not going to cover things like installing node.js or how to use git. There are lots of 
good resources out there to learn the basics.

### Setup
- Make sure nodeJs is installed.
- Clone this repository
- Make sure ionic and and cordova are installed (npm install -g ionic cordova)
- You will also need the firebase SDK installed so you can configure CORS for your storage bucket (npm install --save firebase)
- Run 'npm install' in the directory where you cloned the repository

### Firebase Setup
The only thing missing from this sample project is the Firebase Config which lets the app communicate with Firebase.
In order to get the app running you need to set up a Firebase instance and then copy/paste the config into this project.
- Go to the Firebase console. If you've never done this before you may need to set up a new account and project.
- Name the Firebase project whatever you want.
- Go to 'Project Overview', then 'Add Firebase to your Webapp'
- Copy the configuration properties
- Open the file  /src/appapp.module.ts in this project and replace the firebaseConfig variable with your own config.

### Firebase Storage Setup
- Go into your Firebase console again and go to 'Storage'
- Enable storage, and set your rules so that all users can publicly read and write storage.
Obviously, this is for demo purposes only and real rules are needed in a production environment.
 
### Disable CORs in Firebase Storage
- Install gsutil. This comes with the firebase SDK.
- Fill in the firebase bucket URL from your firebase config 'storageBucket' property. 
- Run this command from the /resoureces/firebase directory:
```
gsutil cors set storage-no-cors.json gs://BUCKET_URL_HERE
```  

### Running this app
Run this command from the project directory:
```
ionic cordova run browser
```
