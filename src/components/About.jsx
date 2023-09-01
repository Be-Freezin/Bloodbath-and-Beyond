import React from 'react'
import Chest from '../assets/Chest-bg.png'

const About = () => {
	return (
		<div className='mt-20'>
			<h2 className='font-heroking text-7xl text-primary-white font-outline-2'>
				Why spend your gold here?
			</h2>
			<div className='flex flex-row items-center justify-evenly mt-20'>
				<img src={Chest} alt='' />
				<div className='font-inika text-primary-white text-left w-2/6'>
					<p>
						Established eons ago by the legendary Eldertwig, the Gnome Druid. A
						hero of yesteryears&apos; wars, he now beckons you to Bloodbath and
						Beyond. Remember, when the going gets tough, the tough come shopping
						at Bloodbath and Beyond!
					</p>
					<br />
					<p>
						While he&apos;s swapped his battle staff for a sales ledger,
						underestimate him not! His arsenal? A trove of trinkets and tools,
						each echoing tales of his tumultuous times.
					</p>
					<br />
					<p>
						Remember, when the going gets tough, the tough come shopping at
						Bloodbath and Beyond!
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
