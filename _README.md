## textarea

可以自定输入规范的textarea

## [在线demo](https://codepen.io/rubyisapm/pen/pPQLOj)

## 使用

从npm安装ct-adc-form

```
npm install ct-adc-form
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

## 参数说明

参数 | 描述 | 类型 | 默认值
--- | --- | --- | ---
value | textarea中的初始值 | String | ''
limitedLength | 控制的字符长度 | Number | -1（不限）
cut | 超出长度时是否要截断内容 | Boolean | false

## 方法

### getContent

获取目前textarea中的内容

### isPass

长度是否通过验证

## 事件

### change

当内容发生变化时触发,返回textarea中的当前内容。

### change-pass

当验证结果发生改变时，返回一个布尔值，表示当前是否通过长度验证。

## 更新日志

[更新日志](https://github.com/ct-adc/adc-textarea/blob/master/CHANGELOG.md)
