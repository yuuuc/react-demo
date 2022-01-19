/**
 * 防抖：
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 */
let timer;
export default function debounce(callback, delay) {
	clearTimeout(timer);
	timer = setTimeout(() => {
		callback && callback();
	}, delay);
}
