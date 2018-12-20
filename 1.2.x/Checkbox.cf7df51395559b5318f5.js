webpackJsonpShineoutDoc([10],{432:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(84),c=t(83),l=t(55),i=t(433),u=t.n(i),d=t(434),s=t.n(d),h=Object(l.a)(u.a,s.a),m=[{name:"01-base",title:Object(l.a)("基本用法 \n 基本的 Checkbox","Base \n Basic Checkbox"),component:t(435).default,rawText:t(436)},{name:"02-checked",title:Object(l.a)("状态 \n checked 有三个值，选中(true)、未选中(false)、半选中('indeterminate')。checked 设置时为受控组件（此示例没有处理 onChange 事件）。","Checked \n The checked has three values: true(checked), false(not checked), 'indeterminate'(half-checked)."),component:t(437).default,rawText:t(438)},{name:"03-value",title:Object(l.a)("选中值 \n 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue。未选中状态都是返回 undefined。","Value \n When the htmlValue is set, the checkbox return the htmlValue (checked) and undefined (not checked); \n When the htmlValue is not set, the checkbox selected return true (checked) and undefined (not checked);"),component:t(439).default,rawText:t(440)},{name:"04-rawgroup",title:Object(l.a)("一组复选框 \n 一组复选框可以放在 Checkbox.Group 中","Group \n A series of checkboxes group by Checkbox.Group."),component:t(441).default,rawText:t(442)},{name:"05-group",title:Object(l.a)(" \n 可以直接通过数据来渲染一组 Checkbox"," \n Render a group of checkboxes from data."),component:t(443).default,rawText:t(444)},{name:"06-format",title:Object(l.a)("复杂数据 \n 复杂的数据可以使用 format 处理 value","Complex data \n Complex data can use format to process value."),component:t(445).default,rawText:t(446)},{name:"07-datum",title:Object(l.a)(" \n 当 format 不能满足需求时，可以使用 Datum.List 进行处理",' \n When the format does not satisfied your requirements, you can use <a href="#/components/Datum.List">Data.List</a> istead.'),component:t(447).default,rawText:t(448)},{name:"08-block",title:Object(l.a)("垂直布局 \n 默认是水平布局，设置 block 属性可以改为垂直布局","Block \n The default is horizontal layout, and setting the block property can change it to be vertical layout."),component:t(449).default,rawText:t(450)},{name:"09-disabled",title:Object(l.a)("禁用 \n 设置 Checkbox.Group 的 disabled 为 true，禁用全部选项","Disabled \n Set the disabled property of Checkbox.Group to true, disable all the checkboxes."),component:t(451).default,rawText:t(452)},{name:"10-disabled",title:Object(l.a)(" \n disabled 为函数时，根据函数结果实现有条件禁用"," \n When the disabled is a function, disbale the option that the function to return true."),component:t(453).default,rawText:t(454)},{name:"11-input",title:Object(l.a)("带输入 \n 设置 inputable 属性可以显示输入框，返回值为输入框内容","Inputable \n Set the inputable property to true can show the input box and the return value is the value of the input box."),component:t(455).default,rawText:t(456)}];n.default=Object(a.a)(function(e){return r.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:h,examples:m}))})},433:function(e,n){e.exports="# Checkbox *复选框*\n\nCheckbox 可以单独使用。一组Checkbox使用时，使用一个Array类型的属性 data 来控制选项。\n\n<example />\n\n## API\n\n### Checkbox\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| checked | bool \\| 'indeterminate' | 无 | checked 传入时为受控组件 |\n| disabled | bool | false | 是否禁用 |\n| htmlValue | any | true | 选中时返回值 |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(value,checked) | 无 | 选中时，value 为 htmlValue，checked 为 true<br />未选中时，value 为 undefined，checked 为 false |\n| value | any | 无 | 如果 checked 未设置，checked 状态为 value === htmlValue |\n\n### Checkbox.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| data | array | 必填 | 数据项 |\n| datum | object | 无 | 如果 format 和 prediction 属性无法满足需求，可以传入一个 [Datum.List](#/components/Datum.List) 对象，或者 Datum.List 配置来处理数据。 |\n| defaultValue | array | | 初始值 |\n| disabled | bool \\| function | false | 如果 disabled 为 true，禁用全部选项，如果 disabled 为函数，根据函数反回结果禁用选项 |\n| format | string \\| function | d => d | 格式化 value<br />默认值，返回原始数据<br />为string时，会作为key从原始数据中获取值，相当于 (d) => d[format]<br /> 为函数时，以函数返回结果作为 value |\n| name | string | 无 | Form 存取数据的名称 |\n| keygen | string \\| function(obj):string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n| onChange | function(value) | 无 | value 为 datum.getValue() |\n| prediction | function | (val, d) => val===format(d) | 默认使用 format 函数执行的结果来比较是否匹配，在某些情况下（例如返回原始数据的对象，更新数据时，生成了一个值相同，非同一个对象的选项），需要借助 prediction 函数来判断是否匹配 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| value | array | | 在Form中，value会被表单接管，value无效 |"},434:function(e,n){e.exports="# Checkbox\n\n<example />\n\n## API\n\n### Checkbox\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| checked | bool \\| 'indeterminate' | - | if not set, use (value === htmlValue). |\n| disabled | bool | false | disable checkbox |\n| htmlValue | any | true | Specifies the result |\n| name | string | - | The name of the Form which access data |\n| onChange | function(value,checked) | - | When selected, value is htmlValue and checked is true.<br />When not selected, value is undefined and checked is false. |\n| value | any | - |  |\n\n### Checkbox.Group\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| data | array | required | The data item |\n| datum | object | - | If the format and prediction does not satisfied your requirements, you can pass in a [Datum.List](#/components/Datum.List) object or the Datum.List configuration to process data. |\n| defaultValue | array | [] | Initial value |\n| disabled | bool \\| function | false | When the value is true, disabled all checkboxes; When the value is function, disable the checkbox that this function returns true. |\n| format | string \\| function | d => d | Format value<br />The defaule value is return the original data.<br />When it is a string, the value is fetched from the original data as a key equivalent to (d) => d\\[format]<br />When it is a function, use its return value. |\n| name | string | - | The name of the Form which access data |\n| keygen | string \\| function(obj):string \\| true | required | Key generator<br />When it is true, the data itself is used as the key equivalent to (d => d)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n| onChange | function(value) | - | value is datum.getValue() |\n| prediction | function | (val, d) => val===format(d) | By default, the result of the format function is used to compare whether it matches. In some cases (for example, whe an object that returns the original data is updated, an different option with the same value  is generated), the prediction function needs to be used to determine whether match |\n| renderItem | string \\| function(d) | required | When it is a string, return d\\[string]<br />When it is a function, return the result of the function. |\n| value | array | - | In the Form, the value will be taken over by the form and the value will lose efficacy. |"},435:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(29);n.default=function(){return r.a.createElement(a.g,null,"Checkbox")}},436:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基本的 Checkbox\n * en - Base\n *    -- Basic Checkbox\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function () {\n  return (\n    <Checkbox>Checkbox</Checkbox>\n  )\n}\n"},437:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(29);n.default=function(){return r.a.createElement("div",null,r.a.createElement(a.g,{checked:!1},"not checked"),r.a.createElement(a.g,{checked:!0},"checked"),r.a.createElement(a.g,{checked:"indeterminate"},"indeterminate"))}},438:function(e,n){e.exports="/**\n * cn - 状态\n *    -- checked 有三个值，选中(true)、未选中(false)、半选中('indeterminate')。checked 设置时为受控组件（此示例没有处理 onChange 事件）。\n * en - Checked\n *    -- The checked has three values: true(checked), false(not checked), 'indeterminate'(half-checked).\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function () {\n  return (\n    <div>\n      <Checkbox checked={false}>not checked</Checkbox>\n      <Checkbox checked>checked</Checkbox>\n      <Checkbox checked=\"indeterminate\">indeterminate</Checkbox>\n    </div>\n  )\n}\n"},439:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(29);n.default=function(){return r.a.createElement(a.g,{onChange:function(e){return console.log(e)},htmlValue:"ok",value:"ok"},'value is "ok"')}},440:function(e,n){e.exports="/**\n * cn - 选中值\n *    -- 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue。未选中状态都是返回 undefined。\n * en - Value\n *    -- When the htmlValue is set, the checkbox return the htmlValue (checked) and undefined (not checked);\n *    -- When the htmlValue is not set, the checkbox selected return true (checked) and undefined (not checked);\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function () {\n  return (\n    <Checkbox onChange={v => console.log(v)} htmlValue=\"ok\" value=\"ok\">\n      {'value is \"ok\"'}\n    </Checkbox>\n  )\n}\n"},441:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(29),c=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return r.a.createElement(a.g.Group,{keygen:"id",value:[3,5],onChange:function(e){console.log(e)}},c.map(function(e){return r.a.createElement(a.g,{key:e.id,htmlValue:e.id},e.color)}))}},442:function(e,n){e.exports="/**\n * cn - 一组复选框\n *    -- 一组复选框可以放在 Checkbox.Group 中\n * en - Group\n *    -- A series of checkboxes group by Checkbox.Group.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function () {\n  return (\n    <Checkbox.Group keygen=\"id\" value={[3, 5]} onChange={(value) => { console.log(value) }}>\n      {\n        data.map(d => (\n          <Checkbox key={d.id} htmlValue={d.id}>{d.color}</Checkbox>\n        ))\n      }\n    </Checkbox.Group>\n  )\n}\n\n"},443:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(29),c=["red","orange","yellow","green","cyan","blue","violet"];function l(e){var n={borderBottom:"solid 1px ".concat(e),paddingBottom:2};return r.a.createElement("span",{style:n},e)}n.default=function(){return r.a.createElement(a.g.Group,{keygen:function(e){return e},data:c,onChange:function(e){return console.log(e)},value:["blue","cyan"],renderItem:l})}},444:function(e,n){e.exports="/**\n * cn -\n *    -- 可以直接通过数据来渲染一组 Checkbox\n * en -\n *    -- Render a group of checkboxes from data.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nfunction renderItem(color) {\n  const style = { borderBottom: `solid 1px ${color}`, paddingBottom: 2 }\n  return <span style={style}>{color}</span>\n}\n\nexport default function () {\n  return (\n    <Checkbox.Group\n      keygen={c => c}\n      data={data}\n      onChange={c => console.log(c)}\n      value={['blue', 'cyan']}\n      renderItem={renderItem}\n    />\n  )\n}\n"},445:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return h});var o=t(1),r=t(3),a=t(4),c=t(2),l=t(5),i=t(0),u=t.n(i),d=t(29),s=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}],h=function(e){function n(){var e,t;Object(o.a)(this,n);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(t=Object(a.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(l)))).renderItem=function(e){var n={borderBottom:"solid 1px ".concat(e.color),paddingBottom:2};return u.a.createElement("span",{style:n},e.color)},t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement(d.g.Group,{keygen:"id",data:s,format:"color",onChange:function(e){return console.log(e)},value:["blue","cyan"],renderItem:this.renderItem})}}]),n}(i.Component)},446:function(e,n){e.exports="/**\n * cn - 复杂数据\n *    -- 复杂的数据可以使用 format 处理 value\n * en - Complex data\n *    -- Complex data can use format to process value.\n */\nimport React, { Component } from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default class extends Component {\n  renderItem = (d) => {\n    const style = { borderBottom: `solid 1px ${d.color}`, paddingBottom: 2 }\n    return <span style={style}>{d.color}</span>\n  }\n\n  render() {\n    return (\n      <Checkbox.Group\n        keygen=\"id\"\n        data={data}\n        format=\"color\"\n        onChange={d => console.log(d)}\n        value={['blue', 'cyan']}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},447:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return h});var o=t(1),r=t(3),a=t(4),c=t(2),l=t(5),i=t(0),u=t.n(i),d=t(29),s=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}],h=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(a.a)(this,Object(c.a)(n).call(this,e))).renderItem=function(e){var n={borderBottom:"solid 1px ".concat(e.color),paddingBottom:2};return u.a.createElement("span",{style:n},e.color)},t.datum=new d.i.List({prediction:function(e,n){return e===n.color},format:function(e){return e.color}}),t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement(d.g.Group,{keygen:"id",data:s,datum:this.datum,onChange:function(e){return console.log(e)},value:["blue","cyan"],renderItem:this.renderItem})}}]),n}(i.Component)},448:function(e,n){e.exports="/**\n * cn -\n *    -- 当 format 不能满足需求时，可以使用 Datum.List 进行处理\n * en -\n *    -- When the format does not satisfied your requirements, you can use <a href=\"#/components/Datum.List\">Data.List</a> istead.\n */\nimport React, { Component } from 'react'\nimport { Checkbox, Datum } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.datum = new Datum.List({\n      prediction: (v, d) => v === d.color,\n      format: v => v.color,\n    })\n  }\n\n  renderItem = (d) => {\n    const style = { borderBottom: `solid 1px ${d.color}`, paddingBottom: 2 }\n    return <span style={style}>{d.color}</span>\n  }\n\n  render() {\n    return (\n      <Checkbox.Group\n        keygen=\"id\"\n        data={data}\n        datum={this.datum}\n        onChange={d => console.log(d)}\n        value={['blue', 'cyan']}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},449:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(29),c=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return r.a.createElement(a.g.Group,{keygen:"id",block:!0,data:c,datum:{format:"color"},onChange:function(e){return console.log(e)},value:["blue","cyan"],renderItem:"color"})}},450:function(e,n){e.exports="/**\n * cn - 垂直布局\n *    -- 默认是水平布局，设置 block 属性可以改为垂直布局\n * en - Block\n *    -- The default is horizontal layout, and setting the block property can change it to be vertical layout.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function () {\n  return (\n    <Checkbox.Group\n      keygen=\"id\"\n      block\n      data={data}\n      datum={{ format: 'color' }}\n      onChange={d => console.log(d)}\n      value={['blue', 'cyan']}\n      renderItem=\"color\"\n    />\n  )\n}\n"},451:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(29),c=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(a.g.Group,{disabled:!0,keygen:!0,data:c,value:["blue","cyan"],renderItem:function(e){return e}}),r.a.createElement("br",null),r.a.createElement(a.g,{disabled:!0,checked:!1},"not checked"),r.a.createElement(a.g,{disabled:!0,checked:!0},"checked"),r.a.createElement(a.g,{disabled:!0,checked:"indeterminate"},"indeterminate"))}},452:function(e,n){e.exports="/**\n * cn - 禁用\n *    -- 设置 Checkbox.Group 的 disabled 为 true，禁用全部选项\n * en - Disabled\n *    -- Set the disabled property of Checkbox.Group to true, disable all the checkboxes.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Checkbox.Group\n        disabled\n        keygen\n        data={data}\n        value={['blue', 'cyan']}\n        renderItem={d => d}\n      />\n      <br />\n      <Checkbox disabled checked={false}>not checked</Checkbox>\n      <Checkbox disabled checked>checked</Checkbox>\n      <Checkbox disabled checked=\"indeterminate\">indeterminate</Checkbox>\n    </div>\n  )\n}\n"},453:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(29),c=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(a.g.Group,{data:c,disabled:function(e){return"yellow"===e},keygen:!0,value:["blue"],renderItem:function(e){return e}}))}},454:function(e,n){e.exports="/**\n * cn -\n *    -- disabled 为函数时，根据函数结果实现有条件禁用\n * en -\n *    -- When the disabled is a function, disbale the option that the function to return true.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Checkbox.Group\n        data={data}\n        disabled={d => d === 'yellow'}\n        keygen\n        value={['blue']}\n        renderItem={d => d}\n      />\n    </div>\n  )\n}\n"},455:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(29);n.default=function(){return r.a.createElement(a.g,{inputable:!0,onChange:function(e){return console.log(e)}},"more...")}},456:function(e,n){e.exports="/**\n * cn - 带输入\n *    -- 设置 inputable 属性可以显示输入框，返回值为输入框内容\n * en - Inputable\n *    -- Set the inputable property to true can show the input box and the return value is the value of the input box.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function () {\n  return (\n    <Checkbox inputable onChange={d => console.log(d)}>more...</Checkbox>\n  )\n}\n"}});