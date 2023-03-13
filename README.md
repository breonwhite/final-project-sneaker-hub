# Phase 4 Project - Buckit/

Feature Lead:
Breon White

Application Name:
Sneaker Hub

Application Description: 
Sneaker Store Web Application

Sneaker Hub is a web application for sneaker enthusiasts. Sneaker Hub is different from other online stores because of its sense of community, allowing users to engage with one another. 

## User Experience:
On this platform, a user can: 

- Create a unique Sneaker Hub profile
- Login to an authenticate an existing account
- As a seller, can View, Create, Edit, and Delete sneaker listings
- As a buyer, can View and Purchase sneakers that are being sold by other users

![seller-view-image](https://i.ibb.co/wgcFHnc/Screenshot-2023-03-13-at-2-57-03-AM.png)

## Requirements
- Ruby 2.7.4
- bundler
- NodeJS (v16), and npm

## Installation
### Backend Setup:
```console
$ git clone git@github.com:breonwhite/final-project-sneaker-hub.git
$ cd phase-5-project-sneaker-hub
$ bundle install
```
Then, to seed database
```console
$ rails db:seed
```
Then, to start backend server
```console
$ rails s
```

### Frontend Setup:
```console
$ cd phase-5-project-sneaker-hub
$ cd client
$ npm install
```
Then, to start frontend server
```console
$ npm start
``` 

## Rake Jobs
To reseed database
```console
$ rake db:ressed
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgements

- [Rails Guide](https://guides.rubyonrails.org/)
- [Materialized UI](https://mui.com/)
- [Flatiron School, NYC](https://flatironschool.com/campuses/nyc/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169833&utm_content=127574234584&utm_term=flatiron%20school%20nyc&uqaid=513799628636&CjwKCAiA0JKfBhBIEiwAPhZXDxxJlDY_SEahS1QBiubqwPusvGUsfDHmmLAVTuJeLLSGY5b-6OLnqBoCx4kQAvD_BwE&gclid=CjwKCAiA0JKfBhBIEiwAPhZXDxxJlDY_SEahS1QBiubqwPusvGUsfDHmmLAVTuJeLLSGY5b-6OLnqBoCx4kQAvD_BwE)
