(this.webpackJsonpcovidstats=this.webpackJsonpcovidstats||[]).push([[0],{110:function(e,t,a){},112:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(50),s=a.n(n),i=(a(110),a(5)),o=a.n(i),d=a(9),l=a(2),u=a(3),j=a(7),b=a(6),h=(a(112),a.p+"static/media/CoronaImage.9e5d4fc7.png"),p=a(35),x=a.n(p),O="https://disease.sh/v3/covid-19",v="https://newsapi.org/v2/top-headlines?language=en&q=covid&apiKey=".concat("759a41ef0f944f91a5939ea831376dd8"),f=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://disease.sh/v3/covid-19/all");case 3:return t=e.sent,a={confirmed:t.data.cases,recovered:t.data.recovered,deaths:t.data.deaths,todayCases:t.data.todayCases},e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://disease.sh/v3/covid-19/continents");case 3:return t=e.sent,a=t.data.map((function(e){return{cases:e.cases,recovered:e.recovered,deaths:e.deaths,continent:e.continent}})),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(O,"/countries/India"),t&&(a="".concat(O,"/countries/").concat(t)),e.prev=2,e.next=5,x.a.get(a);case 5:return c=e.sent,r={confirmed:c.data.cases,recovered:c.data.recovered,deaths:c.data.deaths,todayCases:c.data.todayCases,country:c.data.country},e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(2);case 12:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://disease.sh/v3/covid-19/countries");case 3:return t=e.sent,a=t.data.map((function(e){return{country:e.country,confirmed:e.cases,recovered:e.recovered,deaths:e.deaths,latitude:e.countryInfo.lat,longitude:e.countryInfo.long,id:e.countryInfo._id}})),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(v);case 3:return t=e.sent,a=t.data.articles.map((function(e){return{author:e.author,content:e.content,description:e.description,date:e.publishedAt,source:e.source.name,title:e.title,url:e.url,image:e.urlToImage}})),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=a(12),w=(a(130),a(14)),S=a(0),N=function(e){var t=Object(c.useState)([]),a=Object(k.a)(t,2),r=a[0],n=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"container linechart",children:[Object(S.jsx)("h3",{style:{padding:"20px 0",textAlign:"center"},children:"COVID-19 GLOBAL STATS"}),Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("div",{className:"col mb-2",children:Object(S.jsx)("div",{className:"card bgConfirmedCard",style:{width:"100%",textAlign:"center",padding:"20px 0"},children:Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h5",{className:"card-title text-muted",children:"Confirmed"}),Object(S.jsx)("h4",{className:"card-title mt-2 ",children:Object(S.jsx)(w.a,{value:r.confirmed,displayType:"text",thousandSeparator:!0})})]})})}),Object(S.jsx)("div",{className:"col mb-2",children:Object(S.jsx)("div",{className:"card bgRecoveredCard",style:{width:"100%",textAlign:"center",padding:"20px 0"},children:Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h5",{className:"card-title text-muted",children:" Recovered "}),Object(S.jsx)("h4",{className:"card-title mt-2 ",children:Object(S.jsx)(w.a,{value:r.recovered,displayType:"text",thousandSeparator:!0})})]})})}),Object(S.jsx)("div",{className:"col mb-2",children:Object(S.jsx)("div",{className:"card bgDeathsCard",style:{width:"100%",textAlign:"center",padding:"20px 0"},children:Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h5",{className:"card-title text-muted",children:"Deaths"}),Object(S.jsx)("h4",{className:"card-title mt-2 ",children:Object(S.jsx)(w.a,{value:r.deaths,displayType:"text",thousandSeparator:!0})})]})})})]})]})})},T=a(252),A=a(255),M=a(253),D=a(254);var I=function(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),a=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(S.jsxs)(T.a,{center:[20.5937,78.9629],zoom:4,scrollWheelZoom:!0,children:[Object(S.jsx)(A.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.map((function(e,t){return Object(S.jsx)(M.a,{position:[e.latitude,e.longitude],children:Object(S.jsx)(D.a,{position:[e.latitude,e.longitude],children:Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:["Country: ",e.country]}),Object(S.jsxs)("p",{children:["Confirmed: ",Object(S.jsx)(w.a,{value:e.confirmed,displayType:"text",thousandSeparator:!0})]}),Object(S.jsxs)("p",{children:["Recovered: ",Object(S.jsx)(w.a,{value:e.recovered,displayType:"text",thousandSeparator:!0})]}),Object(S.jsxs)("p",{children:["Deaths: ",Object(S.jsx)(w.a,{value:e.deaths,displayType:"text",thousandSeparator:!0})]})]})})},t)}))]})},R=a(51),L=a.p+"static/media/noimage.b95c1842.jpeg",E=a(103),B=a.n(E),F=(a(241),function(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),a=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),console.log("news",a),Object(S.jsxs)("div",{className:"news",children:[Object(S.jsx)("h3",{style:{padding:"20px 0",textAlign:"center"},children:"Daily Covid news"}),void 0!=a?a.map((function(e){return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"news-card",children:[Object(S.jsx)("div",{className:"news-img",children:Object(S.jsx)("img",{style:{borderRadius:"10px"},src:e.image?e.image:L,width:"100%",height:"250px",alt:"image"})}),Object(S.jsxs)("div",{className:"news-content",children:[Object(S.jsxs)("h6",{style:{letterSpacing:"0.14em",paddingBottom:"0.5em"},children:[e.title?e.title:"No title"," - ",Object(S.jsxs)("span",{style:{fontSize:"0.8em",opacity:"0.5"},children:["By ",e.author?e.author:"Anonymous",", ",e.source?e.source:"Anonymous"]})]}),Object(S.jsxs)("p",{children:[Object(S.jsx)("span",{style:{opacity:"0.5"},children:e.content?e.content:e.description}),Object(S.jsx)("a",{href:e.url,children:"Read more"})]}),Object(S.jsx)("p",{style:{fontSize:"0.8em",opacity:"0.5"},children:Object(S.jsx)(B.a,{format:"ddd MMM D YYYY LT",date:e.date})})]})]})})})):Object(S.jsx)("p",{style:{textAlign:"center"},children:"Data could not be fetched"})]})}),z=function(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),a=t[0],r=t[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var n=a.length?Object(S.jsx)(R.b,{data:{labels:a.map((function(e){return e.continent})),datasets:[{data:a.map((function(e){return e.cases})),label:"Confirmed",borderColor:"red",fill:!0},{data:a.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",fill:!0},{data:a.map((function(e){return e.deaths})),label:"Deaths",borderColor:"blue",fill:!0}]}}):"Loading";return Object(S.jsxs)("div",{className:"linechart",children:[Object(S.jsx)("h3",{style:{padding:"20px 0",textAlign:"center"},children:"Continent Tabular Data"}),Object(S.jsxs)("table",{className:"table",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"col",style:{background:"rgba(0,0,0,0.05)",color:"black",border:"1px solid black"},children:"Continent"}),Object(S.jsx)("th",{scope:"col",style:{background:"rgba(255,0,0,0.05)",color:"red",border:"1px solid black"},children:"Confirmed"}),Object(S.jsx)("th",{scope:"col",style:{background:"rgba(0,255,0,0.05)",color:"green",border:"1px solid black"},children:"Recovered"}),Object(S.jsx)("th",{scope:"col",style:{background:"rgba(0,0,255,0.05)",color:"blue",border:"1px solid black"},children:"Deaths"})]})}),a.map((function(e,t){return Object(S.jsx)("tbody",{children:Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{style:{color:"black",border:"1px solid black"},children:["  ",e.continent,"  "]}),Object(S.jsxs)("td",{style:{color:"red",border:"1px solid black"},children:[Object(S.jsx)(w.a,{value:e.cases,displayType:"text",thousandSeparator:!0})," "]}),Object(S.jsxs)("td",{style:{color:"green",border:"1px solid black"},children:[Object(S.jsx)(w.a,{value:e.recovered,displayType:"text",thousandSeparator:!0})," "]}),Object(S.jsx)("td",{style:{color:"blue",border:"1px solid black"},children:Object(S.jsx)(w.a,{value:e.deaths,displayType:"text",thousandSeparator:!0})})]})},t)}))]}),Object(S.jsx)("h3",{style:{padding:"20px 0",textAlign:"center"},children:"Line Graph data"}),n]})},Y=function(e){var t=e.handleCountryChange,a=Object(c.useState)([]),r=Object(k.a)(a,2),n=r[0],s=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log(n),Object(S.jsx)("div",{children:Object(S.jsx)("form",{children:Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{style:{padding:"20px 0 0 0",textAlign:"center"},children:"Country select"}),Object(S.jsxs)("select",{className:"form-control countrySelect",defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(S.jsx)("option",{value:"global",children:"India"}),n.map((function(e,t){return Object(S.jsx)("option",{value:e.country,children:e.country},t)}))]})]})})})},G=function(e){var t=Object(S.jsx)(R.a,{data:{labels:["Confirmed","Recovered","Deaths"],datasets:[{label:"Total People Infected by Covid-19 stats",backgroundColor:["red","green","blue"],data:[e.data.confirmed,e.data.recovered,e.data.deaths]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(e.country)}}});return Object(S.jsxs)("div",{className:"linechart",children:[Object(S.jsxs)("h3",{style:{padding:"60px 0 20px 0",textAlign:"center"},children:["Covid-19 Stats for ",e.data.country," "]}),Object(S.jsxs)("table",{className:"table",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"col",style:{background:"rgba(0,0,0,0.05)",color:"black",border:"1px solid black"},children:e.data.country}),Object(S.jsx)("th",{scope:"col",style:{background:"rgba(255,0,0,0.05)",color:"red",border:"1px solid black"},children:"Confirmed"}),Object(S.jsx)("th",{scope:"col",style:{background:"rgba(0,255,0,0.05)",color:"green",border:"1px solid black"},children:"Recovered"}),Object(S.jsx)("th",{scope:"col",style:{background:"rgba(0,0,255,0.05)",color:"blue",border:"1px solid black"},children:"Deaths"})]})}),Object(S.jsx)("tbody",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"row",style:{color:"black",border:"1px solid black"},children:"Data"}),Object(S.jsxs)("td",{style:{color:"red",border:"1px solid black"},children:[Object(S.jsx)(w.a,{value:e.data.confirmed,displayType:"text",thousandSeparator:!0})," "]}),Object(S.jsxs)("td",{style:{color:"green",border:"1px solid black"},children:[Object(S.jsx)(w.a,{value:e.data.recovered,displayType:"text",thousandSeparator:!0})," "]}),Object(S.jsxs)("td",{style:{color:"blue",border:"1px solid black"},children:[Object(S.jsx)(w.a,{value:e.data.deaths,displayType:"text",thousandSeparator:!0})," "]})]})})]}),t]})},P=a(24),J=function(){return Object(S.jsx)("header",{children:Object(S.jsxs)("ul",{className:"navlink",children:[Object(S.jsx)("li",{children:Object(S.jsx)(P.b,{to:"/Covid19MapStatistics/",children:"Global"})}),Object(S.jsx)("li",{children:Object(S.jsx)(P.b,{to:"/Covid19MapStatistics/continent/",children:"Continent"})}),Object(S.jsx)("li",{children:Object(S.jsx)(P.b,{to:"/Covid19MapStatistics/country/",children:"Country"})}),Object(S.jsx)("li",{children:Object(S.jsx)(P.b,{to:"/Covid19MapStatistics/map/",children:"Map"})}),Object(S.jsx)("li",{children:Object(S.jsx)(P.b,{to:"/Covid19MapStatistics/covidnews/",children:"News"})})]})})},K=a(8),V=function(){return Object(S.jsxs)("div",{style:{textAlign:"center",padding:"2em"},children:["Made with \u2764\ufe0f by ",Object(S.jsx)("a",{href:"https://www.linkedin.com/in/khaidemsandip/",children:"Khaidem Sandip Singha"})]})},q=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(d.a)(o.a.mark((function t(a){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(a);case 2:c=t.sent,e.setState({data:c,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsxs)("div",{className:"imgContainer",children:[Object(S.jsx)("img",{className:"imageCss",src:h,alt:"Corona"}),Object(S.jsx)(J,{})]}),Object(S.jsxs)(K.c,{children:[Object(S.jsx)(K.a,{exact:!0,path:"/Covid19MapStatistics",children:Object(S.jsx)(N,{})}),Object(S.jsx)(K.a,{path:"/Covid19MapStatistics/continent/",children:Object(S.jsx)(z,{})}),Object(S.jsxs)(K.a,{path:"/Covid19MapStatistics/country/",children:[Object(S.jsx)(Y,{handleCountryChange:this.handleCountryChange}),Object(S.jsx)(G,{data:this.state.data,country:this.state.country})]}),Object(S.jsxs)(K.a,{path:"/Covid19MapStatistics/map/",children:[Object(S.jsx)("h3",{style:{padding:"20px 0",textAlign:"center"},children:"Map of Covid-19 Countries"}),Object(S.jsx)(I,{})]}),Object(S.jsx)(K.a,{path:"/Covid19MapStatistics/covidnews/",children:Object(S.jsx)(F,{})})]}),Object(S.jsx)(V,{})]})}}]),a}(r.a.Component),W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,256)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};s.a.render(Object(S.jsx)(P.a,{children:Object(S.jsx)(q,{})}),document.getElementById("root")),W()}},[[249,1,2]]]);
//# sourceMappingURL=main.858c6697.chunk.js.map