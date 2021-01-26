export const getSignupTemplate = ({ email, name, phone, pokedex, radio }) =>`
  <main>
    <h1>Hi there, ${name}!</h1>
    <h2>We have received your signup request from this [${email}] email address.</h2>
    <h3>Form Details</h3>
    <div>
      <p>Name: <span>${name}</span></p>
      <p>Pokedex ID: <span>${pokedex}</span></p>
      <p>Phone number: <span>${phone}</span></p>
      <p>Email: <span>${email}</span></p>
      <p>Chosen package: <span>${radio}</span></p>
    </div>
    <br />
    <h3>Thank you for submitting your request. One of our customer agents will get back to you as soon as possible!</h3>
  </main>
`;

export const getContactTemplate = ({ email, name, pokedex, textarea }) => `
  <main>
    <h1>Hi there, ${name}!</h1>
    <h2>We have received your contact request from this [${email}] email address.</h2>
    <h3>Form Details</h3>
    <div>
      <p>Name: <span>${name}</span></p>
      <p>Pokedex ID: <span>${pokedex}</span></p>
      <p>Email: <span>${email}</span></p>
      <p>Message: <span>${textarea}</span></p>
    </div>
    <br />
    <h3>Thank you for submitting your request. One of our customer agents will get back to you as soon as possible!</h3>
  </main>
`;