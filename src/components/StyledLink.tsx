import { Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

type StyledLinkProps = { label: string, href: string};

export default function StyledLink({label, href }: StyledLinkProps) {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');

  return ( 
		<RouteLink to={href}>
		<Link
			p={2}
			href={href ?? '#'}
			fontSize={'sm'}
			fontWeight={500}
			color={linkColor}
			_hover={{
				textDecoration: 'none',
				color: linkHoverColor,
			}}>
			{label}
    </Link>
  </RouteLink>
	)
}

 