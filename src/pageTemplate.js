// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="card col-12 col-lg-3 col-md-5 p-0 m-4">
            <div class="card-body p-0 bg-primary justify-content-center">
                <div class="card-title pt-3 px-3">
                    <h2>${manager.getName()}</h2>
                    <h3 class="card-text">
                        <i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}
                    </h3>
                </div>
                <div>
                    <ul class="list-group p-3">
                        <li class="list-group-item">
                        ID: ${manager.getId()}
                        </li>
                        <li class="list-group-item">
                        Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                        </li>
                        <li class="list-group-item">
                        Office: ${manager.getOffice()}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card col-12 col-lg-3 col-md-5 p-0 m-4">
            <div class="card-body p-0 bg-primary justify-content-center">
                <div class="card-title pt-3 px-3">
                    <h2>${engineer.getName()}</h2>
                    <h3 class="card-text">
                        <i class="fas fa-glasses mr-2"></i>${engineer.getRole()}
                    </h3>
                </div>
                <div>
                    <ul class="list-group p-3">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">
                            Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                        </li>
                        <li class="list-group-item">
                            GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card col-12 col-lg-3 col-md-5 p-0 m-4">
            <div class="card-body p-0 bg-primary justify-content-center">
                <div class="card-title pt-3 px-3">
                    <h2>${intern.getName()}</h2>
                    <h3 class="card-text">
                        <i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}
                    </h3>
                </div>
                <div>
                    <ul class="list-group p-3">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                        </li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <nav class="navbar-nav bg-primary text-light text-center">
                <h1 class="font-weight-bold">My Team</h1>
            </nav>
        </header>
        <main class="row justify-content-center">
            ${generateTeam(team)}
        </main>
    </body>
</html>
    `;
};
