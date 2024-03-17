import{d as m,b as C,o as c,k as O,x as S,u as b,e as l,f as r,g as i,t as u,v as j,m as E,p as h,q as v,S as N}from"./vue.esm-bundler-BBrDyPcD.js";import{S as Y}from"./hint-6ZGODtYe.js";import{S as D}from"./icon-button-BvrsYNH9.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as G}from"./seo-button-JHrWkb1J.js";import"./popover-Cp95DrB6.js";import"./basecomponent.esm-emi5-qlX.js";import"./ripple.esm-BYo3grDy.js";import"./baseicon.esm-DeQm_HZt.js";import"./badge.esm-BvdzT4LP.js";const P=m({__name:"FavoriteButton",props:{favorite:{type:Boolean}},emits:["toggle"],setup(t,{emit:e}){const n=t,o=e,a=C(n.favorite),p=()=>{a.value=!a.value,o("toggle",a.value)};return(d,_)=>(c(),O(b(D),{icon:`pi ${a.value?"pi-heart-fill":"pi-heart"}`,"icon-size":"2rem",style:S(`color: ${a.value?"var(--favorite-btn-active)":"var(--favorite-btn-inactive)"};`),onClick:p},null,8,["icon","style"]))}});P.__docgenInfo={exportName:"default",displayName:"FavoriteButton",description:"",tags:{},props:[{name:"favorite",required:!0,type:{name:"boolean"}}],events:[{name:"toggle",type:{names:["boolean"]}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/other/FavoriteButton.vue"]};const J={class:"name-cell__title"},K={class:"name-cell__controls"},Z={class:"name-cell__control"},ee={class:"name-cell__control"},te={class:"name-cell__name"},ne={class:"project-name"},oe={class:"project-name__name"},re={class:"project-domain"},w=m({__name:"NameCell",props:{projectName:{},projectDomain:{},hintTitle:{},hintText:{},favorite:{type:Boolean}},emits:["toggle-favorite"],setup(t,{emit:e}){const n=t,o=e,a=C(n.favorite),p=d=>{a.value=d,o("toggle-favorite",a.value)};return(d,_)=>(c(),l("td",null,[r("div",J,[r("div",K,[r("div",Z,[i(P,{favorite:a.value},null,8,["favorite"])]),r("div",ee,[i(P,{favorite:a.value,onToggle:p},null,8,["favorite"])])]),r("div",te,[r("div",ne,[r("h6",oe,u(d.projectName),1),i(b(Y),{"icon-size":"1.6rem"},{title:j(()=>[E(u(d.hintTitle),1)]),default:j(()=>[E(" "+u(d.hintText),1)]),_:1})]),r("span",re,u(d.projectDomain),1)])])]))}}),ae=g(w,[["__scopeId","data-v-34a48861"]]);w.__docgenInfo={exportName:"default",displayName:"NameCell",description:"",tags:{},props:[{name:"projectName",required:!0,type:{name:"String"}},{name:"projectDomain",required:!0,type:{name:"String"}},{name:"hintTitle",required:!0,type:{name:"String"}},{name:"hintText",required:!0,type:{name:"String"}},{name:"favorite",required:!0,type:{name:"boolean"}}],events:[{name:"toggle-favorite",type:{names:["boolean"]}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/cells/NameCell.vue"]};function I(t){const e=t.getHours(),n=t.getMinutes();return`${e<10?"0"+e:e}:${n<10?"0"+n:n}`}function R(t){const e=t.getDate(),n=t.getMonth(),o=t.getFullYear();return`${e<10?"0"+e:e}.${n<10?"0"+n:n}.${o}`}function T(t){let e="";for(;t/1e3>=1;)e+="k",t/=1e3;return e!==""?`${t.toFixed(2)}${e}`:t}const se={class:"creation-date-cell"},ie={class:"creation-date-cell__date"},ce={class:"creation-date-cell__time"},M=m({__name:"CreationDateCell",props:{creationDate:{}},setup(t){const e=t,n=h(()=>R(e.creationDate)),o=h(()=>I(e.creationDate));return(a,p)=>(c(),l("td",null,[r("div",se,[r("span",ie,u(n.value),1),r("span",ce,u(o.value),1)])]))}}),le=g(M,[["__scopeId","data-v-a876ccbe"]]);M.__docgenInfo={exportName:"default",displayName:"CreationDateCell",description:"",tags:{},props:[{name:"creationDate",required:!0,type:{name:"Date"}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/cells/CreationDateCell.vue"]};const ue={class:"check-position-cell"},pe={class:"check-position-cell__datetime"},me={class:"check-position-cell__date"},de={class:"check-position-cell__time"},B=m({__name:"CheckPositionsCell",props:{checkPositionsDate:{}},emits:["refresh"],setup(t,{emit:e}){const n=t,o=e,a=h(()=>R(n.checkPositionsDate)),p=h(()=>I(n.checkPositionsDate)),d=()=>{o("refresh")};return(_,q)=>(c(),l("td",null,[r("div",ue,[i(G,{icon:"pi pi-refresh","icon-size":"2rem",onClick:d}),r("div",pe,[r("span",me,u(a.value),1),r("span",de,u(p.value),1)])])]))}}),he=g(B,[["__scopeId","data-v-3476ef62"]]);B.__docgenInfo={exportName:"default",displayName:"CheckPositionsCell",description:"",tags:{},props:[{name:"checkPositionsDate",required:!0,type:{name:"Date"}}],events:[{name:"refresh"}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/cells/CheckPositionsCell.vue"]};const ge={class:"queries-cell"},_e={class:"queries-cell__queries"},A=m({__name:"QueriesCell",props:{queries:{}},setup(t){const e=t,n=h(()=>T(e.queries));return(o,a)=>(c(),l("td",null,[r("div",ge,[r("span",_e,u(n.value),1)])]))}}),ye=g(A,[["__scopeId","data-v-387a6bd2"]]);A.__docgenInfo={exportName:"default",displayName:"QueriesCell",description:"",tags:{},props:[{name:"queries",required:!0,type:{name:"number"}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/cells/QueriesCell.vue"]};const ve={class:"regions-summary-cell"},W=m({__name:"RegionsSummaryCell",emits:["regions-summary"],setup(t,{emit:e}){const n=e,o=()=>{n("regions-summary")};return(a,p)=>(c(),l("td",null,[r("div",ve,[i(b(D),{class:"regions-summary-cell__button",icon:"pi pi-map-marker","icon-size":"2rem",onClick:o})])]))}}),Te=g(W,[["__scopeId","data-v-f9b7c7e2"]]);W.__docgenInfo={exportName:"default",displayName:"RegionsSummaryCell",description:"",tags:{},events:[{name:"regions-summary"}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/cells/RegionsSummaryCell.vue"]};const be={class:"average-position-cell"},fe={class:"average-position-cell__position-dynamics"},Pe={class:"average-position-cell__position"},x=m({__name:"AveragePositionCell",props:{averagePosition:{},averagePositionChange:{}},setup(t){const e=t,n=h(()=>Math.abs(e.averagePositionChange)),o=h(()=>e.averagePositionChange>0);return(a,p)=>(c(),l("td",null,[r("div",be,[r("div",fe,[r("span",Pe,u(a.averagePosition),1),n.value?(c(),l("span",{key:0,class:v(["average-position-cell__dynamics",o.value?"average-position-cell__dynamics_positive":"average-position-cell__dynamics_negative"])},u((o.value?"↑":"↓")+n.value),3)):N("",!0)])])]))}}),Ce=g(x,[["__scopeId","data-v-4a7abc8c"]]);x.__docgenInfo={exportName:"default",displayName:"AveragePositionCell",description:"",tags:{},props:[{name:"averagePosition",required:!0,type:{name:"number"}},{name:"averagePositionChange",required:!0,type:{name:"number"}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/cells/AveragePositionCell.vue"]};const De={class:"dynamics-cell"},qe={class:"dynamics-cell__position-dynamics"},je={class:"dynamics-cell__position"},Ee={key:0,class:"dynamics-cell__dynamics dynamics-cell__dynamics_positive"},$e={key:1,class:"dynamics-cell__dynamics dynamics-cell__dynamics_negative"},Fe={key:2,class:"dynamics-cell__dynamics dynamics-cell__dynamics_equals"},z=m({__name:"DynamicsCell",props:{dynamics:{},dynamicsDirection:{}},setup(t){const e=t,n=h(()=>T(e.dynamics));return(o,a)=>(c(),l("td",null,[r("div",De,[r("div",qe,[r("span",je,u(n.value),1),o.dynamicsDirection===1?(c(),l("span",Ee," ↑ ")):o.dynamicsDirection===-1?(c(),l("span",$e," ↓ ")):(c(),l("span",Fe," = "))])])]))}}),ke=g(z,[["__scopeId","data-v-e9751302"]]);z.__docgenInfo={exportName:"default",displayName:"DynamicsCell",description:"",tags:{},props:[{name:"dynamics",required:!0,type:{name:"number"}},{name:"dynamicsDirection",required:!0,type:{name:"union",elements:[{name:"TSLiteralType"},{name:"0"},{name:"1"}]}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/cells/DynamicsCell.vue"]};const Q=m({__name:"Bar",props:{percentage:{}},setup(t){const e=t,n=h(()=>e.percentage<=33?"low":e.percentage<=66?"med":"high");return(o,a)=>(c(),l("div",{class:v(["bar",`bar_appearance_${n.value}`])},[r("div",{class:v(["bar__value",`bar__value_appearance_${n.value}`]),style:S(`width: ${o.percentage}%`)},null,6)],2))}}),Se=g(Q,[["__scopeId","data-v-4e5d0359"]]);Q.__docgenInfo={exportName:"default",displayName:"Bar",description:"",tags:{},props:[{name:"percentage",required:!0,type:{name:"number"}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/other/Bar.vue"]};const Ne={class:"top"},we={class:"top__position-dynamics"},Ie={class:"top__position"},V=m({__name:"Top",props:{top:{},topChange:{},topPercentage:{}},setup(t){const e=t,n=h(()=>T(e.top)),o=h(()=>T(Math.abs(e.topChange))),a=h(()=>e.topChange>0);return(p,d)=>(c(),l("div",Ne,[r("div",we,[r("span",Ie,u(n.value),1),o.value?(c(),l("span",{key:0,class:v(["top__dynamics",a.value?"top__dynamics_positive":"top__dynamics_negative"])},u((a.value?"↑":"↓")+o.value),3)):N("",!0)]),i(Se,{percentage:p.topPercentage},null,8,["percentage"])]))}}),f=g(V,[["__scopeId","data-v-4ed60e03"]]);V.__docgenInfo={exportName:"default",displayName:"Top",description:"",tags:{},props:[{name:"top",required:!0,type:{name:"number"}},{name:"topChange",required:!0,type:{name:"number"}},{name:"topPercentage",required:!0,type:{name:"number"}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/other/Top.vue"]};const Re={class:"tops-cell"},X=m({__name:"TopsCell",props:{topTen:{},topTenChange:{},topTenPercentage:{},topElevenToThirty:{},topElevenToThirtyChange:{},topElevenToThirtyPercentage:{},topThirtyPlus:{},topThirtyPlusChange:{},topThirtyPlusPercentage:{}},setup(t){return(e,n)=>(c(),l("td",null,[r("div",Re,[i(f,{top:e.topTen,"top-change":e.topTenChange,"top-percentage":e.topTenPercentage},null,8,["top","top-change","top-percentage"]),i(f,{top:e.topElevenToThirty,"top-change":e.topElevenToThirtyChange,"top-percentage":e.topElevenToThirtyPercentage},null,8,["top","top-change","top-percentage"]),i(f,{top:e.topThirtyPlus,"top-change":e.topThirtyPlusChange,"top-percentage":e.topThirtyPlusPercentage},null,8,["top","top-change","top-percentage"])])]))}}),Me=g(X,[["__scopeId","data-v-375a776d"]]);X.__docgenInfo={exportName:"default",displayName:"TopsCell",description:"",tags:{},props:[{name:"topTen",required:!0,type:{name:"number"}},{name:"topTenChange",required:!0,type:{name:"number"}},{name:"topTenPercentage",required:!0,type:{name:"number"}},{name:"topElevenToThirty",required:!0,type:{name:"number"}},{name:"topElevenToThirtyChange",required:!0,type:{name:"number"}},{name:"topElevenToThirtyPercentage",required:!0,type:{name:"number"}},{name:"topThirtyPlus",required:!0,type:{name:"number"}},{name:"topThirtyPlusChange",required:!0,type:{name:"number"}},{name:"topThirtyPlusPercentage",required:!0,type:{name:"number"}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/cells/TopsCell.vue"]};const Be={class:"menu-cell"},H=m({__name:"MenuCell",emits:["menu"],setup(t,{emit:e}){const n=e,o=()=>{n("menu")};return(a,p)=>(c(),l("td",null,[r("div",Be,[i(b(D),{class:"menu-cell__button",icon:"pi pi-ellipsis-v","icon-size":"2rem",onClick:o})])]))}}),Ae=g(H,[["__scopeId","data-v-05563439"]]);H.__docgenInfo={exportName:"default",displayName:"MenuCell",description:"",tags:{},events:[{name:"menu"}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/cells/MenuCell.vue"]};const We={class:"projects-table-row"},L=m({__name:"projects-table-row",props:{projectName:{},projectDomain:{},hintTitle:{},hintText:{},favorite:{type:Boolean},creationDate:{},checkPositionsDate:{},queries:{},averagePosition:{},averagePositionChange:{},dynamics:{},dynamicsDirection:{},topTen:{},topTenChange:{},topTenPercentage:{},topElevenToThirty:{},topElevenToThirtyChange:{},topElevenToThirtyPercentage:{},topThirtyPlus:{},topThirtyPlusChange:{},topThirtyPlusPercentage:{}},emits:["toggle-favorite","refresh-positions","regions-summary","menu"],setup(t,{emit:e}){const n=t,o=e,a=C(n.favorite),p=s=>{a.value=s,o("toggle-favorite",a.value)},d=()=>{o("refresh-positions")},_=()=>{o("regions-summary")},q=()=>{o("menu")};return(s,xe)=>(c(),l("tr",We,[i(ae,{favorite:a.value,"hint-text":s.hintText,"hint-title":s.hintTitle,"project-domain":s.projectDomain,"project-name":s.projectName,onToggleFavorite:p},null,8,["favorite","hint-text","hint-title","project-domain","project-name"]),i(le,{"creation-date":s.creationDate},null,8,["creation-date"]),i(he,{"check-positions-date":s.checkPositionsDate,onRefresh:d},null,8,["check-positions-date"]),i(ye,{queries:s.queries},null,8,["queries"]),i(Te,{onRegionsSummary:_}),i(Ce,{"average-position":s.averagePosition,"average-position-change":s.averagePositionChange},null,8,["average-position","average-position-change"]),i(ke,{dynamics:s.dynamics,"dynamics-direction":s.dynamicsDirection},null,8,["dynamics","dynamics-direction"]),i(Me,{"top-eleven-to-thirty":s.topElevenToThirty,"top-eleven-to-thirty-change":s.topElevenToThirtyChange,"top-eleven-to-thirty-percentage":s.topElevenToThirtyPercentage,"top-ten":s.topTen,"top-ten-change":s.topTenChange,"top-ten-percentage":s.topTenPercentage,"top-thirty-plus":s.topThirtyPlus,"top-thirty-plus-change":s.topThirtyPlusChange,"top-thirty-plus-percentage":s.topThirtyPlusPercentage},null,8,["top-eleven-to-thirty","top-eleven-to-thirty-change","top-eleven-to-thirty-percentage","top-ten","top-ten-change","top-ten-percentage","top-thirty-plus","top-thirty-plus-change","top-thirty-plus-percentage"]),i(Ae,{onMenu:q})]))}}),U=g(L,[["__scopeId","data-v-e27addd2"]]);L.__docgenInfo={exportName:"default",displayName:"projects-table-row",description:"",tags:{},props:[{name:"projectName",required:!0,type:{name:"string"}},{name:"projectDomain",required:!0,type:{name:"string"}},{name:"hintTitle",required:!0,type:{name:"string"}},{name:"hintText",required:!0,type:{name:"string"}},{name:"favorite",required:!0,type:{name:"boolean"}},{name:"creationDate",required:!0,type:{name:"Date"}},{name:"checkPositionsDate",required:!0,type:{name:"Date"}},{name:"queries",required:!0,type:{name:"number"}},{name:"averagePosition",required:!0,type:{name:"number"}},{name:"averagePositionChange",required:!0,type:{name:"number"}},{name:"dynamics",required:!0,type:{name:"number"}},{name:"dynamicsDirection",required:!0,type:{name:"union",elements:[{name:"TSLiteralType"},{name:"0"},{name:"1"}]}},{name:"topTen",required:!0,type:{name:"number"}},{name:"topTenChange",required:!0,type:{name:"number"}},{name:"topTenPercentage",required:!0,type:{name:"number"}},{name:"topElevenToThirty",required:!0,type:{name:"number"}},{name:"topElevenToThirtyChange",required:!0,type:{name:"number"}},{name:"topElevenToThirtyPercentage",required:!0,type:{name:"number"}},{name:"topThirtyPlus",required:!0,type:{name:"number"}},{name:"topThirtyPlusChange",required:!0,type:{name:"number"}},{name:"topThirtyPlusPercentage",required:!0,type:{name:"number"}}],events:[{name:"toggle-favorite",type:{names:["boolean"]}},{name:"refresh-positions"},{name:"regions-summary"},{name:"menu"}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/projects-table-row/projects-table-row.vue"]};const Je={component:U,title:"ProjectsTableRow",argTypes:{dynamicsDirection:{control:"select",options:[-1,0,1]}}},y={args:{projectName:"EXIMA new version",projectDomain:"Exima.house",hintTitle:"EXIMA new version",hintText:"Ultra cool",favorite:!1,creationDate:new Date,checkPositionsDate:new Date,queries:1337666420,averagePosition:75,averagePositionChange:18,dynamics:6666,dynamicsDirection:-1,topTen:113,topTenChange:95,topTenPercentage:20,topElevenToThirty:170,topElevenToThirtyChange:133,topElevenToThirtyPercentage:50,topThirtyPlus:1092,topThirtyPlusChange:-228,topThirtyPlusPercentage:85},render:t=>({components:{ProjectsTableRow:U},setup(){return{args:t,onMenu:()=>{console.log("menu")},onFavoriteToggle:()=>{console.log("fav toggle")},onRefreshPositions:()=>{console.log("refresh positions")},onRegionsSummary:()=>{console.log("regions summary")}}},template:`
      <table>
        <thead>
        <th>buttons + название + ссылка</th>

        <th>дата создания</th>

        <th>проверка позиций</th>

        <th>запросов</th>

        <th>сводка по регионам</th>

        <th>средняя позиция</th>

        <th>динамика</th>

        <th>Топ 10 |11-30 | 30+</th>

        <th>меню</th>
        </thead>

        <tbody>
        <ProjectsTableRow v-bind='args'
                          v-for='i of [].constructor(3)'
                          @menu='onMenu'
                          @refresh-positions='onRefreshPositions'
                          @regions-summary='onRegionsSummary'
                          @toggle-favorite='onFavoriteToggle' />
        </tbody>
      </table>
    `})};var $,F,k;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    projectName: 'EXIMA new version',
    projectDomain: 'Exima.house',
    hintTitle: 'EXIMA new version',
    hintText: 'Ultra cool',
    favorite: false,
    creationDate: new Date(),
    checkPositionsDate: new Date(),
    queries: 1337666420,
    averagePosition: 75,
    averagePositionChange: 18,
    dynamics: 6666,
    dynamicsDirection: -1,
    topTen: 113,
    topTenChange: 95,
    topTenPercentage: 20,
    topElevenToThirty: 170,
    topElevenToThirtyChange: 133,
    topElevenToThirtyPercentage: 50,
    topThirtyPlus: 1092,
    topThirtyPlusChange: -228,
    topThirtyPlusPercentage: 85
  },
  render: (args: IProjectsTableRowProps) => ({
    components: {
      ProjectsTableRow
    },
    setup() {
      const onFavoriteToggle = () => {
        console.log('fav toggle');
      };
      const onRefreshPositions = () => {
        console.log('refresh positions');
      };
      const onRegionsSummary = () => {
        console.log('regions summary');
      };
      const onMenu = () => {
        console.log('menu');
      };
      return {
        args,
        onMenu,
        onFavoriteToggle,
        onRefreshPositions,
        onRegionsSummary
      };
    },
    template: \`
      <table>
        <thead>
        <th>buttons + название + ссылка</th>

        <th>дата создания</th>

        <th>проверка позиций</th>

        <th>запросов</th>

        <th>сводка по регионам</th>

        <th>средняя позиция</th>

        <th>динамика</th>

        <th>Топ 10 |11-30 | 30+</th>

        <th>меню</th>
        </thead>

        <tbody>
        <ProjectsTableRow v-bind='args'
                          v-for='i of [].constructor(3)'
                          @menu='onMenu'
                          @refresh-positions='onRefreshPositions'
                          @regions-summary='onRegionsSummary'
                          @toggle-favorite='onFavoriteToggle' />
        </tbody>
      </table>
    \`
  })
}`,...(k=(F=y.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const Ke=["Default"];export{y as Default,Ke as __namedExportsOrder,Je as default};
