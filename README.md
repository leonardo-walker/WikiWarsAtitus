
# Pré requisitos:
| Ferramenta | Versão  |
|-------|--------|
| [Ruby](https://www.ruby-lang.org/pt/) | v.3.1.2  |
| [Git](https://git-scm.com/)   | v.2.36.1 |
| [Cucumber](https://rubygems.org/gems/cucumber) | v.8.0.0  |
| [Capybara](https://rubygems.org/gems/capybara/versions/2.7.1?locale=pt-BR) | v.3.37.1  |
| [SitePrism](https://rubygems.org/gems/site_prism/versions/2.9?locale=pt-BR) | v.3.7.3  |
| [ChromeDriver](https://chromedriver.chromium.org/downloads) | Baseado na versão do seu GoogleChrome   |

# Instalação:
## [Git](https://git-scm.com/downloads)
1. Baixar a versão estável mais recente.
2. Executar o instalador.

## [Ruby](https://rubyinstaller.org/downloads/)
 1. Baixar o instalador Ruby+Devikit 3.1.2-1 (x64)
 2. Executar o instalador:
  - Marcar a opção"Add Ruby executables to your Path"
  - Marcar a opção "Associate .rb and .rbw files with this Ruby installantion".
  
## Gem's
1. Executar os seguintes comandos no CMD: <br>
 ```sh 
 gem install win32console 
 ``` 
 ```sh 
 gem install bundler 
 ``` 
 ```sh 
 gem install ruby-debug-ide
 ``` 
  
# Execução dos Testes:
- Abrir o CMD da pasta "Testes" e executar os seguintes comandos:
 ```sh
 bundle install
 ```
  ```sh
 cucumber -t@"Nome do teste"
 ```
 
# Implantação:
```sh
git checkout -b "main"
```
```sh
git commit -m "nome do commit"
```
```sh
git push -u origin main
```
# Autor
### Leonardo Walker
- [GitHub](https://github.com/leonardo-walker)
- [LinkedIn](https://www.linkedin.com/in/leonardo-walker/)
- Email: leonardowalker289@gmail.com


# Licença
Copyright © 2022 [Leonardo Walker](https://github.com/leonardo-walker).<br>
Copyright © 2022 [Compass.uol](https://compass.uol/).

# Créditos
- [Documentação GIT](https://git-scm.com/doc)
- [Documentação Ruby](https://www.ruby-lang.org/pt/documentation/)
- [Documentação Cucumber](https://github.com/cucumber/cucumber-ruby)
- [Documentação Capybara](https://github.com/teamcapybara/capybara)
- [Documentação SitePrism](https://github.com/site-prism/site_prism) 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
