/**
 * @author rubyisapm
 */
import Vue from 'vue';
import Textarea from '../../../../index';
new Vue({
    el: '#app',
    components: {
        'ct-adc-textarea': Textarea
    },
    data: {
        limitedLength: 100,
        cut: false
    },
    methods: {
        changePass(pass){
            console.log(pass);
        },
        change(content){
            console.log(content);
        }
    }
});
