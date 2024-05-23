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

			this.choice = initDropdown({
				// searchPlaceholderValue: 'Search',
				placeholder: 'FIND YOUR CITY',
				list: uniqueCities,
				id: '#city_select',
				cb: (city) => {
					const streets = datum.filter((d) => d.City === city).map((d, i) => {
						return {
							...d,
							index: i
						}
					})
					this.showCard(streets)
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


				onPinClick: d => {
					console.log(d)
					const streets = datum.filter((x) => x.City === d.label).map((a, i) => {
						return {
							...a,
							index: i
						}

					})
					this.choice.setChoiceByValue(d.label);

					this.showCard(streets)
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

	cardColor = ['#7C212A', '#039DF5', '#F51D72', '#FB7F4C', '#FC4243', '#FC4243', '#01AD5B', '#2C15A4']

	generateCardColor(index) {
		if (index <= 1) {
			return '#7C212A'
		} else if (index > 1 && index <= 3) {
			return '#039DF5'
		} else if (index > 3 && index <= 5) {
			return '#F51D72'
		} else if (index > 5 && index <= 7) {
			return '#FB7F4C'
		} else if (index > 7 && index <= 9) {
			return '#FC4243'
		} else if (index > 9 && index <= 11) {
			return '#FBF22D'
		} else if (index > 11 && index <= 13) {
			return '#01AD5B'
		} else if (index > 13 && index <= 15) {
			return '#2C15A4'
		} else if (index > 15 && index <= 17) {
			return '#7C212A'
		} else if (index > 17 && index <= 19) {
			return '#039DF5'
		} else { return '#7C212A' }
	}

	showCard(streets) {
		d3.select('.streets-wrap').style('display', 'block')
		d3.select('#map').style('display', 'none')
		d3.select('.btn-zooms').style('display', 'none')
		d3.select('#streetsWrap').html('');
		d3.select('.heading-box-mobile').style('display', 'none')
		d3.select('.streets-wrap').style('height', '100vh')

		d3.select('#streetsWrap')
			.selectAll('streets-box')
			.data(streets)
			.enter()
			.append('div')
			.html((street, index) => `<div class="each-street">
			<div class="title-deed" style='background-color: ${this.generateCardColor(index)}; color: ${this.generateCardColor(index) === '#FBF22D' ? 'black' : 'white'}'>
			<div class="title"> TITLE DEED</div>
						<div class="street">${street.Location}</div>
					</div>
				</div>`)
			.on('click', (e, street) => {
				d3.select('#infoCard').html('')


				const infoCard = d3.select('#infoCard')
					.style('display', 'block')

				d3.select('.info-card-background').style('display', 'block').on('click', function () {
					infoCard.style('display', 'none')
					d3.select(this).style('display', 'none')
				})


				infoCard.append('div')
					.attr('class', 'close-button')
					.html(` <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="1" y="1" width="38" height="38" rx="3" fill="white" stroke="#101921" stroke-width="2"
						stroke-dasharray="3 3" />
					<path
						d="M28.0451 13.0851L26.9151 11.9551L20.0002 18.87L13.0854 11.9551L11.9554 13.0851L18.8703 19.9999L11.9554 26.9148L13.0854 28.0448L20.0002 21.1299L26.9151 28.0448L28.0451 26.9148L21.1302 19.9999L28.0451 13.0851Z"
						fill="#101921" />
				</svg>`).on('click', () => {
						infoCard.style('display', 'none')
						d3.select('.info-card-background').style('display', 'none')
					})


				infoCard
					.append('div')
					.attr('class', 'info-box')
					.html(`<div class="info-box-street">
					<div class="info-each-street">
						<div class='info-title-deed' style='background-color: ${this.generateCardColor(street.index)}; color: ${this.generateCardColor(street.index) === '#FBF22D' ? 'black' : 'white'}'>
							<div class="title-text-info"> TITLE DEED</div>
							<div class="info-street">${street.Location}</div>
						</div>
						<div class="rank-data">
							<div class="each-rank">
								<div class="monopoly-price" id="monopolyPrice"> Monopoly Price</div>
								<div>${street['Monopoly Price']}</div>
							</div>
							<div class="each-rank">
								<div class="daily-parking" id="dailyParking">Avg. Daily Parking Price</div>
								<div>${street['Avg. Price of Property']}</div>
							</div>
							<div class="each-rank">
								<div class="school-rting" id="schoolRating">Avg. School Rating</div>
								<div>Good</div>
							</div>
							<div class="each-rank">
								<div class="doctors-practices" id="doctorsPractices">Doctors Practices</div>
								<div>6</div>
							</div>

							<div class='info-border'> </div>

							<div class="each-rank">
								<div class="houses-cost" id="housesCost">Houses cost</div>
								<div>${street['Avg. Price of Property']}</div>
							</div>
						</div>
					</div>
				</div>`)
			})
	}

}

document.addEventListener('DOMContentLoaded', () => {
	const app = new App()
	window.app = app
})