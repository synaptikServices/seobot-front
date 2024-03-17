import{o as u,e as s,f as r,n as l,d as p,b as c,k as m,u as b}from"./vue.esm-bundler-BBrDyPcD.js";import{B as h,O as f,s as v}from"./basecomponent.esm-emi5-qlX.js";var y={root:function(a){var t=a.instance,i=a.props;return["p-radiobutton p-component",{"p-highlight":t.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.$primevue.config.inputStyle==="filled"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},g=h.extend({name:"radiobutton",classes:y}),B={name:"BaseRadioButton",extends:v,props:{value:null,modelValue:null,binary:Boolean,name:{type:String,default:null},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:g,provide:function(){return{$parentInstance:this}}},o={name:"RadioButton",extends:B,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(a){var t=a==="root"?this.ptmi:this.ptm;return t(a,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(a){if(!this.disabled&&!this.readonly){var t=this.binary?!this.checked:this.value;this.$emit("update:modelValue",t),this.$emit("change",a)}},onFocus:function(a){this.$emit("focus",a)},onBlur:function(a){this.$emit("blur",a)}},computed:{checked:function(){return this.modelValue!=null&&(this.binary?!!this.modelValue:f.equals(this.modelValue,this.value))}}},k=["data-p-highlight","data-p-disabled"],S=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function O(e,a,t,i,d,n){return u(),s("div",l({class:e.cx("root")},n.getPTOptions("root"),{"data-p-highlight":n.checked,"data-p-disabled":e.disabled}),[r("input",l({id:e.inputId,type:"radio",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:e.name,checked:n.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:a[0]||(a[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:a[1]||(a[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onChange:a[2]||(a[2]=function(){return n.onChange&&n.onChange.apply(n,arguments)})},n.getPTOptions("input")),null,16,S),r("div",l({class:e.cx("box")},n.getPTOptions("box")),[r("div",l({class:e.cx("icon")},n.getPTOptions("icon")),null,16)],16)],16,k)}o.render=O;const V=p({__name:"input-radio",props:{checked:{type:Boolean},id:{},name:{},value:{}},setup(e){const t=c(e.checked);return(i,d)=>(u(),m(b(o),{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=n=>t.value=n),class:"radio","input-id":i.id,name:i.name,value:i.value},null,8,["modelValue","input-id","name","value"]))}});V.__docgenInfo={exportName:"default",displayName:"input-radio",description:"",tags:{},props:[{name:"checked",required:!1,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"string"}}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/input-radio/input-radio.vue"]};export{V as _};