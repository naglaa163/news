# Evaluate A News Article with Natural Language Processing

## 3th project at Udacity Front End Web Developer Nanodegree program

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from meaningcloud API, based on the contents of the article.

## Run project

we need node and npm installed on our system to be able to run and build this project.

## Installing and starting application

cd  project directory
npm install
npm start

## Install loaders and plugins

## Choose the necessary installation for your development mode

npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
Sign up for an API key at meaningcloud.com

## Configure environment variables using dotenv package

npm install dotenv
Create a new .env file in the root of your project
Fill the .env file with your API key like this:
API_KEY=**************************

## Built With

Express
Node
Webpack
HTML
CSS
JavaScript
