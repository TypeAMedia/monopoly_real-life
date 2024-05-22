const ARROW_DOWN = `<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7075 4.01476L8.7643 10.9579C8.56966 11.1526 8.31715 11.2551 8.06201 11.2657C8.03132 11.2665 8.00064 11.2665 7.96907 11.2657C7.71393 11.2551 7.4623 11.1526 7.26765 10.9579L0.323616 4.01476C-0.0867132 3.60355 -0.0867132 2.93721 0.323616 2.52688L1.8115 1.039C2.22271 0.627789 2.88905 0.627789 3.29938 1.039L8.01554 5.75515L12.7317 1.039C13.1429 0.627789 13.8093 0.627789 14.2196 1.039L15.7075 2.52688C16.1187 2.93721 16.1187 3.60355 15.7075 4.01476Z" fill="currentColor"/>
</svg>`
const LOCATION_PIN = `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.95487 0.526367C3.39294 0.526367 0.5 3.41328 0.5 6.98124C0.5 11.8751 6.95487 17.1065 6.95487 17.1065C6.95487 17.1065 13.4158 12.3211 13.4158 6.98124C13.4158 3.41328 10.5228 0.526367 6.95487 0.526367ZM6.95487 10.2057C5.17692 10.2057 3.73045 8.76522 3.73045 6.98124C3.73045 5.19726 5.17692 3.75079 6.95487 3.75079C8.73283 3.75079 10.1853 5.19726 10.1853 6.98124C10.1853 8.76522 8.73885 10.2057 6.95487 10.2057Z" fill="#D8504A"/>
</svg>`

