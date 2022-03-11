import PopupComponent from './popup';

export default {
    install(Vue) {
        Vue.prototype.$popup = (title, content, options, callback) => {
            const defaultOption = {
                closeTime: -1,
            };

            if (options.type && !options.iconClass) {
                if (options.type === 'warning') options.iconClass = 'engine-warning';
                if (options.type === 'danger') options.iconClass = 'engine-warning';
            }

            const defaultCallBack = {
                onOk: () => {
                },
                onNo: () => {

                },
                onCancel: () => {
                },
            };

            if (options) Object.assign(defaultOption, options);
            if (callback) Object.assign(defaultCallBack, callback);

            const propsData = {
                title, content, ...defaultOption, ...defaultCallBack,
            };

            const Dialog = Vue.extend(PopupComponent);
            const dialogCom = new Dialog({propsData});

            // Mount it
            const vm = dialogCom.$mount();
            // Add it to the Vue application
            document.querySelector('body').appendChild(vm.$el);
        };
    },
};