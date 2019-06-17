(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports={membershipSelect:"MembershipSelect_membershipSelect__3GbZz",membership:"MembershipSelect_membership__3vKKK",platform_blizzard:"MembershipSelect_platform_blizzard__1zLDb",platform_psn:"MembershipSelect_platform_psn__2ASN8",platform_xbox:"MembershipSelect_platform_xbox__1EgLN"}},18:function(e,t,n){e.exports=n(31)},2:function(e,t,n){e.exports={characterDisplay:"CharacterDisplay_characterDisplay__20O9A",header:"CharacterDisplay_header__2fx5d",emblemBackground:"CharacterDisplay_emblemBackground__2pAjE",name:"CharacterDisplay_name__2j8PA",power:"CharacterDisplay_power__1p583",powerBars:"CharacterDisplay_powerBars__3t0B5",powerRange:"CharacterDisplay_powerRange__1d86z",rangeLine:"CharacterDisplay_rangeLine__358zP",powerLabel:"CharacterDisplay_powerLabel__3EDmr",indicator:"CharacterDisplay_indicator__3CaQK",barContainer:"CharacterDisplay_barContainer__1OnNQ",barLine:"CharacterDisplay_barLine__2qulu",filledBar:"CharacterDisplay_filledBar__3UpB_"}},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),i=n.n(c),o=n(16),s=n.n(o),l=(n(24),n(1)),u=n.n(l),p=n(3),m=n(4),f=n(17),h=n(13),d=n(10),b=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,a,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=E(),a={"x-api-key":w},n&&(a.Authorization="Bearer ".concat(n)),console.log(t),r="".concat(t.url).concat(t.params?"?"+Object.entries(t.params).map(function(e){var t=Object(m.a)(e,2),n=t[0],a=t[1];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(a))}):""),e.next=8,fetch(r,{headers:a});case 8:return c=e.sent,e.next=11,c.json();case 11:return e.abrupt("return",e.sent);case 14:return e.prev=14,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 18:case"end":return e.stop()}},e,null,[[0,14]])}));return function(t){return e.apply(this,arguments)}}(),g=["DestinyInventoryItemDefinition"],v=function(){var e=Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading manifest data from IDB"),e.next=3,Object(h.a)("MANIFEST_DATA");case 3:return t=e.sent,console.log("Finished loading manifest data from IDB"),e.abrupt("return",t);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.version,console.log("Fetching fresh manifest data"),e.next=4,fetch("https://www.bungie.net".concat(t.jsonWorldContentPaths.en));case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,console.log("Pruning manifest data"),Object.keys(r).forEach(function(e){g.includes(e)||delete r[e]}),console.log("Storing manifest data in IDB"),e.next=13,Object(h.b)("MANIFEST_DATA",r);case 13:return localStorage.setItem("MANIFEST_VERSION",n),e.abrupt("return",r);case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(u.a.mark(function e(){var t,n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.getDestinyManifest)(b);case 2:if(t=e.sent,n=localStorage.getItem("MANIFEST_VERSION"),!t||!t.Response||t.Response.version!==n||window.location.search.includes("updateManifest")){e.next=10;break}if(a){e.next=9;break}return e.next=8,v();case 8:a=e.sent;case 9:return e.abrupt("return",a);case 10:return a=void 0,e.next=13,_(t.Response);case 13:return r=e.sent,a=r,e.abrupt("return",r);case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w="d94be1e34632448fafdaf77c7afbb501",S=function(){localStorage.removeItem("bungieAccessToken"),localStorage.removeItem("bungieAccessTokenExpiryTime"),localStorage.removeItem("bungieMembershipId"),localStorage.removeItem("destinyMemberships"),localStorage.removeItem("destinyMembership")},x=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,a,r,c,i,o,s,l=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l.length>1&&void 0!==l[1]&&l[1],console.log("handleTokenResponse"),S(),200!==t.status){e.next=23;break}return e.next=6,t.json();case 6:return n=e.sent,a=n.access_token,r=n.expires_in,c=Date.now()+1e3*r,i=n.membership_id,localStorage.setItem("bungieAccessToken",a),localStorage.setItem("bungieAccessTokenExpiryTime",c.toString()),localStorage.setItem("bungieMembershipId",i),e.next=16,Object(f.getMembershipDataById)(b,{membershipId:i,membershipType:254});case 16:return o=e.sent,s=o.Response.destinyMemberships,localStorage.setItem("destinyMemberships",JSON.stringify(s)),1===s.length&&D(s[0]),e.abrupt("return",{accessToken:a});case 23:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchAuthToken",t),S(),e.next=4,fetch("https://www.bungie.net/platform/app/oauth/token/",{method:"POST",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},redirect:"follow",referrer:"no-referrer",body:"grant_type=authorization_code&code=".concat(t,"&client_id=").concat("27213")});case 4:return n=e.sent,e.next=7,x(n);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E=function(){return localStorage.getItem("bungieAccessToken")},k=function(){var e=E(),t=parseInt(localStorage.getItem("bungieAccessTokenExpiryTime")||"-1",10),n=localStorage.getItem("bungieMembershipId");return!(!e||Date.now()>=t||!n)},j=function(){var e=localStorage.getItem("destinyMemberships");try{if(e)return JSON.parse(e)}catch(t){console.error("Error loading destiny memberships",t.message)}},I=function(){var e=localStorage.getItem("destinyMembership");try{if(e)return JSON.parse(e)}catch(t){console.error("Error loading destiny membership",t.message)}},D=function(e){localStorage.setItem("destinyMembership",JSON.stringify(e))},N=function(){var e=Object(p.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search),!(n=t.get("code"))||k()){e.next=6;break}return console.log("Fetching access token with auth code"),e.next=6,O(n);case 6:if(n&&window.location.replace("".concat(window.location.origin).concat(window.location.pathname)),!k()){e.next=9;break}return e.abrupt("return",!0);case 9:console.log("Redirecting to fresh authentication for missing or expired access token"),S(),console.log("Redirect to auth"),S(),window.location.replace("".concat("https://www.bungie.net/en/OAuth/Authorize","?response_type=code&client_id=").concat("27213"));case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),M=n(8),C=n(5),A=n(6),T={kinetic:1498876634,energy:2465295065,power:953998645,head:3448274439,gloves:3551918588,chest:14239492,legs:20886954,classItem:1585787867},L=function(e){return Object.values(e).reduce(function(e,t){return e+t},0)/Object.keys(T).length},B=function(){var e=Object(p.a)(u.a.mark(function e(t,n,a){var r,c,i,o,s,l,p,f,h,g,v,_,w,S,x,O,E,k;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:if(a(!0),(r=y()).finally(function(){return a(!1)}),n(!0),c=I()){e.next=13;break}return e.abrupt("return");case 13:return e.next=15,Object(d.getProfile)(b,{membershipType:c.membershipType,destinyMembershipId:c.membershipId,components:[200,205,201,102,300,307]});case 15:if(i=e.sent,n(!1),i&&i.Response&&i.Response.characters){e.next=19;break}return e.abrupt("return");case 19:return o=i.Response.characters.data,s=i.Response.characterEquipment.data,l=i.Response.characterInventories.data,p=i.Response.profileInventory.data,f=i.Response.itemComponents.instances.data,e.next=26,r;case 26:h=e.sent,3,g=["titan","hunter","warlock"],v=2,_=3,o&&s&&l&&p&&f&&h&&(S=(w=function(e){return Object.values(e).reduce(function(e,t){return e.concat(t.items)},[])})(l).concat(w(s)),x=S.filter(function(e){var t=e.itemHash&&h.DestinyInventoryItemDefinition[e.itemHash];return t&&t.itemType===_}),O=function(e){var t=o[e],n=g[t.classType],a=function(e){return e.map(function(e){var t=e.itemInstanceId?f[e.itemInstanceId]:void 0,n=h.DestinyInventoryItemDefinition[e.itemHash];return Object(A.a)({},e,{instanceData:t,itemDefinition:n})}).filter(function(e){return e.instanceData&&e.itemDefinition&&[v,_].includes(e.itemDefinition.itemType)})},r=a(l[e].items.concat(s[e].items).concat(x)),c=a(p.items).filter(function(e){return e.itemDefinition&&(3===e.itemDefinition.classType||e.itemDefinition.classType===t.classType)}),i=r.concat(c),u=i.filter(function(e){return e.itemDefinition&&e.itemDefinition.itemType===v}),d=i.filter(function(e){return e.itemDefinition&&e.itemDefinition.itemType===_});window.weapons=d,window.armor=u;var b=Object.entries(T).reduce(function(e,t){var n=Object(m.a)(t,2),a=n[0],r=n[1];return Object(A.a)({},e,Object(C.a)({},a,i.filter(function(e){return e.itemDefinition&&e.itemDefinition.inventory.bucketTypeHash===r})))},{}),y=Object.entries(b).reduce(function(e,t){var n=Object(m.a)(t,2),a=n[0],r=n[1];return Object(A.a)({},e,Object(C.a)({},a,Math.max.apply(Math,Object(M.a)(r.map(function(e){return e.instanceData?e.instanceData.primaryStat.value:0})))))},{}),w=L(y);return{character:t,id:e,className:n,itemsBySlot:b,maxPowerBySlot:y,overallPower:w}},E=Object.keys(o),k=E.map(function(e){return O(e)}),t(k)),e.next=40;break;case 34:return e.prev=34,e.t0=e.catch(0),console.error("Error fetching manifest and character data",e.t0),n(!1),a(!1),e.abrupt("return");case 40:case"end":return e.stop()}},e,null,[[0,34]])}));return function(t,n,a){return e.apply(this,arguments)}}(),R=n(11),P=n.n(R),z=n(2),W=n.n(z),F=function(e){var t=e.min,n=e.max,a=e.value,r=e.avgValue,c=e.label,o=n-t,s=Math.floor((a-t)/o*1e3)/10,l=Math.floor((r-t)/o*1e3)/10;Math.floor((r+2-t)/o*1e3),Math.floor((r+5-t)/o*1e3);return i.a.createElement("div",{className:W.a.barContainer},i.a.createElement("div",{className:W.a.filledBar,style:{width:"".concat(s,"%")}},i.a.createElement("span",null,c)),i.a.createElement("div",{className:W.a.barLine,style:{left:"".concat(l,"%")}}))},H=function(e){var t,n=e.data,a={kinetic:"Kinetic Weapon",energy:"Energy Weapon",power:"Power Weapon",head:"Helmet",gloves:"Gauntlets",chest:"Chest Armor",legs:"Leg Armor",classItem:{warlock:"Warlock Bond",hunter:"Hunter Cloak",titan:"Titan Mark"}[n.className]},r=Math.min.apply(Math,Object(M.a)(Object.values(n.maxPowerBySlot))),c=Math.max(50*Math.floor(r/50)-50,0),o=Math.max.apply(Math,Object(M.a)(Object.values(n.maxPowerBySlot))),s=Math.min(50*Math.ceil(o/50),750),l=Math.floor(n.overallPower),u=s-c,p=Math.floor((l-c)/u*1e3)/10;return i.a.createElement("div",{className:P()(W.a.characterDisplay,W.a["class_".concat(n.className)]),style:{backgroundColor:function(e){var t=e.red,n=e.green,a=e.blue;return"rgb(".concat(t,",").concat(n,",").concat(a,")")}(n.character.emblemColor)}},i.a.createElement("div",{className:W.a.header},i.a.createElement("img",{className:W.a.emblemBackground,src:"https://www.bungie.net".concat(n.character.emblemBackgroundPath),alt:""}),i.a.createElement("div",{className:W.a.name},(t=n.className).substr(0,1).toUpperCase()+t.substr(1)),i.a.createElement("div",{className:W.a.power},l)),i.a.createElement("div",{className:W.a.powerBars},i.a.createElement("div",{className:W.a.powerRange},i.a.createElement("div",{className:W.a.minPower},c),i.a.createElement("div",{className:W.a.rangeLine}),i.a.createElement("div",{className:W.a.maxPower},s)),i.a.createElement("div",{className:W.a.bars},Object.entries(n.maxPowerBySlot).map(function(e){var t=Object(m.a)(e,2),r=t[0],o=t[1];return i.a.createElement(F,{key:"".concat(n.id,"_").concat(r),min:c,max:s,value:o,avgValue:l,label:"".concat(o," ").concat(a[r]||r)})})),i.a.createElement("div",{className:W.a.powerLabel},i.a.createElement("div",{className:W.a.indicator,style:{left:"".concat(p,"%")}},l))))},J=n(12),K=n.n(J),U=function(e){var t=e.onMembershipSelect,n=j();if(!n)return null;if(0===n.length)return i.a.createElement("div",null,"No destiny memberships!");var a={1:"xbox",2:"psn",4:"blizzard"};return i.a.createElement("div",{className:K.a.membershipSelect},n.map(function(e){return i.a.createElement("div",{key:e.membershipId,className:P()(K.a.membership,K.a["platform_".concat(a[e.membershipType])]),onClick:function(){return t(e)}},e.displayName)}))},V=(n(30),n(9)),Q=n.n(V),G=n(7),q=n.n(G),Z=function(e){var t=e.status;return i.a.createElement("div",{className:q.a.loadingSpinnerContainer},i.a.createElement("div",{className:q.a.anchor},i.a.createElement("div",{className:q.a.spinnerLarge}),i.a.createElement("div",{className:q.a.spinnerSmall}),i.a.createElement("div",{className:q.a.status},t)))},$=function(){var e=Object(c.useState)(k()),t=Object(m.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)(function(){n||function(){var e=Object(p.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:e.sent&&a(!0);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()});var o=Object(c.useState)(!!I()),s=Object(m.a)(o,2),l=s[0],f=s[1],h=Object(c.useState)(!1),d=Object(m.a)(h,2),b=(d[0],d[1]),g=Object(c.useState)(!1),v=Object(m.a)(g,2),_=v[0],y=v[1],w=Object(c.useState)(void 0),S=Object(m.a)(w,2),x=S[0],O=S[1];Object(c.useEffect)(function(){var e=function(){return B(O,y,b)};n&&l&&(r||(r=setInterval(e,1e4)),e())},[n,l]);var E=function(e){D(e),f(!0)};if(x&&x.length>0)return i.a.createElement("div",{className:Q.a.App},i.a.createElement(U,{onMembershipSelect:E}),i.a.createElement("div",{className:Q.a.charactersContainer},i.a.createElement("div",{className:Q.a.characters},x.map(function(e){return i.a.createElement(H,{key:e.id,data:e})}))));var j="";return n?_||_?j="Fetching data...":l?x&&0!==x.length||(j="No character data"):j="Waiting for Destiny platform selection...":j="Authenticating...",i.a.createElement("div",{className:Q.a.App},i.a.createElement(Z,{status:j}),i.a.createElement(U,{onMembershipSelect:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports={anchor:"LoadingSpinner_anchor__78Pnm",spinner:"LoadingSpinner_spinner__32tWn",spin:"LoadingSpinner_spin__3FVoi",loadingSpinnerContainer:"LoadingSpinner_loadingSpinnerContainer__2QV5S",spinnerLarge:"LoadingSpinner_spinnerLarge__KooL0",spinnerSmall:"LoadingSpinner_spinnerSmall__27lWl",status:"LoadingSpinner_status__3sgCR"}},9:function(e,t,n){e.exports={App:"App_App__15LM-",loadingContainer:"App_loadingContainer__1Pa9s",charactersContainer:"App_charactersContainer__1RSU_",characters:"App_characters__1GhrS",loadingStatus:"App_loadingStatus__3QEhd"}}},[[18,1,2]]]);
//# sourceMappingURL=main.ebcd2b06.chunk.js.map