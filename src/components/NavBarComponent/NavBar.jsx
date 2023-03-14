import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from "./NavBarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Inicio
		</NavLink>
		<NavLink to='/CuidadoFacial' activeStyle>
            Cuidado Facial
		</NavLink>
		<NavLink to='/Maquillaje' activeStyle>
            Maquillaje
		</NavLink>
		<NavLink to='/Nosotros' activeStyle>
            Nosotros
		</NavLink>
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
