### central_kanto_pokemon_database || project-003
#### description
+ a React front-end and Node/Express back-end application using MongoDB to store site-specific data that imitates a subscription-based service site with two form submit pages and a search functionality serving a public API database.
+ the third-party API is served from [pokeapi.co](https://pokeapi.co/).
+ to run the application:
  +  the github code is fully functional as the API in use doesn't require registration/key.
  +  however, the MongoDB connection requires entering a valid database cluster address in the .env_sample file. Once that's done, rename the file to .env, install the project dependencies and start the application.
  +  OR visit the live heroku deployed version [here](https://ckpd.herokuapp.com/).

#### used packages
```
FRONTEND
+ axios                    - http client.
+ fontawesome              - icons for styling purposes.
+ react                    - client-side framework.
+ react-ga                 - google analytics package.
+ react-helmet             - document head element handler.
+ react-hook-form          - form handling & client-side form validation.
+ react-router-dom         - routing.
+ react-router-hash-link   - hash-based routing.
+ styled-components        - css-in-js styling.

BACKEND
+ axios                    - http client.
+ body-parser              - body parsing middleware.
+ cors                     - cors enabling middleware.
+ dotenv                   - .env variable loader to store not-public configuration data.
+ express                  - server-side framework.
+ helmet                   - express securing middleware.
+ mongoose                 - schema-based solution to model data.
```

#### screenshots
![Screenshot](screenshot_one.png)
![Screenshot](screenshot_two.png)
![Screenshot](screenshot_three.png)
![Screenshot](screenshot_four.png)