### central_kanto_pokemon_database || project-003 || tmsnvk
#### description
+ a Mongo/Express/React/Node application that imitates a subscription-based service site with two form submit pages and a search functionality serving a public API database.
+ the API is served from [pokeapi.co](https://pokeapi.co/).
+ to run the application:
  +  the github version is fully functional as the used API doesn't require registration/key.
  +  only the MongoDB connection requires entering a valid database cluster address in the .env_sample file; once that's done, rename the file to .env.
  +  OR visit the live heroku deployed version [here](https://ckpd.herokuapp.com/).

#### used packages
```
FRONTEND
+ axios                    - making api calls.
+ fontawesome              - using various icons as styling.
+ react                    - front-end framework.
+ react-ga                 - google analytics package.
+ react-hook-form          - handling forms & form submission validation.
+ react-router-dom         - routing.
+ react-router-hash-link   - hash-based routing.
+ styled-components        - css-in-js styling.

BACKEND
+ axios                    - making api calls.
+ body-parser              - body parsing middleware.
+ cors                     - cors enabling middleware.
+ dotenv                   - loading an .env variable to store not-public configuration data.
+ express                  - server framework.
+ helmet                   - securing express.
+ mongoose                 - schema-based solution to model data. 
```

#### screenshots
![Screenshot](screenshot_one.png)
![Screenshot](screenshot_two.png)
![Screenshot](screenshot_three.png)
![Screenshot](screenshot_four.png)