<template>
    <div class="panel panel-default">
        <div class="panel-body p5">
            <textarea :value="value" @input="input" @change="change" @blur="blur" @focus="focus"></textarea>
        </div>
        <div class="panel-footer">
            <slot :pass="pass"
                  :length="valueLength">
            </slot>
        </div>
    </div>
</template>

<script type="es6">
    import utility from 'ct-utility';

    export default {
        name: 'ct-adc-textarea',
        model: {
            prop: 'value',
            event: 'input'
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            maxlength: {
                type: Number,
                default: -1
            },
            cut: {
                type: Boolean,
                default: false
            },
            byByte: {
                type: Boolean,
                default: false
            },
            regexp: {
                type: RegExp,
                default(){
                    return undefined;
                }
            },
            replaceByEmpty: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            pass() {
                const notLengthLimited = this.maxlength === -1;
                const notFormatLimited = typeof this.regexp === 'undefined';
                const lengthPassed = this.maxlength !== -1 && this.valueLength <= this.maxlength;
                const formatPassed = typeof this.regexp !== 'undefined' && this.value.replace(this.regexp, '') === this.value;

                return {
                    length: notLengthLimited || lengthPassed,
                    format: notFormatLimited || formatPassed
                }
            },
            valueLength() {
                if (this.byByte) {
                    return utility.base.getByteLen(this.value);
                } else {
                    return this.value.length;
                }
            }
        },
        created(){
            this.correctValue();
        },
        methods: {
            correctValue(){
                let needCut = false;
                let result = this.value;

                if (this.maxlength !== -1 && this.valueLength > this.maxlength && this.cut) {
                    needCut = true;
                }
                if (needCut) {
                    if (this.byByte) {
                        result = utility.base.subByte(this.value, this.maxlength, true);
                    } else {
                        result = this.value.substr(0, this.maxlength);
                    }
                }
                if (typeof this.regexp !== 'undefined' && this.replaceByEmpty){
                    result = result.replace(this.regexp, '');
                }
                if (result !== this.value){
                    this.$emit('input', result);
                }
            },
            isPass() {
                return this.pass;
            },
            input(event) {
                this.$emit('input', event.target.value);
            },
            change(event){
                this.$emit('change', event.target.value);
            },
            blur(event){
                this.$emit('blur', event);
            },
            focus(event){
                this.$emit('focus', event);
            }
        },
        watch: {
            value() {
                this.correctValue();
            },
            pass(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.$emit('change-pass', newVal);
                }
            }
        }
    }
</script>
<style scoped>
    textarea {
        width: 100%;
        outline: none;
        border-color: transparent;
        resize: none;
        height: 200px;
    }
</style>
