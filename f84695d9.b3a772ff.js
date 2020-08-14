(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{207:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(9),i=(t(0),t(213)),o={id:"aws",title:"AWS Marketplace"},l={id:"installation/aws",title:"AWS Marketplace",description:"Launch an EC2 instance using erxes in the AWS Marketplace.",source:"@site/docs/installation/aws.md",permalink:"/installation/aws",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/aws.md",lastUpdatedBy:"Batnasan Byambasuren",lastUpdatedAt:1597404666,sidebar:"docs",previous:{title:"Heroku",permalink:"/installation/heroku"},next:{title:"DigitalOcean Marketplace",permalink:"/installation/digitalocean"}},c=[{value:"Connect to your EC2 instance",id:"connect-to-your-ec2-instance",children:[]},{value:"Gain root access",id:"gain-root-access",children:[]},{value:"Configure NGINX",id:"configure-nginx",children:[]},{value:"Install Let&#39;s Encrypt using Certbot",id:"install-lets-encrypt-using-certbot",children:[]},{value:"Configure <code>erxes</code>",id:"configure-erxes",children:[{value:"Configure PM2 <code>ecosystem.config.js</code>",id:"configure-pm2-ecosystemconfigjs",children:[]},{value:"Configure frontend environment variables",id:"configure-frontend-environment-variables",children:[]},{value:"export MongoDB URL",id:"export-mongodb-url",children:[]},{value:"Initialize and Load permissions for erxes",id:"initialize-and-load-permissions-for-erxes",children:[]},{value:"Congratulations, time to log in",id:"congratulations-time-to-log-in",children:[]}]}],b={rightToc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Launch an EC2 instance using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/marketplace/pp/B086MZ9FVS/"}),"erxes")," in the AWS Marketplace."),Object(i.b)("h2",{id:"connect-to-your-ec2-instance"},"Connect to your EC2 instance"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Connect to your EC2 instance via ssh.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ssh -i YOUR_PRIVATE_KEY_FILE.pem ubuntu@YOUR_INSTANCE_DNS\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"YOUR_PRIVATE_KEY_FILE.pem")," is your private key that is assigned to your EC2 instance during the installation"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"YOUR_INSTANCE_DNS")," is your public dns of your EC2 instance")),Object(i.b)("h2",{id:"gain-root-access"},"Gain root access"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run the following to gain the root access on the server.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo su\n")),Object(i.b)("h2",{id:"configure-nginx"},"Configure NGINX"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You need to replace the ",Object(i.b)("inlineCode",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual ",Object(i.b)("inlineCode",{parentName:"li"},"domain name")," in the nginx config file ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/nginx/sites-available/default"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nano /etc/nginx/sites-available/default\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"After replacing YOUR_DOMAIN_COM with your actual domain name. Save with ctrl + x and then y to accept the changes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Test the ",Object(i.b)("strong",{parentName:"p"},"NGINX")," configuration to make sure you don't have any errors"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nginx -t\n")),Object(i.b)("p",null,"You should see the following output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reload nginx service")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"systemctl reload nginx\n")),Object(i.b)("h2",{id:"install-lets-encrypt-using-certbot"},"Install Let's Encrypt using Certbot"),Object(i.b)("p",null,"Execute Certbot. You will asked several questions, you can answer as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Enter your email address"),Object(i.b)("li",{parentName:"ul"},"Agree with the ",Object(i.b)("strong",{parentName:"li"},"Terms of Service")),Object(i.b)("li",{parentName:"ul"},"Answer ",Object(i.b)("inlineCode",{parentName:"li"},"Yes")," or ",Object(i.b)("inlineCode",{parentName:"li"},"No"),", if you want to share your email address with the Electronic Frontier Foundation"),Object(i.b)("li",{parentName:"ul"},"Select the corresponding number associated with your domain name, usually ",Object(i.b)("inlineCode",{parentName:"li"},"1")),Object(i.b)("li",{parentName:"ul"},"Choose ",Object(i.b)("inlineCode",{parentName:"li"},"2")," to redirect all your traffic to a secure ",Object(i.b)("strong",{parentName:"li"},"HTTPS"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"certbot --nginx\n")),Object(i.b)("h2",{id:"configure-erxes"},"Configure ",Object(i.b)("inlineCode",{parentName:"h2"},"erxes")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run the following to change the password for ",Object(i.b)("inlineCode",{parentName:"li"},"erxes")," and switch to user ",Object(i.b)("inlineCode",{parentName:"li"},"erxes"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"passwd erxes\nsu erxes\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The rest of the steps are run as ",Object(i.b)("inlineCode",{parentName:"li"},"erxes")," user.")),Object(i.b)("h3",{id:"configure-pm2-ecosystemconfigjs"},"Configure PM2 ",Object(i.b)("inlineCode",{parentName:"h3"},"ecosystem.config.js")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run the following command to replace ",Object(i.b)("inlineCode",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual domain name. Please use ",Object(i.b)("inlineCode",{parentName:"li"},"your domain")," for ",Object(i.b)("inlineCode",{parentName:"li"},"your.domain.com"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/erxes.io\nsed -i 's/YOUR_DOMAIN_COM/your.domain.com/g' ecosystem.config.js\n")),Object(i.b)("h3",{id:"configure-frontend-environment-variables"},"Configure frontend environment variables"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open the ",Object(i.b)("inlineCode",{parentName:"li"},"~/erxes.io/erxes/js/env.js")," file in the nano editor.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nano ~/erxes.io/erxes/js/env.js\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy the following ",Object(i.b)("strong",{parentName:"li"},"environment variables")," in between the ",Object(i.b)("strong",{parentName:"li"},"{ }"),", and replace ",Object(i.b)("strong",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual domain name.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'NODE_ENV: "production",\nREACT_APP_API_URL: "https://YOUR_DOMAIN_COM/api",\nREACT_APP_API_SUBSCRIPTION_URL: "wss://YOUR_DOMAIN_COM/api/subscriptions",\nREACT_APP_CDN_HOST: "https://YOUR_DOMAIN_COM/widgets"\n')),Object(i.b)("p",null,"It should look like this, but ",Object(i.b)("strong",{parentName:"p"},"with your actual domain name"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'window.env = {\n    NODE_ENV: "production",\n    REACT_APP_API_URL: "https://erxes.example.com/api",\n    REACT_APP_API_SUBSCRIPTION_URL: "wss://erxes.example.com/api/subscriptions",\n    REACT_APP_CDN_HOST: "https://erxes.example.com/widgets"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"save the file with ",Object(i.b)("inlineCode",{parentName:"li"},"ctrl + x")," and then ",Object(i.b)("inlineCode",{parentName:"li"},"y")," to accept all changes.")),Object(i.b)("p",null,"You are now ready to ",Object(i.b)("strong",{parentName:"p"},"initialize")," and ",Object(i.b)("strong",{parentName:"p"},"load the permissions")," in ",Object(i.b)("strong",{parentName:"p"},"erxes"),"."),Object(i.b)("h3",{id:"export-mongodb-url"},"export MongoDB URL"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/erxes.io\nnano ecosystem.config.js\n")),Object(i.b)("p",null,'Locate the "MONGO_URL": "mongodb://erxes:82e3e42ef31e51d51687b366118200e2@localhost/erxes?authSource=admin&replicaSet=rs0", under the erxes-api.'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Copy the MONGO_URL and exit the nano editor with ctrl + x.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Now you will need to export and set the variable MONGO_URL, with the copied URL. See below:"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'# example\n# export MONGO_URL="mongodb://erxes:92c54fa1f0658xxxxc2d9ce618b008b4@localhost/erxes?authSource=admin&replicaSet=rs0"\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Use your copied MONGO_URL below:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'export MONGO_URL="YOUR_COPIED_MONGO_URL_HERE"\n')),Object(i.b)("h3",{id:"initialize-and-load-permissions-for-erxes"},"Initialize and Load permissions for erxes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"initialize Erxes and generate ",Object(i.b)("strong",{parentName:"li"},"login password"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"source ~/.nvm/nvm.sh\nnvm use default\ncd ~/erxes.io/erxes-api/dist\nnode commands/initProject\n")),Object(i.b)("p",null,"You should have a generated ",Object(i.b)("strong",{parentName:"p"},"password"),". The output will be similar to this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Your new password: HcEjfBMxws\n\n# note this down\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run this final command to finish the installation of ",Object(i.b)("strong",{parentName:"li"},"erxes"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/erxes.io/erxes-api/dist\nnode commands/loadPermissionData\n\ncd ~/erxes.io\npm2 restart ecosystem.config.js\n")),Object(i.b)("h3",{id:"congratulations-time-to-log-in"},"Congratulations, time to log in"),Object(i.b)("p",null,"You may now visit your domain, and log in."),Object(i.b)("p",null,"The username is ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"mailto:admin@erxes.io"}),"admin@erxes.io")),", and the password is the password generated above."))}s.isMDXComponent=!0},213:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),s=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},O=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(t),O=a,m=u["".concat(o,".").concat(O)]||u[O]||p[O]||i;return t?r.a.createElement(m,l(l({ref:n},b),{},{components:t})):r.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=O;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);