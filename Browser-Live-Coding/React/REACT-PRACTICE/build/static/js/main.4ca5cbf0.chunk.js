(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{45:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a(16),s=a(17),o=a(20),i=a(19),l=(a(23),a(47)),u=a(48);function h(e){var t=e.data;return Object(c.jsx)("div",{className:"row",children:t.map((function(e){return Object(c.jsxs)(l.a,{style:{width:"18rem"},className:"col-md-4",children:[Object(c.jsx)(l.a.Img,{variant:"top",src:e.recipe.image}),Object(c.jsxs)(l.a.Body,{children:[Object(c.jsx)(l.a.Title,{children:e.recipe.label}),Object(c.jsxs)(l.a.Text,{children:[e.recipe.source,Object(c.jsx)("ul",{children:e.recipe.ingredients.map((function(e){return Object(c.jsxs)("li",{children:[" ",e.text]})}))})]}),Object(c.jsx)(u.a,{variant:"primary",href:e.recipe.url,children:"Go somewhere"})]})]})}))})}a(24);var d=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).getData=function(){fetch("https://api.edamam.com/search?q=".concat(c.state.searchValue,"&app_id=").concat("4dd91546","&app_key=").concat("80f868b3c4e0fff6f1ab327079a51dbb")).then((function(e){return e.json()})).then((function(e){console.log(e),c.setState({data:e.hits})}))},c.searchData=function(e){e.preventDefault(),c.getData()},c.state={data:[],searchValue:"chicken"},console.log("constructor"),c}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("ComponentDidMount"),this.getData()}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldcomponentupdate"),!0}},{key:"render",value:function(){var e=this;return console.log(this.state.data,"....render Method"),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"container bg-dark text-white",children:[Object(c.jsx)("h1",{children:"Recipe APP"}),Object(c.jsxs)("form",{className:"text-right",onSubmit:this.searchData,children:[Object(c.jsxs)("label",{children:["Search Recipe:"," ",Object(c.jsx)("input",{type:"text",onChange:function(t){return e.setState({searchValue:t.target.value})}})]}),Object(c.jsx)("input",{type:"submit",value:"search"})]})]}),Object(c.jsx)(h,{data:this.state.data})]})}}],[{key:"getDerivedStateFromProps",value:function(){return console.log("getDerivedStateFromProps"),null}}]),a}(n.Component),j=a(18);a.n(j).a.render(Object(c.jsx)(d,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4ca5cbf0.chunk.js.map