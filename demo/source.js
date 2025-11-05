const btn = document.getElementById('btn');
let count = 0;
/**
 *
 */
function render() {
	btn.innerText = `Count: ${count}`;
}
window.addEventListener('click', () => {
	// Count from 1 to 10.
	if (count < 10) {
		count += 1;
		render();
	}
});
if (!Array.prototype.toSorted) {
	Object.defineProperty(Array.prototype, 'toSorted', {
		value(fn) {
			return [...this].sort(fn);
		}
	});

	console.log.call(this, 'any');
}

const buttons = computed(() => {
	let array = defaults.toolbar;
	if (props.options instanceof Array) {
		array = props.options;
	} else if (typeof props.options === 'object' && props.options.container instanceof Array) {
		array = props.options.container;
	}

	try {
		return cloneDeep(array);
	} catch (e) {
		console.log(e);
	}
	return array;
});
