(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(3),u=t(0),c=t.n(u),l=t(2),o=t.n(l),r=t(13),i=t.n(r),m=function(e){return c.a.createElement("form",null,c.a.createElement("div",null,"Filter shown with: ",c.a.createElement("input",{value:e.new,onChange:e.handle})))},s=function(e){return c.a.createElement("form",{onSubmit:e.add},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:e.name,onChange:e.handleName}),c.a.createElement("p",null),"number: ",c.a.createElement("input",{value:e.number,onChange:e.handleNumber}),c.a.createElement("p",null)),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},f=function(e){return c.a.createElement("p",null,"  ",e.name,"  ",e.number," ",e.button,"  ")},d=function(e){var n=e.personsList.filter((function(n){return!0===n.name.toUpperCase().includes(e.filter.toUpperCase())}));return c.a.createElement("div",null,n.map((function(n){return c.a.createElement(f,{key:n.id,name:n.name,number:n.number,button:c.a.createElement("button",{onClick:e.handleRemove,value:[n.id,n.name]}," delete ")})})))},p=function(){return o.a.get("/api/persons")},h=function(e){return o.a.post("/api/persons",e)},b=function(e,n){return o.a.put("".concat("/api/persons","/").concat(e),n)},E=function(e){return o.a.delete("".concat("/api/persons","/").concat(e))},v=(t(36),function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],l=n[1],r=Object(u.useState)(""),i=Object(a.a)(r,2),f=i[0],v=i[1],g=Object(u.useState)(""),O=Object(a.a)(g,2),w=O[0],j=O[1],k=Object(u.useState)(""),C=Object(a.a)(k,2),y=C[0],N=C[1],S=Object(u.useState)(null),T=Object(a.a)(S,2),R=T[0],x=T[1];Object(u.useEffect)((function(){o.a.get("/api/persons").then((function(e){l(e.data)}))}),[]);return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement((function(e){var n=e.message;return null==n?null:c.a.createElement("div",{className:"error"},n)}),{message:R}),c.a.createElement(m,{new:y,handle:function(e){N(e.target.value)}}),c.a.createElement("h2",null,"Add a new"),c.a.createElement(s,{add:function(e){e.preventDefault();var n=0,a=0;(t.map((function(e){e.name.valueOf()===f.valueOf()&&(n=1,a=e.id)})),console.log(n),1===n)?window.confirm("".concat(f," is already added to phonebook, replace the old number with the new one?"))&&(b(a,{name:f,number:w}).then((function(e){p().then((function(e){l(e.data)}))})),x("Changed number of ".concat(f)),setTimeout((function(){x(null)}),5e3),v(""),j("")):(h({name:f,number:w}).then((function(e){p().then((function(e){l(e.data)})),x("Added ".concat(f)),setTimeout((function(){x(null)}),5e3)})).catch((function(e){x("Error: ".concat(e.response.data.error)),setTimeout((function(){x(null)}),1e4)})),v(""),j(""))},name:f,handleName:function(e){v(e.target.value)},number:w,handleNumber:function(e){j(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(d,{key:t,personsList:t,filter:y,handleRemove:function(e){!function(e){var n=e.indexOf(","),t=e.slice(n+1),a=e.slice(0,n);window.confirm("Delete ".concat(t))&&E(a).then((function(e){p().then((function(e){l(e.data)})),x("Removed ".concat(t)),setTimeout((function(){x(null)}),5e3)})).catch((function(e){console.log("fail ".concat(e)),x("".concat(t," has already been removed")),setTimeout((function(){x(null)}),5e3)}))}(e.target.value)}}))});n.default=v;i.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.76d78fd8.chunk.js.map