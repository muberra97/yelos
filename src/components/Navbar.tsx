import { Button, Container, Nav, Navbar as NavbarBs, NavLink } from 'react-bootstrap'
import { useShoppingBag } from '../context/ShoppingBasketContext'

export function Navbar() {
    const { openBasket: openCard, basketQuantity: cardQuantity } = useShoppingBag()

    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/" as={NavLink}>
                        Yeloş'un Dükkanı
                    </NavLink>
                </Nav>
                {cardQuantity > 0 && (
                    <Button
                        onClick={openCard}
                        style={{ width: '3rem', height: '3rem', position: 'relative' }}
                        variant="outline-primary"
                        className="btn btn-outline-dark"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-cart4"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                        <div
                            className="rounded bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: 'white',
                                width: '1.5rem',
                                height: '1.5rem',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                transform: 'translate(25%, 25%)',
                            }}
                        >
                            {cardQuantity}
                        </div>
                    </Button>
                )}
            </Container>
        </NavbarBs>
    )
}
