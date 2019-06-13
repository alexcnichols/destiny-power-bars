(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(10),o=n.n(c),i=(n(19),n(0)),s=n.n(i),u=n(2),l=n(3),m=n(11),p=n(7),f=n(6),d=function(){var e=Object(u.a)(s.a.mark(function e(t){var n,r,a,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem(y),r={"x-api-key":w},n&&(r.Authorization="Bearer ".concat(n)),console.log(t),a="".concat(t.url).concat(t.params?"?"+Object.entries(t.params).map(function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(r))}):""),e.next=7,fetch(a,{headers:r});case 7:return c=e.sent,e.abrupt("return",c.json());case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),h=["DestinyInventoryItemDefinition"],b=function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading manifest data from IDB"),e.next=3,Object(p.a)("MANIFEST_DATA");case 3:return t=e.sent,console.log("Finished loading manifest data from IDB"),e.abrupt("return",t);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(s.a.mark(function e(t){var n,r,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.version,console.log("Fetching fresh manifest data"),e.next=4,fetch("https://www.bungie.net".concat(t.jsonWorldContentPaths.en));case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,console.log("Pruning manifest data"),Object.keys(a).forEach(function(e){h.includes(e)||delete a[e]}),console.log("Storing manifest data in IDB"),e.next=13,Object(p.b)("MANIFEST_DATA",a);case 13:return localStorage.setItem("MANIFEST_VERSION",n),e.abrupt("return",a);case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.getDestinyManifest)(d);case 2:if(t=e.sent,n=localStorage.getItem("MANIFEST_VERSION"),t.Response.version!==n||window.location.search.includes("updateManifest")){e.next=14;break}return e.prev=5,e.next=8,b();case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(5),console.error(e.t0);case 14:return e.abrupt("return",g(t.Response));case 15:case"end":return e.stop()}},e,null,[[5,11]])}));return function(){return e.apply(this,arguments)}}(),w="d94be1e34632448fafdaf77c7afbb501",y="bungieAccessToken",I=function(){localStorage.removeItem(y),localStorage.removeItem("bungieAccessTokenExpiryTime"),localStorage.removeItem("bungieMembershipId"),localStorage.removeItem("destinyMembershipId")},j=function(){var e=Object(u.a)(s.a.mark(function e(t){var n,r,a,c,o,i,u,l=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l.length>1&&void 0!==l[1]&&l[1],console.log("handleTokenResponse"),I(),200!==t.status){e.next=23;break}return e.next=6,t.json();case 6:return n=e.sent,console.log(n),r=n.access_token,a=n.expires_in,c=Date.now()+1e3*a,o=n.membership_id,localStorage.setItem(y,r),localStorage.setItem("bungieAccessTokenExpiryTime",c.toString()),localStorage.setItem("bungieMembershipId",o),e.next=17,Object(m.getMembershipDataById)(d,{membershipId:o,membershipType:254});case 17:return i=e.sent,u=i.Response.destinyMemberships[0].membershipId,localStorage.setItem("destinyMembershipId",u),e.abrupt("return",{accessToken:r,membershipId:u});case 23:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchAuthToken",t),I(),e.next=4,fetch("https://www.bungie.net/platform/app/oauth/token/",{method:"POST",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},redirect:"follow",referrer:"no-referrer",body:"grant_type=authorization_code&code=".concat(t,"&client_id=").concat("27213")});case 4:return n=e.sent,e.next=7,j(n);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=localStorage.getItem(y),t=parseInt(localStorage.getItem("bungieAccessTokenExpiryTime")||"-1",10),n=localStorage.getItem("bungieMembershipId"),r=localStorage.getItem("destinyMembershipId");return!(!e||Date.now()>=t||!n||!r)},k=function(){var e=Object(u.a)(s.a.mark(function e(){var t,n,r,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=/code=([a-f0-9]+)/.exec(window.location.search),!(n=t&&t[1])||O()){e.next=7;break}return console.log("Fetching access token with auth code"),e.next=7,x(n);case 7:if(O()){e.next=11;break}return console.log("Redirecting to fresh authentication for missing or expired access token"),I(),e.abrupt("return",(console.log("Redirect to auth"),I(),void window.location.replace("".concat("https://www.bungie.net/en/OAuth/Authorize","?response_type=code&client_id=").concat("27213"))));case 11:return r=localStorage.getItem(y),a=localStorage.getItem("destinyMembershipId"),e.abrupt("return",{accessToken:r,membershipId:a});case 14:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),S=(n(25),n(12)),D=n(4),T=n(5),E={kinetic:1498876634,energy:2465295065,power:953998645,head:3448274439,gloves:3551918588,chest:14239492,legs:20886954,classItem:1585787867},M=function(e){return Object.values(e).reduce(function(e,t){return e+t},0)/Object.keys(E).length},A=function(){var e=Object(u.a)(s.a.mark(function e(t,n,r,a){var c,o,i,u,m,p,h,b,g,w,y,I,j,x,O,k,A,R;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a(!0),(c=v()).finally(function(){return a(!1)}),r(!0),o=localStorage.getItem("destinyMembershipId"),e.next=9,Object(f.getProfile)(d,{membershipType:4,destinyMembershipId:o,components:[200,205,201,102,300,307]});case 9:return i=e.sent,r(!1),u=i.Response.characters.data,m=i.Response.characterEquipment.data,p=i.Response.characterInventories.data,h=i.Response.profileInventory.data,b=i.Response.itemComponents.instances.data,e.next=18,c;case 18:g=e.sent,3,w=["titan","hunter","warlock"],y=2,I=3,u&&m&&p&&h&&b&&g&&(x=(j=function(e){return Object.values(e).reduce(function(e,t){return e.concat(t.items)},[])})(p).concat(j(m)),O=x.filter(function(e){var t=e.itemHash&&g.DestinyInventoryItemDefinition[e.itemHash];return t&&t.itemType===I}),k=function(e){var t=u[e],n=w[t.classType],r=function(e){return e.map(function(e){var t=e.itemInstanceId?b[e.itemInstanceId]:void 0,n=g.DestinyInventoryItemDefinition[e.itemHash];return Object(T.a)({},e,{instanceData:t,itemDefinition:n})}).filter(function(e){return e.instanceData&&e.itemDefinition&&[y,I].includes(e.itemDefinition.itemType)})},a=r(p[e].items.concat(m[e].items).concat(O)),c=r(h.items).filter(function(e){return e.itemDefinition&&(3===e.itemDefinition.classType||e.itemDefinition.classType===t.classType)}),o=a.concat(c),i=o.filter(function(e){return e.itemDefinition&&e.itemDefinition.itemType===y}),s=o.filter(function(e){return e.itemDefinition&&e.itemDefinition.itemType===I});window.weapons=s,window.armor=i;var f=Object.entries(E).reduce(function(e,t){var n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(T.a)({},e,Object(D.a)({},r,o.filter(function(e){return e.itemDefinition&&e.itemDefinition.inventory.bucketTypeHash===a})))},{}),d=Object.entries(f).reduce(function(e,t){var n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(T.a)({},e,Object(D.a)({},r,Math.max.apply(Math,Object(S.a)(a.map(function(e){return e.instanceData?e.instanceData.primaryStat.value:0})))))},{});return{id:e,className:n,itemsBySlot:f,maxPowerBySlot:d,overallPower:M(d)}},A=Object.keys(u),console.log({characters:u,equipments:m,inventories:p}),R=A.map(function(e){return k(e)}),n(R),console.log(R));case 24:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(r.useState)(O()),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)(function(){n||function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:e.sent&&c(!0);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()});var o=Object(r.useState)(!1),i=Object(l.a)(o,2),m=i[0],p=i[1],f=Object(r.useState)(!1),d=Object(l.a)(f,2),h=d[0],b=d[1],g=Object(r.useState)([]),v=Object(l.a)(g,2),w=v[0],y=v[1];Object(r.useEffect)(function(){A(n,y,b,p)},[n]);var I=function(e){var t=e.min,n=e.max,r=e.value,c=e.label,o=n-t,i=Math.floor((r-t)/o*1e3)/10;return a.a.createElement("div",{style:{width:"100%",backgroundColor:"#999"}},a.a.createElement("div",{style:{width:"".concat(i,"%"),backgroundColor:"red",height:"20px",margin:"1px",color:"white"}},c))};return w&&w.length>0?a.a.createElement("div",{style:{margin:"2em"}},w.map(function(e){return a.a.createElement("div",{style:{maxWidth:"400px"}},a.a.createElement("div",null,e.className," (",e.overallPower,")"),Object.entries(e.maxPowerBySlot).map(function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return a.a.createElement(I,{min:650,max:750,value:r,label:"".concat(n," (").concat(r,")")})}))})):a.a.createElement("div",null,a.a.createElement("div",null,n?"Authed":"Not authed"),a.a.createElement("div",null,m&&"Fetching manifest..."),a.a.createElement("div",null,h&&"Fetching character data..."),a.a.createElement("div",null,w&&w.length>0?"Has character data (".concat(w.length,")"):"No character data"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.e991e20d.chunk.js.map