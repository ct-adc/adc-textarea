## ct-adc-textarea

可以自定输入规范的textarea

## 组件示例图

![img](https://github.com/ct-adc/adc-textarea/blob/master/textarea.png)

## 在线demo

[在线demo](https://codepen.io/rubyisapm/pen/pPQLOj)

## 功能点

1. 设置textarea的格式和长度限制
2. 通过slot设置信息的展示

## 使用

从npm安装ct-adc-textarea

```
npm install ct-adc-textarea --save
```
在代码中使用

```
import Textarea from 'ct-adc-textarea';
Vue.component(Textarea.name,Textarea);

或

new Vue({
    el: ...,
    components: {
        'ct-adc-textarea': Textarea
    }
})
```

## v-model

使用v-model进行值绑定

## slots

### 默认slot

其中scope中的数据如下：

```$xslt
{
    pass: {
        length: Boolean, // 长度是否合法
        format: Boolean // 格式是否合法
    },
    length: Number // 当前内容长度
}

```

```
<template slot-scope="scope">
    <span :class="!scope.pass.length ? 'text-danger' : 'text-success'">{{scope.length}}</span>
    <template v-if="limitedLength !== -1">
        /{{limitedLength}}
        <span class="pull-right text-danger" v-if="!scope.pass.length">
        长度不符合要求
    </span>
        <span class="pull-right text-danger" v-else-if="!scope.pass.format">
        格式不符合要求
    </span>
    </template>
</template>
```

## props

参数 | 说明 | 类型 | 默认值 | 可选值 | 描述 |
--- | --- | --- | --- | ---- | ---
maxlength | 控制的字符长度 | Number | -1（不限） | | 
cut | 超出长度时是否要截断内容 | Boolean | false | | 
byByte | 是否根据字节算长度 | Boolean | false | | 
regexp | 设置不匹配内容的正则 | RegExp | undefined | | 当匹配该正则时，被认为是非法的内容
replaceByEmpty | 不匹配正则时是否禁止输入 | Boolean | false | | 

## 方法

### isPass

内容是否是合法的

#### 参数列表

无

返回值

类型: {Boolean}

说明: 是否合法

## 事件

### 事件1

事件名称 | 说明 | 回调参数 | 描述
input | input事件 | textarea的value | 
change | change事件 | textarea的vulue | 
blur | blur事件 | 无 |
focus | focus事件 | 无 |

## 更新日志

[更新日志](https://github.com/ct-adc/adc-textarea/blob/dev/changelog.md)

## 外部资源依赖列表

无