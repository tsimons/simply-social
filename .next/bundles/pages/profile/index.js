
          window.__NEXT_REGISTER_PAGE('/profile', function() {
            var comp = module.exports=webpackJsonp([6],{294:function(e,t,l){e.exports=l(295)},295:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(2),s=i(a),r=l(0),n=i(r),o=l(1),u=(i(o),l(22)),f=i(u),c=l(25),d=i(c),m=l(47),p=i(m),x=l(64),_=i(x),b=l(65),g=i(b),j="/Users/TJ/projects/simply-social/pages/profile/index.js?entry",h=function(){return n.default.createElement(p.default,{__source:{fileName:j,lineNumber:14}},n.default.createElement("div",{className:"jsx-1796691531 posts",__source:{fileName:j,lineNumber:15}},g.default.map(function(e){return n.default.createElement("div",{className:"jsx-1796691531 post-container",__source:{fileName:j,lineNumber:17}},n.default.createElement(_.default,{key:e.post.message,post:e.post,author:e.author,liked:e.liked,layout:"list",__source:{fileName:j,lineNumber:18}}))})),n.default.createElement(s.default,{styleId:"1796691531",css:".posts.jsx-1796691531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-1796691531{max-width:1199px;}.post-container.jsx-1796691531{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:nth-child(3n + 1),.posts--tile.jsx-1796691531 .post-container.jsx-1796691531:first-child{margin-left:0;}"}))};t.default=(0,f.default)(d.default)(h)},47:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l(48),a=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=a.default},48:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(2),s=i(a),r=l(0),n=i(r),o=l(1),u=l(26),f=i(u),c=l(35),d=i(c),m=l(49),p=i(m),x="/Users/TJ/projects/simply-social/layouts/Profile/Profile.layout.js",_={name:"TJ Simons",bio:"Engineer in the Twin Cities Area",site:"http://tjsimons.com",img:"https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p160x160/20228285_10156386606534638_4208836979691078674_n.jpg?oh=fbeb0943ca159be516c2eba0fd068152&oe=5A6A3C09",followersCount:2542,followingCount:517},b=/\B(?=(\d{3})+(?!\d))/g,g=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1).toString().replace(b,",")},j=function(e){var t=e.profile,l=e.children,i=g(t.followersCount),a=g(t.followingCount),r=[{href:"/profile",name:t.name+"'s Feed"},{href:"/profile/followers",name:i+" Followers"},{href:"/profile/following",name:a+" following"}];return n.default.createElement(f.default,{__source:{fileName:x,lineNumber:39}},n.default.createElement("div",{className:"jsx-2729932527 profile-layout__header",__source:{fileName:x,lineNumber:40}},n.default.createElement(p.default,{profile:t,__source:{fileName:x,lineNumber:41}}),n.default.createElement(d.default,{links:r,__source:{fileName:x,lineNumber:43}})),n.default.createElement("div",{className:"jsx-2729932527 profile-layout__content",__source:{fileName:x,lineNumber:45}},l),n.default.createElement(s.default,{styleId:"2729932527",css:".profile-layout__header.jsx-2729932527{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:427px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:90px;background:url(/static/hero-background.jpg) center center no-repeat;background-size:cover;}"}))};j.displayName="ProfileLayout",j.propTypes={children:o.node.isRequired},j.defaultProps={profile:_},t.default=j},49:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(2),s=i(a),r=l(0),n=i(r),o=l(1),u="/Users/TJ/projects/simply-social/layouts/Profile/Header.js",f=function(e){var t=e.profile;return n.default.createElement("div",{className:"jsx-2365497228 header",__source:{fileName:u,lineNumber:5}},n.default.createElement("div",{className:"jsx-2365497228 header__img-container",__source:{fileName:u,lineNumber:6}},n.default.createElement("img",{src:t.img,alt:"",className:"jsx-2365497228 header__img",__source:{fileName:u,lineNumber:7}})),n.default.createElement("h1",{className:"jsx-2365497228 header__name",__source:{fileName:u,lineNumber:10}},t.name),n.default.createElement("p",{className:"jsx-2365497228 header__bio",__source:{fileName:u,lineNumber:11}},t.bio),n.default.createElement("p",{className:"jsx-2365497228 header__site",__source:{fileName:u,lineNumber:12}},n.default.createElement("a",{href:t.site,className:"jsx-2365497228 header__site-link",__source:{fileName:u,lineNumber:12}},t.site)),n.default.createElement(s.default,{styleId:"2365497228",css:".header.jsx-2365497228{text-align:center;}.header__img-container.jsx-2365497228{margin:0 0 25px 0;}.header__img.jsx-2365497228{display:inline-block;width:85px;height:85px;border-radius:3px;}.header__name.jsx-2365497228{margin :0 0 15px 0;font-size:30px;color:white;}.header__bio.jsx-2365497228{margin :0 0 10px 0;font-size:15px;color:white;opacity:.7;}.header__site-link.jsx-2365497228:link{font-size:15px;color:#262728;text-decoration:none;opacity:.7;}"}))};f.displayName="HomeLayoutHeader",f.propTypes={profile:(0,o.shape)({img:o.string,name:o.string,bio:o.string,site:o.string})},f.defaultProps={profile:{img:"",name:"",bio:"",site:""}},t.default=f}},[294]);
            return { page: comp.default }
          })
        