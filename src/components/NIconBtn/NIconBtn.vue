<script>
import NIconButtonContent from './NIconBtnContent';
import {h} from 'vue';
export default {
    name: 'nitrozen-icon-button',
    components: {
        'n-icbutton-content':NIconButtonContent,
    },
    props: {
        href: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'button'
        },
        disabled: Boolean,
        rounded: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'medium'
        },
        focused: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default:'white-dots'
        },
        kind: {
            type: String,
            default:'primary'
        },
        appearance: {
            type: String,
            default:'',
        },
        showProgress: {
            type: Boolean,
            default: false
        },
    },
    render() {
        const nIconButton = h('n-icbutton-content', {
            showProgress: this.showProgress,
            icon: this.icon
        }, [
            this.$slots.default,
            h('div', {
                class: 'icon-wrapper'
            }, [h('nitrozen-inline', {
                class: ['white-dots'], // add optionall
                icon: this.icon
            })]),
        ])

        let buttonAttrs = {
            class: [
            'n-icbutton',    
            {
                'n-icbutton-rounded': this.rounded,
                'n-icbutton-large': this.size == 'large',
                'n-icbutton-small': this.size == 'small',
                'n-icbutton-focused': this.focused,
                'n-icbutton-primary': this.kind == 'primary',
                'n-icbutton-secondary': this.kind == 'secondary',
                'n-icbutton-tertiary': this.kind == 'tertiary',
                'n-ic-button-positive': this.appearance == 'positive',
                'n-ic-button-negative': this.appearance == 'negative',
            }],
            attrs: {
                href: this.href,
                disabled: this.disabled,
                type: !this.href && (this.type || 'button')
            },
            on: {
                ...this.$listeners,
            }
        }
        let tag = 'button';
        if (this.href) {
            tag = 'a';
            buttonAttrs
        }
        return h(tag, buttonAttrs, [nIconButton])
    }
}
</script>

<style lang="less">
@import './NIconBtn.less';


</style>
