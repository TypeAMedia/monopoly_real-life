class App {
	constructor() {
		this.zoomExtent = [0.9, 8]
		this.currentScale = 1
		this.zoomStep = 0.5

		this.loadDataAndInit()

		let timer = null

		d3.select(window).on('resize.map', () => {
			if (timer) clearTimeout(timer)
			timer = setTimeout(() => {
				this.map?.resize()
			}, 100)
		})
	}

	async loadDataAndInit() {
		try {
			const [mapjson, data, datum] = await Promise.all([
				d3.json('./data/uk-outline-topo.json'),
				d3.csv('./data/football-data.csv', d3.autoType),
				d3.csv('./data/Monopoly-data.csv', d3.autoType)
			])

			this.data = data


			const uniqueData = Array.from(new Set(datum.map((d) => d.City)))
				.map(city => {
					return datum.find(obj => obj.City === city);
				})

			const uniqueCities = uniqueData.map((d) => {
				return {
					label: d.City,
					value: d.City,
					Coord: d.Coord,
				}
			})


			console.log(uniqueCities)
			this.choice = initDropdown({
				// searchPlaceholderValue: 'Search',
				placeholder: 'FIND YOUR CITY',
				list: uniqueCities,
				id: '#city_select',
				cb: (city) => {
					const streets = datum.filter((d) => d.City === city)
					this.showCard(streets)
					this.map.highlightPin(x => x.City === city)
				},
				searchEnabled: false,
			})

			this.map = new MercatorMap({
				container: '#map',
				basemap: mapjson,
				data: this.uniqueCities,
				zoomExtent: this.zoomExtent,
				layer: uniqueCities.map((d, i) => {
					const [Latitude, Longitude] = d.Coord.split(',').map(d => +d.trim())
					return {
						...d,
						rank: d['Rank for beginners'],
						Latitude,
						Longitude,
					}
				}),

				// getTooltipHtml: d => {
				// 	return `
				// 	<div class="tooltip-div">
				// 		<h3 class="tooltip-title">${d.Team}</h3>
				// 		<div>

				// 		<div class='FC-rank'> <span class='FC-rank'> Rank </span>  <span class='overall-ranking'>${ordinal_suffix_of(d.Rank)} </span> </div>

				// 			<table class="table table-sm">
				// 				<thead>
				// 					<tr>
				// 						<th>Away Game</th>
				// 						<th class="font-normal text-grey">Total</th>
				// 						<th class="font-normal text-grey">Rank</th>
				// 					</tr>
				// 				</thead>
				// 				<tbody>
				// 					${Object.values(config)
				// 			.sort((a, b) => a.order - b.order)
				// 			.filter(d => d.tableText !== 'OVERALL').filter(d => d.fieldTeam === 'Travel distance' || d.fieldTeam === 'Fuel cost')
				// 			.map(conf => {
				// 				return `
				// 								<tr>
				// 									<td>
				// 										<div class="d-flex align-items-center">
				// 											<div class="icon">${conf.icon}</div>
				// 											<div class="field-Team">${conf.fieldTeam}</div>
				// 										</div>
				// 									</td>
				// 									<td class="col-2">
				// 										${conf.format ? conf.format(d[conf.fieldTeam] || '') : d[conf.fieldTeam] || ''}
				// 									</td>
				// 									<td class="col-3">
				// 										${ordinal_suffix_of(d[conf.rankField])}
				// 									</td>
				// 								</tr>
				// 							`
				// 			}).join('')}

				// 			<tr>
				// 				<td colSpan="3">
				//            Home Game
				// 				</td>
				// 			</tr>

				// 			${Object.values(config)
				// 			.sort((a, b) => a.order - b.order)
				// 			.filter(d => d.tableText !== 'OVERALL').filter(d => d.fieldTeam === 'Parking costs' || d.fieldTeam === 'Parking spaces')
				// 			.map(conf => {
				// 				return `
				// 									<tr>
				// 										<td>
				// 											<div class="d-flex align-items-center">
				// 												<div class="icon">${conf.icon}</div>
				// 												<div class="field-Team">${conf.fieldTeam}</div>
				// 											</div>
				// 										</td>
				// 										<td class="col-2">
				// 											${conf.format ? conf.format(d[conf.fieldTeam] || '') : d[conf.fieldTeam] || ''}
				// 										</td>
				// 										<td class="col-3">
				// 											${ordinal_suffix_of(d[conf.rankField])}
				// 										</td>
				// 									</tr>

				// 								`
				// 			}).join('')}
				// 				</tbody>
				// 		</table>
				// 		</div>
				// 	</div>`
				// },

				onPinClick: d => {
					this.choice.setChoiceByValue(d.City)
					this.map.highlightPin(x => x.City === d.City)
				},
			})

			this.fillModal()
			this.initZoomBtns()
		} catch (e) {
			console.error(e)
		}
	}

	updateZoomBtns() {
		if (this.map) {
			d3.select('#zoom_in').property(
				'disabled',
				this.currentScale >= this.zoomExtent[1]
			)
			d3.select('#zoom_out').property(
				'disabled',
				this.currentScale <= this.zoomExtent[0]
			)
		}
	}

	initZoomBtns() {
		this.updateZoomBtns()

		d3.select('#zoom_in').on('click', () => {
			this.currentScale = Math.min(
				this.zoomExtent[1],
				this.currentScale + this.zoomStep
			)
			this.map && this.map.scale(this.currentScale)
			this.updateZoomBtns()
		})

		d3.select('#zoom_out').on('click', () => {
			this.currentScale = Math.max(
				this.zoomExtent[0],
				this.currentScale - this.zoomStep
			)
			this.map && this.map.scale(this.currentScale)
			this.updateZoomBtns()
		})

		d3.selectAll('.money-toggle').on('click', e => {
			const target = e.target.getAttribute('data-target')
			const field =
				target === 'with_money' ? 'RANK WITH BUDGET' : 'RANK NO BUDGET'

			this.rankField = field
			this.map && this.map.setColorBy(this.rankField)

			d3.selectAll('.money-toggle').classed('btn-active', false)
			d3.select(e.target).classed('btn-active', true)

			if (this.currentCountry) {
				this.selectCountry(this.currentCountry)
			}
		})
	}

	fillModal() {
		const table = d3.select('#table')
		const fill = conf => {
			table.html(`
				<thead>
					<tr>
						<th>Rank</th>
						<th>Club</th>
						${conf.fieldTeam ? `<th>${conf.label}</th>` : ''}
					</tr>
				</thead>
				<tbody>
					${this.data
					.slice()
					.filter(d => !isNaN(d[conf.rankField]))
					.sort((a, b) => {
						return a[conf.rankField] - b[conf.rankField]
					})
					.map(d => {
						return `
									<tr>
										<td>${ordinal_suffix_of(d[conf.rankField])}</td>
										<td>${d.Team}</td>
										${conf.fieldTeam ? `<td>${d[conf.fieldTeam]}</td>` : ''} 
									</tr>
								`
					})
					.join('')
				}
				</tbody>
			`)
		}

		fill(config.miles)

		d3.selectAll('.rank-btn').on('click', (e, d) => {
			const target = e.target.getAttribute('data-target')
			d3.selectAll('.rank-btn').classed('btn-active', false)
			d3.select('.table-desc-heading').text(config[target].tableText)
			d3.select('.table-desc-text').text(config[target].tableDesc)
			d3.select(e.target).classed('btn-active', true)
			fill(config[target])
		})
	}

	showCard(streets) {
		d3.select('#streetsWrap').html('');

		streets.forEach((street) => {
			d3.select('#streetsWrap').append('div')
				.attr('class', 'streets-box')
				.html(`<div class="each-street">
					<div class='title-deed'>
						<div class="title"> TITLE DEED</div>
						<div class="street">${street.Location}</div>
					</div>
				</div>`);
		});
	}


}

document.addEventListener('DOMContentLoaded', () => {
	const app = new App()
	window.app = app
})
