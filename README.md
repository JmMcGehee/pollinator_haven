# pollinator_haven
====
A full CRUD app built for Citizen Scientists for viewing and cataloging existing pollinator gardens in a local area. Complete with community and educational resources.

[Project Trello Board](https://trello.com/invite/b/GfFsJfUd/de7a97b7975b3a2a5402b3b51c150e28/pollinator-haven)

## SHORT GOAL

- Home Page can show species sightings/observations or locations of pollinator gardens or plants.
- Give user access to add plants and pollinators to their own GARDEN page.
  - Complete with meta data.
- Allow users to add their garden to garden INDEX/HOME page.

Will require two models. Gardens and garden contents

## LONG GOAL

- Give user access to education resources on pollinators and pollinator plants for their region.
- ADD Google maps API to plot locations of gardens and species sightings.
- Allow users to add photos from their phone.

### WIREFRAMES

![Wire Frame 1](./Images/home.png)
![Wire Frame 2](./Images/my_garden.png)

### Developer Environment Installations:
1. `npm init`
2. `npm i express`
3. `npm i ejs`
4. `npm i method-override`
5. `npm i mongoose`
6. `npm i express-session`
7. `npm i bcrypt`
8. `npm i bootstrap`
9. `npm i jquery`
10. `npm i popper.js`
11. `npm i multer`

## Uploading Images


1. Install `multer` to parse form data bodies (for `type=file`).
* `npm i multer`
2. Require `multer` in the controller and initialize it with `upload`. Set the destination to `uploads`
```
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

```
3. Pass MIDDLEWARE into POST route to handle incoming request.
3.1. Add `enctype="multipart/form-data"` to your form tag.
```
router.post('/', upload.single('image'), (req,res) => {
  res.send(req.body);
})
```
- Can now access `req.file` from form data.
- TIP: Make sure the form input name is the same as the name passed through `upload.single()`.
```
upload.single('image')
Upload Image: <input type="file" name="image"><br>
```
4. Add a `storage` method and update the `upload` method to reflect.
```
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname)
  }
});

const upload = multer({storage: storage});
```
5. Edit model to store image info in mongoDB.
6. Set the object image to the path of the image.
7. Make uploads publicly available. 

## Structure:
- The My Garden page is an index view of species.
- The Home page is an index view of all gardens and species/sightings.
- Species and sightings are created through the same model.
