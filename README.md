# Surgeon Scope



## Build

*Please run this on a Desktop computer for the best experience.*

To build and run Surgeon Scope, please follow the following steps:

- Open a terminal shell of your choice.
- Clone the app by: `git clone https://github.com/baamyil-henry-sule/surgeon-scope.git`
- `cd` into the project: `cd surgeon-scope`
- Install all packages: `npm install --force`
- Build the app: `npm run build`

## Run

- Run the app: `npm run start`
- Visit `http://localhost:8000` in a browser to see it running

## Use

- You can log in with any username and password

- Move around the 3D model
- Click on the 3D model to set a point
- Click on the `Upload new document` button to either
    - Upload a pre-existing image, by clicking the `Choose File` button on the bottom-left of the box
        - For example, this could be the X-Ray of that body part
    - Take a picture from the camera
- The picture should now be
    - Linked to the body part you had selected
    - Show up in the list on the right side
- You can click on the picture on the body or from the list to interact with it (rotate, zoom in/out).
- You can use the sliding filter to filter images.
