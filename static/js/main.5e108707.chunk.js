(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){},17:function(e,n,t){},19:function(e,n,t){},21:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(8),c=t.n(i),l=(t(15),t(1)),r=t(2),s=t(4),u=t(3),m=t(5),d=t(6),h=!!((document||{}).documentElement||{}).style&&"scrollBehavior"in document.documentElement.style,b=function(e){e&&(h?e.scrollIntoView({behavior:"smooth",block:"start"}):e.scrollIntoView())},p=(t(17),function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).handleScroll=t.handleScroll.bind(Object(d.a)(Object(d.a)(t))),t.state={isSticky:!1},t}return Object(m.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){window.pageYOffset>this.nav.offsetTop?this.setState({isSticky:!0}):this.setState({isSticky:!1})}},{key:"scrollToPage",value:function(e){var n=document.querySelector(e);b(n)}},{key:"render",value:function(){var e=this,n=this.state.isSticky?"sticky":"",t=(this.state.isSticky,{backgroundColor:"#rgba(0,0,0,.5)",color:"#FFFFFF"});return o.a.createElement("nav",{className:n,ref:function(n){e.nav=n},style:t},o.a.createElement("style",{jsx:"true"},"\n            .menu__item:hover {\n              border-bottom: 2px solid ".concat("#FFFFFF",";\n            }\n          ")),o.a.createElement("div",{className:"menu"},o.a.createElement("div",{className:"menu__item active",onClick:function(){return e.scrollToPage(".about-page")}},"About"),o.a.createElement("div",{className:"menu__item",onClick:function(){return e.scrollToPage(".portfolio-page")}},"Portfolio")))}}]),n}(a.Component)),g=(t(19),function(){return o.a.createElement("div",{className:"landing-page"},o.a.createElement(p,null),o.a.createElement("main",{style:{color:"#FFFFFF"}},o.a.createElement("div",{className:"intro-wrapper"},o.a.createElement("div",{className:"intro-name"},"Hello, I'm Calvin!"),o.a.createElement("div",{className:"tagline"},"HKU Student | Computer Science Year 2 | Boardgame fan"))))}),f=(t(21),function(e,n){return o.a.createElement("div",{className:"about-page"},o.a.createElement("style",{jsx:"true"},"\n          .highlight {\n            background-color: ".concat("#000000",";\n          }\n          ::selection {\n            background-color: ","#000000",";\n          }\n        ")),o.a.createElement("div",{className:"content-grid"},o.a.createElement("h1",{style:{color:"#000000"}},"About"),o.a.createElement("div",{className:"about-wrapper"},o.a.createElement("div",{className:"about-content",style:{color:"#000000"}},o.a.createElement("p",null,"I like ",o.a.createElement("span",{className:"highlight"},"JavaScript")," and everything web."),o.a.createElement("p",null,"When my dev senses kick-in I build presumably"," ",o.a.createElement("span",{className:"highlight"}," awesome stuff"),". I stay close to the community and try to keep tabs with the pace at which the web is evolving. I also like to"," ",o.a.createElement("span",{className:"highlight"},"blog")," what I learn."),o.a.createElement("p",null,"I built this site ",o.a.createElement("span",{className:"highlight"},"from scratch"),". By scratch, I mean ",o.a.createElement("i",null,"absolutely from scratch")," ",o.a.createElement("span",{className:"highlight"},"without any UI library/framework")," ","(except React though) and had so much fun along the way."),o.a.createElement("p",null,"React-Redux, Node.js, Ruby on Rails, Java, Spring Boot, Docker and AWS are the main tricks up my sleeve. I am also obsessed with making the web look pretty with SASS/CSS."),o.a.createElement("p",{className:"text-emoji",style:{color:"#000000"}},"\\ (\u2022\u25e1\u2022) /")))))}),k=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"background"},o.a.createElement("style",{jsx:"true"},"\n                body {\n                    width: 100wh;\n                    height: 90vh;\n                    color: #fff;\n                    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);\n                    background-size: 400% 400%;\n                    -webkit-animation: Gradient 15s ease infinite;\n                    -moz-animation: Gradient 15s ease infinite;\n                    animation: Gradient 15s ease infinite;\n                }\n\n                @-webkit-keyframes Gradient {\n                    0% {\n                        background-position: 0% 50%\n                    }\n                    50% {\n                        background-position: 100% 50%\n                    }\n                    100% {\n                        background-position: 0% 50%\n                    }\n                }\n\n                @-moz-keyframes Gradient {\n                    0% {\n                        background-position: 0% 50%\n                    }\n                    50% {\n                        background-position: 100% 50%\n                    }\n                    100% {\n                        background-position: 0% 50%\n                    }\n                }\n\n                @keyframes Gradient {\n                    0% {\n                        background-position: 0% 50%\n                    }\n                    50% {\n                        background-position: 100% 50%\n                    }\n                    100% {\n                        background-position: 0% 50%\n                    }\n                }\n\n        "))}}]),n}(a.Component),y=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"landing-page"},o.a.createElement(k,null),o.a.createElement(g,null),o.a.createElement(f,null))}}]),n}(a.Component);c.a.render(o.a.createElement(y,null),document.getElementById("root"))},9:function(e,n,t){e.exports=t(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.5e108707.chunk.js.map