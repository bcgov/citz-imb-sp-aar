__This is an experimental project to learn PERN stack with openshift and should not be used for any real production things.__

Database
- cmd line terminal
- cd server
- psql -U postgres
- pword=snowball
- \l to list databases
- \c perntodo to move to perntodo database
- \dt to list tables

Database Server
- cmd line terminal
- cd server
- nodemon index

Client
- npm start

================================

## git flow
 - main branch is official release history
 - development branch is integration branch for features
 - feature branches are created from development and merged back to development - never main
 - release branches are forked off of development - no new features, only bug fixes, documentation, and release activities. it is merged back into both main and development
 - hotfix branches are forked off main and are mreged into both main and development

### initialization (new project)
 - git branch develop
 - git push -u origin develop
 - git flow init
    - (accept defaults)
### Feature branches
 - git flow feature start _feature_branch_
 - git flow feature finish _feature_branch_
### Release branches
 - git flow release start _0.1.0_
 - git flow release finish _0.1.0_
 looks like you have to change to main branch locally and sync with origin
### Hotfix branches
 - git flow hotfix start _hotfix_branch_
 - git flow hotfix finish _hotfix_branch_