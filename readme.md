# Oui Will 

Oui Will is a full-service, integrated creative agency.

We combine the european esthetic and the american yes we can. 
We create experiences in a digital world, helping people in their decisions for a brand, products and services.

## What's inside

* Kirby - a file-based CMS (http://getkirby.com/)
* Bourbon & Neat - for scss mixin and semantic grid framework (http://bourbon.io/ & http://neat.bourbon.io/)
* NPM, Grunt & Bower - for package management and development environement
	- go to ``` http://nodejs.org ``` download and install Node Package Manager
	- In OSX Terminal run ``` sudo npm install -g bower ``` will install Bower globally on your system
	- In OSX Terminal run ``` sudo npm install -g grunt-cli ``` will install Grunt Command Line Interface globally on your system
* MAMP to set up the local environement (https://www.mamp.info/en/)

## How to use

* If not already, download and install MAMP
* If not already, install NPM, Grunt and Bower
* Open terminal

	- ``` cd /Applications/MAMP/htdocs ```
	- ``` git clone --recursive https://github.com/LucasFyl/OUIWILL.git ```
	- ``` cd OUIWILL ```
	- ``` npm install grunt-sass -save -save-dev ```
	- ``` npm install ```
	- ``` bower install ```
	- ``` grunt build ```
* Run MAMP.
* The site is now accesible localy.

### If you are using MAMP instead of MAMP Pro 
You need to update the .htaccess file. It's an invisible file located at the root of the project.
* Open the .htaccess file with a text editor
* Look for the 'RewriteBase' entry (should be line 17)
* Uncomment that line (by removing '# ')
* Voilà, you're good to go


Pull master to update.


## Grunt tasks:

* ```grunt build-bower```: build all bower-dependencies.
* ```grunt build```: build the page (includes ```grunt build-bower```)
* ```grunt deploy```: copy all relevant files to ```/dist``` for deployment (includes ```grunt build```)
* ```grunt watch```: watches changes in:
  - ```assets/scss/*.scss```: build css and inject in page
  - ```assets/js/*.js```: build js and reload page
  - ```site/**/*.php```: reload page

```grunt watch``` will start a livereload-server, see ```site/snippets/footer.php```.
The script-tag which includes the server will be removed on ```grunt deploy```.
