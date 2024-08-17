<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Overview
The Vehicle Transfer Management System (VTMS) is built using Next.js for the frontend, Nest.js for the backend, and PostgreSQL for the database. This system manages a catalog of drivers and vehicles, allowing you to transfer vehicles between drivers while keeping a record of all transfers.

Tech Stack:
* Frontend: Next.js
* Backend: Nest.js
* Database: PostgreSQL
* Language: TypeScript

Accessing the Application
Open your browser and navigate to http://localhost:3000. You should see the homepage with links to manage drivers, vehicles, and transfers

Note:
* 1.Ensure the backend server is running before accessing the frontend.
* 2.Update the API endpoints in the frontend code (http://localhost:3001) if backend server runs on a different port or URL.
* 3.Adjust the database connection settings in src/app.module.ts to match PostgreSQL configuration.
  
## Future Extension plan ##

To extend the vehicle transfer system to support transfers to entities other than drivers, you should:

* Database Schema: Introduce a TransferTarget table to store different entities (e.g., drivers, companies) with columns for id, target_type, and target_id.
* Transfer Table: Modify the transfers table to reference TransferTarget instead of directly referencing drivers, by adding from_target_id and to_target_id columns.
* Entities: Update the Transfer entity to include from_target and to_target relationships, pointing to TransferTarget.
* Services: Adjust the transfer service logic to handle various target types by looking up TransferTarget records.
* Controllers: Update the transfer controller to accept target type and ID, creating or fetching the appropriate TransferTarget records.
* Frontend Forms: Modify the frontend forms to allow selection of different target types (e.g., dropdowns for drivers, companies).
* Future Flexibility: Ensure that the logic is generic enough to add new target types without major changes, focusing on dynamic handling of target_type.
