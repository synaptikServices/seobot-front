import{d as m,o as d,e as u,f as t,t as a,g as r,y as _,z as f}from"./vue.esm-bundler-BBrDyPcD.js";import{S as g}from"./seo-button-JHrWkb1J.js";import{p as b}from"./progress-bar-C5OPIcZd.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./badge.esm-BvdzT4LP.js";import"./basecomponent.esm-emi5-qlX.js";import"./baseicon.esm-DeQm_HZt.js";import"./ripple.esm-BYo3grDy.js";const S=e=>(_("data-v-04340703"),e=e(),f(),e),h={class:"file-upload-item"},I=S(()=>t("div",{class:"file-upload-item__block icon"},[t("span",{class:"pi pi-file icon__icon"})],-1)),z={class:"file-upload-item__block content"},k={class:"content__item title"},x={class:"content__item size"},y={class:"file-upload-item__block button"},B={class:"file-upload-item__block progress"},p=m({__name:"file-upload-item",props:{title:{default:""},fileSize:{default:""},progress:{}},setup(e){const o=e;return(E,F)=>(d(),u("section",h,[I,t("div",z,[t("span",k,a(o.title),1),t("span",x,a(o.fileSize),1)]),t("div",y,[r(g,{appearance:"flat",class:"button",icon:"pi pi-trash",size:"sm"})]),t("div",B,[r(b,{class:"progress",mode:"determinate","show-progress-label":"",value:o.progress},null,8,["value"])])]))}}),c=v(p,[["__scopeId","data-v-04340703"]]);p.__docgenInfo={exportName:"default",displayName:"file-upload-item",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"fileSize",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"progress",required:!0,type:{name:"number"}}],slots:[{name:"default"},{name:"button"}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/file-upload/file-upload-item.vue"]};const C={component:c,title:"fileUploadItem"},s={args:{title:"Example.csv",fileSize:"4.2 mb",progress:10},render:e=>({components:{FileUploadItem:c},setup(){return{args:e}},template:'<file-upload-item v-bind="args"/>'})};var i,l,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Example.csv',
    fileSize: '4.2 mb',
    progress: 10
  },
  render: (args: IProgressBarProps) => ({
    components: {
      FileUploadItem
    },
    setup() {
      return {
        args
      };
    },
    template: '<file-upload-item v-bind="args"/>'
  })
}`,...(n=(l=s.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const O=["Default"];export{s as Default,O as __namedExportsOrder,C as default};