const config = {
	overall: {
		order: 1,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
		<path d="M16.7326 23.0897H16.6974L8.51491 22.9999C8.32058 22.997 8.13406 22.9169 7.99929 22.7753C7.86452 22.6347 7.79128 22.4452 7.79812 22.2499C7.79226 22.0546 7.86941 21.8671 8.00808 21.7304C8.14772 21.5946 8.33815 21.5224 8.5325 21.5321L16.7123 21.6298H16.7357C18.3382 21.6269 19.6409 20.3329 19.6527 18.7303V17.8074C19.6615 16.2 18.3705 14.8874 16.7629 14.8699L8.28044 14.8025C6.99236 14.7928 5.76194 14.2723 4.85844 13.3553C3.95414 12.4383 3.45219 11.2 3.46294 9.91202C3.47563 8.63272 3.99224 7.40902 4.90141 6.50777C5.80961 5.60542 7.03716 5.0986 8.31741 5.0947H16.0499C16.4357 5.11716 16.7374 5.43747 16.7374 5.8242C16.7374 6.20995 16.4357 6.53025 16.0499 6.55272H8.31741C6.45316 6.55663 4.93841 8.05857 4.91791 9.92272C4.9101 10.8241 5.26166 11.6913 5.89349 12.3338C6.52629 12.9764 7.38861 13.3407 8.28996 13.3475L16.7725 13.413V13.412C17.9326 13.4227 19.042 13.8934 19.8565 14.7206C20.6699 15.5477 21.1231 16.6639 21.1153 17.8251V18.7479V18.747C21.1055 19.9032 20.6387 21.0077 19.8184 21.8212C18.9971 22.6347 17.8879 23.0907 16.7326 23.0897Z" fill="#101921"/>
		<path d="M21.418 2.95225L22.6377 1.90927L18.5577 1.91025C18.38 1.91025 18.2101 1.98056 18.0851 2.10654C17.9591 2.23252 17.8898 2.40244 17.8898 2.58016V6.21991C17.8898 6.71991 19.3624 6.71991 19.3624 6.21991V4.00019H22.6379L21.418 2.95225Z" fill="#101921"/>
		<path d="M7.31752 16.7627C6.18372 15.6289 4.34577 15.6289 3.21302 16.7627C2.07922 17.8965 2.07922 19.7345 3.21302 20.8672L5.26575 22.92L7.31847 20.8672H7.31749C8.45029 19.7334 8.45032 17.8965 7.31752 16.7627ZM5.2648 20.3252C4.59585 20.3262 3.99135 19.9239 3.73452 19.3047C3.4777 18.6866 3.61831 17.9747 4.09195 17.501C4.5646 17.0264 5.27652 16.8848 5.89565 17.1407C6.51382 17.3965 6.9181 18.0001 6.9181 18.67C6.9181 19.5831 6.1779 20.3233 5.2648 20.3252Z" fill="#101921"/>
	</svg>`,
		rankField: 'Rank',
		fieldTeam: 'Travel distance',
		format: v => v + 'mi',
		label: 'Miles',
		tableText: 'OVERALL',
		tableDesc: 'How far fans travel to away games to support their teams'
	},
	miles: {
		order: 1,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
		<path d="M16.7326 23.0897H16.6974L8.51491 22.9999C8.32058 22.997 8.13406 22.9169 7.99929 22.7753C7.86452 22.6347 7.79128 22.4452 7.79812 22.2499C7.79226 22.0546 7.86941 21.8671 8.00808 21.7304C8.14772 21.5946 8.33815 21.5224 8.5325 21.5321L16.7123 21.6298H16.7357C18.3382 21.6269 19.6409 20.3329 19.6527 18.7303V17.8074C19.6615 16.2 18.3705 14.8874 16.7629 14.8699L8.28044 14.8025C6.99236 14.7928 5.76194 14.2723 4.85844 13.3553C3.95414 12.4383 3.45219 11.2 3.46294 9.91202C3.47563 8.63272 3.99224 7.40902 4.90141 6.50777C5.80961 5.60542 7.03716 5.0986 8.31741 5.0947H16.0499C16.4357 5.11716 16.7374 5.43747 16.7374 5.8242C16.7374 6.20995 16.4357 6.53025 16.0499 6.55272H8.31741C6.45316 6.55663 4.93841 8.05857 4.91791 9.92272C4.9101 10.8241 5.26166 11.6913 5.89349 12.3338C6.52629 12.9764 7.38861 13.3407 8.28996 13.3475L16.7725 13.413V13.412C17.9326 13.4227 19.042 13.8934 19.8565 14.7206C20.6699 15.5477 21.1231 16.6639 21.1153 17.8251V18.7479V18.747C21.1055 19.9032 20.6387 21.0077 19.8184 21.8212C18.9971 22.6347 17.8879 23.0907 16.7326 23.0897Z" fill="#101921"/>
		<path d="M21.418 2.95225L22.6377 1.90927L18.5577 1.91025C18.38 1.91025 18.2101 1.98056 18.0851 2.10654C17.9591 2.23252 17.8898 2.40244 17.8898 2.58016V6.21991C17.8898 6.71991 19.3624 6.71991 19.3624 6.21991V4.00019H22.6379L21.418 2.95225Z" fill="#101921"/>
		<path d="M7.31752 16.7627C6.18372 15.6289 4.34577 15.6289 3.21302 16.7627C2.07922 17.8965 2.07922 19.7345 3.21302 20.8672L5.26575 22.92L7.31847 20.8672H7.31749C8.45029 19.7334 8.45032 17.8965 7.31752 16.7627ZM5.2648 20.3252C4.59585 20.3262 3.99135 19.9239 3.73452 19.3047C3.4777 18.6866 3.61831 17.9747 4.09195 17.501C4.5646 17.0264 5.27652 16.8848 5.89565 17.1407C6.51382 17.3965 6.9181 18.0001 6.9181 18.67C6.9181 19.5831 6.1779 20.3233 5.2648 20.3252Z" fill="#101921"/>
	</svg>`,
		rankField: 'Rank',
		fieldTeam: 'Travel distance',
		format: v => v + 'mi',
		label: 'Miles',
		tableText: 'TOTAL DISTANCE',
		tableDesc: 'How far fans travel to away games to support their teams'
	},
	fuel_cost: {
		order: 2,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M12.3648 11.1648C11.8913 11.1611 11.4638 11.4479 11.2885 11.8876L9.8485 15.6518C9.721 15.9855 9.75944 16.3596 9.95256 16.6605C10.1447 16.9615 10.4691 17.1527 10.8254 17.1761L13.2534 17.3374C13.2788 17.3393 13.3041 17.3402 13.3284 17.3402H13.3294C13.8113 17.3393 14.2397 17.0318 14.3944 16.5743L15.4275 13.5095C15.5213 13.2339 15.5035 12.9329 15.3788 12.6695L14.9897 11.8454C14.8078 11.4591 14.4234 11.2089 13.9969 11.2013L12.3648 11.1648ZM14.311 12.1661L14.7001 12.9901V12.9892C14.7423 13.0773 14.7479 13.1776 14.7169 13.2695L13.6838 16.3343C13.6285 16.4956 13.4729 16.5996 13.3032 16.5893L10.8742 16.4281H10.8751C10.756 16.4196 10.6482 16.3559 10.5836 16.2556C10.5198 16.1552 10.5067 16.0306 10.5498 15.9199L11.9889 12.1558C12.0451 12.0067 12.1895 11.9102 12.3479 11.9149L12.8157 11.9252L12.5111 12.8645C12.4314 13.112 12.4389 13.3792 12.5336 13.6211L12.8692 14.4808V14.4798C12.9048 14.5736 12.976 14.6486 13.067 14.6889C13.1589 14.7292 13.262 14.732 13.3548 14.6955C13.4485 14.6589 13.5226 14.5877 13.5629 14.4958C13.6023 14.4039 13.6042 14.3008 13.5676 14.208L13.232 13.3483C13.2011 13.2677 13.1982 13.1786 13.2245 13.0961L13.5986 11.942L13.9801 11.9505V11.9514C14.1226 11.9542 14.2501 12.0367 14.311 12.1661ZM19.7439 3.86735L21.453 3.50454C21.5505 3.48298 21.6358 3.42485 21.6892 3.34141C21.7436 3.25798 21.7623 3.15673 21.7417 3.05922L21.4295 1.5939C21.3864 1.39234 21.1876 1.26297 20.9851 1.30516L19.0736 1.71203C18.7098 1.78984 18.3676 1.94359 18.0676 2.1639L15.8608 3.98358L15.4511 3.47545C15.3273 3.32264 15.1052 3.2917 14.9439 3.40514L7.8891 8.35226C7.01722 8.91007 6.76129 10.0688 7.31722 10.9416L7.82255 11.7338L5.13575 19.0989C5.06637 19.2892 5.16012 19.4993 5.34762 19.5752L5.81262 19.7618L5.36917 20.8333V20.8342C5.33073 20.9261 5.33073 21.0292 5.36917 21.1211C5.40761 21.213 5.48073 21.2861 5.57261 21.3246L5.88761 21.4549V21.4539C5.36074 22.0924 4.57793 22.4655 3.75012 22.473C2.50793 22.4711 1.50106 21.4652 1.50012 20.223C1.50012 20.0158 1.33231 19.848 1.12512 19.848C0.917935 19.848 0.750122 20.0158 0.750122 20.223C0.751997 21.8786 2.09451 23.2211 3.75012 23.223C4.87887 23.2155 5.93638 22.6652 6.58788 21.7427L6.96101 21.8964V21.8974C7.00695 21.9152 7.0557 21.9255 7.10445 21.9255C7.25632 21.9245 7.39319 21.8336 7.45132 21.693L7.90038 20.6017L8.341 20.7789H8.34006C8.43475 20.8164 8.53881 20.8145 8.63161 20.7742C8.72443 20.7339 8.79661 20.657 8.83224 20.5624L9.39662 19.0605L13.9257 19.2302C14.7582 19.2611 15.5119 18.7389 15.7763 17.9477L17.5163 12.7005C17.7694 11.9374 17.506 11.0974 16.8628 10.6137L15.4556 9.55711L17.596 6.57295V6.57389C17.6944 6.43607 17.6888 6.25044 17.5828 6.11921L17.2847 5.74889L19.321 4.05482V4.05389C19.4475 3.96295 19.5911 3.89922 19.7439 3.86735ZM6.90005 21.0602L6.20537 20.7734L6.50818 20.0412L7.20379 20.3215L6.90005 21.0602ZM14.6326 9.41831C14.5145 9.58425 14.5492 9.81392 14.7123 9.93676L16.412 11.2136C16.7982 11.5033 16.9557 12.0068 16.8048 12.4642L15.0648 17.7123C14.9063 18.1867 14.4535 18.5008 13.9538 18.4811L9.15481 18.3011C8.99262 18.2936 8.84449 18.392 8.78919 18.5439L8.26513 19.9398L5.96451 19.0154L8.59131 11.8164C8.63163 11.7067 8.61756 11.5848 8.55475 11.4864L7.94914 10.5386H7.95007C7.78882 10.2836 7.73632 9.97607 7.80289 9.68264C7.87039 9.3892 8.05133 9.13516 8.30633 8.97484L15.0883 4.21996L16.8208 6.36964L14.6326 9.41831ZM16.8132 5.16575L16.3314 4.56668L18.5251 2.7573C18.736 2.60542 18.976 2.49949 19.2301 2.44604L20.7751 2.11698L20.9307 2.84824L19.5882 3.13324C19.3257 3.18948 19.0782 3.30198 18.8626 3.4623L16.8132 5.16575ZM23.0542 8.47127C22.5517 7.35378 21.737 5.88095 21.7032 5.81807C21.6311 5.70651 21.5082 5.63901 21.3751 5.63901C21.242 5.63901 21.1192 5.70651 21.047 5.81807C21.0123 5.87994 20.1985 7.35368 19.6961 8.47127C19.4214 8.98501 19.4345 9.60472 19.7289 10.1072C20.1104 10.6275 20.7311 10.9172 21.3751 10.875C22.0192 10.9172 22.6398 10.6275 23.0214 10.1072C23.3158 9.60469 23.3289 8.98501 23.0542 8.47127ZM22.3914 9.6994C22.1232 9.9722 21.7567 10.125 21.3751 10.125C20.9935 10.125 20.627 9.9722 20.3589 9.6994C20.2117 9.40878 20.2192 9.06284 20.3795 8.77878C20.6729 8.12533 21.0882 7.32565 21.3751 6.78846C21.662 7.32659 22.0764 8.12627 22.3707 8.77878C22.531 9.06284 22.5386 9.40878 22.3914 9.6994Z" fill="#101921"/>
	</svg>`,
		rankField: 'Rank fuel cost',
		label: 'Fuel cost',
		fieldTeam: 'Fuel cost',
		tableText: 'FUEL COST',
		tableDesc: 'How much fuel fans spend on travelling to away games to support their teams'
	},

	parking_cost: {
		order: 3,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4.20004 22.8H19.8C20.1319 22.8 20.4 22.5319 20.4 22.2V19.8C20.4 19.4681 20.1319 19.2 19.8 19.2H10.0752C10.5374 18.2991 10.7999 17.28 10.7999 16.2V15.6H13.7999C14.1318 15.6 14.3999 15.3319 14.3999 15V12.6C14.3999 12.2681 14.1318 12 13.7999 12H10.7999V10.3041C10.7999 8.64374 12.0515 7.2815 13.648 7.20374C14.5527 7.15968 15.4217 7.52248 16.0302 8.20029C16.1446 8.32685 16.3067 8.39904 16.4764 8.39904H19.2965C19.499 8.39904 19.6883 8.29685 19.799 8.12717C19.9096 7.95748 19.9274 7.74372 19.8458 7.5581C18.8108 5.19749 16.482 3.64322 13.9123 3.60002C12.1601 3.56534 10.5101 4.24315 9.2388 5.49283C7.94318 6.76783 7.19973 8.53315 7.19973 10.336V12.0001H4.19973C3.86786 12.0001 3.59973 12.2682 3.59973 12.6001V15.0001C3.59973 15.332 3.86786 15.6001 4.19973 15.6001H7.19973V16.2001C7.19973 17.8548 5.85441 19.2001 4.19973 19.2001C3.86786 19.2001 3.59973 19.4682 3.59973 19.8001V22.2001C3.59973 22.532 3.86786 22.8001 4.19973 22.8001L4.20004 22.8ZM4.80004 21.6V20.4H19.2V21.6H4.80004ZM8.40004 10.3358C8.40004 8.85177 9.01223 7.39871 10.081 6.34871C11.1207 5.32591 12.4763 4.77839 13.8929 4.79997C15.6723 4.83091 17.311 5.74684 18.2861 7.19997H16.7326C15.8955 6.38059 14.7676 5.94842 13.5891 6.00465C11.3523 6.11528 9.60009 8.00339 9.60009 10.304V16.1999C9.60009 17.3108 9.25883 18.3411 8.68228 19.1999H7.13541C7.91447 18.4367 8.40009 17.3745 8.40009 16.1999L8.40004 10.3358ZM4.80004 13.2H7.20004V14.4H4.80004V13.2ZM13.2 14.4H10.8V13.2H13.2V14.4Z" fill="#101921"/>
</svg>`,
		rankField: 'Rank parking cost',
		label: 'Parking costs',
		fieldTeam: 'Parking costs',
		format: v => v + 'p/h',
		tableText: 'PARKING COSTS',
		tableDesc: 'How much the parking within 3km of their stadium costs'
	},


	parking_space: {
		order: 4,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.0397 1.5H4.96032C3.05251 1.5 1.5 3.05251 1.5 4.96032V19.0397C1.5 20.9475 3.05251 22.5 4.96032 22.5H19.0397C20.9475 22.5 22.5 20.9475 22.5 19.0397V4.96032C22.5 3.05251 20.9475 1.5 19.0397 1.5ZM21.375 19.0397C21.375 20.3269 20.3278 21.375 19.0397 21.375H4.96032C3.67219 21.375 2.625 20.3269 2.625 19.0397V4.96032C2.625 3.67313 3.67219 2.625 4.96032 2.625H19.0397C20.3278 2.625 21.375 3.67313 21.375 4.96032V19.0397Z" fill="black"/>
  <path d="M12.8258 4.74936H6.33936V19.2506H10.6752V14.4178H12.8249C15.4901 14.4178 17.6587 12.2493 17.6587 9.58392C17.6587 6.91872 15.4903 4.75008 12.8249 4.75008L12.8258 4.74936ZM12.8258 13.2919H9.55104V18.1248H7.4651L7.46416 5.87448H12.8258C14.8704 5.87448 16.5345 7.53854 16.5345 9.5832C16.5345 11.6288 14.8705 13.2919 12.8258 13.2919Z" fill="black"/>
  <path d="M12.0938 7.39968H9.61414V11.7984H12.0938C13.3069 11.7984 14.2932 10.8121 14.2932 9.59901C14.2932 8.38682 13.3069 7.39968 12.0938 7.39968ZM12.0938 10.6735H10.7391V8.52477H12.0938C12.6863 8.52477 13.1682 9.00664 13.1682 9.59916C13.1682 10.1917 12.6863 10.6735 12.0938 10.6735Z" fill="black"/>
</svg>`,
		rankField: 'Rank parking space',
		label: 'Parking spaces',
		fieldTeam: 'Parking spaces',
		tableText: 'PARKING SPACES',
		tableDesc: 'The number of parking spaces available within 3km of their stadium'
	},
}

//----------- PROTOTYPE FUNCTIONS  ----------------------
d3.selection.prototype.patternify = function (params) {
	var container = this
	var selector = params.selector
	var elementTag = params.tag
	var data = params.data || [selector]

	// Pattern in action
	var selection = container.selectAll('.' + selector).data(data, (d, i) => {
		if (typeof d === 'object') {
			if (d.id) {
				return d.id
			}
		}
		return i
	})
	selection.exit().remove()
	selection = selection.enter().append(elementTag).merge(selection)
	selection.attr('class', selector)
	return selection
}

const globals = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			globals.Android() ||
			globals.BlackBerry() ||
			globals.iOS() ||
			globals.Opera() ||
			globals.Windows()
		)
	},
	get isMobile() {
		return window.innerWidth <= 576
	},
	get device() {
		return window.innerWidth <= 576 ? 'mobile' : 'desktop'
	},
}

function ordinal_suffix_of(i) {
	var j = i % 10,
		k = i % 100
	if (j == 1 && k != 11) {
		return i + 'st'
	}
	if (j == 2 && k != 12) {
		return i + 'nd'
	}
	if (j == 3 && k != 13) {
		return i + 'rd'
	}
	return i + 'th'
}

function parseNumber(str) {
	return parseInt(
		String(str)
			.trim()
			.replaceAll('%', '')
			.replaceAll(',', '')
			.replaceAll('$', '')
	)
}

function formatThousand(num) {
	if (typeof num === 'number') {
		return d3.format(',')(num)
	}

	return num
}

function formatSi(num) {
	if (typeof num === 'number') {
		return d3.format('s')(num)
	}

	return num
}

function formatNumber(v) {
	const num = parseNumber(v)

	// if (num > 1000000) {
	//   return Math.round(num / 1000000) + "M";
	// }

	return Math.round(num / 1000) + 'K'
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

function getRandomId() {
	return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

function initDropdown({ list, id, cb, placeholder, ...rest }) {
	const select = document.querySelector(id)
	const options = list.slice()

	const choice = new Choices(select, {
		choices: [
			...(placeholder
				? [{ selected: true, disabled: true, value: '', label: placeholder }]
				: []),
			...options,
		],
		position: 'bottom',
		shouldSort: false,
		itemSelectText: '',
		placeholder: false,
		searchResultLimit: options.length,
		searchEnabled: false,
		...rest,
	})

	select.addEventListener(
		'change',
		function (event) {
			const value = event.detail.value
			cb(value)
		},
		false
	)

	return choice
}

function getRankValue(rank, isSame) {
	return (isSame ? '=' : '') + (rank < 10 ? '0' + rank : rank)
}

const isVisible = function (ele, container) {
	const eleTop = ele.offsetTop
	const eleBottom = eleTop + ele.clientHeight

	const containerTop = container.scrollTop
	const containerBottom = containerTop + container.clientHeight

	// The element is fully visible in the container
	return (
		eleTop >= containerTop && eleBottom <= containerBottom
		// ||
		// // Some part of the element is visible in the container
		// (eleTop < containerTop && containerTop < eleBottom) ||
		// (eleTop < containerBottom && containerBottom < eleBottom)
	)
}

function isDescendant(parent, child) {
	var node = child.parentNode
	while (node != null) {
		if (node == parent) {
			return true
		}
		node = node.parentNode
	}
	return false
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}

function updateCssVar(varName, value) {
	const root = document.documentElement
	root.style.setProperty(varName, value)
}

function sanitize(str) {
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '')
	return str.trim().split(' ').join('')
}

function loadSvg(url) {
	const xhr = new XMLHttpRequest()

	xhr.open('GET', url, true)

	xhr.overrideMimeType('text/plain')

	return new Promise((res, rej) => {
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					res(xhr.responseText)
				} else {
					rej(new Error('Error'))
				}
			}
		}

		xhr.send()
	})
}

function initTooltip(node, content, options) {
	let tip = node._tippy

	if (tip) {
		tip.destroy()
	}

	if (content) {
		return tippy(node, {
			content,
			allowHTML: true,
			maxWidth: 350,
			arrow: true,
			theme: 'light',
			animation: 'scale',
			duration: 0,
			trigger: 'mouseenter click',
			popperOptions: {
				modifiers: [
					{
						name: 'computeStyles',
						options: {
							gpuAcceleration: false, // true by default
						},
					},
				],
			},
			...(options || {}),
		})
	}

	return null
}
