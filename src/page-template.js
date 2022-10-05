// create Manager card
const generateManager = function (manager) {
    return `
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
          <h5 class="card-title"><i class="fa-solid fa-mug-hot"></i> Manager</h5>
          <p class="card-text">ID: ${manager.id}</p>
          <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="card-text">Office: ${manager.officeNumber}</p>
        </div>
      </div>
    </div>
    `;
  }
  
  // create Engineer card
  const generateEngineer = function (engineer) {
    return `
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <h5 class="card-title"><i class="fa-solid fa-glasses"></i> Engineer</h5>
          <p class="card-text">ID: ${engineer.id}</p>
          <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
      </div>
    </div>
    `
  }
  
  // create Intern card 
  const generateIntern = function (intern) {
    return `
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
          <h5 class="card-title"><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
          <p class="card-text">ID: ${intern.id}</p>
          <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
          <p class="github">School: ${intern.school}</p>
        </div>
      </div>
    </div>
    `
  };
  
  // push array to page 
  generateHTML = (data) => {
  
    // array for cards 
    pageArray = []; 
  
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 
  
  
        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
  
            pageArray.push(managerCard);
        }
  
        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
  
            pageArray.push(engineerCard);
        }
  
        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
  
            pageArray.push(internCard);
        }
        
    }
  
    // joining strings 
    const employeeCards = pageArray.join('')
  
    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;
  
  }
  
  // generate html page 
  const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="styles.css"/>
      <title>Team Profile Generator</title>
    </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <section class="card-section">
      <!-- cards -->
      <div class="row row-cols-1 row-cols-md-3 g-4">
      ${employeeCards}
      </div>
      </section>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </html>
  `;
  }
  
  // export to index
  module.exports = generateHTML; 