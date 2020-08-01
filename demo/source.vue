<template>
	<div v-if="show" @click="handleClick">
		<span>Hello world</span>
	</div>
</template>

<script>
import { Button } from '@vsc/cc';

export default {
	name: 'vsc-vue',
	components: {
        'vsc-button': Button
    },
	props: {},
	data() {
		return {
            show: false
        };
	},
	created() {	},
	methods: { 
        handleClick(e = {}) {
            console.log(`click`);
        }
    },
};
</script>

<style lang="scss" scoped>
span {
    font-size: 16px;
}
</style>
