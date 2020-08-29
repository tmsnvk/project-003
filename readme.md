### central_kanto_pokemon_database || project-003 || tmsnvk
#### description
+ a Mongo/Express/React/Node application that imitates a subscription-based service site with two form submit pages and an API search functionality.
+ the API is served from [pokeapi.co](https://pokeapi.co/).
+ to run the application:
  +  the github version is fully functional as the used API doesn't require registration.
  +  only the MongoDB connection requires entering a valid database cluster address in the .env_sample file.
  +  OR visit the live heroku deployed version [here](https://BLANK.herokuapp.com/).

#### project structure
```JSON
*
|- .env_sample
|- .gitignore
|- license.md
|- package.json
|- package-lock.json
|- readme.md
|- screenshot.png
|- server.js
|- CLIENT
  |- .gitignore
  |- package.json
  |- package-lock.json
  |- PUBLIC
    |- favicon.ico
    |- index.html
  |- SRC
    |- index.js
    |- COMMONCOMPONENTS
      |- ElementContainer.js
      |- FormSubmitButton.js
      |- HeaderMainTitle.js
      |- HeaderMessage.js
      |- HeaderSubTitle.js
      |- InformationHashLink.js
      |- InformationLink.js
      |- InformationText.js
      |- InputField.js
      |- InputFormLabel.js
      |- ItemContainer.js
      |- RequiredFields.js
      |- StyledIcon.js
    |- HELPERFUNCTIONS
      |- ScrollToTop.js
    |- LAYOUTCOMPONENTS
      |- CONTACT
        |- ContactForm.js
        |- FaqContainer.js
        |- FaqItem.js
        |- Header.js
      |- ERROR
        |- 
      |- HOME
        |- Header.js
        |- HowImage.js
        |- HowText.js
        |- Options.js
        |- PokemonCards.js
        |- Statistics.js
        |- SummaryCards.js
      |- PRICING
        |- Header.js
        |- SignupForm.js
        |- SubscriptionOptions.js
      |- SEARCH
        |- Header.js
        |- Result.js
        |- Search.js
      |- SUCCESS
        |- 
    |- LAYOUTS
      |- ContactLayout.js
      |- ErrorLayout.js
      |- HomeLayout.js
      |- PricingLayout.js
      |- SearchLayout.js
      |- SuccessLayout.js
    |- MAINCOMPONENTS
      |- App.js
      |- Footer.js
      |- Navbar.js
|- MODELS
  |- ContactForm.js
  |- SignupForm.js
|- ROUTES
```

#### used packages
```
BACKEND
+ axios                    - making api calls.
+ body-parser              - body parsing middleware.
+ cors                     - cors enabling middleware.
+ dotenv                   - loading an .env variable to store not-public configuration data.
+ express                  - server framework.
+ helmet                   - securing express.
+ mongoose                 - schema-based solution to model data. 

FRONTEND
+ axios                    - making api calls.
+ fontawesome              - using various icons as styling.
+ react                    - front-end framework.
+ react-ga                 - google analytics package.
+ react-hook-form          - handling forms & submission validation.
+ react-router-dom         - routing.
+ react-router-hash-link   - hash-based routing.
+ styled-components        - css-in-js styling.
```

#### screenshot
<!-- ![Screenshot](screenshot.png) -->