/**
 * @author rubyisapm
 */
import Vue from 'vue';
import Textarea from 'main';
new Vue({
    el: '#app',
    components: {
        'ct-adc-textarea': Textarea
    },
    data: {
        value: 'helloworldefefeffe',
        limitedLength: 10,
        cut: false,
        replaceByEmpty: false
    },
    methods: {
        changePass(pass){
            console.log('=============change pass================', pass);
        },
        change(content){
            console.log('===========change============', content);
        },
        input(content){
            console.log('================input==================', content);
        }
    }
});
