# An 11ty portfolio for developers

[See a live demo](https://thigoap.github.io/11tyFolio)

[See a live example](https://thigoap.github.io)

## Features

- One Page Minimalistic Layout
- Styled with TailwindCSS
- Fully Responsive
- Ready to deploy in GitHub Pages

## Getting Started

First of all, clone this repository: `git clone https://github.com/thigoap/11tyFolio.git yourPortfolioName` *(edit 'yourPortfolioName' with... your portfolio name)*

Navigate into it: `cd yourPortfolioName`

And remove the current origin repository: `git remote remove origin`

Now, install the dependencies: `npm install`

Run the base portfolio template: `npm run dev`

You can see the base portfolio template in the url: `http://localhost:8080/`

## Customization Instructions

You can follow along the 'Get Started Section' in the base portfolio template or follow the instructions below.

### Global Info
The basic info to fill this portfolio is stored in **src/site/_data/metadata.json**.
It includes:
- title: the title of your portfolio, used in the &lt;meta&gt; tag;
- description: the description of your portfolio, used in the &lt;meta&gt; tag;
- hero: your personal info, some of the items will be explained in details in the Hero and Contact Sections ;
- hero/name: your name, used in the &lt;meta&gt; tag, as the author;

### Hero Section
Info about you, the hero / heroin! All items are optional. As mentioned above, the items are in **src/site/_data/metadata.json**.
It includes:
- avatar: your profile picture. If used, you need to replace the file **avatar.png** in the folder **src/site/assets/**;
- greeting: a greeting message;
- description: a short dev description;

### Social Section
Your social networks are stored as objects in **src/site/_data/social.json**.
It includes:
- name: the social network;
- icon: icons by Font Awesome;
- url: the url to be used in the anchor tag;

### Skills Section
Your skills. It can be edited in **src/site/_data/techs.json**.
It includes:
- label: the tech itself. It is also used to display the tech in the Techs Navigation Bar;
- link: used as a class to display and style the Techs Navigation Bar;
- icons: array of icons by Font Awesome. You can add as many icons as you want;

### Instruction Message
Delete the code and the file listed below to get rid of the Instruction Message:
- code: {% include 'components/info.njk' %} in **src/site/_includes/layouts/base.njk**
- file: **src/site/_includes/components/info.njk**

### Techs Navigation Bar
A navigation bar with your skills.

'All' renders all your projects in the index page. The other tabs are generated according to the file **techs.json**.

### Projects Section
Info about your projects. It can be edited in **src/site/_data/projects.json**.
Edited items are:
- tech: must have the same name (without the prefix 'to') of one of the links in the file **techs.json**;
  - E.g.: techs.json "link": towebdev / projects.json "tech": webdev
- name: the name of the project;
- image: an image of the project. If you have a demo page for the project, the image will have an anchor tag to the live demo;
- description: a description of the project;
- code: optional url to a code repository;
- demo: optional url to a live demo;

### Contact Section
The form is configured to be used with **Netlify Forms**.

If you are going to deploy it in GitHub Pages I recommend you to use some static form provider, as [staticforms.xyz](https://www.staticforms.xyz/).

Here is a list of other form providers: [https://css-tricks.com/a-comparison-of-static-form-providers/](https://css-tricks.com/a-comparison-of-static-form-providers/).

There is also a button to open an email app with the email provided in the **metadata.json** file.

### Styles

#### Colors

You can customize any component you want directly in the components files.
Or, to make it easier, all principal colors are brought together in **tailwind.config.js** file.
- herocard: the background color of the hero card; 
- buttonbg: the background color of the buttons;
- buttonhover: the background color of the buttons when hovered;
- buttontext: the text color of the buttons;
- footerbg: the background color of the footer;

#### Fonts

Fonts can be edited in the same way as the colors.
ALso, **tailwind.config.js** file has two customizable fonts:
- sans: the default font of all the content;
- header: the font used in the header and the footer;

You need to import any new font in the file **src/site/_includes/css/main.css**.

## Deployment Instructions

### Deploy to GitHub Pages:

In four easy steps:

1. Edit the code in `package.json`. Replace `11tyFolio` with your repository name:
- line 16: `"build:11tygh": "eleventy --pathprefix=11tyFolio --output=docs",`

2. Run `npm run build:gh`
- This command generates a `docs` folder with the static page.

3. Commit the changes:
```
git add .
git commit -m "Portfolio in github pages."
git branch -M main
git remote add origin https://github.com/'yourUserName'/'yourRepositoryName'.git
git push -u origin main
```
4. Activate GitHub Pages in your repository Settings:
- Choose the /docs folder as the source folder of the GitHub Pages.

## License

MIT

---

If you identify some issue, have a queston about the setup/customization proccess or would like to help this project to grow, you can contact me by:

- Email: appthigo@gmail.com
- [Twitter](https://twitter.com/appthigo)
- [Facebook](https://www.facebook.com/thigoap)

Or use [Github Issues](https://www.github.com/thigoap/11tyfolio/issues).