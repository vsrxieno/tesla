import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

export default function Section(props){
	return(
		<Main bg={props.bg} className="w-full h-screen bg-cover bg-center flex flex-wrap content-between pt-36 text-center">
			<Module className="w-full">
				<Fade bottom><h1 className="text-5xl font-bold mb-6">{props.title}</h1></Fade>
				<Fade bottom><p>{props.tagline}</p></Fade>
			</Module>

			<CTAButton className="w-full h-44">
				<Buttons className="flex flex-wrap justify-center w-full">
					<Btn1 href={props.href_1} className="rounded-3xl bg-blue-800 text-white py-2 px-10 mx-3 my-2 sm:my-0 hover:scale-110 ease-in duration-300">{props.btn1}</Btn1>
					{props.btn2 && 
						<Btn2 href={props.href_2} className="50 rounded-3xl bg-black text-white py-2 px-10 mx-3 my-2 sm:my-0 hover:scale-110 ease-in duration-300">{props.btn2}</Btn2>
					}
				</Buttons>

				{props.chevron && 
				<Chevron className="mt-16 mb-5">
					
					<i class="fas fa-chevron-down animate-bounce text-2xl pointer"></i>
			
				</Chevron>
				}
			</CTAButton>

		</Main>
	)
}

const Main = styled.section`
	background-image: url(${props => props.bg});
`
const Module = styled.div``
const Buttons = styled.div``
const Btn1 = styled.a``
const Btn2 = styled(Btn1)``
const Chevron = styled.div``
const CTAButton = styled.div``