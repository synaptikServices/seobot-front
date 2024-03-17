import{_ as i,s as v}from"./popover-Cp95DrB6.js";import{S as c}from"./seo-button-JHrWkb1J.js";import{P as a}from"./config.esm-CJoIXLgF.js";import{b as r}from"./vue.esm-bundler-BBrDyPcD.js";import"./basecomponent.esm-emi5-qlX.js";import"./ripple.esm-BYo3grDy.js";import"./baseicon.esm-DeQm_HZt.js";import"./badge.esm-BvdzT4LP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={component:i,title:"Popover"},e={render:()=>({components:{SeoButton:c,OverlayPanel:v,Popover:i},setup(){const t=r(),n=r();return{PrimeVue:a,togglePopover:t,showHidePopover:n,onToggle:o=>{t.value.toggle(o)},onShow:o=>{n.value.show(o)},onHide:o=>{n.value.hide(o)}}},template:`
      <SeoButton label='Toggle' show @click='onToggle' />
      <SeoButton label='Show' @click='onShow' />
      <SeoButton label='Hide' @click='onHide' />
      <Popover ref='togglePopover'>
        <p>Popover controlled with toggle</p>
      </Popover>
      <Popover ref='showHidePopover'>
        <p>Popover controlled with show/hide</p>
      </Popover>
    `})};var l,p,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SeoButton,
      OverlayPanel,
      Popover
    },
    setup() {
      const togglePopover = ref();
      const showHidePopover = ref();
      const onToggle = (event: Event) => {
        togglePopover.value.toggle(event);
      };
      const onShow = (event: Event) => {
        showHidePopover.value.show(event);
      };
      const onHide = (event: Event) => {
        showHidePopover.value.hide(event);
      };
      return {
        PrimeVue,
        togglePopover,
        showHidePopover,
        onToggle,
        onShow,
        onHide
      };
    },
    template: \`
      <SeoButton label='Toggle' show @click='onToggle' />
      <SeoButton label='Show' @click='onShow' />
      <SeoButton label='Hide' @click='onHide' />
      <Popover ref='togglePopover'>
        <p>Popover controlled with toggle</p>
      </Popover>
      <Popover ref='showHidePopover'>
        <p>Popover controlled with show/hide</p>
      </Popover>
    \`
  })
}`,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,b as default};
