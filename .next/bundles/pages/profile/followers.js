
          window.__NEXT_REGISTER_PAGE('/profile/followers', function() {
            var comp = module.exports=webpackJsonp([3],{103:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l(104),a=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=a.default},104:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(2),s=i(a),r=l(0),o=i(r),n=l(1),f=l(32),u=i(f),c="/Users/TJ/projects/simply-social/components/ProfileSummary/ProfileSummary.js",m=function(e){var t=e.profile;return o.default.createElement("div",{className:"jsx-597172903 profile",__source:{fileName:c,lineNumber:7}},o.default.createElement("div",{className:"jsx-597172903 profile__image",__source:{fileName:c,lineNumber:8}},o.default.createElement("img",{src:t.image,alt:"A photo of "+t.name,className:"jsx-597172903",__source:{fileName:c,lineNumber:9}})),o.default.createElement("div",{className:"jsx-597172903 profile__info",__source:{fileName:c,lineNumber:11}},o.default.createElement("p",{className:"jsx-597172903 profile__name",__source:{fileName:c,lineNumber:12}},t.name),o.default.createElement("div",{className:"jsx-597172903 profile__details",__source:{fileName:c,lineNumber:13}},o.default.createElement("span",{className:"jsx-597172903 profile__post-count",__source:{fileName:c,lineNumber:14}},(0,u.default)(t.posts.length)," posts"),o.default.createElement("span",{className:"jsx-597172903 profile__follower-count",__source:{fileName:c,lineNumber:15}},(0,u.default)(t.followers.length)," Followers"),o.default.createElement("span",{className:"jsx-597172903 profile__following-count",__source:{fileName:c,lineNumber:16}},(0,u.default)(t.following.length)," Following"))),o.default.createElement("div",{className:"jsx-597172903 profile__is-following",__source:{fileName:c,lineNumber:19}},o.default.createElement("img",{src:"/static/following-icon.png",alt:"",className:"jsx-597172903",__source:{fileName:c,lineNumber:20}})),o.default.createElement(s.default,{styleId:"597172903",css:".profile.jsx-597172903{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;width:100%;padding:25px 0;border-bottom:1px solid #dee1e5;}.profile__image.jsx-597172903{-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;}.profile__image.jsx-597172903 img.jsx-597172903{border-radius:4px;}.profile__info.jsx-597172903{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 0 0 16px;}.profile__name.jsx-597172903{font-size:16px;color:#3f454d;margin:0 0 12px;}.profile__details.jsx-597172903{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.profile__details.jsx-597172903 span.jsx-597172903{margin:0 22px 0 0;font-size:13px;color:#bec3cc;}.profile__is-following.jsx-597172903{-webkit-flex:0 0 30px;-ms-flex:0 0 30px;flex:0 0 30px;}"}))};m.displayName="ProfileSummary",m.propTypes={profile:(0,n.shape)({name:n.string,image:n.string,postCount:n.number,followersCount:n.number,followingCount:n.number}).isRequired},t.default=m},297:function(e,t,l){e.exports=l(298)},298:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(2),s=i(a),r=l(0),o=i(r),n=l(1),f=(i(n),l(26)),u=i(f),c=l(29),m=i(c),d=l(22),p=l(52),x=i(p),_=l(103),b=i(_),w="/Users/TJ/projects/simply-social/pages/profile/followers.js?entry",g=function(e){var t=e.userProfile,l=e.profiles;return o.default.createElement(x.default,{profile:t,__source:{fileName:w,lineNumber:14}},o.default.createElement("div",{className:"jsx-1708124367 posts",__source:{fileName:w,lineNumber:15}},l.map(function(e){return o.default.createElement(b.default,{key:e.id,profile:e,__source:{fileName:w,lineNumber:16}})})),o.default.createElement(s.default,{styleId:"1708124367",css:".posts.jsx-1708124367{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:599px;margin:0 auto;padding:50px 12px 0;}.posts--tile.jsx-1708124367{max-width:1199px;}.post-container.jsx-1708124367{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}.posts--tile.jsx-1708124367 .post-container.jsx-1708124367{max-width:375px;margin:0 0 25px 25px;max-height:500px;}.posts--tile.jsx-1708124367 .post-container.jsx-1708124367:nth-child(3n + 1),.posts--tile.jsx-1708124367 .post-container.jsx-1708124367:first-child{margin-left:0;}"}))};g.displayName="FollowersView",g.PropTypes={};var j=function(e){var t=(0,d.getAuthor)(e,e.user.data.profileId);return{userProfile:t,profiles:t.followers.map(function(t){return(0,d.getAuthor)(e,t)})}};t.default=(0,u.default)(m.default,j)(g)},32:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=/\B(?=(\d{3})+(?!\d))/g,a=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1).toString().replace(i,",")};t.default=a},52:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l(53),a=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=a.default},53:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(2),s=i(a),r=l(0),o=i(r),n=l(1),f=l(32),u=i(f),c=l(31),m=i(c),d=l(41),p=i(d),x=l(54),_=i(x),b="/Users/TJ/projects/simply-social/layouts/Profile/Profile.layout.js",w=function(e){var t=e.profile,l=e.children,i=(0,u.default)(t.followers.length),a=(0,u.default)(t.following.length),r=[{href:"/profile",name:t.name+"'s Feed"},{href:"/profile/followers",name:i+" Followers"},{href:"/profile/following",name:a+" following"}];return o.default.createElement(m.default,{__source:{fileName:b,lineNumber:30}},o.default.createElement("div",{className:"jsx-2729932527 profile-layout__header",__source:{fileName:b,lineNumber:31}},o.default.createElement(_.default,{profile:t,__source:{fileName:b,lineNumber:32}}),o.default.createElement(p.default,{links:r,__source:{fileName:b,lineNumber:34}})),o.default.createElement("div",{className:"jsx-2729932527 profile-layout__content",__source:{fileName:b,lineNumber:36}},l),o.default.createElement(s.default,{styleId:"2729932527",css:".profile-layout__header.jsx-2729932527{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:427px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:90px;background:url(/static/hero-background.jpg) center center no-repeat;background-size:cover;}"}))};w.displayName="ProfileLayout",w.propTypes={children:n.node.isRequired},t.default=w},54:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(2),s=i(a),r=l(0),o=i(r),n=l(1),f="/Users/TJ/projects/simply-social/layouts/Profile/Header.js",u=function(e){var t=e.profile;return o.default.createElement("div",{className:"jsx-3304665741 header",__source:{fileName:f,lineNumber:5}},o.default.createElement("div",{className:"jsx-3304665741 header__img-container",__source:{fileName:f,lineNumber:6}},o.default.createElement("img",{src:t.image,alt:"",className:"jsx-3304665741 header__img",__source:{fileName:f,lineNumber:7}})),o.default.createElement("h1",{className:"jsx-3304665741 header__name",__source:{fileName:f,lineNumber:10}},t.name),o.default.createElement("p",{className:"jsx-3304665741 header__bio",__source:{fileName:f,lineNumber:11}},t.bio),o.default.createElement("p",{className:"jsx-3304665741 header__site",__source:{fileName:f,lineNumber:12}},o.default.createElement("a",{href:t.site,className:"jsx-3304665741 header__site-link",__source:{fileName:f,lineNumber:12}},t.site)),o.default.createElement(s.default,{styleId:"3304665741",css:".header.jsx-3304665741{text-align:center;}.header__img-container.jsx-3304665741{margin:0 0 25px 0;}.header__img.jsx-3304665741{display:inline-block;width:85px;height:85px;border-radius:3px;}.header__name.jsx-3304665741{margin :0 0 15px 0;font-size:30px;color:white;}.header__bio.jsx-3304665741{margin :0 0 10px 0;font-size:15px;color:white;opacity:.7;}.header__site-link.jsx-3304665741:link{font-size:15px;text-decoration:none;opacity:.7;}.header__site-link.jsx-3304665741:link,.header__site-link.jsx-3304665741:visited{color:#262728;}"}))};u.displayName="HomeLayoutHeader",u.propTypes={profile:(0,n.shape)({img:n.string,name:n.string,bio:n.string,site:n.string})},u.defaultProps={profile:{img:"",name:"",bio:"",site:""}},t.default=u}},[297]);
            return { page: comp.default }
          })
        