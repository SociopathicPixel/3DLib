16truenonelisttrue

Requirements for development:
-----------------------------

To be able to develop against the 3D-PrintLib project there are multiple steps to be taken. These steps will take roughly an hour to complete.

First of is the list of software needed:

| **NAME** | **VERSION** | **SOURCE** |
| --- | --- | --- |
| Java Development Kit | 25 < | <https://jdk.java.net/25/> |
| GIT | Latest | <https://git-scm.com/downloads> |
| Gradle | Latest | <https://gradle.org/install/> |
| NodeJS | Latest | <https://nodejs.org/en/download> |
| NPM | 11.6.0 < | <https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager> |
| mySQL server | 8.4 | <https://dev.mysql.com/downloads/mysql/8.4.html> |
| mySQL Workbench | Latest | <https://www.mysql.com/products/workbench/> |
| SourceTree | Latest | <https://www.sourcetreeapp.com/> |

Project Installation:
---------------------

For the project installation the assumption has been made that all the software mentioned under <https://private-pixel.atlassian.net/wiki/spaces/3P/pages/edit-v2/66171#Requirements-for-development%3A> has been installed correctly and is in working condition.

### **Import the repository:**

* **Clone the GIT repository to your local computer with SourceTree:**

  1. Log in with your Github account.
  2. Click on “Remote”.
  3. Click on “Refresh”.
  4. Select “3DLib” and click on “Clone”.
  5. Select the desired location and click “Clone”

* **Clone the GIT repository to your local computer with SSH:**

  1. cmd: `mkdir "3D PrintLib" && cd "3D PrintLib"`
  2. cmd: `git clone git@github.com:SociopathicPixel/3DLib.git`

* **Clone the GIT repository to your local computer with HTTPS:**

  1. cmd: `mkdir "3D PrintLib" && cd "3D PrintLib"`
  2. cmd: `git clone https://github.com/SociopathicPixel/3DLib.git`

### Install the back-end:

1. Start **IntelliJ** and click on `File > Open…`
2. In the menu that appears navigate to and select: `printlib-backend\build.gradle`
3. Click `Ok` and wait for the project to be build.
4. Go into the terminal of intelliJ and type: `cd printlib-backend`
5. validate that SQL server is up and running in the SQLworkbench, else install and run the database with credentials “`root`”/”`root`”
6. Go back to the terminal of intelliJ and type: `./gradlew build`
7. Run the application (`nl/pixel/printlib/PrintLibApplication.java`).

Running the back-end the first time will instantiate the database schema and the first entity tables.

### Install the front-end:

1. Start **Visual Studio Code (=VScode)** and open “3D PrintLib”.
2. Go into the terminal of VScode and type: `cd printlib-frontend`.
3. Install the dependencies by typing in the terminal: `npm install`.
4. Validate if the frontend is working by giving the command: `npm start`.

Development: Rules of engagement.
---------------------------------

The project consists of multiple different types of stacks and makes use of a lot if different styles of coding. To keep this all in line rules have been made.

Everyone who wants to contribute on this project should hold themselfs to these rules. Rules will determine how code will be written, how commit messages will be made and how branches will be resolved.

### GIT Rules | Branching

There is one main branch (`origin/main`).   
It is not allowed to branch **from**/**to** this branch with the exception of hotfixes/CVE’s.

This branch is reserved for releases only! When there have been major changes only the owner can decide to push from the `origin/development` branch towards the `origin/main` branch.

Branch naming scheme:

* origin/main:  
  Branch where releases are handled. On this branch no development should be done.  
  Everything pushed to this should be completely done and tested.  
  **code-coverage: >75% | ALL TESTS should succeed.**
* origin/development:  
  Branch where tickets are placed that need development or is still in development but are on a staged that the application can be run without IO exceptions. Bugs are possible but should not be application critical. Test cases can still be missing.
* origin/dev/<ticket-name>:  
  Branch for a dedicated ticket that implements a new feature or adds new functionality to an existing feature.  
  Should always be branched from the `origin/development` branch.  
  Should only push to `origin/development` branch.
* origin/dev/<ticket-nr-parent>/<ticket-name>:  
  Branch for a sub-ticket. Should always have a parent ticket and should implement only parts related to its parent.  
  Should always be branched from its parent ticket: `origin/dev/<parent-ticket>`.  
  Should only push to its parent ticket: `origin/dev/<parent-ticket`.
* origin/bug/<ticket-name>:  
  Branch for known bugs. Should not create new functionality or implement new features. This branch should be focussed on solving the known bug and implement testcases for validation and regression testing.  
  **code coverage: 100% of related bug.**
* origin/bug/<ticket-nr-parent>/<ticket-name>:

  Branch for a sub-ticket. Should always have a parent ticket and should implement only parts related to its parent.  
  Should always be branched from its parent ticket: `origin/bug/<parent-ticket>`.  
  Should only push to its parent ticket: `origin/bug/<parent-ticket`.

### GIT Rules | PULL / PUSH requests

**Push requests:**  
Code may only be pushed on tickets that are on the same branch if a single developer is working on that specific branch.  
This to prevent code overwritting and clogging the branch with dead-code. Pushing code on a branch where multiple developers are working on enables the creation of bugs, dead code and loss of oversight.

**Pull requests:**

Pull requests should only be done at the end of a working session or when a (sub-)ticket has been resolved.  
Each pull request should be reviewed and can only be merged when the review is closed with the note: LGTM (=Looks Good To Me).  
Pull requests should look for:

* Cleanlyness, readabillity
* No dead code, unused imports, no useless comments
* New lines at the EOF
* Possible security flaws:

  + no hardcoded passwords
  + spilled secrets
  + known CVE’s
  + outdated frameworks
