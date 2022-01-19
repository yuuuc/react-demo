/**
 * 函数节流的目的，是为了限制函数一段时间内只能执行一次。因此，定时器实现节流函数通过使用定时任务，延时方法执行。在延时的时间内，方法若被触发，则直接退出方法。从而，实现函数一段时间内只执行一次。
 * @param {Function} callback
 * @param {*} delay
 * @returns
 */

export default function throttle(callback, delay) {
	var timer;
	return function () {
		var _this = this;
		var args = arguments;
		if (timer) {
			return;
		}
		timer = setTimeout(() => {
			callback.apply(_this, args);
			timer = null;
		}, delay);
	};
}
