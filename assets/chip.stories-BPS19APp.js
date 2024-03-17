import{d as v,p as t,o as b,e as h,f as l,t as _,g as y,x as s,u as F}from"./vue.esm-bundler-BBrDyPcD.js";import{S as x}from"./icon-button-BvrsYNH9.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const E={class:"chip__content"},B={class:"chip__label"},d=v({__name:"chip",props:{id:{},name:{default:void 0},value:{type:[String,Number,Boolean],default:void 0},backgroundColor:{default:void 0},borderColor:{default:void 0},textColor:{default:void 0},iconColor:{default:void 0}},emits:["close"],setup(n,{emit:r}){const e=n,m=r,f=t(()=>!e.value||typeof e.value=="boolean"?e.name:`${e.name}: ${e.value}`),C=t(()=>`
    background-color: ${e.backgroundColor?e.backgroundColor:"var(--chip-bg)"};
    border: 1px solid ${e.borderColor?e.borderColor:"var(--chip-border)"};
    color: ${e.textColor?e.textColor:"var(--chip-text)"};
  `),g=()=>{m("close",e.id)};return(a,D)=>(b(),h("div",{class:"chip",style:s(C.value)},[l("div",E,[l("span",B,_(f.value),1),y(F(x),{class:"chip__close-button",icon:"pi pi-times","icon-size":"1.2rem",style:s(a.iconColor?`color: ${a.iconColor}`:""),onClick:g},null,8,["style"])])],4))}}),p=k(d,[["__scopeId","data-v-5255b092"]]);d.__docgenInfo={exportName:"default",displayName:"chip",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]},defaultValue:{func:!1,value:"undefined"}},{name:"backgroundColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"borderColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"textColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"iconColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"close",type:{names:["string"]}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/chip/chip.vue"]};const q={component:p,title:"Chip"},o={args:{id:"location",name:"Местоположение",value:"Россия",backgroundColor:"#FDF4FF",borderColor:"#EEAAFD",textColor:"#9F1AB1",iconColor:"#475467"},render:n=>({components:{Chip:p},setup(){return{args:n,onClose:e=>{console.log(`closed ${e}`)}}},template:`
      <Chip
        class='chip'
        v-bind='args'
        style='font-size: 1.4rem; line-height: 2rem;'
        @close='onClose' />
    `})};var u,i,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'location',
    name: 'Местоположение',
    value: 'Россия',
    backgroundColor: '#FDF4FF',
    borderColor: '#EEAAFD',
    textColor: '#9F1AB1',
    iconColor: '#475467'
  },
  render: (args: IChipProps) => ({
    components: {
      Chip
    },
    setup() {
      const onClose = (id: string) => {
        console.log(\`closed \${id}\`);
      };
      return {
        args,
        onClose
      };
    },
    template: \`
      <Chip
        class='chip'
        v-bind='args'
        style='font-size: 1.4rem; line-height: 2rem;'
        @close='onClose' />
    \`
  })
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,q as default};
