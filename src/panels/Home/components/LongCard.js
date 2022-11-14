import React, { useEffect, useState } from 'react';

import {Title, Button, Card, Div, ScreenSpinner} from '@vkontakte/vkui';
import { Icon24Play, Icon24ClockOutline } from '@vkontakte/icons';

import axios from 'axios';

import '../Home.css';
import { qsSign } from '../../../hooks/qs-sign';


const LongCard = ({go, setSingleType, setPopout, lvlsInfo}) => {
	
 


	function checkToDelete(){
		lvlsInfo&&lvlsInfo.map((item, index)=>{

			console.log(item)
			console.log('Длина массива ' + lvlsInfo.length)
			
			console.log('Длина indexc ' + index)
			
			if(item.lvlType === 'single30'){
				axios.delete(`https://showtime.app-dich.com/api/plus-plus/lvl/${item.id}${qsSign}`)
				.then(async function (response) {
					console.log(response.data.data)
				})
				.catch(function (error) {
					console.warn(error);
				});
			}

			 
			
		})
	}
 

 

	
	
	return(

		<div className='long-card-div-div'>

		
		<Card mode="shadow" className='long-card'>
				<div style={{minHeight: 141}}>
									
					<Icon24ClockOutline width={24} height={24} className='long-card-icon'/>
						<Div>
							<div>
								<Title className='long-card-title'>
									Попробуй 30-секундный режим
								</Title>
							</div>
							<div>
								<Title level="3" className='long-card-text'>
									Реши как можно больше задач за 30 секунд
								</Title>
							</div>
										
						</Div>

						<Button
							className='button-long'
							onClick={(e)=>{
								setSingleType('single30')
								go(e)
								checkToDelete()
								setPopout(<ScreenSpinner size='large' />)
							}}
							data-to='temporaryGame'
							style={{
							backgroundColor:'#F4F9FF',
							color:'#1984FF',
							borderRadius:25
							}}
							before={<Icon24Play height={16} width={16} />}
							mode='accent'
							size='s'
							>Попробовать</Button>
										
								
				</div>
									
		</Card>
		</div>
	);

	}


export default LongCard;
